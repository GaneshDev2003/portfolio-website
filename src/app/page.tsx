import About from "@/components/about";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Hero from "@/components/hero";
import { MainNav } from "@/components/main-nav";
import Projects from "@/components/projects";
import Research from "@/components/research";
import Image from "next/image";

export default function Home() {
  return (
     
    <main className = "bg-black-800">
      <MainNav ></MainNav>
      <div className = "min-h-screen flex-col justify-between">
      <Hero></Hero>
     <About></About>
     <Experience></Experience>
     <Research></Research>
     <Projects></Projects>
     <Contact></Contact>
      </div>
    
    </main>
    
  );
}
