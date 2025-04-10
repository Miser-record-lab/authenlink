"use client";

import React, { useState } from "react";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';  
import 'react-toastify/dist/ReactToastify.css'; 

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
    else if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = "Adresse e-mail invalide";
    if (!formData.message) errors.message = "Le message est requis";

    setFormErrors(errors);
    return !Object.values(errors).some((error) => error !== "");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      try {
        const response = await fetch("https://n8n-railway-custom-production-743f.up.railway.app/webhook/message-website", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...formData,
            date: new Date().toISOString(),
          }),
        });

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
    <section className="w-full py-20 text-white">
      <div className="max-w-4xl mx-auto px-5 md:px-10">
        <div className="space-y-6 sm:p-8 p-2 rounded-lg shadow-lg">
          <h2 className="text-center text-4xl font-bold mb-8">Nous <span className="text-purple">Contacter</span></h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
              <div className="w-full">
                <label className="block text-lg font-medium mb-2">Prénom</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full p-3 border border-white/[0.2] rounded-md bg-black-200"
                  placeholder="Votre prénom"
                />
                {formErrors.firstName && <p className="text-red-500 text-sm">{formErrors.firstName}</p>}
              </div>
              <div className="w-full">
                <label className="block text-lg font-medium mb-2">Nom</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full p-3 border border-white/[0.2] rounded-md bg-black-200"
                  placeholder="Votre nom"
                />
                {formErrors.lastName && <p className="text-red-500 text-sm">{formErrors.lastName}</p>}
              </div>
            </div>
            <div>
              <label className="block text-lg font-medium mb-2">Adresse e-mail</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border border-white/[0.2] rounded-md bg-black-200"
                placeholder="Votre adresse e-mail"
              />
              {formErrors.email && <p className="text-red-500 text-sm">{formErrors.email}</p>}
            </div>
            <div>
              <label className="block text-lg font-medium mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 border border-white/[0.2] rounded-md bg-black-200"
                rows={6}
                placeholder="Votre message"
              />
              {formErrors.message && <p className="text-red-500 text-sm">{formErrors.message}</p>}
            </div>
            <div className="text-center">
              <MagicButton 
                title={isSubmitting ? "Envoi en cours..." : "Envoyer"}
                icon={<FaLocationArrow />}
                position="right"
              />
            </div>
          </form>
        </div>

        {/* Section de rendez-vous en dessous */}
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

export default ContactAndAppointment;
