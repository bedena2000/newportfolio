import { LIGHT_THEME } from "@/config";
import dynamic from "next/dynamic";
import Image from "next/image";

export const Introduction = ({ theme }: { theme: string }) => {
  return (
    <div className="mb-3 md:mb-5">
      <div className="mb-6 md:mb-8">
        <Image alt="avatar" src="/avatar.png" width={64} height={64} />
      </div>
      <div className="flex gap-8 md:gap-16 md:flex-row flex-col">
        <div className="basis-9/12">
          <h2 className="text-3xl font-bold md:mb-6 mb-4">
            Full-stack web and mobile app developer.
          </h2>
          <p className="md:mb-4 mb-2 font-light md:text-lg">
            I am a full-stack web and mobile app developer with expertise in
            Node.js, React.js, Vue.js, and Laravel. Since 2021, I have been
            creating dynamic and scalable web applications using a variety of
            frameworks and technologies.
          </p>
          <p className="font-light md:text-lg">
            I thrive on solving complex problems and am passionate about
            learning new skills. My focus is on writing high-quality code that
            adheres to best practices and industry standards. I am always on the
            lookout for new challenges and opportunities to grow as a developer.
          </p>
        </div>
        <div>
          {theme === LIGHT_THEME ? (
            <Image
              src="/keyboard_light.jpg"
              alt="keyboard"
              width={640}
              height={640}
              className="w-full rounded-lg h-auto rotate-3"
              priority
            />
          ) : (
            <Image
              src="/keyboard_dark.jpg"
              alt="keyboard"
              width={640}
              height={640}
              className="w-full rounded-lg h-auto rotate-3"
              priority
            />
          )}
        </div>
      </div>
    </div>
  );
};

export const DynamicIntroduction = dynamic(
  import("./Introduction").then((mod) => mod.Introduction),
  { ssr: false }
);
