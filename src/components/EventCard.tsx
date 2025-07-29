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
    <Card className="bg-slate-800 border-slate-700">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-2xl">
              {getEventTypeEmoji(event.eventType)}
            </span>
            <CardTitle className="text-white text-2xl font-bold">
              {event.name}
            </CardTitle>
          </div>
        </div>
        <CardDescription className="text-white/70">
          <div className="flex flex-wrap gap-2 text-sm text-white/80">
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{event.time}</span>
            </div>
            {event.price && (
              <Badge
                variant="outline"
                className="bg-green-400/20 text-green-200 hover:bg-green-400/30 border-green-300/30"
              >
                {event.price}
              </Badge>
            )}
          </div>
        </CardDescription>
      </CardHeader>

      {event.description && (
        <CardContent>
          <p className="text-white/90 text-sm leading-relaxed text-left">
            {event.description}
          </p>
        </CardContent>
      )}

      <CardFooter className="w-full">
        {event.instructor && (
          <div className="w-full flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pt-3 border-t border-white/10">
            <div className="flex items-center gap-2">
              <div
                className="w-6 h-6 bg-white/10 rounded-full flex items-center justify-center"
                aria-hidden="true"
              >
                <Users className="w-3 h-3 text-white/80" />
              </div>
              <span className="text-sm font-medium text-white/90">
                {event.instructor}
              </span>
            </div>
            {event.instagram && (
              <a
                href={`https://insctagram.com/${cleanInstagramHandle(
                  event.instagram
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-pink-300 hover:text-pink-200 transition-colors bg-pink-400/10 px-2.5 py-1 rounded-full hover:bg-pink-400/20"
                aria-label={`Suivre ${event.instructor} sur Instagram`}
              >
                <Instagram className="w-3.5 h-3.5" aria-hidden="true" />
                <span className="text-sm font-medium">{event.instagram}</span>
              </a>
            )}
          </div>
        )}
      </CardFooter>
    </Card>
  );
}
