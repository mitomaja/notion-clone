import { create } from "zustand";

type SettingsStore = {
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
};

export const useSettings = create<SettingsStore>((set) => ({
  isOpen: false,
  onClose: () => set({ isOpen: false }),
  onOpen: () => set({ isOpen: true }),
}));
