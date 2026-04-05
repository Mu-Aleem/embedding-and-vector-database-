import "dotenv/config";
import { openai, supabase } from "./config.js";
import { RecursiveCharacterTextSplitter } from "@langchain/textsplitters";
import fs from "fs";

/*
  Challenge: Text Splitters, Embeddings, and Vector Databases!
    1. Use LangChain to split the content in movies.txt into smaller chunks.
    2. Use OpenAI's Embedding model to create an embedding for each chunk.
    3. Insert all text chunks and their corresponding embedding
       into a Supabase database table.
*/

/* Split movies.txt into text chunks.
Return LangChain's "output" – the array of Document objects. */
async function splitDocument(document) {
  try {
    const text = fs.readFileSync(document, "utf-8");
    const splitter = new RecursiveCharacterTextSplitter({
      chunkSize: 500,
      chunkOverlap: 0,
      separators: ["\r\n\r\n", "\n\n"],
    });
    const output = await splitter.createDocuments([text]);
    return output;
  } catch (err) {
    console.error("Error splitting document:", err.message);
    throw err;
  }
}

/* Create an embedding from each text chunk.
Store all embeddings and corresponding text in Supabase. */
async function createAndStoreEmbeddings() {
  try {
    const chunkData = await splitDocument("movies.txt");

    const results = await Promise.all(
      chunkData.map(async (chunk) => {
        const embeddingResponse = await openai.embeddings.create({
          model: "nomic-embed-text",
          input: chunk.pageContent,
        });
        return {
          content: chunk.pageContent,
          embedding: embeddingResponse.data[0].embedding,
        };
      }),
    );

    const { error } = await supabase.from("movies").insert(results);

    if (error) {
      console.error("Error inserting into Supabase:", error);
    } else {
      console.log("Successfully stored", results.length, "movie chunks in Supabase");
    }
  } catch (err) {
    console.error("Error creating embeddings:", err.message);
  }
}

createAndStoreEmbeddings();
