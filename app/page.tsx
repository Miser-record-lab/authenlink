
import Chatbot from "@/components/ChatBot";
import ContactAndAppointment from "@/components/ContactAndAppointment";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import { BentoGridThirdDemo } from "@/components/GridTemplate";
import Hero from "@/components/Hero";
import Tools from "@/components/Tools";
import { FloatingNav } from "@/components/ui/floatingNav";
import Experience from "@/components/WayToWork";
import { navItems  } from "@/data/navbar";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className=" w-full">
        <FloatingNav navItems={navItems}/>
        <Hero />
        <BentoGridThirdDemo />
        <Features />
        <Experience />
        <ContactAndAppointment />
        <Footer />
        <Tools />
        <Chatbot />
      </div>
    </main>
  );
}
