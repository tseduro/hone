import { createClient } from "@supabase/supabase-js";

const supabaseURL = "https://elvnswrwvepdjcjspwil.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVsdm5zd3J3dmVwZGpjanNwd2lsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQwMjIzMzQsImV4cCI6MjA3OTU5ODMzNH0.xjxsxydWLjIlZqVkP7dPyHZfwXCPExnypg22VTJjQdM"

const supabase = createClient(supabaseURL, supabaseAnonKey);
export default supabase;