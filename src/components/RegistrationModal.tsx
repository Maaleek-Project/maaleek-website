import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { QrCode, Smartphone, ArrowRight, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Country {
  id: string;
  libelle: string;
  code: string;
  alias: string;
  flag: string;
  currency: string;
}

const RegistrationModal = ({ isOpen, onClose }: RegistrationModalProps) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [selectedCountryId, setSelectedCountryId] = useState("");
  const [countries, setCountries] = useState<Country[]>([]);
  const [isLoadingCountries, setIsLoadingCountries] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);
  const [step, setStep] = useState<"phone" | "otp">("phone");
  const [otpCode, setOtpCode] = useState("");
  const [timer, setTimer] = useState(45);
  const [canResendOtp, setCanResendOtp] = useState(false);
  const [isValidatingOtp, setIsValidatingOtp] = useState(false);
  const { toast } = useToast();

  // Fetch countries on component mount
  useEffect(() => {
    const fetchCountries = async () => {
      setIsLoadingCountries(true);
      try {
        const response = await fetch('https://api.maaleek.com/resource/countries');
        const data = await response.json();
        
        if (data.success && data.content) {
          setCountries(data.content);
        } else {
          toast({
            title: "Erreur",
            description: "Impossible de charger la liste des pays",
            variant: "destructive",
          });
        }
      } catch (error) {
        console.error('Error fetching countries:', error);
        toast({
          title: "Erreur",
          description: "Erreur de connexion",
          variant: "destructive",
        });
      } finally {
        setIsLoadingCountries(false);
      }
    };

    if (isOpen) {
      fetchCountries();
    }
  }, [isOpen, toast]);

  // Timer effect for OTP resend
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (step === "otp" && timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => {
          if (prev <= 1) {
            setCanResendOtp(true);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [step, timer]);

  const handlePhoneSubmit = async () => {
    if (phoneNumber && selectedCountryId) {
      setIsRegistering(true);
      try {
        const response = await fetch('https://api.maaleek.com/auth/initiated', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            login: phoneNumber,
            country_id: selectedCountryId,
          }),
        });

        const data = await response.json();
        
        if (data.success) {
          // Vérifier si l'utilisateur existe déjà
          if (data.content && data.content.user) {
            toast({
              title: "Numéro déjà utilisé",
              description: "Ce numéro de téléphone est déjà associé à un compte",
              variant: "destructive",
            });
            return;
          }
          
          setStep("otp");
          setTimer(45);
          setCanResendOtp(false);
          const maskedNumber = "****" + phoneNumber.slice(-2);
          toast({
            title: "Code envoyé",
            description: `Un message a été envoyé au numéro ${maskedNumber}`,
          });
        } else {
          toast({
            title: "Erreur",
            description: data.message || "Erreur lors de l'inscription",
            variant: "destructive",
          });
        }
      } catch (error) {
        console.error('Error during registration:', error);
        toast({
          title: "Erreur",
          description: "Erreur de connexion",
          variant: "destructive",
        });
      } finally {
        setIsRegistering(false);
      }
    }
  };

  const handleResendOtp = async () => {
    if (canResendOtp && phoneNumber && selectedCountryId) {
      setIsRegistering(true);
      try {
        const response = await fetch('https://api.maaleek.com/auth/initiated', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            login: phoneNumber,
            country_id: selectedCountryId,
          }),
        });

        const data = await response.json();
        
        if (data.success) {
          setTimer(45);
          setCanResendOtp(false);
          const maskedNumber = "****" + phoneNumber.slice(-2);
          toast({
            title: "Code renvoyé",
            description: `Un nouveau message a été envoyé au numéro ${maskedNumber}`,
          });
        } else {
          toast({
            title: "Erreur",
            description: data.message || "Erreur lors du renvoi",
            variant: "destructive",
          });
        }
      } catch (error) {
        console.error('Error resending OTP:', error);
        toast({
          title: "Erreur",
          description: "Erreur de connexion",
          variant: "destructive",
        });
      } finally {
        setIsRegistering(false);
      }
    }
  };

  const handleOtpSubmit = async () => {
    if (otpCode.length === 5 && phoneNumber && selectedCountryId) {
      setIsValidatingOtp(true);
      try {
        const response = await fetch('https://api.maaleek.com/auth/validate-code', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            code: otpCode,
            country_id: selectedCountryId,
            value: phoneNumber,
            type: "verified_number"
          }),
        });

        const data = await response.json();
        
        if (data.success) {
          toast({
            title: "Inscription réussie",
            description: "Votre compte a été créé avec succès",
          });
          onClose();
          // Reset form
          setStep("phone");
          setPhoneNumber("");
          setSelectedCountryId("");
          setOtpCode("");
          setTimer(45);
          setCanResendOtp(false);
        } else {
          toast({
            title: "Code incorrect",
            description: data.message || "Le code OTP saisi est incorrect",
            variant: "destructive",
          });
        }
      } catch (error) {
        console.error('Error validating OTP:', error);
        toast({
          title: "Erreur",
          description: "Erreur de connexion",
          variant: "destructive",
        });
      } finally {
        setIsValidatingOtp(false);
      }
    }
  };

  const selectedCountry = countries.find(c => c.id === selectedCountryId);

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
            {step === "phone" ? (
              <>
                <div className="space-y-3">
                  <Label htmlFor="country">Pays</Label>
                  <Select value={selectedCountryId} onValueChange={setSelectedCountryId} disabled={isLoadingCountries}>
                    <SelectTrigger>
                      <SelectValue placeholder={isLoadingCountries ? "Chargement..." : "Sélectionner votre pays"} />
                    </SelectTrigger>
                    <SelectContent>
                      {countries.map((country) => (
                        <SelectItem key={country.id} value={country.id}>
                          <span className="flex items-center gap-2">
                            <img src={country.flag} alt={country.alias} className="w-5 h-3 object-cover" />
                            <span>{country.libelle} (+{country.code})</span>
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
                      +{selectedCountry?.code || "225"}
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
                  disabled={!phoneNumber || !selectedCountryId || isRegistering}
                  className="w-full"
                >
                  {isRegistering ? (
                    <>
                      <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                      Inscription...
                    </>
                  ) : (
                    <>
                      S'inscrire
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </>
                  )}
                </Button>
              </>
            ) : (
              <div className="space-y-6">
                <div className="text-center space-y-2">
                  <h3 className="text-lg font-semibold">Code de vérification</h3>
                  <p className="text-muted-foreground text-sm">
                    Entrez le code à 5 chiffres envoyé au +{selectedCountry?.code} ****{phoneNumber.slice(-2)}
                  </p>
                </div>

                <div className="flex justify-center">
                  <InputOTP maxLength={5} value={otpCode} onChange={setOtpCode}>
                    <InputOTPGroup>
                      <InputOTPSlot index={0} />
                      <InputOTPSlot index={1} />
                      <InputOTPSlot index={2} />
                      <InputOTPSlot index={3} />
                      <InputOTPSlot index={4} />
                    </InputOTPGroup>
                  </InputOTP>
                </div>

                {/* Timer et bouton de renvoi */}
                <div className="text-center">
                  {timer > 0 ? (
                    <p className="text-sm text-muted-foreground">
                      Renvoyer le code dans {timer}s
                    </p>
                  ) : (
                    <Button
                      variant="link"
                      onClick={handleResendOtp}
                      disabled={isRegistering}
                      className="text-sm"
                    >
                      {isRegistering ? (
                        <>
                          <Loader2 className="h-3 w-3 mr-1 animate-spin" />
                          Renvoi...
                        </>
                      ) : (
                        "Renvoyer le code"
                      )}
                    </Button>
                  )}
                </div>

                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    onClick={() => setStep("phone")}
                    className="flex-1"
                  >
                    Retour
                  </Button>
                  <Button 
                    onClick={handleOtpSubmit}
                    disabled={otpCode.length !== 5 || isValidatingOtp}
                    className="flex-1"
                  >
                    {isValidatingOtp ? (
                      <>
                        <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                        Vérification...
                      </>
                    ) : (
                      <>
                        Vérifier
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </>
                    )}
                  </Button>
                </div>
              </div>
            )}
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