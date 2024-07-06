"use client";
import { FC, useRef } from "react";
import Image from "next/image";

import { useScroll, useTransform, motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface Props {
  classes?: string;
}

const ZoomParallax: FC<Props> = ({ classes }) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const scale1 = useTransform(scrollYProgress, [0, 1], [1, 4]);
  const scale2 = useTransform(scrollYProgress, [0, 1], [1, 5]);
  const scale3 = useTransform(scrollYProgress, [0, 1], [1, 6]);
  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 8]);
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 9]);

  const pictures = [
    {
      src: "/assets/me2.jpg",
      scale: scale1,
      classes: "relative w-[25%] h-[25%] rounded-full",
    },
    {
      src: "/assets/profile.jpg",
      scale: scale2,
      classes: "relative top-[-30%] left-[5%] w-[35%] h-[30%] rounded-full",
    },
    {
      src: "/assets/api.jpg",
      scale: scale3,
      classes: "relative top-[-29%] left-[-25%] w-[20%] h-[28%] rounded-full",
    },
    {
      src: "/assets/oss.jpg",
      scale: scale2,
      classes: "relative left-[27.5%] w-[25%] h-[25%] rounded-full",
    },
    {
      src: "/assets/stage.JPG",
      scale: scale3,
      classes: "relative left-[-27.5%] w-[25%] h-[25%] rounded-full",
    },
    {
      src: "/assets/hack.jpg",
      scale: scale4,
      classes: "relative top-[27.5%] left-[5%] w-[20%] h-[25%] rounded-full",
    },
    {
      src: "/assets/me.jpg",
      scale: scale5,
      classes: "relative top-[22.5%] left-[25%] w-[15%] h-[15%] rounded-full",
    },
  ];

  return (
    <section
      ref={container}
      className={cn("relative h-[200vh] w-full", classes)}
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        {pictures.map(({ src, scale, classes }, index) => {
          return (
            <motion.div
              key={index}
              style={{ scale }}
              className="absolute top-0 flex h-full w-full items-center justify-center"
            >
              <div className={classes}>
                <Image
                  src={src}
                  fill
                  objectFit="cover"
                  alt="image"
                  className="rounded-sm"
                />
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default ZoomParallax;
