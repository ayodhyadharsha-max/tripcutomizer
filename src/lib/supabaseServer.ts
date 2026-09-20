import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
// Use Service Role key on server if available for admin operations, fallback to anon key
const supabaseKey =
  process.env.SUPABASE_SERVICE_ROLE_KEY ||
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
  '';

export const getSupabaseServer = () => {
  return createClient(
    supabaseUrl || 'https://placeholder.supabase.co',
    supabaseKey || 'placeholder-anon-key',
    {
      auth: {
        persistSession: false,
        autoRefreshToken: false,
      },
    }
  );
};

export default getSupabaseServer;
