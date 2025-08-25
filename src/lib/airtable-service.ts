import Airtable from "airtable";
import { Event } from "../types/event";

const airtable = new Airtable({
  apiKey: process.env.AIRTABLE_API_KEY,
});

export const getEventsFromAirtable = async (): Promise<Event[]> => {
  if (!process.env.AIRTABLE_BASE_ID) {
    throw new Error("AIRTABLE_BASE_ID not configured");
  }

  try {
    const base = airtable.base(process.env.AIRTABLE_BASE_ID);
    const records = await base("Events").select().all();

    const events = records.map(
      (record): Event => ({
        id: record.id,
        name: (record.get("Event Name") as string) || "",
        date: new Date(record.get("Date") as string),
        duration: (record.get("Duration") as number) || 1,
        price: record.get("Price") as number,
        instructor: record.get("Host") as string,
        instagram: record.get("Instagram") as string,
        description: record.get("Description") as string,
        eventType: (record.get("Event Type") as Event["eventType"]) || "other",
        emoji: record.get("Emoji") as string,
        reservationLink: record.get("Reservation Link") as string,
        availability:
          (record.get("Availability") as Event["availability"]) || "Disponible",
        isVisible: (record.get("Is Visible") as boolean) || false,
      })
    );
    return events.filter((event) => event.isVisible);
  } catch (error) {
    console.error("Error fetching from Airtable:", error);
    throw error;
  }
};
