import Footer from "@components/Footer";
import EventCard from "@components/EventCard";
import Navbar from "@components/Navbar";
import {
  formatDate,
  groupEventsByDate,
  sortDatesChronologically,
} from "@lib/event-utils";
import { Card, CardContent } from "@components/ui/card";
import { Badge } from "@components/ui/badge";
import { getEventsFromAirtable } from "@lib/airtable-service";

export default async function Evenements() {
  const events = await getEventsFromAirtable();
  const eventsByDate = groupEventsByDate(events);
  const sortedDates = sortDatesChronologically(Object.keys(eventsByDate));

  return (
    <main className="min-h-svh justify-between flex flex-col bg-background">
      <div className="w-full max-w-3xl mx-auto px-4 sm:px-8">
        <Navbar />

        <div className="flex-grow flex flex-col items-center justify-center py-4">
          {/* Page Title */}
          <div className="text-center mb-8">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground/95 tracking-wide text-white">
              Agenda
            </h1>
          </div>

          {/* Events Timeline */}
          <div className="w-full space-y-12">
            <section>
              {sortedDates.length > 0 ? (
                <div className="space-y-8">
                  {sortedDates.map((dateKey) => (
                    <div key={dateKey} className="space-y-4">
                      {/* Date Header */}
                      <div className="text-left mb-3">
                        <Badge
                          variant="secondary"
                          className="text-lg px-4 py-2 bg-white border-gray-200 text-gray-900 font-normal"
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
                    <p className="text-gray-600">
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
