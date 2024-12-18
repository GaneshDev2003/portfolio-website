import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="w-full pt-12 md:pt-24 lg:pt-32 xl:pt-48 pb-6 md:pb-12 lg:pb-16 xl:pb-24">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="inline text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Hi, I&apos;m{" "}
              </h1>
              <h1 className="inline text-3xl text-primary font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Ganesh S
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                AI Researcher. ML Engineer.
              </p>
            </div>
            <div className="w-full max-w-sm space-y-2"></div>
          </div>
          <div className="flex justify-center items-center mt-8">
      <div className="w-96 h-96 rounded-full overflow-hidden border-2 border-primary shadow-md">
        <img
          src="/images/ganeshs.jpeg" // Replace this with the path to your picture
          alt="Your Name"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
        </div>
      </div>
    </section>
  );
}
