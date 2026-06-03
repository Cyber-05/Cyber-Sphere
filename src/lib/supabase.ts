export const supabase = {
  auth: {
    getSession: async () => ({ data: { session: null } }),
    signUp: async () => ({ data: null, error: null }),
    signInWithPassword: async () => ({ data: null, error: null }),
  },
  from: () => ({
    select: () => ({ eq: () => ({ maybeSingle: async () => ({ data: null, error: null }) }) }),
    insert: async () => ({ data: null, error: null }),
  }),
};

export async function getCurrentUser() {
  return null;
}

export async function getUserProfile(userId: string) {
  return null;
}
