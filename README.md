# Movie Chatbot - RAG with Embeddings & Vector Database

A chatbot that recommends movies using Retrieval-Augmented Generation (RAG). It uses vector embeddings and semantic search to find relevant movies, then generates conversational responses.

## How It Works

1. **Text Splitting** - Movie data is split into chunks using LangChain's `RecursiveCharacterTextSplitter`
2. **Embeddings** - Each chunk is converted into a vector embedding using Ollama (`nomic-embed-text`)
3. **Vector Storage** - Embeddings are stored in Supabase (PostgreSQL + pgvector)
4. **Semantic Search** - User queries are embedded and matched against stored vectors
5. **Chat Response** - Matched context is passed to an LLM (`gemma3:4b`) to generate conversational answers

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
