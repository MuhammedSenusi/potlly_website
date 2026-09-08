"use client";

import { useId, useState } from "react";
import { IconPin, IconSearch } from "@/components/ui/icons";
import { areas } from "@/constants/content";
import { useDiscovery } from "./discovery-context";

/** Hero search — filters the live sample listings further down the page. */
export function HeroSearch() {
  const { submitSearch } = useDiscovery();
  const [q, setQ] = useState("");
  const [a, setA] = useState(areas[0]);
  const qId = useId();
  const aId = useId();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        submitSearch(q, a);
      }}
      className="flex w-full flex-col gap-2 rounded-[1.5rem] border border-line bg-white p-2 shadow-[var(--shadow-card)] sm:flex-row sm:items-center sm:rounded-full sm:pl-5"
    >
      <div className="flex min-w-0 flex-1 items-center gap-2.5 px-3 sm:px-0">
        <IconSearch className="size-5 shrink-0 text-ink-3" />
        <label htmlFor={qId} className="sr-only">
          Search for a dish or kitchen
        </label>
        <input
          id={qId}
          type="search"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Jollof, egusi, puff puff…"
          className="h-11 w-full min-w-0 bg-transparent text-[0.9375rem] font-medium text-ink outline-none placeholder:text-ink-3 sm:h-12"
        />
      </div>

      <div className="flex items-center gap-2.5 border-line px-3 sm:border-l sm:pl-4 sm:pr-1">
        <IconPin className="size-5 shrink-0 text-ember" />
        <label htmlFor={aId} className="sr-only">
          Your area
        </label>
        <select
          id={aId}
          value={a}
          onChange={(e) => setA(e.target.value)}
          className="h-11 max-w-[10.5rem] cursor-pointer appearance-none bg-transparent pr-1 text-[0.9375rem] font-semibold text-ink outline-none sm:h-12"
        >
          {areas.map((area) => (
            <option key={area} value={area}>
              {area}
            </option>
          ))}
        </select>
      </div>

      <button
        type="submit"
        className="h-12 shrink-0 rounded-full bg-ember px-6 text-[0.9375rem] font-bold text-white shadow-[var(--shadow-ember)] transition-[background-color,transform] duration-200 hover:bg-ember-dark active:translate-y-px"
      >
        Find food
      </button>
    </form>
  );
}
