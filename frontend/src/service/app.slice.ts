import { create } from 'zustand';

interface AppStoreState {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const useAppStore = create<AppStoreState>((set) => ({
  darkMode: false,

  toggleDarkMode: () => {
    set((state) => ({ darkMode: !state.darkMode }));
  }
}));

export default useAppStore;
