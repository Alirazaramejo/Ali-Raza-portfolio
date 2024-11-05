import {
  ExternalLink,
  Facebook,
  Github,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
} from "lucide-react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import { Button } from "@/components/ui/button";
import axios from "axios";

const Hero = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    const getMyProfile = async () => {
      const { data } = await axios.get(
        "https://porfolio-backend-wheat.vercel.app/api/v1/user/portfolio/me",
        { withCredentials: true }
      );
      setUser(data.user);
    };
    getMyProfile();

    // Set SEO metadata
    document.title = "Ali Raza | MERN Stack Developer";
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", "Ali Raza is a skilled MERN stack developer and SMIT student, with expertise in frontend and backend development.");
  }, []);

  return (
    <header className="w-full">
      <section className="flex items-center gap-2 mb-2">
        <span className="bg-green-400 rounded-full h-2 w-2"></span>
        <p>Online</p>
      </section>
      <h1 className="overflow-x-hidden text-[1.3rem] sm:text-[1.75rem] md:text-[2.2rem] lg:text-[2.8rem] tracking-[2px] mb-4">
        Hey, I'm Ali Raza
      </h1>
      <h2 className="text-tubeLight-effect overflow-x-hidden text-[1.3rem] sm:text-[1.75rem] md:text-[2.2rem] lg:text-[2.8rem] tracking-[15px]">
        <Typewriter
          words={["MERN STACK DEVELOPER", "SMIT STUDENT", "FRONTEND DEVELOPER"]}
          loop={50}
          cursor
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </h2>
      <nav
        aria-label="Social media links"
        className="w-fit px-5 py-2 bg-slate-50 rounded-[20px] flex gap-5 items-center mt-4 md:mt-8 lg:mt-10"
      >
        {/* <Link to={"https://www.youtube.com/@CodeWithZeeshu"} target="_blank">
          <Youtube className="text-red-500 w-7 h-7" />
        </Link> */}
        <Link to={user?.instagramURL} target="_blank">
          <Instagram className="text-pink-500 w-7 h-7" />
        </Link>
        {/* <Link to={user?.facebookURL} target="_blank">
          <Facebook className="text-blue-800 w-7 h-7" />
        </Link> */}
        <Link to={user?.linkedInURL} target="_blank">
          <Linkedin className="text-sky-500 w-7 h-7" />
        </Link>
        <Link to={user?.twitterURL} target="_blank">
          <Twitter className="text-blue-800 w-7 h-7" />
        </Link>
      </nav>
      <div className="mt-4 md:mt-8 lg:mt-10 flex gap-3">
        <Link to={user?.githubURL} target="_blank">
          <Button className="rounded-[30px] flex items-center gap-2 flex-row">
            <Github />
            <span>Github</span>
          </Button>
        </Link>
        <Link to={user?.resume && user.resume.url} target="_blank">
          <Button className="rounded-[30px] flex items-center gap-2 flex-row">
            <ExternalLink />
            <span>Resume</span>
          </Button>
        </Link>
      </div>
      <p className="mt-8 text-xl tracking-[2px]">{user?.aboutMe}</p>
      <hr className="my-8 md:my-10" />
    </header>
  );
};

export default Hero;
