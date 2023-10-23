import { create } from "zustand";
import { IAuthStore } from "./types";
import { createJSONStorage, persist } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const useAuthStore = create<IAuthStore>()(
  persist(
    (set) => ({
      user: "",
      setUser: (user: string) => set(() => ({ user })),
    }),
    {
      name: "auth-storage",
      storage: createJSONStorage(() => AsyncStorage), 
    }
  )
);
