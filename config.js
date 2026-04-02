import OpenAI from "openai";
import { createClient } from "@supabase/supabase-js";

/** Ollama config (OpenAI-compatible, runs locally) */
export const openai = new OpenAI({
  apiKey: "ollama",
  baseURL: "http://localhost:11434/v1",
});

/** Supabase config */
export const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_API_KEY
);
