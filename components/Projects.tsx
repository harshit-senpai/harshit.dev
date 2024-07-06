import { DATA } from "@/data/data";
import BlurFade from "./magicui/blur-fade";
import { ProjectCard } from "./Card";

const BLUR_FADE_DELAY = 0.3;

const Projects = () => {
  return (
    <section id="projects">
      <div className="space-y-12 w-full py-12">
        <BlurFade delay={BLUR_FADE_DELAY * 11}>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm font-semibold mb-1">
                My Projects
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Check Out my latest work
              </h2>
              <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                I love building stuff, here are some of my recent projects, from
                simple websites to full stack applications.
              </p>
            </div>
          </div>
        </BlurFade>
        <div className="grid gird-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
          {DATA.projects.map((project, i) => (
            <BlurFade key={i} delay={BLUR_FADE_DELAY * 12 + i * 0.05}>
              <ProjectCard
                href={project.href}
                key={project.title}
                title={project.title}
                description={project.description}
                dates={project.dates}
                tags={project.technologies}
                image={project.image}
                website={project.website}
                github={project.github}
              />
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
