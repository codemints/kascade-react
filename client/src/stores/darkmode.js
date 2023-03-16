import { create } from 'zustand';

export const useDarkmode = create((set) => ({
  darkmode: null,
  toggleDarkmode: () => set((state) => ({ darkmode: !state.darkmode })),
  setDarkmode: (bool) => set((state) => ({ darkmode: bool })),
}))