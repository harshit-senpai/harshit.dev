"use client";
import BlurFade from "./magicui/blur-fade";
import { LinkPreview } from "./aceternity/link-preview";
import Image from "next/image";
import { VelocityScroll } from "./magicui/scroll-based-velocity";

const BLUR_FADE_DELAY = 0.3;

const About = () => {
  return (
    <section id="about">
      <BlurFade delay={BLUR_FADE_DELAY * 3}>
        <h2 className="text-xl font-bold">About</h2>
      </BlurFade>
      <BlurFade delay={BLUR_FADE_DELAY * 4}>
        <p className="prose max-w-full mt-1 text-pretty font-sans text-sm text-muted-foreground dark:prose-invert leading-7 mb-5">
          I&apos;m a product Builder and full stack developer currently based in
          Chhattisgarh, India. Pursuing my{" "}
          <span className="relative underline decoration-wavy underline-offset-4 hover:underline text-white decoration-white">
            Undergrad in Computer Science
          </span>
          , I&apos;m passionate about{" "}
          <LinkPreview
            className="relative underline decoration-wavy underline-offset-4 hover:underline"
            url="https://www.producthunt.com/@harshit_senpai"
          >
            building products
          </LinkPreview>
          , I&apos;m also a big fan of open source softwares - That&apos;s why{" "}
          <LinkPreview
            className="relative underline decoration-wavy underline-offset-4 hover:underline"
            url="https://github.com/harshit-senpai"
          >
            {" "}
            i build everything in Public
          </LinkPreview>
          . I mainly write code in Typescript
        </p>
      </BlurFade>
      <BlurFade delay={BLUR_FADE_DELAY * 4}>
        <VelocityScroll
          text="Your Friendly Neighbourhood Developer 🕸️"
          default_velocity={2}
          className="font-display text-center text-sm font-bold tracking-[-0.02em] text-black drop-shadow-sm dark:text-white md:text-lg md:leading-[1rem] mb-6"
        />
      </BlurFade>
      <BlurFade delay={BLUR_FADE_DELAY * 6}>
        <div className="hidden sm:block gap-4 w-full rounded-md">
          <Image
            src="/assets/profile.jpg"
            alt="me"
            height={200}
            width={200}
            className="rounded-md"
          />
        </div>
        <div className="block sm:hidden w-full rounded-md ">
          <Image
            src="/assets/profile.jpg"
            alt="me"
            height={150}
            width={150}
            className="rounded-md"
          />
        </div>
      </BlurFade>
    </section>
  );
};

export default About;
