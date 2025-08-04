import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { QrCode, Smartphone, ArrowRight } from "lucide-react";

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const RegistrationModal = ({ isOpen, onClose }: RegistrationModalProps) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");

  const countries = [
    { code: "+225", name: "Côte d'Ivoire", flag: "🇨🇮" },
    { code: "+226", name: "Burkina Faso", flag: "🇧🇫" },
    { code: "+223", name: "Mali", flag: "🇲🇱" },
    { code: "+221", name: "Sénégal", flag: "🇸🇳" },
    { code: "+33", name: "France", flag: "🇫🇷" },
  ];

  const handlePhoneSubmit = () => {
    if (phoneNumber && selectedCountry) {
      // Logique d'inscription
      console.log(`Inscription: ${selectedCountry} ${phoneNumber}`);
      onClose();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl font-bold bg-gradient-to-r from-[#6366f1] via-[#8b5cf6] to-[#06b6d4] bg-clip-text text-transparent">
            Rejoindre Maaleek
          </DialogTitle>
        </DialogHeader>

        <Tabs defaultValue="phone" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="phone" className="flex items-center gap-2">
              <Smartphone className="h-4 w-4" />
              Téléphone
            </TabsTrigger>
            <TabsTrigger value="qr" className="flex items-center gap-2">
              <QrCode className="h-4 w-4" />
              QR Code
            </TabsTrigger>
          </TabsList>

          <TabsContent value="phone" className="space-y-4 mt-6">
            <div className="space-y-3">
              <Label htmlFor="country">Pays</Label>
              <Select value={selectedCountry} onValueChange={setSelectedCountry}>
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionner votre pays" />
                </SelectTrigger>
                <SelectContent>
                  {countries.map((country) => (
                    <SelectItem key={country.code} value={country.code}>
                      <span className="flex items-center gap-2">
                        <span>{country.flag}</span>
                        <span>{country.name} ({country.code})</span>
                      </span>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-3">
              <Label htmlFor="phone">Numéro de téléphone</Label>
              <div className="flex gap-2">
                <div className="bg-muted px-3 py-2 rounded-md border border-border text-sm font-medium min-w-[80px] flex items-center justify-center">
                  {selectedCountry || "+225"}
                </div>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="07 XX XX XX XX"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="flex-1"
                />
              </div>
            </div>

            <Button 
              onClick={handlePhoneSubmit}
              disabled={!phoneNumber || !selectedCountry}
              className="w-full"
            >
              S'inscrire
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </TabsContent>

          <TabsContent value="qr" className="mt-6">
            <div className="text-center space-y-6">
              <div className="bg-white p-8 rounded-2xl border-2 border-dashed border-border mx-auto w-fit">
                <div className="w-48 h-48 bg-gradient-to-br from-[#6366f1] via-[#8b5cf6] to-[#06b6d4] rounded-xl flex items-center justify-center">
                  <QrCode className="h-24 w-24 text-white" />
                </div>
              </div>
              
              <div className="space-y-2">
                <h3 className="font-semibold text-lg">Scannez le QR Code</h3>
                <p className="text-muted-foreground text-sm">
                  Utilisez l'appareil photo de votre téléphone pour scanner ce QR Code et télécharger l'application
                </p>
              </div>

              <div className="flex gap-2 justify-center">
                <div className="px-4 py-2 bg-muted rounded-lg text-sm">
                  📱 iOS & Android
                </div>
                <div className="px-4 py-2 bg-muted rounded-lg text-sm">
                  🚀 Gratuit
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};

export default RegistrationModal;