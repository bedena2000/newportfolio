import { GithubIcon, LeetcodeIcon, LinkedinIcon } from "@/Icons";

export const PersonalLinks = ({ theme }: { theme: string }) => {
  return (
    <div className="flex gap-3 md:gap-4 items-center">
      <a
        target="_blank"
        href="https://www.linkedin.com/in/nika-bedenashvili-4a187220b/"
        className="opacity-70 hover:opacity-100 transition-opacity"
      >
        <LinkedinIcon theme={theme} />
      </a>
      <a
        target="_blank"
        href="https://github.com/bedena2000"
        className="opacity-70 hover:opacity-100 transition-opacity"
      >
        <GithubIcon theme={theme} />
      </a>
      <a
        target="_blank"
        href="https://leetcode.com/u/user6519o/"
        className="opacity-70 hover:opacity-100 transition-opacity"
      >
        <LeetcodeIcon theme={theme} />
      </a>
    </div>
  );
};
