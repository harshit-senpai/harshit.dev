import Link from "next/link";
import BlurFade from "./magicui/blur-fade";
import { DATA } from "@/data/data";
import { LinkPreview } from "./aceternity/link-preview";

const BLUR_FADE_DELAY = 0.3;

export default function Contact() {
  return (
    <section className="contact">
      <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
        <BlurFade delay={BLUR_FADE_DELAY * 16}>
          <div className="space-y-3">
            <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
              Contact
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Get in Touch
            </h2>
            <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Want to chat? Just shoot me a dm{" "}
              <LinkPreview
                url={DATA.contact.social.X.url}
                className="text-blue-500 relative underline decoration-wavy underline-offset-4 hover:underline"
              >
                with a direct question on X
              </LinkPreview>{" "}
            </p>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
