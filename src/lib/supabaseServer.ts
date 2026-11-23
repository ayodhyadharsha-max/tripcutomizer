import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
// Use Service Role key on server if available for admin operations, fallback to anon key
const supabaseKey =
  process.env.SUPABASE_SERVICE_ROLE_KEY ||
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
  '';

let isSupabaseDisabledUntil = 0;

export const markSupabaseOffline = (cooldownMs = 60000) => {
  isSupabaseDisabledUntil = Date.now() + cooldownMs;
  console.warn(`[Supabase Circuit Breaker] Marked Supabase offline for ${cooldownMs}ms`);
};

export const markSupabaseOnline = () => {
  isSupabaseDisabledUntil = 0;
};

export const isSupabaseOffline = (): boolean => {
  return Date.now() < isSupabaseDisabledUntil;
};

export async function withTimeout<T>(
  promise: Promise<T> | PromiseLike<T> | any,
  ms = 2500,
  errorMsg = 'Supabase operation timed out'
): Promise<T> {
  let timer: NodeJS.Timeout;
  const timeoutPromise = new Promise<never>((_, reject) => {
    timer = setTimeout(() => reject(new Error(errorMsg)), ms);
  });
  return Promise.race([
    Promise.resolve(promise).then((res) => {
      clearTimeout(timer);
      return res;
    }),
    timeoutPromise,
  ]);
}

export const getSupabaseServer = () => {
  if (isSupabaseOffline()) {
    return null;
  }
  if (!supabaseUrl || !supabaseKey || supabaseUrl.includes('placeholder')) {
    return null;
  }
  return createClient(
    supabaseUrl,
    supabaseKey,
    {
      auth: {
        persistSession: false,
        autoRefreshToken: false,
      },
    }
  );
};

export default getSupabaseServer;

