export interface Event {
  id: string;
  name: string;
  date: Date;
  duration: number; // Duration in hours
  price?: string;
  instructor?: string;
  instagram?: string;
  description?: string;
  eventType:
    | "workshop"
    | "running-club"
    | "vernissage"
    | "other"
    | "yoga"
    | "brunch";
  emoji?: string;
  reservationLink?: string;
  fullyBooked: boolean;
  isReady: boolean;
}
