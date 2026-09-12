"use client";

import { FormEvent, useState } from "react";
import { IconArrowRight, IconCheck, IconMail } from "@/components/ui/icons";
import { Button } from "@/components/ui/button";

export function WaitlistForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-card border border-ember-tint bg-ember-soft p-7 sm:p-8" role="status">
        <span className="grid size-12 place-items-center rounded-full bg-ember text-white shadow-[var(--shadow-ember)]">
          <IconCheck className="size-6" />
        </span>
        <h2 className="mt-6 font-headline text-h3 text-ink">You&rsquo;re on the list.</h2>
        <p className="mt-3 leading-relaxed text-ink-2">
          We&rsquo;ll let you know when Pottly is ready in your area. No noise, just good food.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-card border border-line bg-white p-6 shadow-[var(--shadow-card)] sm:p-8"
    >
      <div className="grid size-12 place-items-center rounded-xl bg-ember-soft text-ember ring-1 ring-inset ring-ember-tint">
        <IconMail className="size-6" />
      </div>
      <h2 className="mt-6 font-headline text-h3 text-ink">Save me a seat.</h2>
      <p className="mt-3 leading-relaxed text-ink-2">
        Leave your email and we&rsquo;ll tell you when Pottly opens near you.
      </p>

      <div className="mt-7">
        <label htmlFor="waitlist-email" className="text-[0.875rem] font-semibold text-ink">
          Email address
        </label>
        <input
          id="waitlist-email"
          name="email"
          type="email"
          autoComplete="email"
          required
          placeholder="you@example.com"
          className="mt-2 h-12 w-full rounded-xl border border-line-strong bg-cream px-4 text-ink outline-none transition-[border-color,box-shadow] placeholder:text-ink-3 focus:border-ember focus:ring-4 focus:ring-ember/15"
        />
      </div>
      <p className="mt-3 text-[0.8125rem] leading-relaxed text-ink-3">
        One useful update when we launch. Unsubscribe whenever you like.
      </p>
      <Button type="submit" size="lg" className="mt-6 w-full">
        Join the waitlist
        <IconArrowRight className="size-[1.15rem]" />
      </Button>
    </form>
  );
}
