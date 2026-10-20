import LegalLayout from "./LegalLayout";
import { site } from "@/config/site";

const { publisher, contact } = site;
const mail = <a href={`mailto:${contact.email}`}>{contact.email}</a>;

const PrivacyPolicy = () => (
  <LegalLayout
    title="Politique de confidentialité"
    intro={
      <p>
        Chez Maaleek, vos informations professionnelles vous appartiennent. Cette politique
        explique quelles données nous collectons, pourquoi, et comment vous gardez le contrôle.
      </p>
    }
    sections={[
      {
        title: "Responsable du traitement",
        content: (
          <p>
            Les données sont traitées par {publisher.company}, {publisher.city}, éditeur de
            Maaleek, dans le respect de la loi n° 2013-450 du 19 juin 2013 relative à la protection
            des données à caractère personnel. Contact : {mail}.
          </p>
        ),
      },
      {
        title: "Données collectées",
        content: (
          <ul>
            <li>
              <strong>Compte :</strong> nom, prénom, civilité, pays, numéro de téléphone et/ou
              adresse e-mail, mot de passe (stocké de manière chiffrée).
            </li>
            <li>
              <strong>Carte de visite :</strong> photo, fonction, entreprise, coordonnées
              professionnelles et liens vers vos réseaux sociaux, tels que vous les renseignez.
            </li>
            <li>
              <strong>Utilisation :</strong> demandes d'échange, cartes reçues et favoris,
              consultations de cartes et de publications d'entreprises, abonnements aux entreprises.
            </li>
            <li>
              <strong>Technique :</strong> identifiant de notification de l'appareil, préférences de
              langue et de thème.
            </li>
          </ul>
        ),
      },
      {
        title: "Finalités",
        content: (
          <ul>
            <li>Créer et sécuriser votre compte (vérification par code à usage unique).</li>
            <li>Afficher et partager votre carte de visite avec les personnes que vous autorisez.</li>
            <li>Gérer vos échanges, votre carnet de contacts et vos notifications.</li>
            <li>Permettre aux entreprises de gérer leurs collaborateurs et leurs publications.</li>
            <li>Produire des statistiques de consultation et améliorer le service.</li>
          </ul>
        ),
      },
      {
        title: "Partage des données",
        content: (
          <>
            <p>
              Votre carte n'est visible que par les personnes avec qui vous la partagez ou dont
              vous acceptez la demande d'échange. Si vous êtes rattaché à une entreprise cliente de
              Maaleek Business, celle-ci a accès aux informations nécessaires à la gestion de ses
              collaborateurs.
            </p>
            <p>
              Nous faisons appel à des prestataires techniques, notamment Google Firebase pour
              l'envoi des notifications. Vos données ne sont jamais vendues.
            </p>
          </>
        ),
      },
      {
        title: "Autorisations de l'appareil",
        content: (
          <ul>
            <li>
              <strong>Appareil photo :</strong> scanner les QR codes Maaleek et prendre votre photo
              de profil.
            </li>
            <li>
              <strong>Galerie :</strong> choisir une photo de profil existante.
            </li>
            <li>
              <strong>Notifications :</strong> vous informer des demandes et messages reçus.
            </li>
          </ul>
        ),
      },
      {
        title: "Conservation",
        content: (
          <p>
            Vos données sont conservées tant que votre compte est actif. À la suppression de votre
            compte, elles sont effacées ou anonymisées, sauf obligation légale de conservation.
          </p>
        ),
      },
      {
        title: "Vos droits",
        content: (
          <p>
            Vous disposez d'un droit d'accès, de rectification, d'opposition et de suppression de
            vos données. La plupart des informations sont modifiables directement dans
            l'application ; pour toute autre demande, écrivez à {mail}. Vous pouvez également
            saisir l'Autorité de Régulation des Télécommunications/TIC de Côte d'Ivoire (ARTCI).
          </p>
        ),
      },
      {
        title: "Sécurité",
        content: (
          <p>
            Nous mettons en œuvre des mesures techniques et organisationnelles adaptées pour
            protéger vos données contre tout accès non autorisé, perte ou altération.
          </p>
        ),
      },
      {
        title: "Modifications",
        content: (
          <p>
            Cette politique peut évoluer. En cas de changement important, vous en serez informé
            dans l'application.
          </p>
        ),
      },
    ]}
  />
);

export default PrivacyPolicy;
