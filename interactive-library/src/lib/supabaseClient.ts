import { createClient } from "@supabase/supabase-js";

// Get the Supabase URL and anon key from our environment variables
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

// Create and export the Supabase client
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

/* The ! at the end of the process.env lines tells TypeScript, "Don't worry,
 I know for sure that this variable exists." */