import { Event } from "../types/event";

export const formatDate = (date: Date): string => {
  try {
    const formattedDate = date.toLocaleDateString("fr-FR", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    });

    const words = formattedDate.split(" ");
    const capitalizedWords = words.map((word) => {
      if (isNaN(Number(word)) && word.length > 2) {
        return word.charAt(0).toUpperCase() + word.slice(1);
      }
      return word;
    });

    return capitalizedWords.join(" ");
  } catch {
    return date.toDateString();
  }
};

export const formatTime = (date: Date): string => {
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  return `${hours}H${minutes}`;
};

export const formatDuration = (duration: number): string => {
  if (duration === 1) return "1h";
  if (duration % 1 === 0) return `${duration}h`;
  const hours = Math.floor(duration);
  const minutes = Math.round((duration % 1) * 60);
  if (minutes === 0) return `${hours}h`;
  return `${hours}h${minutes}`;
};

export const getEndTime = (startDate: Date, duration: number): string => {
  const endDate = new Date(startDate.getTime() + duration * 60 * 60 * 1000);
  return formatTime(endDate);
};

export const groupEventsByDate = (events: Event[]): Record<string, Event[]> => {
  return events.reduce((acc, event) => {
    const dateKey = event.date.toISOString().split("T")[0];
    if (!acc[dateKey]) {
      acc[dateKey] = [];
    }
    acc[dateKey].push(event);
    return acc;
  }, {} as Record<string, Event[]>);
};

export const sortDatesChronologically = (dates: string[]): string[] => {
  return dates.sort((a, b) => a.localeCompare(b));
};
