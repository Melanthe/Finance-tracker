import { create } from 'zustand';

interface GlobalState {
    isMobile: boolean;
    isLoading: boolean;
    error: string | null;
    setLoading: (loading: boolean) => void;
    setError: (error: string | null) => void;
    setIsMobile: (isMobile: boolean) => void;
}

export const useGlobalStore = create<GlobalState>((set) => ({
    isMobile: false,
    isLoading: false,
    error: null,
    setLoading: (isLoading) => set({ isLoading }),
    setError: (error) => set({ error }),
    setIsMobile: (isMobile) => set({ isMobile }),
}));