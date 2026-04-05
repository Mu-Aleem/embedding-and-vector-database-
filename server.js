import "dotenv/config";
import express from "express";
import { openai, supabase } from "./config.js";

const app = express();
app.use(express.json());
app.use(express.static("."));

// Chat history for conversational context
const chatMessages = [
  {
    role: "system",
    content: `You are an enthusiastic movie expert who loves recommending movies to people. You will be given two pieces of information - some context about movies and a question. Your main job is to formulate a short answer to the question using the provided context. You can use your general knowledge to connect the question to the context (e.g., if someone asks about an actor, think about their movies). If the context has absolutely nothing to do with the question, say "Sorry, I don't know the answer." NEVER make up movie names or information that is not in the context. Keep your answer short and concise.`,
  },
];

// Create embedding from text
async function createEmbedding(input) {
  const embeddingResponse = await openai.embeddings.create({
    model: "nomic-embed-text",
    input,
  });
  return embeddingResponse.data[0].embedding;
}

// Find nearest match in Supabase
async function findNearestMatch(embedding) {
  const { data } = await supabase.rpc("match_movies", {
    query_embedding: embedding,
    match_threshold: 0.3,
    match_count: 4,
  });
  return data.map((doc) => doc.content).join("\n");
}

// API endpoint for chat
app.post("/api/chat", async (req, res) => {
  try {
    const { message } = req.body;

    const embedding = await createEmbedding(message);
    const match = await findNearestMatch(embedding);

    chatMessages.push({
      role: "user",
      content: `Here are some movies:\n${match}\n\nBased on these movies, answer this question: ${message}`,
    });

    const response = await openai.chat.completions.create({
      model: "gemma3:4b",
      messages: chatMessages,
      temperature: 0.7,
    });

    const reply = response.choices[0].message.content;
    chatMessages.push({ role: "assistant", content: reply });

    res.json({ reply });
  } catch (err) {
    console.error("Error:", err.message);
    res.status(500).json({ error: "Something went wrong" });
  }
});

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
