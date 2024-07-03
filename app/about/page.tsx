"use client";
import Image from "next/image";
import { GithubIcon, LeetcodeIcon, LinkedinIcon, EmailIcon } from "@/Icons";
import { ThemeContext } from "@/context";
import { useContext } from "react";

export default function AboutPage() {
  const { theme } = useContext(ThemeContext);

  return (
    <main className="flex gap-10  flex-col items-center justify-between">
      <div>
        <h1 className="font-bold md:text-4xl text-xl md:mb-6 mb-3 ">
          I&apos;m Nika Bedenashvili, I live in Georgia
        </h1>

        <p className="leading-loose">
          I am a full-stack web and mobile app developer with expertise in
          Node.js, React.js, Vue.js, and Laravel. Since 2021, I have been
          creating dynamic and scalable web applications, leveraging various
          frameworks and technologies to deliver high-quality solutions. I enjoy
          solving complex problems and continuously learning new skills. My
          passion lies in crafting high-quality code that adheres to best
          practices and industry standards. I am always seeking new challenges
          and opportunities to grow as a developer.
          <span className="underline"> bedena2000@gmail.com</span>.
          Collaborating with others is a great way to learn and grow, and
          I&apos;m always open to new ideas and feedback.
        </p>
      </div>
      <Image
        src="/about.png"
        alt="about page image"
        width={window.innerWidth > 520 ? 540 : 280}
        height={window.innerWidth > 520 ? 312 : 180}
        className="rounded-lg w-full h-auto md:h-80 xl:h-96 md:w-auto"
        priority
      />

      <div className="md:mb-7 mb-5">
        <div className="flex gap-3 md:gap-7 items-center">
          <a
            target="_blank"
            href="https://www.linkedin.com/in/nika-cuckiridze-387063228/"
            className="opacity-70 hover:opacity-100 transition-opacity flex flex-col items-center"
          >
            <LinkedinIcon theme={theme} />{" "}
            <span className="pt-2">LinkedIn</span>
          </a>
          <a
            target="_blank"
            href="https://github.com/nikaakin"
            className="opacity-70 hover:opacity-100 transition-opacity flex flex-col items-center"
          >
            <GithubIcon theme={theme} /> <span className="pt-2">Github</span>
          </a>

          <a
            target="_blank"
            href="https://leetcode.com/nikakin/"
            className="opacity-70 hover:opacity-100 transition-opacity flex flex-col items-center"
          >
            <LeetcodeIcon theme={theme} />{" "}
            <span className="pt-2">Leetcode</span>
          </a>

          <a
            target="_blank"
            href="mailto:nikacuckiridze47@gmail.com"
            className="opacity-70 hover:opacity-100 transition-opacity flex flex-col items-center"
          >
            <EmailIcon theme={theme} /> <span>Email</span>
          </a>
        </div>
      </div>
    </main>
  );
}
