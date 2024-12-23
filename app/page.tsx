import AppointmentAndQuestions from "@/components/AandQ";
import Chatbot from "@/components/ChatBot";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { TabsDemo } from "@/components/TabsDemo";
import Tools from "@/components/Tools";
import { FloatingNav } from "@/components/ui/floatingNav";
import WorkTogether from "@/components/WorkTogether";
import { navItems  } from "@/data/navbar";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className=" w-full">
        <FloatingNav navItems={navItems}/>
        <Hero />
        <Features />
        <WorkTogether />
        <AppointmentAndQuestions />
        <TabsDemo />
        <Contact />
        <Footer />
        <Tools />
        <Chatbot />
      </div>
    </main>
  );
}
