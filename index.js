import "dotenv/config";
import { openai, supabase } from "./config.js";

// User query about podcasts
const query = "What are some good podcasts about science?";
main(query);

// Bring all function calls together
async function main(input) {
  const embedding = await createEmbedding(input);
  const match = await findNearestMatch(embedding);
  await getChatCompletion(match, input);
}

// Create an embedding vector representing the input text
async function createEmbedding(input) {
  const embeddingResponse = await openai.embeddings.create({
    model: "nomic-embed-text",
    input,
  });
  return embeddingResponse.data[0].embedding;
}

// Query Supabase and return a semantically matching text chunk
async function findNearestMatch(embedding) {
  const { data } = await supabase.rpc("match_documents", {
    query_embedding: embedding,
    match_threshold: 0.3,
    match_count: 3,
  });
  return data.map((doc) => doc.content).join("\n");
}

// Use Ollama to make the response conversational
const chatMessages = [
  {
    role: "system",
    content: `You are an enthusiastic podcast expert who loves recommending podcasts to people. You will be given two pieces of information - some context about podcast episodes and a question. Your main job is to formulate a short answer to the question using the provided context. You can use your general knowledge to connect the question to the context (e.g., if someone asks about a person, think about their interests). If the context has absolutely nothing to do with the question, say "Sorry, I don't know the answer." NEVER make up podcast names or information that is not in the context. Keep your answer short and concise.`,
  },
];

async function getChatCompletion(text, query) {
  chatMessages.push({
    role: "user",
    content: `Here are some podcast episodes:\n${text}\n\nBased on these episodes, answer this question: ${query}`,
  });

  const response = await openai.chat.completions.create({
    model: "gemma3:4b",
    messages: chatMessages,
    temperature: 0.7,
  });

  console.log(response.choices[0].message.content);
}
