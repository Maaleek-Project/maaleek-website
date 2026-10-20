import LegalLayout from "./LegalLayout";
import { site, telHref } from "@/config/site";

const { publisher, contact } = site;

const LegalNotice = () => (
  <LegalLayout
    title="Mentions légales"
    intro={
      <p>
        Les présentes mentions légales s'appliquent au site {site.url.replace("https://", "")} et à
        l'application mobile Maaleek.
      </p>
    }
    sections={[
      {
        title: "Éditeur",
        content: (
          <ul>
            <li>
              <strong>Raison sociale :</strong> {publisher.company}
            </li>
            <li>
              <strong>Siège :</strong> {publisher.city}
            </li>
            {publisher.rccm && (
              <li>
                <strong>RCCM :</strong> {publisher.rccm}
              </li>
            )}
            {publisher.director && (
              <li>
                <strong>Directeur de la publication :</strong> {publisher.director}
              </li>
            )}
            <li>
              <strong>E-mail :</strong> <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </li>
            <li>
              <strong>Téléphone :</strong>{" "}
              {contact.phones.map((p, i) => (
                <span key={p}>
                  {i > 0 && " / "}
                  <a href={telHref(p)}>{p}</a>
                </span>
              ))}
            </li>
          </ul>
        ),
      },
      ...(publisher.host
        ? [{ title: "Hébergement", content: <p>{publisher.host}</p> }]
        : []),
      {
        title: "Propriété intellectuelle",
        content: (
          <p>
            La marque Maaleek, son logo, l'application, le site ainsi que l'ensemble de leurs
            contenus (textes, visuels, interfaces, code) sont la propriété exclusive de{" "}
            {publisher.company}. Toute reproduction, représentation ou diffusion, totale ou
            partielle, sans autorisation écrite préalable est interdite.
          </p>
        ),
      },
      {
        title: "Données personnelles",
        content: (
          <p>
            Le traitement de vos données personnelles est décrit dans notre{" "}
            <a href="/politique-confidentialite">politique de confidentialité</a>, conformément à la
            loi ivoirienne n° 2013-450 du 19 juin 2013 relative à la protection des données à
            caractère personnel.
          </p>
        ),
      },
      {
        title: "Responsabilité",
        content: (
          <p>
            {publisher.company} s'efforce de fournir des informations exactes et à jour, sans
            pouvoir garantir l'absence d'erreur ou d'interruption. Les informations publiées sur
            les cartes de visite et par les entreprises relèvent de la responsabilité de leurs
            auteurs.
          </p>
        ),
      },
      {
        title: "Contact",
        content: (
          <p>
            Pour toute question, écrivez-nous à <a href={`mailto:${contact.email}`}>{contact.email}</a>.
          </p>
        ),
      },
    ]}
  />
);

export default LegalNotice;
