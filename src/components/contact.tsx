import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { Github, LinkedinIcon, MailIcon, PhoneCallIcon } from "lucide-react";

export default function Contact(){
    return (
        <section id= "contact" className="w-full pt-12 md:pt-24 lg:pt-32 xl:pt-48 pb-6 md:pb-12 lg:pb-16 xl:pb-24">
                <div className = "container px-4 md:px-6 py-12 md:py-18">
                <h1 className = "inline text-5xl font-bold">Let&apos;s Work Together</h1>
                <h1 className = "inline text-5xl font-bold text-primary">.</h1>
                </div>
                
                <div className="flex flex-col gap-y-4 xl:gap-y-14 container">
                    <div className="flex items-center gap-x-4">
                        <MailIcon className = "text-primary" size = {16}></MailIcon>
                        <a target = "_blank" href = "mailto:ganeshsenrayan@outlook.com">ganeshsenrayan@outlook.com</a>
                    </div>
                    <div className="flex items-center gap-x-4">
                        <PhoneCallIcon className = "text-primary" size = {16}></PhoneCallIcon>
                        <a target = "_blank" href = "https://wa.me/+919080441842">+91 90804 41842</a>
                    </div>
                    <div className="flex items-center gap-x-4">
                        <LinkedinIcon className = "text-primary" size = {16}></LinkedinIcon>
                        <a target = "_blank" href= "https://www.linkedin.com/in/ganesh-s-44082220b">linkedin.com/in/ganesh-s-44082220b</a>
                    </div>
                    <div className="flex items-center gap-x-4">
                        <Github className = "text-primary" size = {16}></Github>
                        <a target = "_blank" href= "https://www.github.com/GaneshDev2003">github.com/GaneshDev2003</a>
                    </div>
                </div>
        </section>
    )
}