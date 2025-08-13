import { Event } from "../data/events";

/**
 * Formats a date string (DD/MM/YYYY) to a French locale string with proper capitalization
 */
export const formatDate = (dateString: string): string => {
  try {
    const [day, month, year] = dateString.split("/");
    const date = new Date(`${year}-${month}-${day}`);
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
    return dateString; // Fallback to original string if parsing fails
  }
};

/**
 * Groups events by date and returns a record with dates as keys
 */
export const groupEventsByDate = (events: Event[]): Record<string, Event[]> => {
  return events.reduce((acc, event) => {
    if (!acc[event.date]) {
      acc[event.date] = [];
    }
    acc[event.date].push(event);
    return acc;
  }, {} as Record<string, Event[]>);
};

/**
 * Sorts dates chronologically (DD/MM/YYYY format)
 */
export const sortDatesChronologically = (dates: string[]): string[] => {
  return dates.sort((a, b) => {
    const dateA = new Date(a.split("/").reverse().join("-"));
    const dateB = new Date(b.split("/").reverse().join("-"));
    return dateA.getTime() - dateB.getTime();
  });
};

/**
 * Gets events for a specific date
 */
export const getEventsByDate = (events: Event[], date: string): Event[] => {
  return events.filter((event) => event.date === date);
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
    const eventDate = new Date(event.date.split("/").reverse().join("-"));
    return eventDate >= today;
  });
};

/**
 * Gets upcoming workshops (workshops from today onwards)
 */
export const getUpcomingWorkshops = (events: Event[]): Event[] => {
  const today = new Date();
  today.setHours(0, 0, 0, 0); // Reset time to start of day
  return events.filter((event) => {
    const eventDate = new Date(event.date.split("/").reverse().join("-"));
    return eventDate >= today && event.eventType === "workshop";
  });
};
