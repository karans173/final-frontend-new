import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://rizamamuiwyyplawssvr.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJpemFtYW11aXd5eXBsYXdzc3ZyIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1MjEzMDcwMiwiZXhwIjoyMDY3NzA2NzAyfQ.RYVgSqjNiHcWWTrhrmUl5BuCBxiZeZjfQwo3pI3EjFw";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
