export type BrevoResult =
  | { ok: true }
  | { ok: false; error: string };

const BREVO_API_URL = "https://api.brevo.com/v3/contacts";

function getBrevoConfig(): { apiKey: string; listId: number } | null {
  const apiKey = process.env.BREVO_API_KEY;
  const listId = Number(process.env.BREVO_LIST_ID);

  if (
    !apiKey ||
    process.env.BREVO_LIST_ID == null ||
    Number.isNaN(listId) ||
    listId < 1
  ) {
    return null;
  }

  return { apiKey, listId };
}

export async function createNewsletterContact(
  email: string
): Promise<BrevoResult> {
  const config = getBrevoConfig();

  if (!config) {
    console.error("Brevo configuration missing: BREVO_API_KEY or BREVO_LIST_ID");
    return { ok: false, error: "generic" };
  }

  try {
    const response = await fetch(BREVO_API_URL, {
      method: "POST",
      headers: {
        "api-key": config.apiKey,
        "Content-Type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify({
        email,
        listIds: [config.listId],
        updateEnabled: true,
      }),
      signal: AbortSignal.timeout(10000),
    });

    if (response.status === 201 || response.status === 204) {
      return { ok: true };
    }

    if (response.status === 400) {
      return { ok: false, error: "invalid" };
    }

    console.error("Brevo API error:", response.status, await response.text());
    return { ok: false, error: "generic" };
  } catch (error) {
    console.error("Brevo API request failed:", error);
    return { ok: false, error: "generic" };
  }
}
