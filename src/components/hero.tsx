
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export default function Hero() {
  return (
    <section className="w-full pt-12 md:pt-24 lg:pt-32 xl:pt-48 pb-6 md:pb-12 lg:pb-16 xl:pb-24">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            
        
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="inline text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Hi, I&apos;m </h1>
              <h1 className="inline text-3xl text-primary font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Ganesh S
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                Fullstack Developer. ML Enthusiast.     
              </p>
            </div>
            <div className="w-full max-w-sm space-y-2">
              <form className="flex space-x-2">
                
                <Button className = "text-xl p-5 rounded-lg"><a target = "_blank" href = "https://drive.google.com/file/d/1IGqX7p3St5G_PCGPdHUTFCj06y4uoVo4/view?usp=sharing">Resume</a></Button>
              </form>
            </div>
          </div>
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative" style={{width: '450px', height: '450px', position: 'relative'}}>
  <Image
    alt='Mountains'
    src='/images/hero-image.png'
    layout='fill'
    objectFit='contain'
  />
</div>
        </div>
      </div>
    </section>
  )
}

