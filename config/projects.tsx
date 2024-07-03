import {
  ReactIcon,
  TypescriptIcon,
  SCSSIcon,
  NextjsIcon,
  LaravelIcon,
  TailwindIcon,
  NodeIcon,
  MongoIcon,
  ExpressIcon,
  JavaScriptIcon,
} from "@/Icons";
import { ProjectType } from "@/types";

export const projects: (theme: string) => ProjectType[] = (theme) => [
  {
    id: "1",
    name: "Movie quotes",
    createdAt: "2023-06-05",
    route: "movie-quotes",
    tags: [
      {
        imgUrl: <NextjsIcon theme={theme} key="next-movie-quotes" />,
        name: "Next.js",
      },
      {
        imgUrl: <LaravelIcon key="laravel-movie-quotes" />,
        name: "Laravel",
      },
      {
        imgUrl: <TypescriptIcon theme={theme} key="typescript-movie-quotes" />,
        name: "Typescript",
      },
      {
        imgUrl: <TailwindIcon key="tailwind-movie-quotes" />,
        name: "tailwind",
      },
    ],
    websiteUrl: "https://movie-quotes.nnteam.ge/",
    githubUrl: "https://github.com/nikaakin/movie-quotes-front",
    description:
      "Movie Quotes - Website where users can share their favourite movie quotes. Every user will be able to delete any number of quotes and movies they have made. Reacting or commenting to someones quote will result to notifying the receiver.",
    images: [
      {
        url: "/projects/movie-quotes/1.png",
        alt: "movie quotes 1",
      },
      {
        url: "/projects/movie-quotes/2.png",
        alt: "movie quotes 2",
      },
      {
        url: "/projects/movie-quotes/3.png",
        alt: "movie quotes 3",
      },
      {
        url: "/projects/movie-quotes/4.png",
        alt: "movie quotes 4",
      },
      {
        url: "/projects/movie-quotes/5.png",
        alt: "movie quotes 5",
      },
      {
        url: "/projects/movie-quotes/6.png",
        alt: "movie quotes 6",
      },
    ],
  },
  {
    id: "2",
    name: "AnimeBox",
    createdAt: "2022-11-05",
    route: "natours",
    tags: [
      {
        imgUrl: <NodeIcon theme={theme} key="node-natours" />,
        name: "Nodejs",
      },
      {
        imgUrl: <MongoIcon key="mongo-natours" />,
        name: "Mongo DB",
      },
      {
        imgUrl: <ExpressIcon theme={theme} key="express-natours" />,
        name: "Express.js",
      },
    ],
    websiteUrl: "https://animeboxdemo.netlify.app/",
    githubUrl: "https://github.com/bedena2000/AnimeBox",
    description:
      "AnimeBox is your ultimate anime destination where you can discover a vast collection of anime series and movies. Easily save your favorites, watch trailers, and explore new and popular titles. Whether you're a seasoned anime fan or new to the genre, AnimeBox offers a seamless and engaging experience for all your anime needs. ",
    images: [
      {
        url: "/projects/animebox/1.png",
        alt: "animebox 1",
      },
      {
        url: "/projects/animebox/2.png",
        alt: "animebox 2",
      },
      {
        url: "/projects/animebox/3.png",
        alt: "animebox 3",
      },
      {
        url: "/projects/animebox/4.png",
        alt: "animebox 4",
      },
      {
        url: "/projects/animebox/5.png",
        alt: "animebox 5",
      },
    ],
  },
  {
    id: "3",
    name: "World App",
    createdAt: "2023-05-05",
    route: "covid-questionare",
    tags: [
      {
        imgUrl: <ReactIcon theme={theme} key="react-covid-questionare" />,
        name: "React",
      },
      {
        imgUrl: (
          <TypescriptIcon theme={theme} key="typescript-covid-questionare" />
        ),
        name: "Typescript",
      },
      {
        imgUrl: <TailwindIcon key="tailwind-covid-questionare" />,
        name: "Tailwind",
      },
    ],
    websiteUrl: "https://worldappdemo.netlify.app/",
    githubUrl: "https://github.com/bedena2000/world-app",
    description:
      "WorldApp is your comprehensive guide to the world's countries. Discover detailed information about each country, including descriptions, flags, and other fascinating details. Whether you're a geography enthusiast or simply curious about the world, WorldApp provides an engaging and informative experience for exploring global destinations.",
    images: [
      {
        url: "/projects/worldapp/1.png",
        alt: "worldapp 1",
      },
      {
        url: "/projects/worldapp/2.png",
        alt: "worldapp 2",
      },
      {
        url: "/projects/worldapp/3.png",
        alt: "worldapp 3",
      },
      {
        url: "/projects/worldapp/4.png",
        alt: "worldapp 4",
      },
      {
        url: "/projects/worldapp/5.png",
        alt: "worldapp 5",
      },
    ],
  },
  {
    id: "4",
    name: "Fake NikeShop",
    createdAt: "2023-03-05",
    route: "cv-maker",
    tags: [
      {
        imgUrl: <ReactIcon theme={theme} key="react-cv-maker" />,
        name: "React",
      },
      {
        imgUrl: <TypescriptIcon theme={theme} key="typescript-cv-maker" />,
        name: "Typescript",
      },
      {
        imgUrl: <SCSSIcon key="scss-cv-maker" />,
        name: "SCSS",
      },
    ],
    websiteUrl: "https://fake-nike-e-commerce.netlify.app/",
    githubUrl: "https://github.com/bedena2000/fakenikeshop",
    description:
      "FakeNikeShop is your go-to site for exploring a variety of Nike-inspired products. Browse through a wide selection of items, find detailed descriptions, and enjoy an engaging shopping experience. Whether you're looking for the latest trends or classic styles, FakeNikeShop has you covered with all your Nike needs.",
    images: [
      {
        url: "/projects/fakenikeshop/1.png",
        alt: "fakenikeshop 1",
      },
      {
        url: "/projects/fakenikeshop/2.png",
        alt: "fakenikeshop 2",
      },
      {
        url: "/projects/fakenikeshop/3.png",
        alt: "fakenikeshop 3",
      },
      {
        url: "/projects/fakenikeshop/4.png",
        alt: "fakenikeshop 4",
      },
    ],
  },
  {
    id: "5",
    name: "forkify",
    createdAt: "2022-11-02",
    route: "forkify",
    tags: [
      {
        imgUrl: <JavaScriptIcon key="javascript-forkify" />,
        name: "javascript",
      },
    ],
    websiteUrl: "https://forkify-nikakin.netlify.app/",
    githubUrl: "https://github.com/nikaakin/forkify-js-course",
    description:
      "Forkify - recipe search application. Users can search for recipes and save them to their favourites.",
    images: [
      {
        url: "/projects/forkify/1.png",
        alt: "forkify photo 1",
      },
      {
        url: "/projects/forkify/2.png",
        alt: "forkify photo 2",
      },
      {
        url: "/projects/forkify/3.png",
        alt: "forkify photo 3",
      },
      {
        url: "/projects/forkify/4.png",
        alt: "forkify photo 4",
      },
    ],
  },
  {
    id: "6",
    name: "CSS Challenges",
    createdAt: "2023-04-02",
    route: "css-challenges",
    tags: [
      {
        imgUrl: <ReactIcon theme={theme} key="react-css-challenges" />,
        name: "React",
      },
      {
        imgUrl: (
          <TypescriptIcon theme={theme} key="typescript-css-challenges" />
        ),
        name: "Typescript",
      },
      {
        imgUrl: <SCSSIcon key="scss-css-challenges" />,
        name: "SCSS",
      },
    ],
    websiteUrl: "https://css-challenges-nikakin.netlify.app/",
    githubUrl: "https://github.com/nikaakin/CSS-Challenges",
    description:
      "CSS Challenges, from 100 days of CSS. I'm did few of them. I'm planning to do more.",
    images: [
      {
        url: "/projects/css-challenges/1.png",
        alt: "CSS Challenges photo 1",
      },
      {
        url: "/projects/css-challenges/2.png",
        alt: "CSS Challenges photo 2",
      },
    ],
  },
];
