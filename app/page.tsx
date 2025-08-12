import { Navigation } from "@/components/navigation";
import { Hero } from "@/components/hero";
import { Process } from "@/components/process";
import { Pricing } from "@/components/pricing";
import { FAQ } from "@/components/faq";
import { Templates } from "@/components/templates";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
// import { HeroAlt } from "@/components/hero-alt";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Process />
      <Pricing />
      <Templates />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
