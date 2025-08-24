import { Event } from "../data/events";

/**
 * Formats a Date object to a French locale string with proper capitalization
 */
export const formatDate = (date: Date): string => {
  try {
    const formattedDate = date.toLocaleDateString("fr-FR", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    });

    // Capitalize the first letter of day and month
    const words = formattedDate.split(" ");
    const capitalizedWords = words.map((word) => {
      // Check if the word is a day or month (not a number or year)
      if (isNaN(Number(word)) && word.length > 2) {
        return word.charAt(0).toUpperCase() + word.slice(1);
      }
      return word;
    });

    return capitalizedWords.join(" ");
  } catch {
    return date.toDateString(); // Fallback to default date string if formatting fails
  }
};

/**
 * Formats time in French format (e.g., "18H30")
 */
export const formatTime = (date: Date): string => {
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  return `${hours}H${minutes}`;
};

/**
 * Formats duration nicely (e.g., "1h30", "2h", "1.5h")
 */
export const formatDuration = (duration: number): string => {
  if (duration === 1) return "1h";
  if (duration % 1 === 0) return `${duration}h`;
  const hours = Math.floor(duration);
  const minutes = Math.round((duration % 1) * 60);
  if (minutes === 0) return `${hours}h`;
  return `${hours}h${minutes}`;
};

/**
 * Calculates end time from start time and duration
 */
export const getEndTime = (startDate: Date, duration: number): string => {
  const endDate = new Date(startDate.getTime() + duration * 60 * 60 * 1000);
  return formatTime(endDate);
};

/**
 * Groups events by date and returns a record with dates as keys
 */
export const groupEventsByDate = (events: Event[]): Record<string, Event[]> => {
  return events.reduce((acc, event) => {
    // Create a date key in YYYY-MM-DD format for grouping
    const dateKey = event.date.toISOString().split("T")[0];
    if (!acc[dateKey]) {
      acc[dateKey] = [];
    }
    acc[dateKey].push(event);
    return acc;
  }, {} as Record<string, Event[]>);
};

/**
 * Sorts dates chronologically (YYYY-MM-DD format)
 */
export const sortDatesChronologically = (dates: string[]): string[] => {
  return dates.sort((a, b) => {
    return a.localeCompare(b); // YYYY-MM-DD format can be sorted lexicographically
  });
};

/**
 * Gets events for a specific date
 */
export const getEventsByDate = (events: Event[], date: Date): Event[] => {
  const dateKey = date.toISOString().split("T")[0];
  return events.filter((event) => {
    const eventDateKey = event.date.toISOString().split("T")[0];
    return eventDateKey === dateKey;
  });
};

/**
 * Gets events by type
 */
export const getEventsByType = (
  events: Event[],
  eventType: Event["eventType"]
): Event[] => {
  return events.filter((event) => event.eventType === eventType);
};

/**
 * Gets all workshops
 */
export const getWorkshops = (events: Event[]): Event[] => {
  return events.filter((event) => event.eventType === "workshop");
};

/**
 * Gets all running clubs
 */
export const getRunningClubs = (events: Event[]): Event[] => {
  return events.filter((event) => event.eventType === "running-club");
};

/**
 * Gets all vernissages
 */
export const getVernissages = (events: Event[]): Event[] => {
  return events.filter((event) => event.eventType === "vernissage");
};

/**
 * Gets upcoming events (events from today onwards)
 */
export const getUpcomingEvents = (events: Event[]): Event[] => {
  const today = new Date();
  today.setHours(0, 0, 0, 0); // Reset time to start of day
  return events.filter((event) => {
    return event.date >= today;
  });
};

/**
 * Gets upcoming workshops (workshops from today onwards)
 */
export const getUpcomingWorkshops = (events: Event[]): Event[] => {
  const today = new Date();
  today.setHours(0, 0, 0, 0); // Reset time to start of day
  return events.filter((event) => {
    return event.date >= today && event.eventType === "workshop";
  });
};
