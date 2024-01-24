import About from "@/components/about";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Hero from "@/components/hero";
import { MainNav } from "@/components/main-nav";
import Projects from "@/components/projects";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen flex-col  justify-between p-12">
     <MainNav ></MainNav>
     <Hero></Hero>
     <About></About>
     <Experience></Experience>
     <Projects></Projects>
     <Contact></Contact>
    </main>
  );
}
