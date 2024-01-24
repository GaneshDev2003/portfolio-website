import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Icons } from "./icons";
import Image from "next/image";
import Link from "next/link";
export interface ProjectType {
  title: string;
  description: string;
  image: string;
  tags: string[];
  gitHubLink: string;
  externalLink: string;
}
export default function Project(props: ProjectType) {
  return <Card>
    <CardHeader>
      <CardTitle className="text-xl font-semibold">{props.title}</CardTitle>

    </CardHeader>
    <CardContent>
      <div>
        <div
          className="h-52 w-92 md:h-72 md:w-128 rounded-xl relative group"
          style={{ background: `url(${props.image})`, backgroundSize: "cover", backgroundPosition: "center" }}
        >
          <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 ">
            {
              (props.gitHubLink !== "") ?
                <Link
                  target="_blank"
                  href={props.gitHubLink}
                  className="h-14 w-14 mr-2 relative hover:border-white group/link"
                >
                  <Icons.gitHub className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
                </Link> : <div></div>
            }

            <Link
              target="_blank"
              href={props.externalLink}
              className="h-14 w-14 mr-2  relative hover:border-white group/link"
            >
              <Icons.externalLink className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
            </Link>
          </div>
        </div>

      </div>
      <div className="flex m-2 justify-center">
        <div className="flex flex-wrap justify-center space-x-2 mb-4">
          {
            (props.tags.map((tag, index) => (
              <div key= {index} className="font-light bg-primary text-white m-1 px-3 py-0.5 rounded-full">
                <p>{tag}</p>
              </div>
            )))
          }
        </div>
      </div>

      <p>{props.description}</p>
    </CardContent>
  </Card>
}