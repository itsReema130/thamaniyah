import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
dotenv.config();
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;

if (!supabaseKey) {
  throw new Error('SUPABASE_KEY is not set');
}

if (!supabaseUrl) {
  throw new Error('SUPABASE_URL is not set');
}

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
