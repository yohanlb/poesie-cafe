import type { Metadata } from "next";
import BackLink from "@components/BackLink";
import Footer from "@components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@components/ui/accordion";
import { montserrat } from "@lib/fonts";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Questions fréquentes sur les ateliers à Poésie Coffee - Horaires, tarifs, réservations et informations pratiques",
  keywords: [
    "Poésie Coffee",
    "FAQ",
    "ateliers",
    "questions fréquentes",
    "réservations",
    "horaires",
  ],
};

export default function FAQ() {
  return (
    <main className="min-h-svh justify-between flex flex-col bg-[var(--background-blue)] text-white">
      <div className="w-full max-w-3xl mx-auto px-4 sm:px-8">
        <BackLink href="/agenda" />

        <div
          className={`flex-grow flex flex-col items-center justify-center py-8 ${montserrat.className}`}
        >
          {/* Page Title */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-white tracking-wide">
              FAQ
            </h1>
          </div>

          {/* FAQ Accordion */}
          <div className="w-full max-w-2xl">
            <Accordion type="single" collapsible className="w-full space-y-2">
              {/* Horaires possibles */}
              <AccordionItem value="horaires" className="border-white/20">
                <AccordionTrigger className="text-white hover:text-white/80 text-left text-lg md:text-xl [&>svg]:text-white/70">
                  Horaires possibles
                </AccordionTrigger>
                <AccordionContent className="text-white/90 text-base md:text-lg leading-relaxed">
                  <ul className="space-y-3 list-disc list-inside">
                    <li>
                      <strong>En semaine :</strong> du mercredi au vendredi,
                      après la fermeture du café, à partir de 18h30
                    </li>
                    <li>
                      <strong>Le week-end :</strong> sur les horaires
                      d&apos;ouverture du café : de 10h à 18h (en général
                      11h–13h ou 15h–17h pour un atelier de 2h)
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              {/* Inclus */}
              <AccordionItem value="inclus" className="border-white/20">
                <AccordionTrigger className="text-white hover:text-white/80 text-left text-lg md:text-xl [&>svg]:text-white/70">
                  Inclus
                </AccordionTrigger>
                <AccordionContent className="text-white/90 text-base md:text-lg leading-relaxed">
                  <p>
                    Pour chaque participant·e, une boisson au choix est incluse
                    dans le prix total de l&apos;atelier.
                  </p>
                </AccordionContent>
              </AccordionItem>

              {/* Commission */}
              <AccordionItem value="commission" className="border-white/20">
                <AccordionTrigger className="text-white hover:text-white/80 text-left text-lg md:text-xl [&>svg]:text-white/70">
                  Commission
                </AccordionTrigger>
                <AccordionContent className="text-white/90 text-base md:text-lg leading-relaxed">
                  <ul className="space-y-3 list-disc list-inside">
                    <li>
                      Poésie prend 30 % de commission sur le prix total de
                      l&apos;atelier.
                    </li>
                    <li>
                      Si l&apos;atelier se veut gratuit, la consommation sur
                      place est obligatoire pour les participant·es.
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              {/* Nombre minimum de participant·es */}
              <AccordionItem value="nombre-minimum" className="border-white/20">
                <AccordionTrigger className="text-white hover:text-white/80 text-left text-lg md:text-xl [&>svg]:text-white/70">
                  Nombre minimum de participant·es
                </AccordionTrigger>
                <AccordionContent className="text-white/90 text-base md:text-lg leading-relaxed">
                  <div className="space-y-4">
                    <div>
                      <p className="font-medium mb-2">
                        En semaine du mercredi au vendredi (hors horaires
                        d&apos;ouverture du café) :
                      </p>
                      <ul className="space-y-2 list-disc list-inside ml-4">
                        <li>
                          Minimum de 4 participant·es pour un atelier entre 25 €
                          et 30 €
                        </li>
                        <li>
                          Minimum de 3 participant·es pour un atelier entre 35 €
                          et 55 €
                        </li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-medium mb-2">
                        Le week-end (pendant les horaires d&apos;ouverture du
                        café) :
                      </p>
                      <ul className="space-y-2 list-disc list-inside ml-4">
                        <li>
                          Minimum de 2 participant·es, quel que soit le tarif de
                          l&apos;atelier.
                        </li>
                      </ul>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Réservations & encaissements */}
              <AccordionItem value="reservations" className="border-white/20">
                <AccordionTrigger className="text-white hover:text-white/80 text-left text-lg md:text-xl [&>svg]:text-white/70">
                  Réservations & encaissements
                </AccordionTrigger>
                <AccordionContent className="text-white/90 text-base md:text-lg leading-relaxed">
                  <div className="space-y-4">
                    <p>
                      La gestion des réservations et des paiements est à votre
                      charge. Poésie s&apos;occupe ensuite de mettre toutes les
                      informations sur l&apos;agenda du site.
                    </p>
                    <div>
                      <p className="font-medium mb-2">
                        Les réservations peuvent se faire :
                      </p>
                      <ul className="space-y-2 list-disc list-inside ml-4">
                        <li>soit via votre Instagram (message direct)</li>
                        <li>
                          soit via un lien de billetterie / réservation si vous
                          en utilisez un.
                        </li>
                      </ul>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Communication */}
              <AccordionItem value="communication" className="border-white/20">
                <AccordionTrigger className="text-white hover:text-white/80 text-left text-lg md:text-xl [&>svg]:text-white/70">
                  Communication
                </AccordionTrigger>
                <AccordionContent className="text-white/90 text-base md:text-lg leading-relaxed">
                  <ul className="space-y-3 list-disc list-inside">
                    <li>
                      Poésie s&apos;occupe de la communication globale des
                      ateliers, avec notamment un récapitulatif chaque mois des
                      ateliers du mois suivant, sous forme de carrousel
                      Instagram.
                    </li>
                    <li>
                      Si vous avez déjà un visuel prêt, vous pouvez bien sûr
                      l&apos;envoyer directement.
                    </li>
                    <li>
                      Sinon, il faudra simplement envoyer quelques photos (de
                      votre travail, d&apos;un ancien atelier ou
                      d&apos;ambiance) afin de créer un visuel.
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              {/* Conseils pratiques */}
              <AccordionItem value="conseils" className="border-white/20">
                <AccordionTrigger className="text-white hover:text-white/80 text-left text-lg md:text-xl [&>svg]:text-white/70">
                  Conseils pratiques
                </AccordionTrigger>
                <AccordionContent className="text-white/90 text-base md:text-lg leading-relaxed">
                  <ul className="space-y-3 list-disc list-inside">
                    <li>
                      Indiquer dans le message récapitulatif envoyé aux
                      participant·es que toute annulation doit être faite au
                      minimum 24h avant l&apos;atelier, afin de pouvoir
                      éventuellement trouver d&apos;autres personnes
                      intéressées.
                    </li>
                    <li>
                      S&apos;il n&apos;y a pas de volonté de faire payer la
                      totalité de l&apos;atelier en amont, il est aussi
                      recommandé de demander un acompte, ce qui permet
                      d&apos;éviter certaines annulations de dernière minute.
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
