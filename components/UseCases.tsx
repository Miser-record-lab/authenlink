// UseCases.tsx
import React from "react";
import EmailAndSalesTestimonials from "@/components/ui/EmailAndSalesTestimonials";

const UseCases = () => {
  return (
    <div className="pt-20" id="usecase">

      <div className="max-w-7xl mx-auto px-5 sm:px-10">
        <h2 className="text-center text-3xl sm:text-4xl text-white font-bold mb-6">
          Ce que nous <span className="text-purple">Effectuons</span> :
        </h2>

        {/* Insertion des composants de témoignages par catégorie */}
        <EmailAndSalesTestimonials />
      </div>
    </div>
  );
};

export default UseCases;
