import Footer from "../../components/Footer";
import EventCard from "../../components/EventCard";
import { events } from "../../data/events";
import {
  formatDate,
  groupEventsByDate,
  sortDatesChronologically,
} from "../../lib/event-utils";

export default function Evenements() {
  const eventsByDate = groupEventsByDate(events);
  const sortedDates = sortDatesChronologically(Object.keys(eventsByDate));

  return (
    <main className="min-h-svh justify-between flex flex-col">
      {/* Future Navbar */}
      <nav className="h-18 w-full"></nav>

      <div className="flex-grow flex flex-col items-center justify-center mx-4 sm:mx-8">
        {/* Page Title */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-4">
            PROCHAINS ATELIERS / ÉVÉNEMENTS
          </h1>
        </div>

        <div className="h-8 md:h-10"></div>

        {/* Reservation Info */}
        <div className="text-center mb-8">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 max-w-2xl mx-auto">
            <p className="text-blue-800 font-medium">
              📱 Pour réserver un atelier, contactez directement
              l&apos;animateur sur Instagram
            </p>
          </div>
        </div>

        <div className="h-8 md:h-10"></div>

        {/* Events Timeline */}
        <div className="w-full max-w-2xl space-y-12">
          <section>
            {sortedDates.length > 0 ? (
              <div className="space-y-8">
                {sortedDates.map((date) => (
                  <div key={date} className="space-y-4">
                    {/* Date Header */}
                    <div className="text-left mb-6">
                      <h2 className="text-xl md:text-2xl font-semibold text-gray-800 bg-gray-100 px-4 py-2 rounded-lg inline-block">
                        {formatDate(date)}
                      </h2>
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
              <></>
            )}
          </section>
        </div>
      </div>

      <Footer />
    </main>
  );
}
