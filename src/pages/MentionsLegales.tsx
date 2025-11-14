import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Building2, Mail, Phone, MapPin } from "lucide-react";

const MentionsLegales = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 bg-gradient-subtle">
        <div className="container mx-auto px-6 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="bg-card rounded-3xl shadow-elegant p-8 md:p-12">
              <div className="mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-2xl mb-6">
                  <Building2 className="h-8 w-8 text-accent" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                  Mentions Légales
                </h1>
                <p className="text-muted-foreground">
                  Informations légales sur l'application Maaleek
                </p>
              </div>

              <ScrollArea className="h-[600px] pr-4">
                <div className="space-y-8">
                  <section>
                    <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                      <Building2 className="h-6 w-6 text-accent" />
                      1. Éditeur de l'Application
                    </h2>
                    <div className="bg-gradient-to-br from-accent/5 to-accent/10 p-6 rounded-xl space-y-3">
                      <p className="text-foreground/80 leading-relaxed">
                        <strong className="text-foreground">Raison sociale :</strong> SAUSH SARL
                      </p>
                      <p className="text-foreground/80 leading-relaxed">
                        <strong className="text-foreground">Forme juridique :</strong> Société à Responsabilité Limitée (SARL) de droit ivoirien
                      </p>
                      <p className="text-foreground/80 leading-relaxed">
                        <strong className="text-foreground">Capital social :</strong> 1.000.000 FCFA
                      </p>
                      <p className="text-foreground/80 leading-relaxed">
                        <strong className="text-foreground">RCCM :</strong> CI-ABJ-03-20L8-812-00825
                      </p>
                      <p className="text-foreground/80 leading-relaxed flex items-start gap-2">
                        <MapPin className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                        <span><strong className="text-foreground">Siège social :</strong> Abidjan, Cocody Riviera Palmeraie, Côte d'Ivoire</span>
                      </p>
                      <p className="text-foreground/80 leading-relaxed flex items-center gap-2">
                        <Mail className="h-5 w-5 text-accent flex-shrink-0" />
                        <span><strong className="text-foreground">Email :</strong> support@maaleek.com</span>
                      </p>
                      <p className="text-foreground/80 leading-relaxed flex items-center gap-2">
                        <Phone className="h-5 w-5 text-accent flex-shrink-0" />
                        <span><strong className="text-foreground">Contact :</strong> Disponible via le chat intégré dans l'application</span>
                      </p>
                    </div>
                  </section>

                  <Separator />

                  <section>
                    <h2 className="text-2xl font-bold text-foreground mb-4">2. Directeur de la Publication</h2>
                    <p className="text-foreground/80 leading-relaxed">
                      Le directeur de la publication de l'application Maaleek est le représentant légal de SAUSH SARL.
                    </p>
                  </section>

                  <Separator />

                  <section>
                    <h2 className="text-2xl font-bold text-foreground mb-4">3. Hébergement</h2>
                    <p className="text-foreground/80 leading-relaxed mb-4">
                      L'application Maaleek et ses données sont hébergées par des prestataires techniques tiers conformes aux normes de sécurité internationales.
                    </p>
                    <div className="bg-accent/5 p-6 rounded-xl">
                      <p className="text-foreground/80 leading-relaxed">
                        Les serveurs peuvent être situés dans différents pays, avec des garanties de protection des données conformes à la législation ivoirienne et aux standards internationaux (RGPD).
                      </p>
                    </div>
                  </section>

                  <Separator />

                  <section>
                    <h2 className="text-2xl font-bold text-foreground mb-4">4. Propriété Intellectuelle</h2>
                    <p className="text-foreground/80 leading-relaxed mb-4">
                      L'ensemble des éléments composant l'application Maaleek (structure, design, textes, graphismes, logos, icônes, sons, logiciels, bases de données) est la propriété exclusive de SAUSH SARL, à l'exception des éléments expressément identifiés comme appartenant à des tiers.
                    </p>
                    <p className="text-foreground/80 leading-relaxed mb-4">
                      Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments de l'application, quel que soit le moyen ou le procédé utilisé, est interdite sans l'autorisation écrite préalable de SAUSH SARL.
                    </p>
                    <div className="bg-amber-500/10 border border-amber-500/20 p-6 rounded-xl">
                      <p className="text-foreground/80 leading-relaxed">
                        <strong className="text-foreground">⚠️ Avertissement :</strong> Toute exploitation non autorisée de l'application ou de l'un de ses éléments sera considérée comme constitutive d'une contrefaçon et poursuivie conformément aux dispositions des articles du Code pénal et du Code de la propriété intellectuelle ivoiriens.
                      </p>
                    </div>
                  </section>

                  <Separator />

                  <section>
                    <h2 className="text-2xl font-bold text-foreground mb-4">5. Marques</h2>
                    <p className="text-foreground/80 leading-relaxed">
                      Les dénominations sociales, marques et signes distinctifs reproduits sur l'application Maaleek sont protégés au titre de la propriété intellectuelle. Leur reproduction ou utilisation sans autorisation expresse et préalable de SAUSH SARL est strictement interdite et constitue un délit de contrefaçon.
                    </p>
                  </section>

                  <Separator />

                  <section>
                    <h2 className="text-2xl font-bold text-foreground mb-4">6. Protection des Données Personnelles</h2>
                    <p className="text-foreground/80 leading-relaxed mb-4">
                      SAUSH SARL, en qualité de responsable du traitement des données, s'engage à respecter la confidentialité et la sécurité des données personnelles des utilisateurs conformément à :
                    </p>
                    <ul className="space-y-2 text-foreground/80 ml-4">
                      <li className="flex gap-2">
                        <span className="text-accent font-bold">•</span>
                        <span>La loi ivoirienne n°2013-450 du 19 juin 2013 relative à la protection des données à caractère personnel</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-accent font-bold">•</span>
                        <span>Le Règlement Général sur la Protection des Données (RGPD) pour les ressortissants concernés</span>
                      </li>
                    </ul>
                    <div className="bg-accent/5 p-6 rounded-xl mt-6">
                      <p className="text-foreground/80 leading-relaxed mb-2">
                        <strong className="text-foreground">Délégué à la Protection des Données (DPO) :</strong>
                      </p>
                      <p className="text-foreground/80 leading-relaxed">
                        Email : dpo@maaleek.ci
                      </p>
                    </div>
                    <p className="text-foreground/80 leading-relaxed mt-4">
                      Pour plus d'informations sur le traitement de vos données personnelles, veuillez consulter notre <a href="/politique-confidentialite" className="text-accent hover:underline font-semibold">Politique de Confidentialité</a>.
                    </p>
                  </section>

                  <Separator />

                  <section>
                    <h2 className="text-2xl font-bold text-foreground mb-4">7. Responsabilité</h2>
                    <p className="text-foreground/80 leading-relaxed mb-4">
                      SAUSH SARL met tout en œuvre pour offrir aux utilisateurs des informations et des outils disponibles et vérifiés, mais ne saurait être tenue pour responsable des erreurs, d'une absence de disponibilité des informations et/ou de la présence de virus sur son application.
                    </p>
                    <p className="text-foreground/80 leading-relaxed">
                      L'utilisateur est responsable de l'utilisation qu'il fait de l'application Maaleek et des données qu'il y saisit. SAUSH SARL décline toute responsabilité quant aux conséquences directes ou indirectes pouvant résulter de l'accès ou de l'utilisation de l'application.
                    </p>
                  </section>

                  <Separator />

                  <section>
                    <h2 className="text-2xl font-bold text-foreground mb-4">8. Droit Applicable et Juridiction</h2>
                    <p className="text-foreground/80 leading-relaxed mb-4">
                      Les présentes mentions légales sont soumises au droit ivoirien. En cas de litige et à défaut d'accord amiable, le litige sera porté devant les tribunaux compétents d'Abidjan, Côte d'Ivoire.
                    </p>
                  </section>

                  <Separator />

                  <section>
                    <h2 className="text-2xl font-bold text-foreground mb-4">9. Modification des Mentions Légales</h2>
                    <p className="text-foreground/80 leading-relaxed">
                      SAUSH SARL se réserve le droit de modifier les présentes mentions légales à tout moment. Les utilisateurs sont invités à les consulter régulièrement. Les mentions légales en vigueur sont celles accessibles sur l'application à la date de consultation.
                    </p>
                  </section>

                  <Separator />

                  <section>
                    <h2 className="text-2xl font-bold text-foreground mb-4">10. Contact</h2>
                    <p className="text-foreground/80 leading-relaxed mb-4">
                      Pour toute question concernant les présentes mentions légales ou l'utilisation de l'application Maaleek, vous pouvez nous contacter :
                    </p>
                    <div className="bg-gradient-to-br from-accent/5 to-accent/10 p-6 rounded-xl space-y-3">
                      <p className="text-foreground/80 leading-relaxed flex items-center gap-2">
                        <Mail className="h-5 w-5 text-accent flex-shrink-0" />
                        <span><strong className="text-foreground">Par email :</strong> support@maaleek.com</span>
                      </p>
                      <p className="text-foreground/80 leading-relaxed flex items-start gap-2">
                        <Phone className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                        <span><strong className="text-foreground">Via le chat intégré</strong> dans l'application Maaleek</span>
                      </p>
                      <p className="text-foreground/80 leading-relaxed flex items-start gap-2">
                        <MapPin className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                        <span><strong className="text-foreground">Par courrier :</strong> SAUSH SARL, Abidjan, Cocody Riviera Palmeraie, Côte d'Ivoire</span>
                      </p>
                    </div>
                  </section>

                  <div className="mt-8 pt-6 border-t border-border">
                    <p className="text-center text-muted-foreground text-sm">
                      © 2025 Saush Technologies. Tous droits réservés.
                    </p>
                  </div>
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

export default MentionsLegales;
