"use client";

import React, { useState } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { cn } from "@/lib/utils";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { TbMessageShare } from "react-icons/tb";
import MagicButtonTwo from "./ui/MagicButtonTwo";
import { FaCalendarAlt } from "react-icons/fa";
import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import { NumberTicker } from "./ui/number-ticker";

const ContactAndAppointment = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // Appointment state
  const [appointmentData, setAppointmentData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    selectedDate: undefined as Date | undefined,
    selectedTime: "",
  });

  const [appointmentErrors, setAppointmentErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    selectedDate: "",
    selectedTime: "",
  });

  const [isSubmittingAppointment, setIsSubmittingAppointment] = useState(false);

  const timeSlots = [
    "09:00",
    "09:30",
    "10:00",
    "10:30",
    "11:00",
    "11:30",
    "14:00",
    "14:30",
    "15:00",
    "15:30",
    "16:00",
    "16:30",
    "17:00",
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const errors = {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    };

    if (!formData.firstName) {
      errors.firstName = "Le prénom est requis";
    }

    if (!formData.lastName) {
      errors.lastName = "Le nom est requis";
    }

    if (!formData.email) {
      errors.email = "L'adresse e-mail est requise";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "Format d'adresse e-mail invalide (ex: nom@domaine.com)";
    }

    if (!formData.message) {
      errors.message = "Le message est requis";
    } else if (formData.message.length < 10) {
      errors.message = "Le message doit contenir au moins 10 caractères";
    }

    setFormErrors(errors);
    return !Object.values(errors).some((error) => error !== "");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      try {
        const response = await fetch(
          "https://primary-production-e46f.up.railway.app/webhook/474d5be5-3cc8-4d78-b416-e0b8943c59f4",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              ...formData,
              type: "contact",
              date: new Date().toISOString(),
            }),
          }
        );

        if (response.ok) {
          setFormData({ firstName: "", lastName: "", email: "", message: "" });
          toast.success("Formulaire envoyé avec succès !");
        } else {
          toast.error("Erreur lors de l'envoi. Essayez à nouveau.");
        }
      } catch (error) {
        console.error("Erreur:", error);
        toast.error("Erreur lors de l'envoi. Essayez à nouveau.");
      }
      setIsSubmitting(false);
    }
  };

  const handleAppointmentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setAppointmentData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateAppointment = () => {
    const errors = {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      selectedDate: "",
      selectedTime: "",
    };

    if (!appointmentData.firstName) {
      errors.firstName = "Le prénom est requis";
    }

    if (!appointmentData.lastName) {
      errors.lastName = "Le nom est requis";
    }

    if (!appointmentData.email) {
      errors.email = "L'adresse e-mail est requise";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(appointmentData.email)) {
      errors.email = "Format d'adresse e-mail invalide";
    }

    if (!appointmentData.phone) {
      errors.phone = "Le numéro de téléphone est requis";
    } else if (
      !/^(?:(?:\+|00)33|0)[1-9](?:[0-9]{8})$/.test(
        appointmentData.phone.replace(/[\s.-]/g, "")
      )
    ) {
      errors.phone =
        "Format de téléphone invalide (ex: +33612345678 ou 0612345678)";
    }

    if (!appointmentData.selectedDate) {
      errors.selectedDate = "Sélectionnez une date";
    }

    if (!appointmentData.selectedTime) {
      errors.selectedTime = "Sélectionnez un créneau horaire";
    }

    setAppointmentErrors(errors);
    return !Object.values(errors).some((error) => error !== "");
  };

  const handleAppointmentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("🚀 Début de la soumission du rendez-vous");
    console.log("📝 Données du formulaire:", appointmentData);

    if (validateAppointment()) {
      console.log("✅ Validation réussie");
      setIsSubmittingAppointment(true);

      const payload = {
        type: "appointment",
        firstName: appointmentData.firstName,
        lastName: appointmentData.lastName,
        email: appointmentData.email,
        phone: appointmentData.phone,
        appointmentDate: appointmentData.selectedDate
          ? format(appointmentData.selectedDate, "dd/MM/yyyy", {
              locale: fr,
            })
          : "",
        appointmentTime: appointmentData.selectedTime,
        submittedAt: new Date().toISOString(),
      };

      console.log("📦 Payload envoyé:", payload);

      try {
        const response = await fetch(
          "https://primary-production-e46f.up.railway.app/webhook/37b72125-f9bd-4327-954e-9a55fb4d014d",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
          }
        );

        console.log("📡 Statut de la réponse:", response.status);
        console.log("📡 Réponse complète:", response);

        if (response.ok) {
          const responseData = await response.text();
          console.log("✅ Réponse du serveur:", responseData);
          setAppointmentData({
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            selectedDate: undefined,
            selectedTime: "",
          });
          toast.success("Demande de rendez-vous envoyée avec succès !");
        } else {
          const errorText = await response.text();
          console.error("❌ Erreur du serveur:", errorText);
          toast.error(
            `Erreur ${response.status}: ${errorText || "Essayez à nouveau."}`
          );
        }
      } catch (error) {
        console.error("❌ Erreur réseau:", error);
        toast.error("Erreur lors de l'envoi. Vérifiez votre connexion.");
      }
      setIsSubmittingAppointment(false);
    } else {
      console.log("❌ Validation échouée");
      console.log("🔴 Erreurs de validation:", appointmentErrors);
    }
  };

  return (
    <section className="w-full py-20 text-foreground" id="contact">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <h2 className="text-center text-4xl font-bold mb-12">
          Nous <span className="text-primary">Contacter</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-6 items-start">
          {/* Contact Form Card */}
          <div className="shadow-input w-full rounded-none bg-card border p-4 md:rounded-2xl md:p-8 h-full flex flex-col">
            <h3 className="text-center text-2xl font-bold mb-4">
              Envoyer un <span className="text-primary">Message</span>
            </h3>
            <form className="my-4" onSubmit={handleSubmit}>
              <div className="mb-4 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
                <LabelInputContainer>
                  <Label htmlFor="firstName">Prénom</Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    placeholder="Votre prénom"
                    type="text"
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                  {formErrors.firstName && (
                    <p className="text-destructive text-sm">
                      {formErrors.firstName}
                    </p>
                  )}
                </LabelInputContainer>
                <LabelInputContainer>
                  <Label htmlFor="lastName">Nom</Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    placeholder="Votre nom"
                    type="text"
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                  {formErrors.lastName && (
                    <p className="text-destructive text-sm">
                      {formErrors.lastName}
                    </p>
                  )}
                </LabelInputContainer>
              </div>
              <LabelInputContainer className="mb-4">
                <Label htmlFor="email">Adresse e-mail</Label>
                <Input
                  id="email"
                  name="email"
                  placeholder="votre@email.com"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                {formErrors.email && (
                  <p className="text-destructive text-sm">{formErrors.email}</p>
                )}
              </LabelInputContainer>
              <LabelInputContainer className="mb-4 ">
                <Label htmlFor="message">Message</Label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="flex h-32 w-full border-none bg-background text-foreground shadow-input rounded-md px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 group-hover/input:shadow-none transition duration-400"
                  placeholder="Votre message"
                />
                {formErrors.message && (
                  <p className="text-destructive text-sm">
                    {formErrors.message}
                  </p>
                )}
              </LabelInputContainer>
              <MagicButtonTwo
                title={isSubmitting ? "Envoi en cours..." : "Envoyer"}
                icon={<TbMessageShare />}
                position="right"
              />
            </form>
          </div>

          {/* Appointment Section */}
          <div className="shadow-input w-full bg-card border p-4 md:rounded-2xl md:p-8 h-full flex flex-col">
            <h3 className="text-center text-2xl font-bold mb-4">
              Prendre <span className="text-primary">Rendez-vous</span>
            </h3>
            <p className="text-center text-md text-muted-foreground mb-8">
              Réservez dès maintenant un créneau de{" "}
              <NumberTicker
                value={30}
                decimalPlaces={0}
                className="text-sm font-bold tracking-tighter whitespace-pre-wrap text-primary"
              />
              <span className="text-primary"> minutes</span> et bénéficiez
              d&apos;une analyse personnalisée gratuite. Nos experts et nos
              systèmes automatisés auditeront votre situation en amont pour vous
              proposer des recommandations concrètes et actionnables dès le
              premier échange.
            </p>

            <form onSubmit={handleAppointmentSubmit}>
              <div className="mb-4 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
                <LabelInputContainer>
                  <Label htmlFor="appointmentFirstName">Prénom</Label>
                  <Input
                    id="appointmentFirstName"
                    name="firstName"
                    placeholder="Votre prénom"
                    type="text"
                    value={appointmentData.firstName}
                    onChange={handleAppointmentChange}
                  />
                  {appointmentErrors.firstName && (
                    <p className="text-destructive text-sm">
                      {appointmentErrors.firstName}
                    </p>
                  )}
                </LabelInputContainer>
                <LabelInputContainer>
                  <Label htmlFor="appointmentLastName">Nom</Label>
                  <Input
                    id="appointmentLastName"
                    name="lastName"
                    placeholder="Votre nom"
                    type="text"
                    value={appointmentData.lastName}
                    onChange={handleAppointmentChange}
                  />
                  {appointmentErrors.lastName && (
                    <p className="text-destructive text-sm">
                      {appointmentErrors.lastName}
                    </p>
                  )}
                </LabelInputContainer>
              </div>

              <div className="mb-4 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
                <LabelInputContainer>
                  <Label htmlFor="appointmentEmail">Adresse e-mail</Label>
                  <Input
                    id="appointmentEmail"
                    name="email"
                    placeholder="votre@email.com"
                    type="email"
                    value={appointmentData.email}
                    onChange={handleAppointmentChange}
                  />
                  {appointmentErrors.email && (
                    <p className="text-destructive text-sm">
                      {appointmentErrors.email}
                    </p>
                  )}
                </LabelInputContainer>
                <LabelInputContainer>
                  <Label htmlFor="appointmentPhone">Téléphone</Label>
                  <Input
                    id="appointmentPhone"
                    name="phone"
                    placeholder="+33 6 12 34 56 78"
                    type="tel"
                    value={appointmentData.phone}
                    onChange={handleAppointmentChange}
                  />
                  {appointmentErrors.phone && (
                    <p className="text-destructive text-sm">
                      {appointmentErrors.phone}
                    </p>
                  )}
                </LabelInputContainer>
              </div>

              <div className="mb-4">
                <Label>Sélectionner une date</Label>
                <div className="mt-2 flex justify-center bg-background rounded-lg p-4 border border-border">
                  <DayPicker
                    mode="single"
                    selected={appointmentData.selectedDate}
                    onSelect={(date) =>
                      setAppointmentData((prev) => ({
                        ...prev,
                        selectedDate: date,
                      }))
                    }
                    disabled={{ before: new Date() }}
                    locale={fr}
                    className="rdp-custom"
                  />
                </div>
                {appointmentErrors.selectedDate && (
                  <p className="text-destructive text-sm mt-2">
                    {appointmentErrors.selectedDate}
                  </p>
                )}
              </div>

              {appointmentData.selectedDate && (
                <div className="mb-6">
                  <Label>Sélectionner un créneau horaire</Label>
                  <div className="grid grid-cols-3 md:grid-cols-4 gap-2 mt-2">
                    {timeSlots.map((time) => (
                      <button
                        key={time}
                        type="button"
                        onClick={() =>
                          setAppointmentData((prev) => ({
                            ...prev,
                            selectedTime: time,
                          }))
                        }
                        className={cn(
                          "py-2 px-4 rounded-lg border transition-all",
                          appointmentData.selectedTime === time
                            ? "bg-primary text-primary-foreground border-primary"
                            : "bg-background text-foreground border-border hover:border-primary"
                        )}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                  {appointmentErrors.selectedTime && (
                    <p className="text-destructive text-sm mt-2">
                      {appointmentErrors.selectedTime}
                    </p>
                  )}
                </div>
              )}

              <MagicButtonTwo
                title={
                  isSubmittingAppointment
                    ? "Envoi en cours..."
                    : "Confirmer le rendez-vous"
                }
                icon={<FaCalendarAlt />}
                position="right"
              />
            </form>
          </div>
        </div>
      </div>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </section>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex w-full flex-col space-y-2", className)}>
      {children}
    </div>
  );
};

export default ContactAndAppointment;
