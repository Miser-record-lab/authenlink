"use client";

import React, {  useEffect } from "react";

const AppointmentAndQuestions = () => {

  useEffect(() => {
    // Charger le script Calendly après le montage du composant
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Supprimer le script quand le composant est démonté
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="w-full py-20 bg-black-100 text-white" id="rendez-vous">
      <div className="max-w-7xl mx-auto px-5 sm:px-10">
        <h2 className="text-center text-3xl sm:text-4xl font-bold mb-8">
          Prendre <span className="text-purple">Rendez-vous</span>
        </h2>
        <p className="text-center text-lg text-white mb-12">
          Nous échangerons pendant 30 minutes sur les <span className="text-purple">besoins</span> de votre entreprise et les <span className="text-purple">actions</span> que vous souhaiteriez mettre en place.
        </p>


          {/* Calendly Appointment Section */}
            <div className="flex justify-center">
              <div
                className="calendly-inline-widget border border-white/[0.2] rounded-lg shadow-lg overflow-hidden"
                data-url="https://calendly.com/authenlink/30min?hide_event_type_details=1&hide_gdpr_banner=1"
                style={{ minWidth:"500px", maxHeight: "700px" , minHeight: "500px"}}
              ></div>
            </div>
          </div>

    </section>
  );
};

export default AppointmentAndQuestions;


