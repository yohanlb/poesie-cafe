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

    return records.map(
      (record): Event => ({
        id: record.id,
        name: (record.get("Name") as string) || "",
        date: new Date(record.get("Date") as string),
        duration: (record.get("Duration") as number) || 1,
        price: record.get("Price") as string,
        instructor: record.get("Instructor") as string,
        instagram: record.get("Instagram") as string,
        description: record.get("Description") as string,
        eventType: (record.get("EventType") as Event["eventType"]) || "other",
        emoji: record.get("Emoji") as string,
        reservationLink: record.get("ReservationLink") as string,
        fullyBooked: (record.get("FullyBooked") as boolean) || false,
      })
    );
  } catch (error) {
    console.error("Error fetching from Airtable:", error);
    throw error;
  }
};
