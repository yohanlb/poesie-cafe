"use client";

import { useActionState, useEffect, useState } from "react";
import {
  subscribeNewsletter,
  type SubscribeNewsletterState,
} from "../app/actions/newsletter";
import { cn } from "@components/lib/utils";
import { Button } from "@components/ui/button";
import { Input } from "@components/ui/input";

const initialState: SubscribeNewsletterState = {
  ok: false,
  message: "",
};

type NewsletterFormProps = {
  variant?: "inline" | "card" | "compact";
  showHeading?: boolean;
  onSuccess?: () => void;
  className?: string;
};

function FormSkeleton({ isCompact }: { isCompact: boolean }) {
  return (
    <div
      className={cn(isCompact ? "space-y-3" : "space-y-4")}
      aria-hidden="true"
    >
      <div
        className={cn(
          "w-full rounded-md border border-white/30 bg-white/10",
          isCompact ? "h-10" : "h-9"
        )}
      />
      <div
        className={cn(
          "rounded-md bg-white/80",
          isCompact ? "h-10 w-full" : "h-9 w-full sm:w-32"
        )}
      />
    </div>
  );
}

export default function NewsletterForm({
  variant = "inline",
  showHeading = true,
  onSuccess,
  className,
}: NewsletterFormProps) {
  const isCompact = variant === "compact";
  const emailInputId = isCompact ? "newsletter-email-popup" : "newsletter-email";
  const [mounted, setMounted] = useState(false);

  const [state, formAction, isPending] = useActionState(
    subscribeNewsletter,
    initialState
  );

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (state.ok && state.message) {
      onSuccess?.();
    }
  }, [state.ok, state.message, onSuccess]);

  if (state.ok && state.message) {
    return (
      <div
        className={cn(
          "rounded-md border border-emerald-400/40 bg-emerald-950/30 px-4 py-3 text-base text-emerald-100",
          variant === "card" && "bg-emerald-950/20",
          className
        )}
        role="status"
      >
        {state.message}
      </div>
    );
  }

  return (
    <div
      className={cn(
        variant === "card" &&
          "rounded-lg border border-white/20 bg-white/5 p-6 sm:p-8",
        className
      )}
    >
      <div className={cn(isCompact ? "space-y-4" : "space-y-6")}>
        {showHeading && (
          <div className="space-y-2 text-left">
            <h2
              className={cn(
                "font-normal text-white",
                isCompact ? "text-xl" : "text-2xl md:text-3xl"
              )}
            >
              Newsletter
            </h2>
            <p
              className={cn(
                "text-white/80",
                isCompact ? "text-base" : "text-base md:text-lg"
              )}
            >
              Inscrivez-vous à notre newsletter pour suivre nos actualités.
            </p>
          </div>
        )}

        {!mounted ? (
          <FormSkeleton isCompact={isCompact} />
        ) : (
          <form
            action={formAction}
            className={cn(isCompact ? "space-y-3" : "space-y-4")}
          >
            <div className="space-y-2 text-left">
              <label
                htmlFor={emailInputId}
                className={cn(
                  "text-white/90",
                  isCompact ? "sr-only" : "block text-sm md:text-base"
                )}
              >
                Veuillez renseigner votre adresse email pour vous inscrire
              </label>
              <Input
                id={emailInputId}
                name="email"
                type="email"
                autoComplete="email"
                placeholder="Votre adresse email"
                required
                disabled={isPending}
                aria-invalid={Boolean(state.message && !state.ok)}
                className={cn(
                  "border-white/30 bg-white/10 text-white placeholder:text-white/40 focus-visible:border-white/60 focus-visible:ring-white/20",
                  isCompact && "h-10 text-base md:text-base"
                )}
              />
            </div>

            {state.message && !state.ok && (
              <p
                className={cn(
                  "rounded-md border border-red-400/40 bg-red-950/30 px-3 py-2 text-red-100",
                  isCompact ? "text-base" : "text-sm"
                )}
                role="alert"
              >
                {state.message}
              </p>
            )}

            <input
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              className="sr-only"
              aria-hidden="true"
            />

            <Button
              type="submit"
              disabled={isPending}
              className={cn(
                "bg-white text-[#24388e] hover:bg-white/90 font-medium",
                isCompact ? "h-10 w-full text-base" : "w-full sm:w-auto"
              )}
            >
              {isPending ? "Inscription…" : "S'inscrire"}
            </Button>
          </form>
        )}
      </div>
    </div>
  );
}
