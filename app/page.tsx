import { Navigation } from "@/components/navigation";
import { Hero } from "@/components/hero";
import { Process } from "@/components/process";
import { Pricing } from "@/components/pricing";
import { FAQ } from "@/components/faq";
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
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
