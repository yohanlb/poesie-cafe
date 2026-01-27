import Footer from "@components/Footer";
import EventCard from "@components/EventCard";
import BackLink from "@components/BackLink";
import {
  formatDate,
  groupEventsByDate,
  sortDatesChronologically,
} from "@lib/event-utils";
import { Card, CardContent } from "@components/ui/card";
import { Badge } from "@components/ui/badge";
import { getEventsFromAirtable } from "@lib/airtable-service";
import { montserrat } from "@lib/fonts";
import Link from "next/link";

export default async function Evenements() {
  const events = await getEventsFromAirtable();
  const eventsByDate = groupEventsByDate(events);
  const sortedDates = sortDatesChronologically(Object.keys(eventsByDate));

  return (
    <main className="min-h-svh justify-between flex flex-col bg-background">
      <div className="w-full max-w-3xl mx-auto px-4 sm:px-8">
        <BackLink href="/" />

        <div className="flex-grow flex flex-col items-center justify-center py-4">
          {/* Page Title */}
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl lg:text-5xl text-foreground/95 tracking-wide">
              Agenda
            </h1>
          </div>

          {/* FAQ Link */}
          <h3
            className={`text-center mb-8 ${montserrat.className} text-base md:text-lg text-foreground/70`}
          >
            Vous souhaitez animer un atelier ? Consultez notre{" "}
            <Link
              href="/faq"
              className="hover:text-foreground/90 transition-colors underline underline-offset-4"
            >
              FAQ
            </Link>
          </h3>

          {/* Events Timeline */}
          <div className={`w-full space-y-12 ${montserrat.className}`}>
            <section>
              {sortedDates.length > 0 ? (
                <div className="space-y-8">
                  {sortedDates.map((dateKey) => (
                    <div key={dateKey} className="space-y-4">
                      {/* Date Header */}
                      <div className="text-left mb-3">
                        <Badge
                          variant="secondary"
                          className="text-xl px-4 py-2 bg-white border-gray-200 text-gray-900 font-normal"
                        >
                          {formatDate(new Date(dateKey))}
                        </Badge>
                      </div>

                      {/* Events for this date */}
                      <div className="space-y-6">
                        {eventsByDate[dateKey].map((event) => (
                          <EventCard key={event.id} event={event} />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <Card className="bg-white border-gray-200">
                  <CardContent className="p-8 text-center">
                    <p className="text-lg text-gray-600">
                      Aucun événement programmé pour le moment.
                    </p>
                  </CardContent>
                </Card>
              )}
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
