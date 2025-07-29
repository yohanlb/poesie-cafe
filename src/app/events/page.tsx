import Footer from "../../components/Footer";
import EventCard from "../../components/EventCard";
import { events } from "../../data/events";

export default function Evenements() {
  return (
    <main className="min-h-svh justify-between flex flex-col">
      {/* Future Navbar */}
      <nav className="h-18 w-full"></nav>

      {/* Header */}
      <div className="flex-grow flex flex-col items-center justify-center mx-4 sm:mx-8">
        {/* Page Title */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-4">
            PROCHAINS ATELIERS / ÉVÉNEMENTS
          </h1>
        </div>

        {/* Separator */}
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

        {/* Separator */}
        <div className="h-8 md:h-10"></div>

        {/* Events Content */}
        <div className="w-full max-w-2xl space-y-12">
          {/* All Events */}
          <section className="text-center">
            {events.length > 0 ? (
              <div className="space-y-6">
                {events.map((event) => (
                  <EventCard key={event.id} event={event} />
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
