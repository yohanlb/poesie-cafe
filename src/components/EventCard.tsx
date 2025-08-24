import { Clock, Instagram, Users } from "lucide-react";
import { Event } from "../data/events";
import { formatTime, formatDuration, getEndTime } from "../lib/event-utils";
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

  const formatedPrice = (): string => {
    console.log(event.price);
    if (!event.price || event.price == 0) {
      return "Gratuit";
    }

    return event.price + "€";
  };

  const isInstagramLink = (url: string) => {
    return url.includes("instagram.com") || url.includes("instagram.fr");
  };

  const getReservationText = (reservationLink: string) => {
    if (isInstagramLink(reservationLink)) {
      return { text: "Réservation par message: ", linkText: "Ici" };
    }
    return { text: "Réservation: ", linkText: "Ici" };
  };

  return (
    <Card
      className={`${
        event.fullyBooked ? "bg-gray-100" : "bg-white"
      } border-gray-200 backdrop-blur-md hover:bg-gray-50 transition-colors`}
    >
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-2xl">{event.emoji || "📅"}</span>
            <CardTitle className="text-gray-900 text-2xl font-normal">
              {event.name}
              {event.fullyBooked && (
                <span className="text-red-600 font-medium text-lg ml-2">
                  (complet)
                </span>
              )}
            </CardTitle>
          </div>
        </div>
        <CardDescription className="text-gray-600">
          <div className="flex flex-wrap gap-2 text-sm">
            <div className="flex items-center gap-1 text-gray-700">
              <Clock className="w-4 h-4" />
              <span>
                {formatTime(event.date)}-
                {getEndTime(event.date, event.duration)} (
                {formatDuration(event.duration)})
              </span>
            </div>
            <Badge
              variant="outline"
              className="bg-blue-100 text-blue-800 border-blue-200 hover:bg-blue-200"
            >
              {formatedPrice()}
            </Badge>
          </div>
        </CardDescription>
      </CardHeader>

      {(event.description || event.reservationLink) && (
        <CardContent>
          <div className="text-gray-700 text-sm leading-relaxed text-left">
            {event.description &&
              event.description.split("\n").map((line, index, array) => (
                <span key={index}>
                  {line}
                  {index < array.length - 1 && <br />}
                </span>
              ))}
            {event.reservationLink && (
              <>
                {event.description && (
                  <>
                    <br />
                    <br />
                  </>
                )}
                <span
                  className={
                    event.fullyBooked ? "line-through text-gray-500" : ""
                  }
                >
                  {getReservationText(event.reservationLink).text}
                  <a
                    href={event.reservationLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${
                      event.fullyBooked
                        ? "line-through text-gray-500"
                        : "text-blue-600 hover:text-blue-800"
                    } underline`}
                  >
                    {getReservationText(event.reservationLink).linkText}
                  </a>
                </span>
              </>
            )}
          </div>
        </CardContent>
      )}

      <CardFooter className="w-full">
        {event.instructor && (
          <div className="w-full flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pt-3 border-t border-gray-200">
            <div className="flex items-center gap-2">
              <Badge
                variant="secondary"
                className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center p-0 border-0"
                aria-hidden="true"
              >
                <Users className="w-4 h-4 text-gray-600" />
              </Badge>
              <span className="text-base font-normal text-gray-900">
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
                  className="flex items-center gap-1.5 bg-purple-100 hover:bg-purple-200 text-purple-800 border-0 px-3 py-1.5 rounded-full transition-colors"
                >
                  <Instagram
                    className="w-4 h-4 flex-shrink-0"
                    aria-hidden="true"
                  />
                  <span className="text-base font-normal leading-none">
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
