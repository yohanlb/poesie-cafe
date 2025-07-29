import Footer from "../../components/Footer";
import EventCard from "../../components/EventCard";
import { events } from "../../data/events";
import {
  formatDate,
  groupEventsByDate,
  sortDatesChronologically,
} from "../../lib/event-utils";
import { Card, CardContent } from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";
import { Smartphone } from "lucide-react";

export default function Evenements() {
  const eventsByDate = groupEventsByDate(events);
  const sortedDates = sortDatesChronologically(Object.keys(eventsByDate));

  return (
    <main className="min-h-svh justify-between flex flex-col bg-background">
      {/* Future Navbar */}
      <nav className="h-18 w-full"></nav>

      <div className="flex-grow flex flex-col items-center justify-center mx-4 sm:mx-8 py-8">
        {/* Page Title */}
        <div className="text-center mb-8">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-light text-foreground/95 tracking-wide">
            PROCHAINS ATELIERS / ÉVÉNEMENTS
          </h1>
        </div>

        <div className="h-6 md:h-8"></div>

        {/* Reservation Info */}
        <div className="w-full max-w-2xl">
          <div className="flex items-center gap-1.5 text-foreground/80">
            <Smartphone className="w-4 h-4" />
            <p className="text-md font-normal">
              Pour réserver un atelier, contactez directement l&apos;animateur
              sur Instagram
            </p>
          </div>
        </div>

        <div className="h-6 md:h-8"></div>

        {/* Events Timeline */}
        <div className="w-full max-w-2xl space-y-12">
          <section>
            {sortedDates.length > 0 ? (
              <div className="space-y-8">
                {sortedDates.map((date) => (
                  <div key={date} className="space-y-4">
                    {/* Date Header */}
                    <div className="text-left mb-6">
                      <Badge
                        variant="secondary"
                        className="text-lg px-4 py-2 bg-card/60 border-border/40 text-foreground/90"
                      >
                        {formatDate(date)}
                      </Badge>
                    </div>

                    {/* Events for this date */}
                    <div className="space-y-6">
                      {eventsByDate[date].map((event) => (
                        <EventCard key={event.id} event={event} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <Card className="bg-card/60 border-border/40">
                <CardContent className="p-8 text-center">
                  <p className="text-foreground/70">
                    Aucun événement programmé pour le moment.
                  </p>
                </CardContent>
              </Card>
            )}
          </section>
        </div>
      </div>

      <Footer />
    </main>
  );
}
