import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
export default function About() {
    return (
      <section id = "about" className="container w-full pt-12 md:pt-24 lg:pt-32 xl:pt-48 pb-6 md:pb-12 lg:pb-16 xl:pb-24">
        <div className="py-12">
          <h1 className = "inline text-5xl font-bold">About me</h1>
          <h1 className = "inline text-5xl font-bold text-primary">.</h1>
        </div>
        <p>I&apos;m a 4th year undergrad from IIT Madras, pursuing a dual degree in Mechanical Engineering and Data Science. I&apos;m a Fullstack Developer with a passion for Machine Learning and AI. I developed a burning passion for coding in my highschool days with Java. After joining IIT Madras, I joined several programming clubs and built several real-world projects. I joined as an intern at Standard Chartered GBS, where I was tasked with a migration automation project in Python. Mesmerized by the whims of AI, I switched to a dual degree program in Data Science. My current endeavour is leveraging the power of AI through easy-to-use software products.</p>
      </section>
    )
  }
  
  