import LegalLayout from "./LegalLayout";
import { site } from "@/config/site";

const { publisher, contact } = site;
const mail = <a href={`mailto:${contact.email}`}>{contact.email}</a>;

const Terms = () => (
  <LegalLayout
    title="Conditions générales"
    intro={
      <p>
        Les présentes conditions générales d'utilisation encadrent l'accès et l'usage de
        l'application Maaleek, éditée par {publisher.company}. En créant un compte, vous les
        acceptez sans réserve.
      </p>
    }
    sections={[
      {
        title: "Objet du service",
        content: (
          <p>
            Maaleek permet de créer une carte de visite digitale, de l'échanger par QR code, e-mail
            ou numéro de téléphone, de gérer ses contacts professionnels et de suivre les
            entreprises de son choix. Les entreprises peuvent, via Maaleek Business, gérer leurs
            collaborateurs et diffuser des publications.
          </p>
        ),
      },
      {
        title: "Inscription et compte",
        content: (
          <ul>
            <li>L'inscription est confirmée par un code à usage unique envoyé à l'utilisateur.</li>
            <li>Vous vous engagez à fournir des informations exactes et à les tenir à jour.</li>
            <li>Vous êtes responsable de la confidentialité de votre mot de passe.</li>
          </ul>
        ),
      },
      {
        title: "Utilisation acceptable",
        content: (
          <>
            <p>Il est interdit d'utiliser Maaleek pour :</p>
            <ul>
              <li>usurper l'identité d'une personne ou d'une entreprise ;</li>
              <li>publier des contenus illicites, trompeurs, injurieux ou portant atteinte aux droits d'autrui ;</li>
              <li>collecter les données d'autres utilisateurs à des fins de prospection non sollicitée ;</li>
              <li>porter atteinte au bon fonctionnement ou à la sécurité du service.</li>
            </ul>
          </>
        ),
      },
      {
        title: "Échanges de cartes",
        content: (
          <p>
            Toute demande d'accès à une carte est soumise à l'accord de son titulaire. Les
            informations reçues ne doivent être utilisées que dans le cadre de la relation
            professionnelle pour laquelle elles ont été partagées.
          </p>
        ),
      },
      {
        title: "Offres et tarifs",
        content: (
          <p>
            Le téléchargement et l'utilisation de base de Maaleek sont gratuits. Certaines
            fonctionnalités ou offres, notamment pour les entreprises, peuvent être payantes ;
            leurs conditions sont présentées avant toute souscription.
          </p>
        ),
      },
      {
        title: "Contenus des entreprises",
        content: (
          <p>
            Les entreprises sont seules responsables des publications qu'elles diffusent.{" "}
            {publisher.company} se réserve le droit de retirer tout contenu contraire aux présentes
            conditions.
          </p>
        ),
      },
      {
        title: "Suspension et résiliation",
        content: (
          <p>
            Vous pouvez cesser d'utiliser Maaleek à tout moment et demander la suppression de votre
            compte à {mail}. En cas de manquement aux présentes conditions, {publisher.company}{" "}
            peut suspendre ou supprimer un compte.
          </p>
        ),
      },
      {
        title: "Responsabilité",
        content: (
          <p>
            {publisher.company} met tout en œuvre pour assurer la disponibilité du service, sans
            garantie d'absence d'interruption. Sa responsabilité ne saurait être engagée pour
            l'usage fait par les utilisateurs des informations échangées.
          </p>
        ),
      },
      {
        title: "Droit applicable",
        content: (
          <p>
            Les présentes conditions sont régies par le droit ivoirien. À défaut de résolution
            amiable, tout litige relève des juridictions compétentes d'Abidjan.
          </p>
        ),
      },
    ]}
  />
);

export default Terms;
