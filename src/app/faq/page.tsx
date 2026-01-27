import type { Metadata } from "next";
import BackLink from "@components/BackLink";
import Footer from "@components/Footer";
import { Accordion } from "@components/ui/accordion";
import FAQAccordionItem from "@components/FAQAccordionItem";
import { montserrat } from "@lib/fonts";

export const metadata: Metadata = {
  title: "Poésie - FAQ",
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

export default function FAQ(): React.JSX.Element {
  return (
    <main className="min-h-svh justify-between flex flex-col bg-[var(--background-blue)] text-white">
      <div className="w-full max-w-3xl mx-auto px-4 sm:px-8">
        <BackLink href="/agenda" />

        <div
          className={`flex-grow flex flex-col items-center justify-center py-8 ${montserrat.className}`}
        >
          <div className="text-center mb-16 space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-white tracking-wide">
              FAQ
            </h1>
            <h2 className="text-xl md:text-3xl text-white/80">
              Animer un atelier chez Poésie
            </h2>
          </div>

          <div className="w-full max-w-2xl">
            <Accordion type="single" collapsible className="w-full space-y-2">
              <FAQAccordionItem value="horaires" title="Horaires possibles">
                <ul className="space-y-3 list-disc list-inside">
                  <li>
                    <strong>En semaine :</strong> du mercredi au vendredi, après
                    la fermeture du café, à partir de 18:30 jusqu&apos;à 21h
                  </li>
                  <li>
                    <strong>Le week-end :</strong> sur les horaires
                    d&apos;ouverture du café : de 10h à 18h (en général 11h–13h
                    ou 15h–17h pour un atelier de 2h)
                  </li>
                </ul>
              </FAQAccordionItem>

              <FAQAccordionItem value="inclus" title="Inclus">
                <p>
                  Pour chaque participant·e, une boisson au choix est incluse
                  dans le prix total de l&apos;atelier.
                </p>
              </FAQAccordionItem>

              <FAQAccordionItem value="commission" title="Commission">
                <ul className="space-y-3 list-disc list-inside">
                  <li>
                    Poésie prend 30 % de commission sur le prix total de
                    l&apos;atelier.
                  </li>
                  <li>
                    Si l&apos;atelier se veut gratuit, la consommation sur place
                    est obligatoire pour les participant·es.
                  </li>
                </ul>
              </FAQAccordionItem>

              <FAQAccordionItem
                value="nombre-minimum"
                title="Nombre minimum de participant·es"
              >
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
                        et 70 €
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
              </FAQAccordionItem>

              <FAQAccordionItem
                value="reservations"
                title="Réservations & encaissements"
              >
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
                        soit via un lien de billetterie / réservation si vous en
                        utilisez un.
                      </li>
                    </ul>
                  </div>
                </div>
              </FAQAccordionItem>

              <FAQAccordionItem value="communication" title="Communication">
                <ul className="space-y-3 list-disc list-inside">
                  <li>
                    Poésie s&apos;occupe de la communication globale des
                    ateliers, avec notamment un récapitulatif chaque mois des
                    ateliers du mois suivant, sous forme de carrousel Instagram.
                  </li>
                  <li>
                    Si vous avez déjà un visuel prêt, vous pouvez bien sûr
                    l&apos;envoyer directement.
                  </li>
                  <li>
                    Sinon, il faudra simplement envoyer quelques photos (de
                    votre travail, d&apos;un ancien atelier ou d&apos;ambiance)
                    afin de créer un visuel.
                  </li>
                </ul>
              </FAQAccordionItem>

              <FAQAccordionItem value="conseils" title="Conseils pratiques">
                <ul className="space-y-3 list-disc list-inside">
                  <li>
                    Indiquer dans le message récapitulatif envoyé aux
                    participant·es que toute annulation doit être faite au
                    minimum 24h avant l&apos;atelier, afin de pouvoir
                    éventuellement trouver d&apos;autres personnes intéressées.
                  </li>
                  <li>
                    S&apos;il n&apos;y a pas de volonté de faire payer la
                    totalité de l&apos;atelier en amont, il est aussi recommandé
                    de demander un acompte, ce qui permet d&apos;éviter
                    certaines annulations de dernière minute.
                  </li>
                </ul>
              </FAQAccordionItem>
            </Accordion>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
