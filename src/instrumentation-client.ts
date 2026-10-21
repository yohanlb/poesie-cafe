import posthog from "posthog-js";

const projectToken = process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN;

// Only the live site sends analytics, including when testing production builds.
const isLiveSite = ["poesiecoffee.com", "www.poesiecoffee.com"].includes(
  window.location.hostname,
);

if (process.env.NODE_ENV === "production" && isLiveSite && projectToken) {
  posthog.init(projectToken, {
    api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || "/p-relay",
    ui_host: "https://eu.posthog.com",
    defaults: "2026-05-30",
    capture_pageview: "history_change",
    capture_pageleave: "if_capture_pageview",
    person_profiles: "identified_only",
    disable_session_recording: true,
    mask_all_text: true,
    mask_all_element_attributes: true,
  });
}
