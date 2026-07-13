"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

interface UiState {
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
}

const UiContext = createContext<UiState | null>(null);

export function UiProvider({ children }: { children: ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <UiContext.Provider value={{ menuOpen, setMenuOpen }}>
      {children}
    </UiContext.Provider>
  );
}

export function useUi() {
  const ctx = useContext(UiContext);
  if (!ctx) throw new Error("useUi must be used inside <UiProvider>");
  return ctx;
}
