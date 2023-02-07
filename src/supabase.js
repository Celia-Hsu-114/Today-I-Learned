import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ntqqrsxgwqmfbenodvbo.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im50cXFyc3hnd3FtZmJlbm9kdmJvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzQzOTY0MTUsImV4cCI6MTk4OTk3MjQxNX0.MJPUd2-fwZPS5XspeoEXinuRVJEdV5A4vAOnfqqTBCo";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
