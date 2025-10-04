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

    if (!formData.firstName) errors.firstName = "Le prénom est requis";
    if (!formData.lastName) errors.lastName = "Le nom est requis";
    if (!formData.email) errors.email = "L'adresse e-mail est requise";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      errors.email = "Adresse e-mail invalide";
    if (!formData.message) errors.message = "Le message est requis";

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

  return (
    <section className="w-full py-20 text-white" id="contact">
      <div className="max-w-4xl mx-auto px-5 md:px-10">
        <h2 className="text-center text-4xl font-bold mb-8">
          Nous <span className="text-purple">Contacter</span>
        </h2>

        <div className="shadow-input mx-auto w-full max-w-2xl rounded-none p-4 md:rounded-2xl md:p-8">
          <form className="my-8" onSubmit={handleSubmit}>
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
                  <p className="text-red-500 text-sm">{formErrors.firstName}</p>
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
                  <p className="text-red-500 text-sm">{formErrors.lastName}</p>
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
                <p className="text-red-500 text-sm">{formErrors.email}</p>
              )}
            </LabelInputContainer>
            <LabelInputContainer className="mb-4 ">
              <Label htmlFor="message">Message</Label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="flex h-32 w-full border-none bg-transparent dark:bg-black-200 text-black dark:text-white shadow-input rounded-md px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-neutral-400 dark:placeholder-text-neutral-600 focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-400 dark:focus-visible:ring-neutral-600 disabled:cursor-not-allowed disabled:opacity-50 dark:shadow-[0px_0px_1px_1px_var(--neutral-700)] group-hover/input:shadow-none transition duration-400"
                placeholder="Votre message"
              />
              {formErrors.message && (
                <p className="text-red-500 text-sm">{formErrors.message}</p>
              )}
            </LabelInputContainer>
            <MagicButtonTwo
              title="Envoyer"
              icon={<TbMessageShare />}
              position="right"
            />
          </form>
          <div className="">
            <p className="mt-20 text-center text-md text-white max-w-3xl mb-4">
              Réservez dès maintenant un créneau de{" "}
              <span className="text-purple">30 minutes</span> et bénéficiez
              d'une analyse personnalisée gratuite. Nos experts et nos systèmes
              automatisés auditeront votre situation en amont pour vous proposer
              des recommandations concrètes et actionnables dès le premier
              échange.
            </p>
            <a
              href="https://calendly.com/authenlink/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full"
            >
              <MagicButtonTwo
                title="Prendre rendez-vous"
                icon={<FaCalendarAlt />}
                position="right"
              />
            </a>
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
