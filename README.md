# Movie Chatbot - RAG with Embeddings & Vector Database

A smart movie recommendation chatbot powered by Retrieval-Augmented Generation (RAG). Instead of relying solely on an LLM's training data, this chatbot searches through a custom movie database using semantic search to provide accurate, context-based recommendations.

## What It Does

- Ask natural language questions like "I feel like having a good laugh!" or "A movie Elon Musk would enjoy"
- The chatbot understands the **meaning** behind your query, not just keywords
- It searches a vector database to find the most relevant movies
- Then uses an LLM to generate a friendly, conversational recommendation
- Supports follow-up questions with chat history for multi-turn conversations

## Example Queries

| Query | Response |
|-------|----------|
| "I feel like having a good laugh!" | Recommends Barbie, Glass Onion, Super Mario Bros |
| "Something mysterious and adventurous" | Recommends Mysteries of the Deep |
| "An episode Elon Musk would enjoy" | Recommends Beyond Mars (space + tech) |
| "What are some good sci-fi movies?" | Recommends M3GAN, Blue Beetle |
| "Which movie can I take my child to?" | Recommends PG-rated movies like Elemental, Super Mario Bros |

## What is RAG (Retrieval-Augmented Generation)?

Traditional LLMs can only answer based on their training data, which can be outdated or lack specific knowledge. RAG solves this by:

1. **Retrieving** relevant information from your own data (movies database)
2. **Augmenting** the LLM's prompt with that retrieved context
3. **Generating** an accurate response based on real data, not hallucinations

This means the chatbot only recommends movies that actually exist in our database and provides accurate ratings, cast, and descriptions.

## How It Works

1. **Text Splitting** - Movie data is split into meaningful chunks using LangChain's `RecursiveCharacterTextSplitter`, keeping title, rating, and description together
2. **Embeddings** - Each chunk is converted into a 768-dimensional vector using Ollama (`nomic-embed-text`), capturing the semantic meaning of the text
3. **Vector Storage** - Embeddings are stored in Supabase (PostgreSQL + pgvector) for fast similarity search
4. **Semantic Search** - When a user asks a question, it's embedded into a vector and compared against stored movie vectors using cosine similarity
5. **Chat Response** - The top matching movies are passed as context to an LLM (`gemma3:4b`) which generates a friendly, conversational answer

## Architecture

```
User Query
    |
    v
[Create Embedding] --> nomic-embed-text (Ollama)
    |
    v
[Semantic Search] --> Supabase pgvector (cosine similarity)
    |
    v
[Top Matches] --> Retrieved movie chunks
    |
    v
[Chat Completion] --> gemma3:4b (Ollama) + context + query
    |
    v
Conversational Response
```

## Tech Stack

- **Runtime**: Node.js
- **Server**: Express.js
- **Embeddings**: Ollama (nomic-embed-text)
- **LLM**: Ollama (gemma3:4b)
- **Vector Database**: Supabase (pgvector)
- **Text Splitting**: LangChain
- **Frontend**: HTML, CSS, JavaScript

## Setup

### Prerequisites

- [Node.js](https://nodejs.org/) installed
- [Ollama](https://ollama.com/download) installed
- [Supabase](https://supabase.com/) account

### 1. Install dependencies

```bash
npm install
```

### 2. Pull Ollama models

```bash
ollama pull nomic-embed-text
ollama pull gemma3:4b
```

### 3. Setup Supabase

Create a `movies` table and `match_movies` function in Supabase SQL Editor:

```sql
create table movies (
  id bigserial primary key,
  content text,
  embedding vector(768)
);

create or replace function match_movies (
  query_embedding vector(768),
  match_threshold float,
  match_count int
)
returns table (
  id bigint,
  content text,
  similarity float
)
language sql stable
as $$
  select
    movies.id,
    movies.content,
    1 - (movies.embedding <=> query_embedding) as similarity
  from movies
  where 1 - (movies.embedding <=> query_embedding) > match_threshold
  order by similarity desc
  limit match_count;
$$;
```

### 4. Configure environment variables

Create a `.env` file:

```
SUPABASE_URL=your_supabase_url
SUPABASE_API_KEY=your_supabase_api_key
```

### 5. Generate and store embeddings

```bash
node movies.js
```

### 6. Start the chatbot

```bash
node server.js
```

Open **http://localhost:3000** in your browser.

## Project Structure

```
├── config.js        # Ollama & Supabase client config
├── server.js        # Express server with chat API
├── movies.js        # Text splitter & embedding generator
├── movies.txt       # Movie data
├── index.html       # Chat UI
├── style.css        # Chat styling
├── .env             # Environment variables
├── .gitignore       # Git ignore rules
└── package.json     # Dependencies
```
