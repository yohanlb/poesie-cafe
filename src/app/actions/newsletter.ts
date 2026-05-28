"use server";

import { createNewsletterContact } from "@lib/brevo";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export type SubscribeNewsletterState = {
  ok: boolean;
  message: string;
};

export async function subscribeNewsletter(
  _prevState: SubscribeNewsletterState | null,
  formData: FormData
): Promise<SubscribeNewsletterState> {
  const website = formData.get("website");
  if (typeof website === "string" && website.trim().length > 0) {
    return { ok: true, message: "Votre inscription est confirmée." };
  }

  const email = formData.get("email");

  if (typeof email !== "string" || email.trim().length === 0) {
    return { ok: false, message: "Vous devez renseigner ce champ." };
  }

  const normalizedEmail = email.trim().toLowerCase();

  if (!EMAIL_REGEX.test(normalizedEmail)) {
    return {
      ok: false,
      message:
        "Les informations que vous avez fournies ne sont pas valides. Veuillez vérifier le format du champ et réessayer.",
    };
  }

  const result = await createNewsletterContact(normalizedEmail);

  if (result.ok) {
    return { ok: true, message: "Votre inscription est confirmée." };
  }

  if (result.error === "invalid") {
    return {
      ok: false,
      message:
        "Les informations que vous avez fournies ne sont pas valides. Veuillez vérifier le format du champ et réessayer.",
    };
  }

  return {
    ok: false,
    message:
      "Une erreur est survenue. Veuillez réessayer dans quelques instants.",
  };
}
