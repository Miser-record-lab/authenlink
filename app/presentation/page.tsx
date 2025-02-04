import PresentationAuthority from "@/components/presentation/PresentationAuthority";
import PresentationCuriosity from "@/components/presentation/PresentationCuriosity";
import PresentationGuaranteeAndCTA from "@/components/presentation/PresentationGuaranteeAndCTA";
import PresentationHero from "@/components/presentation/PresentationHero";
import PresentationOffer from "@/components/presentation/PresentationOffer";
import PresentationPostScript from "@/components/presentation/PresentationPostScript";
import PresentationProblem from "@/components/presentation/PresentationProblem";
import PresentationProblem2 from "@/components/presentation/PresentationProblem2";
import PresentationSolution from "@/components/presentation/PresentationSolution";
import PresentationStatement from "@/components/presentation/PresentationStatement";
import PresentationUrgency from "@/components/presentation/PresentationUrgency";

export default function Presentation() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="w-full">
        <PresentationHero />
        <PresentationStatement />
        <PresentationProblem />
        <PresentationProblem2 />
        <PresentationSolution />
        <PresentationCuriosity />
        <PresentationAuthority />
        <PresentationOffer />
        <PresentationUrgency />  
        <PresentationGuaranteeAndCTA />
        <PresentationPostScript />
      </div>
    </main>
  );
}
