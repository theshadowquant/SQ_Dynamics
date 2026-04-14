import Nav from "../components/Nav";
import Hero from "../components/Hero";
import Metrics from "../components/Metrics";
import CaseStudies from "../components/CaseStudies";
import Services from "../components/Services";
import Portfolio from "../components/Portfolio";
import Team from "../components/Team";
import FinalCTA from "../components/FinalCTA";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main style={{ background: "#0B0B0F" }} className="min-h-screen text-white overflow-hidden">
      <Nav />
      <Hero />
      <Metrics />
      <CaseStudies />
      <Services />
      <Portfolio />
      <Team />
      <FinalCTA />
      <Footer />
    </main>
  );
}