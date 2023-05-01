import { create } from 'zustand';

/**
 * ? Note: When using Computed States you must follow the following rules.
 *
 * ! Wrong:
 * ! const { isSignedIn } = useUserStore(state => state.computed);
 *
 * ! If you use the following, it will not detect the change.
 *
 * * Correct:
 * * const isSignedIn = useUserStore(state => state.computed.isSignedIn);
 *
 * * If you use the following, it will detect the change.
 */

export const useUserStore = create((set, get) => ({
  /* States */
  email: null,

  /* Computed */
  computed: {
    get isSignedIn() {
      return !!get().email;
    },
  },

  /* Functions */
  login: email => set({ email }),

  logout: () => {
    set(state => {
      state.email = null;
    });
  },
}));
