import { DATA } from "@/data/data";
import BlurFade from "./magicui/blur-fade";
import { WorkCard } from "./WorkCard";

const BLUR_FADE_DELAY = 0.3;

const Other = () => {
  return (
    <section id="other">
      <div className="flex min-h-0 flex-col gap-y-3">
        <BlurFade delay={BLUR_FADE_DELAY * 7}>
          <h2 className="text-xl font-bold">Other</h2>
        </BlurFade>
        {DATA.other.map((other, id) => (
          <BlurFade key={other.title} delay={BLUR_FADE_DELAY * 8 + id * 0.05}>
            <WorkCard
              key={other.title}
              href={other.href}
              logoUrl={other.logoUrl}
              altText={other.title}
              title={other.title}
              period={`${other.start} - ${other.end}`}
              description={other.subtitle}
              type={'Other'}
            />
          </BlurFade>
        ))}
      </div>
    </section>
  );
};

export default Other;
