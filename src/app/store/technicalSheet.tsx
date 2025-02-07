import { create } from "zustand";
import { persist } from "zustand/middleware";

interface BearState {
  computerType: string;
  processor: string;
  memory: string;
  storage: string;
  operatingSystem: string;
  officeProgram: string;
  user: string;
  customer: string;
  city: string;
  date: string;
  problem: string;
  test: string;
  conclusion: string;
  recomendation: string;
  observation: string;
  changeProperties: (properties: Partial<BearState>) => void;
}

export const useTechnicalSheetStore = create<BearState>()(
  persist(
    (set) => ({
      computerType: "",
      processor: "",
      memory: "",
      storage: "",
      operatingSystem: "",
      officeProgram: "",
      user: "",
      customer: "",
      city: "",
      date: "",
      problem: "",
      test: "",
      conclusion: "",
      recomendation: "",
      observation: "",
      changeProperties: (properties) => set((state) => ({ ...state, ...properties })),
    }),
    { name: "sheet-storage" }
  )
);
