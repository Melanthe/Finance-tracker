import { create } from 'zustand';

interface UserState {
    user: {
        id: string;
        name: string;
        email: string;
        avatar?: string;
    } | null;
    isLoading: boolean;
    error: string | null;
    setUser: (user: UserState['user']) => void;
    clearUser: () => void;
    setLoading: (loading: boolean) => void;
    setError: (error: string | null) => void;
}

export const useUser = create<UserState>((set) => ({
    user: null,
    isLoading: false,
    error: null,
    setUser: (user) => set({ user, error: null }),
    clearUser: () => set({ user: null }),
    setLoading: (isLoading) => set({ isLoading }),
    setError: (error) => set({ error }),
}));
