import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Shield, Lock, Database, Eye, Clock, UserCheck } from "lucide-react";

const PolitiqueConfidentialite = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 bg-gradient-subtle">
        <div className="container mx-auto px-6 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="bg-card rounded-3xl shadow-elegant p-8 md:p-12">
              <div className="mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-2xl mb-6">
                  <Shield className="h-8 w-8 text-accent" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                  Politique de Confidentialité
                </h1>
                <p className="text-muted-foreground">
                  Date de mise en vigueur : 01/12/2025
                </p>
              </div>

              <ScrollArea className="h-[600px] pr-4">
                <div className="space-y-8">
                  <section>
                    <h2 className="text-2xl font-bold text-foreground mb-4">1. Introduction</h2>
                    <p className="text-foreground/80 leading-relaxed">
                      SAUSH SARL, éditeur de l'application Maaleek, accorde une importance capitale à la protection de vos données personnelles. La présente Politique de Confidentialité vous informe de manière transparente sur la collecte, l'utilisation, le partage et la protection de vos données personnelles.
                    </p>
                  </section>

                  <Separator />

                  <section>
                    <h2 className="text-2xl font-bold text-foreground mb-4">2. Responsable du Traitement</h2>
                    <div className="bg-accent/5 p-6 rounded-xl">
                      <p className="text-foreground/80 leading-relaxed mb-2">
                        <strong>Raison sociale :</strong> SAUSH SARL
                      </p>
                      <p className="text-foreground/80 leading-relaxed mb-2">
                        <strong>Siège social :</strong> Abidjan, Cocody Riviera Palmeraie, Côte d'Ivoire
                      </p>
                      <p className="text-foreground/80 leading-relaxed mb-2">
                        <strong>RCCM :</strong> CI-ABJ-03-20L8-812-00825
                      </p>
                      <p className="text-foreground/80 leading-relaxed mb-2">
                        <strong>Email :</strong> support@maaleek.com
                      </p>
                      <p className="text-foreground/80 leading-relaxed">
                        <strong>DPO :</strong> dpo@maaleek.ci
                      </p>
                    </div>
                  </section>

                  <Separator />

                  <section>
                    <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                      <Database className="h-6 w-6 text-accent" />
                      3. Données Collectées
                    </h2>
                    
                    <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">A. Données fournies volontairement</h3>
                    <ul className="space-y-3 text-foreground/80">
                      <li className="flex gap-2">
                        <span className="text-accent font-bold">•</span>
                        <span><strong>Données d'identification :</strong> Nom, prénom, photo de profil, numéro de téléphone, adresse e-mail</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-accent font-bold">•</span>
                        <span><strong>Informations professionnelles :</strong> Entreprise, poste, adresse professionnelle, numéro de téléphone professionnel, site web, réseaux sociaux professionnels</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-accent font-bold">•</span>
                        <span><strong>Données de transaction :</strong> Historique de vos abonnements et paiements (via Mobile Money ou carte bancaire)</span>
                      </li>
                    </ul>

                    <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">B. Données collectées automatiquement</h3>
                    <ul className="space-y-3 text-foreground/80">
                      <li className="flex gap-2">
                        <span className="text-accent font-bold">•</span>
                        <span><strong>Données d'utilisation :</strong> Fonctionnalités utilisées, durée d'utilisation, pages visitées</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-accent font-bold">•</span>
                        <span><strong>Données de connexion :</strong> Adresse IP, type d'appareil, système d'exploitation</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-accent font-bold">•</span>
                        <span><strong>Données d'interaction :</strong> Historique de vos échanges et statistiques de consultation de votre carte de visite</span>
                      </li>
                    </ul>
                  </section>

                  <Separator />

                  <section>
                    <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                      <Eye className="h-6 w-6 text-accent" />
                      4. Finalités du Traitement
                    </h2>
                    <p className="text-foreground/80 leading-relaxed mb-4">
                      Vos données personnelles sont traitées pour les finalités suivantes :
                    </p>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="bg-accent/10">
                            <th className="border border-border p-3 text-left text-foreground font-semibold">Finalité du traitement</th>
                            <th className="border border-border p-3 text-left text-foreground font-semibold">Base légale</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-border p-3 text-foreground/80">Création et gestion de votre compte utilisateur</td>
                            <td className="border border-border p-3 text-foreground/80">Exécution du contrat (CGU)</td>
                          </tr>
                          <tr className="bg-accent/5">
                            <td className="border border-border p-3 text-foreground/80">Fourniture des fonctionnalités de networking, de relance et d'Analytics</td>
                            <td className="border border-border p-3 text-foreground/80">Exécution du contrat (CGU)</td>
                          </tr>
                          <tr>
                            <td className="border border-border p-3 text-foreground/80">Gestion de votre abonnement et traitement des paiements</td>
                            <td className="border border-border p-3 text-foreground/80">Exécution du contrat et obligation légale</td>
                          </tr>
                          <tr className="bg-accent/5">
                            <td className="border border-border p-3 text-foreground/80">Amélioration de l'application</td>
                            <td className="border border-border p-3 text-foreground/80">Intérêt légitime</td>
                          </tr>
                          <tr>
                            <td className="border border-border p-3 text-foreground/80">Prévention de la fraude et sécurisation</td>
                            <td className="border border-border p-3 text-foreground/80">Intérêt légitime et obligation légale</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </section>

                  <Separator />

                  <section>
                    <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                      <Lock className="h-6 w-6 text-accent" />
                      5. Partage des Données avec des Tiers
                    </h2>
                    <p className="text-foreground/80 leading-relaxed mb-4">
                      Nous nous engageons à ne pas vendre vos données personnelles. Nous pouvons être amenés à les partager avec des tiers de confiance dans les cas stricts suivants :
                    </p>
                    <ul className="space-y-3 text-foreground/80">
                      <li className="flex gap-2">
                        <span className="text-accent font-bold">•</span>
                        <span><strong>Prestataires de services :</strong> Hébergement, traitement des paiements, envoi de notifications. Ces prestataires sont soumis à des obligations strictes de confidentialité.</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-accent font-bold">•</span>
                        <span><strong>Obligations légales :</strong> En application d'une loi, d'une réglementation ou d'une décision de justice.</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-accent font-bold">•</span>
                        <span><strong>Avec votre consentement :</strong> Pour des fonctionnalités spécifiques non essentielles.</span>
                      </li>
                    </ul>
                  </section>

                  <Separator />

                  <section>
                    <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                      <Clock className="h-6 w-6 text-accent" />
                      6. Durée de Conservation des Données
                    </h2>
                    <ul className="space-y-3 text-foreground/80">
                      <li className="flex gap-2">
                        <span className="text-accent font-bold">•</span>
                        <span><strong>Données du compte actif :</strong> Pour la durée de vie de votre compte</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-accent font-bold">•</span>
                        <span><strong>Données après suppression :</strong> Archivées pendant 3 ans à des fins de preuve, puis anonymisées ou supprimées</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-accent font-bold">•</span>
                        <span><strong>Données de prospection :</strong> 3 ans à compter du dernier contact</span>
                      </li>
                    </ul>
                  </section>

                  <Separator />

                  <section>
                    <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                      <UserCheck className="h-6 w-6 text-accent" />
                      7. Vos Droits sur vos Données
                    </h2>
                    <p className="text-foreground/80 leading-relaxed mb-4">
                      Conformément à la loi ivoirienne n°2013-450 et au RGPD, vous disposez des droits suivants :
                    </p>
                    <ul className="space-y-3 text-foreground/80">
                      <li className="flex gap-2">
                        <span className="text-accent font-bold">•</span>
                        <span><strong>Droit d'accès :</strong> Obtenir une copie de vos données personnelles</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-accent font-bold">•</span>
                        <span><strong>Droit de rectification :</strong> Corriger vos données inexactes ou incomplètes</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-accent font-bold">•</span>
                        <span><strong>Droit à l'effacement :</strong> Demander la suppression de vos données</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-accent font-bold">•</span>
                        <span><strong>Droit à la portabilité :</strong> Recevoir vos données dans un format structuré</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-accent font-bold">•</span>
                        <span><strong>Droit d'opposition :</strong> Vous opposer au traitement de vos données</span>
                      </li>
                    </ul>
                    <div className="bg-accent/5 p-6 rounded-xl mt-6">
                      <p className="text-foreground/80 leading-relaxed">
                        Pour exercer vos droits, contactez notre DPO à l'adresse : <strong>dpo@maaleek.ci</strong>
                      </p>
                    </div>
                  </section>

                  <Separator />

                  <section>
                    <h2 className="text-2xl font-bold text-foreground mb-4">8. Sécurité des Données</h2>
                    <p className="text-foreground/80 leading-relaxed">
                      SAUSH SARL met en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données contre tout accès, modification, divulgation ou destruction non autorisée, incluant le chiffrement, les protocoles sécurisés (HTTPS, SSL/TLS), et des audits de sécurité réguliers.
                    </p>
                  </section>

                  <Separator />

                  <section>
                    <h2 className="text-2xl font-bold text-foreground mb-4">9. Transfert International des Données</h2>
                    <p className="text-foreground/80 leading-relaxed">
                      Vos données peuvent être hébergées sur des serveurs situés en dehors de la Côte d'Ivoire. Dans ce cas, nous nous assurons que le transfert est encadré par des garanties appropriées, telles qu'une décision d'adéquation de l'ARTCI ou l'adoption de clauses contractuelles types approuvées.
                    </p>
                  </section>

                  <Separator />

                  <section>
                    <h2 className="text-2xl font-bold text-foreground mb-4">10. Contact</h2>
                    <p className="text-foreground/80 leading-relaxed">
                      Pour toute question relative à cette politique de confidentialité ou à l'exercice de vos droits, vous pouvez nous contacter :
                    </p>
                    <div className="bg-accent/5 p-6 rounded-xl mt-4">
                      <p className="text-foreground/80 leading-relaxed mb-2">
                        <strong>Email :</strong> support@maaleek.com
                      </p>
                      <p className="text-foreground/80 leading-relaxed">
                        <strong>DPO :</strong> dpo@maaleek.ci
                      </p>
                    </div>
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

export default PolitiqueConfidentialite;
