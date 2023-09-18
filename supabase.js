// supabase.js
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://rtsmdhjrozectbtqlofe.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ0c21kaGpyb3plY3RidHFsb2ZlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODcwMDY5MzAsImV4cCI6MjAwMjU4MjkzMH0.Q7x5oXoqC13JNqKRugJIwIJNpFBxOlHop3yfthJAUvM";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
