import { Clock, Instagram, Users } from "lucide-react";
import { Event } from "../data/events";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Badge } from "@components/ui/badge";

interface EventCardProps {
  event: Event;
}

export default function EventCard({ event }: EventCardProps) {
  const cleanInstagramHandle = (handle: string) => {
    return handle.replace("@", "");
  };

  const getEventTypeEmoji = (eventType: Event["eventType"]) => {
    switch (eventType) {
      case "workshop":
        return "🎨";
      case "running-club":
        return "🏃‍♂️";
      case "vernissage":
        return "🖼️";
      case "other":
        return "✨";
      default:
        return "📅";
    }
  };

  return (
    <Card className="bg-card border-border backdrop-blur-md hover:bg-card/50 transition-colors">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-2xl">
              {getEventTypeEmoji(event.eventType)}
            </span>
            <CardTitle className="text-card-foreground text-2xl font-bold">
              {event.name}
            </CardTitle>
          </div>
        </div>
        <CardDescription className="text-muted-foreground">
          <div className="flex flex-wrap gap-2 text-sm">
            <div className="flex items-center gap-1 text-foreground/80">
              <Clock className="w-4 h-4" />
              <span>{event.time}</span>
            </div>
            {event.price && (
              <Badge
                variant="outline"
                className="bg-primary/20 text-primary-foreground border-primary/30 hover:bg-primary/30"
              >
                {event.price}
              </Badge>
            )}
          </div>
        </CardDescription>
      </CardHeader>

      {event.description && (
        <CardContent>
          <p className="text-foreground/90 text-sm leading-relaxed text-left">
            {event.description}
          </p>
        </CardContent>
      )}

      <CardFooter className="w-full">
        {event.instructor && (
          <div className="w-full flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pt-3 border-t border-border/40">
            <div className="flex items-center gap-2">
              <div
                className="w-8 h-8 bg-muted rounded-full flex items-center justify-center"
                aria-hidden="true"
              >
                <Users className="w-4 h-4 text-muted-foreground" />
              </div>
              <span className="text-base font-medium text-foreground/90">
                {event.instructor}
              </span>
            </div>
            {event.instagram && (
              <a
                href={`https://instagram.com/${cleanInstagramHandle(
                  event.instagram
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Suivre ${event.instructor} sur Instagram`}
              >
                <Badge
                  variant="secondary"
                  className="flex items-center gap-1.5 bg-purple-500/50 hover:bg-purple-600/50 text-white border-0 px-3 py-1.5 rounded-full transition-colors"
                >
                  <Instagram
                    className="w-4 h-4 flex-shrink-0"
                    aria-hidden="true"
                  />
                  <span className="text-base font-medium leading-none">
                    {event.instagram}
                  </span>
                </Badge>
              </a>
            )}
          </div>
        )}
      </CardFooter>
    </Card>
  );
}
