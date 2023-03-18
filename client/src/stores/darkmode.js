import { create } from 'zustand';

export const useDarkmode = create((set) => ({
  darkmode: true,
  toggleDarkmode: () => set((state) => ({ darkmode: !state.darkmode })),
  setDarkmode: (bool) => set((state) => ({ darkmode: bool })),
}))