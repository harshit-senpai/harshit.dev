import { GlobeIcon } from "lucide-react";
import { Github } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import Markdown from "react-markdown";
import { Url } from "url";

interface CardProps {
  title: string;
  href?: string;
  description: string;
  dates: string;
  tags: readonly string[];
  link?: string;
  image?: string;
  video?: string;
  website: any;
  github: any;
  className?: string;
}

export function ProjectCard({
  title,
  href,
  description,
  dates,
  tags,
  link,
  image,
  website,
  github,
  className,
}: CardProps) {
  return (
    <Card className="flex flex-col overflow-hidden border hover:shadow-lg transition-all duration-300 ease-out h-full">
      <Link
        href={href || "#"}
        className={cn("block cursor-pointer", className)}
      >
        {image && (
          <Image
            src={image}
            alt={title}
            height={500}
            width={500}
            className="h-40 w-full overflow-hidden object-cover object-top"
          />
        )}
      </Link>
      <CardHeader className="px-2">
        <div className="space-y-1">
          <CardTitle className="mt-1 text-base">{title}</CardTitle>
          <time className="font-sans text-xs">{dates}</time>
          <div className="hidden font-sans text-xs underline print:visible">
            {link?.replace("https://", "").replace("www.", "").replace("/", "")}
          </div>
          <Markdown className="prose max-w-full text-pretty font-sans text-xs text-muted-foreground dark:prose-invert">
            {description}
          </Markdown>
        </div>
      </CardHeader>
      <CardContent className="mt-auto flex flex-col px-2">
        {tags && tags.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-1">
            {tags?.map((tag) => (
              <Badge
                className="px-2 rounded-md py-[0.2rem] text-[11px]"
                variant="secondary"
                key={tag}
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>
      <CardFooter className="px-2 mt-2 pb-3">
        <div className="flex flex-row flex-wrap items-start gap-1">
          <Link href={website} target="_blank">
            <Badge className="flex gap-2 px-1 py-1 rounded-md text-[10px]">
              <GlobeIcon className="w-3" />
              <p className="font-semibold">Website</p>
            </Badge>
          </Link>
          <Link href={github} target="_blank">
            <Badge className="flex gap-2 px-1 py-1 rounded-md text-[10px]">
              <Github className="w-3" />
              <p className="font-semibold">Github</p>
            </Badge>
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
}
