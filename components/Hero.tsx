import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DATA } from "@/data/data";

import { Github, LinkedinIcon, MapPin, Twitter } from "lucide-react";
import { Share } from "lucide-react";
import { Copy } from "lucide-react";

const BLUR_FADE_DELAY = 0.5;

const Hero = () => {
  return (
    <section id="hero" className="mb-3">
      <div className="mx-auto w-full max-w-2xl space-y-4">
        <div className="gap-2 flex justify-between">
          <div className="flex-col flex flex-1 space-y-1.5">
            <BlurFadeText
              delay={BLUR_FADE_DELAY}
              className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
              yOffset={8}
              text={`Hi, I'm ${DATA.name.split(" ")[0]} 👋`}
            />
            <BlurFadeText
              className="max-w-[600px] md:text-xl"
              delay={BLUR_FADE_DELAY}
              text={DATA.description}
            />
          </div>
          <BlurFade delay={BLUR_FADE_DELAY}>
            <Avatar className="size-28 border">
              <AvatarImage alt={DATA.name} src="/assets/me.jpg" />
              <AvatarFallback>{DATA.initials}</AvatarFallback>
            </Avatar>
          </BlurFade>
        </div>
        <div className="flex items-center gap-3 mb-2">
          <div className="flex gap-2 items-center">
            <BlurFade delay={BLUR_FADE_DELAY}>
              <MapPin className="h-5 w-5" />
            </BlurFade>
            <BlurFade delay={BLUR_FADE_DELAY}>
              <p className="sm:text-xs text-sm foont-semibold"> CG, India </p>
            </BlurFade>
          </div>
        </div>
        <BlurFade delay={BLUR_FADE_DELAY} className="mt-2">
          <div className="flex items-center max-w-sm justify-between gap-2">
            <div className="w-1/5 flex items-center justify-center text-black h-10 bg-white rounded-md">
              <Share className="h-5 w-5" />
            </div>
            <div className="w-4/5 h-10 flex items-center px-3 justify-center bg-white rounded-md">
              <p className="text-sm font-semibold text-black">
                miharshit2@gmail.com
              </p>
            </div>
            <div className="w-1/5 flex items-center justify-center text-black h-10 bg-white rounded-md">
              <Copy className="h-5 w-5" />
            </div>
          </div>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY}>
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 border-[2px] flex items-center justify-center rounded-md border-primary p-2">
              <LinkedinIcon className="w-5 h-5" />
            </div>
            <div className="h-10 w-10 border-[2px] flex items-center justify-center rounded-md border-primary p-2">
              <Github className="w-5 h-5" />
            </div>
            <div className="h-10 w-10 border-[2px] flex items-center justify-center rounded-md border-primary p-2">
              <Twitter className="w-5 h-5" />
            </div>
          </div>
        </BlurFade>
      </div>
    </section>
  );
};

export default Hero;
