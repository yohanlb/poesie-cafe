export interface Event {
  id: string;
  name: string;
  date: Date;
  duration: number; // Duration in hours
  price?: number;
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
  availability: "Disponible" | "Complet";
  isRead?: boolean;
}
