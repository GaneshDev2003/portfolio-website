import Link from "next/link"

import { cn } from "@/lib/utils"

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <nav
      className={cn("container flex items-center space-x-4 lg:space-x-6 mb-3", className)}
      {...props}
    >
      <Link
        href="/"
        className="font-medium transition-colors hover:text-primary"
      >
        Home
      </Link>
      <Link
        href="#about"
        className="font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        About
      </Link>
      <Link
        href="#experience"
        className="font-medium text-muted-foreground transition-colors hover:text-primary"
      >Experience</Link>
      <Link
        href="#project"
        className="font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Projects
      </Link>
      
      <Link
        href="#contact"
        className="font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Contact
      </Link>
    </nav>
  )
}