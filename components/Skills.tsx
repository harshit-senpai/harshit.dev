import React from "react";
import BlurFade from "./magicui/blur-fade";
import { DATA } from "@/data/data";
import { Badge } from "@/components/ui/badge";

const BLUR_FADE_DELAY = 0.3;

const Skills = () => {
  return (
    <section id="skills">
      <div className="flex min-h-0 flex-col gap-y-3">
        <BlurFade delay={BLUR_FADE_DELAY * 9}>
          <h2 className="text-xl font-bold">Skills</h2>
        </BlurFade>
        <div className="flex flex-wrap gap-1.5">
          {DATA.skills.map((skill, i) => (
            <BlurFade key={i} delay={BLUR_FADE_DELAY * 10 + i * 0.05}>
              <Badge>{skill}</Badge>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
