import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

const ConditionsGenerales = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 bg-gradient-subtle">
        <div className="container mx-auto px-6 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="bg-card rounded-3xl shadow-elegant p-8 md:p-12">
              <div className="mb-8">
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                  Conditions Générales d'Utilisation
                </h1>
                <p className="text-muted-foreground">
                  Éditeur : SAUSH SARL, société de droit ivoirien
                </p>
                <p className="text-muted-foreground">
                  Date de mise en vigueur : 01/12/2025
                </p>
              </div>

              <ScrollArea className="h-[600px] pr-4">
                <div className="space-y-8">
                  <section>
                    <h2 className="text-2xl font-bold text-foreground mb-4">Article 1 : Objet</h2>
                    <p className="text-foreground/80 leading-relaxed">
                      Les présentes Conditions Générales d'Utilisation (ci-après « CGU ») ont pour objet de définir les conditions juridiques et techniques d'accès et d'utilisation des services de l'application MAALEEK (ci-après « l'Application »). L'Application permet aux Utilisateurs de créer, gérer et partager des cartes de visite numériques, de gérer leur réseau de contacts professionnels, et d'utiliser des fonctionnalités avancées telles que le suivi des interactions et la relance automatisée.
                    </p>
                    <p className="text-foreground/80 leading-relaxed mt-4">
                      En accédant ou en utilisant l'Application, l'Utilisateur déclare avoir pris connaissance des présentes CGU et les accepte sans réserve. À défaut d'acceptation, l'Utilisateur est prié de ne pas utiliser l'Application.
                    </p>
                  </section>

                  <Separator />

                  <section>
                    <h2 className="text-2xl font-bold text-foreground mb-4">Article 2 : Capacité et Acceptation</h2>
                    <p className="text-foreground/80 leading-relaxed">
                      L'utilisation de l'Application est réservée aux personnes physiques majeures et capables de contracter en droit ivoirien. Les mineurs âgés d'au moins quinze (15) ans peuvent utiliser l'Application sous la supervision et avec l'accord exprès de leur représentant légal, qui est réputé avoir accepté les présentes CGU en leur nom.
                    </p>
                    <p className="text-foreground/80 leading-relaxed mt-4">
                      La matérialisation de l'acceptation est réalisée par la case à cocher lors de la création du compte. Cette acceptation a la même valeur probante qu'une signature manuscrite.
                    </p>
                  </section>

                  <Separator />

                  <section>
                    <h2 className="text-2xl font-bold text-foreground mb-4">Article 3 : Création et Responsabilité du Compte</h2>
                    <p className="text-foreground/80 leading-relaxed mb-4">
                      L'accès aux fonctionnalités de l'Application nécessite la création d'un compte personnel. L'Utilisateur s'engage à fournir des informations exactes, sincères et à jour, et à les modifier sans délai dans son espace personnel en cas de changement.
                    </p>
                    <p className="text-foreground/80 leading-relaxed mb-3">L'Utilisateur est seul responsable :</p>
                    <ul className="list-disc list-inside space-y-2 text-foreground/80 ml-4">
                      <li>De la véracité et de l'exactitude des informations fournies.</li>
                      <li>De la confidentialité de ses identifiants de connexion (nom d'utilisateur et mot de passe).</li>
                      <li>De l'utilisation qui est faite de son compte, par lui-même ou par tout tiers ayant accédé à l'Application grâce à ses identifiants.</li>
                    </ul>
                    <p className="text-foreground/80 leading-relaxed mt-4">
                      L'Utilisateur s'engage à informer immédiatement SAUSH SARL, à l'adresse support@maaleek.com, de toute utilisation non autorisée de son compte ou de toute autre violation de la sécurité dont il aurait connaissance.
                    </p>
                  </section>

                  <Separator />

                  <section>
                    <h2 className="text-2xl font-bold text-foreground mb-4">Article 4 : Modalités Financières et Abonnement</h2>
                    <p className="text-foreground/80 leading-relaxed mb-4">
                      L'accès à certaines fonctionnalités de l'Application est conditionné au paiement d'un abonnement mensuel dont le prix est de Deux Mille (2 000) FCFA TTC.
                    </p>
                    
                    <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">4.1. Modalités de Paiement</h3>
                    <p className="text-foreground/80 leading-relaxed">
                      Le paiement s'effectue par des moyens électroniques sécurisés tels que le Mobile Money ou la carte bancaire, via les plateformes de paiement agréées.
                    </p>

                    <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">4.2. Renouvellement et Résiliation</h3>
                    <p className="text-foreground/80 leading-relaxed">
                      L'abonnement est conclu pour une durée d'un (1) mois et est tacitement reconduit pour une même durée, sauf résiliation par l'une des parties. L'Utilisateur peut résilier son abonnement à tout moment depuis les paramètres de son compte, avant la date de renouvellement.
                    </p>

                    <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">4.3. Absence de Remboursement</h3>
                    <p className="text-foreground/80 leading-relaxed">
                      Aucun remboursement, même partiel, ne sera accordé pour une période d'abonnement déjà entamée, quel que soit le motif de la résiliation (utilisation partielle, suppression du compte, etc.).
                    </p>

                    <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">4.4. Suspension pour Défaut de Paiement</h3>
                    <p className="text-foreground/80 leading-relaxed">
                      Maaleek se réserve le droit de suspendre ou de résilier de plein droit l'accès aux services payants en cas de défaut de paiement à la date d'échéance, après envoi d'une mise en demeure restée sans effet.
                    </p>
                  </section>

                  <Separator />

                  <section>
                    <h2 className="text-2xl font-bold text-foreground mb-4">Article 5 : Propriété Intellectuelle</h2>
                    <p className="text-foreground/80 leading-relaxed">
                      L'Application, son contenu (textes, graphismes, logos, icônes) et son code source sont la propriété exclusive de SAUSH SARL et sont protégés par le droit d'auteur et le droit des marques en vigueur en République de Côte d'Ivoire et par les conventions internationales.
                    </p>
                    <p className="text-foreground/80 leading-relaxed mt-4">
                      SAUSH SARL concède à l'Utilisateur une licence personnelle, non exclusive, non transférable et révocable pour utiliser l'Application Maaleek conformément à sa destination et aux présentes CGU. Toute reproduction, représentation, adaptation ou exploitation, partielle ou totale, des éléments de l'Application par quelque procédé que ce soit, sans l'autorisation écrite et préalable de SAUSH SARL, est strictement interdite.
                    </p>
                  </section>

                  <Separator />

                  <section>
                    <h2 className="text-2xl font-bold text-foreground mb-4">Article 6 : Protection des Données Personnelles</h2>
                    <p className="text-foreground/80 leading-relaxed">
                      SAUSH SARL, en sa qualité de responsable de traitement, s'engage à protéger la vie privée et les données personnelles des Utilisateurs conformément à la loi ivoirienne n°2013-450 du 19 juin 2013 relative à la protection des données à caractère personnel et au Règlement Général sur la Protection des Données (RGPD) pour les ressortissants concernés.
                    </p>
                    <p className="text-foreground/80 leading-relaxed mt-4">
                      L'Utilisateur dispose d'un droit d'accès, de rectification, d'opposition et de suppression de ses données personnelles. Il peut exercer ces droits en contactant le Délégué à la Protection des Données (DPO) à l'adresse : dpo@maaleek.ci.
                    </p>
                  </section>

                  <Separator />

                  <section>
                    <h2 className="text-2xl font-bold text-foreground mb-4">Article 7 : Obligations et Responsabilités de l'Utilisateur</h2>
                    <p className="text-foreground/80 leading-relaxed">
                      L'Utilisateur s'engage à utiliser l'Application de manière loyale, dans le respect des présentes CGU et de la législation en vigueur. L'Utilisateur est seul responsable des contenus (textes, images, coordonnées) qu'il publie sur sa carte de visite numérique et partage via l'Application.
                    </p>
                    <p className="text-foreground/80 leading-relaxed mt-4">
                      SAUSH SARL ne peut être tenue pour responsable des contenus partagés par les Utilisateurs.
                    </p>
                  </section>

                  <Separator />

                  <section>
                    <h2 className="text-2xl font-bold text-foreground mb-4">Article 8 : Responsabilité de l'Éditeur</h2>
                    <p className="text-foreground/80 leading-relaxed">
                      SAUSH SARL s'efforce de maintenir l'Application accessible 24 heures sur 24 et 7 jours sur 7. Cependant, sa responsabilité ne saurait être engagée en cas d'indisponibilité temporaire ou définitive de l'Application pour des raisons indépendantes de sa volonté.
                    </p>
                    <p className="text-foreground/80 leading-relaxed mt-4">
                      SAUSH SARL fournit l'Application en l'état. En aucun cas, SAUSH SARL ne pourra être tenue responsable des dommages indirects tels que la perte de données, la perte de clientèle, ou tout autre préjudice financier ou commercial.
                    </p>
                  </section>

                  <Separator />

                  <section>
                    <h2 className="text-2xl font-bold text-foreground mb-4">Article 9 : Durée - Résiliation</h2>
                    <p className="text-foreground/80 leading-relaxed">
                      Le présent contrat est conclu pour une durée indéterminée. L'Utilisateur peut résilier son compte à tout moment depuis l'interface de l'Application. SAUSH SARL se réserve le droit de suspendre ou de résilier immédiatement le compte de tout Utilisateur en cas de manquement grave aux présentes CGU.
                    </p>
                  </section>

                  <Separator />

                  <section>
                    <h2 className="text-2xl font-bold text-foreground mb-4">Article 10 : Force Majeure</h2>
                    <p className="text-foreground/80 leading-relaxed">
                      Aucune des parties ne sera tenue pour responsable d'un retard ou d'une inexécution de ses obligations résultant d'un cas de force majeure tel que défini par la jurisprudence ivoirienne et internationale.
                    </p>
                  </section>

                  <Separator />

                  <section>
                    <h2 className="text-2xl font-bold text-foreground mb-4">Article 11 : Droit Applicable et Règlement des Litiges</h2>
                    <p className="text-foreground/80 leading-relaxed">
                      Les présentes CGU sont régies par le droit ivoirien. Tout litige relatif à l'interprétation ou à l'exécution des présentes CGU sera soumis à la compétence exclusive des tribunaux d'Abidjan, Côte d'Ivoire.
                    </p>
                  </section>
                </div>
              </ScrollArea>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ConditionsGenerales;
