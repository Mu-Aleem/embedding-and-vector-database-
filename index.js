import "dotenv/config";
import { openai, supabase } from "./config.js";

// User query about podcasts
const query = "Something peaceful and relaxing";
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
    match_threshold: 0.5,
    match_count: 1,
  });
  return data[0].content;
}

// Use Ollama to make the response conversational
const chatMessages = [
  {
    role: "system",
    content: `You are an enthusiastic podcast expert who loves recommending podcasts to people. You will be given two pieces of information - some context about podcasts episodes and a question. Your main job is to formulate a short answer to the question using the provided context. If you are unsure and cannot find the answer in the context, say, "Sorry, I don't know the answer." Please do not make up the answer.`,
  },
];

async function getChatCompletion(text, query) {
  chatMessages.push({
    role: "user",
    content: `Context: ${text} Question: ${query}`,
  });

  const response = await openai.chat.completions.create({
    model: "llama3.2:1b",
    messages: chatMessages,
    temperature: 0.5,
    frequency_penalty: 0.5,
  });

  console.log(response.choices[0].message.content);
}
