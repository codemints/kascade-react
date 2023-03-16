import { create } from 'zustand';

const useDarkmode = create((set) => ({
  darkmode: null,
  toggleDarkmode: () => set((state) => ({ darkmode: !state.darkmode })),
  setDarkmode: (bool) => set((state) => ({ darkmode: bool })),
}))