"use client";

import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from "react";
import type { CategoryId } from "@/constants/content";

type DiscoveryState = {
  query: string;
  area: string;
  category: CategoryId | "all";
  setQuery: (v: string) => void;
  setArea: (v: string) => void;
  setCategory: (v: CategoryId | "all") => void;
  /** Applies a hero search and moves the reader to the results. */
  submitSearch: (query: string, area: string) => void;
};

const Ctx = createContext<DiscoveryState | null>(null);

export function DiscoveryProvider({ children }: { children: ReactNode }) {
  const [query, setQuery] = useState("");
  const [area, setArea] = useState("Scarborough");
  const [category, setCategory] = useState<CategoryId | "all">("all");

  const submitSearch = useCallback((q: string, a: string) => {
    setQuery(q);
    setArea(a);
    setCategory("all");
    const target = document.getElementById("discover");
    if (!target) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    target.scrollIntoView({ behavior: reduced ? "auto" : "smooth", block: "start" });
    // Move focus so keyboard and screen-reader users land on the results too.
    target.querySelector<HTMLElement>("[data-results-heading]")?.focus();
  }, []);

  const value = useMemo(
    () => ({ query, area, category, setQuery, setArea, setCategory, submitSearch }),
    [query, area, category, submitSearch],
  );

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useDiscovery() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useDiscovery must be used inside <DiscoveryProvider>");
  return ctx;
}
