// mobile/stores/useAuthStore.ts
import { create } from 'zustand';

type AuthState = {
  isLoggedIn: boolean;
  accessToken: string | null;
  login: (token: string) => void;
  logout: () => void;
};

export const useAuthStore = create<AuthState>((set) => ({
  isLoggedIn: false,
  accessToken: null,
  login: (token) =>
    set({ isLoggedIn: true, accessToken: token }),
  logout: () =>
    set({ isLoggedIn: false, accessToken: null }),
}));
