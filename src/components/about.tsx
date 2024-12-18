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
        <p>I&apos;m a final year undergrad from IIT Madras, pursuing a dual degree with Masters in Data Science and Bachelors in Mechanical Engineering. I have a deep passion for research and appliation in AI and Machine Learning. </p>
      </section>
    )
  }
  
  