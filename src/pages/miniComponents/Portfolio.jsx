import { Button } from "@/components/ui/button";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Portfolio = () => {
  const [viewAll, setViewAll] = useState(false);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const getMyProjects = async () => {
      const { data } = await axios.get(
        "https://backend-porfolio-nine.vercel.app/api/v1/project/getall",
        { withCredentials: true }
      );
      setProjects(data.projects);
    };
    getMyProjects();

    // Set SEO metadata
    document.title = "Ali Raza's Portfolio | MERN Stack Projects";
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", "Explore Ali Raza's portfolio showcasing a collection of MERN stack projects. Discover projects in frontend and backend development.");
  }, []);

  return (
    <section aria-labelledby="portfolio-heading" className="w-full">
      <header className="relative mb-12">
        <h1
          id="portfolio-heading"
          className="hidden sm:flex gap-4 items-center text-[2rem] sm:text-[2.75rem] md:text-[3rem] 
          lg:text-[3.8rem] leading-[56px] md:leading-[67px] lg:leading-[90px] tracking-[15px] 
          mx-auto w-fit font-extrabold about-h1"
          style={{
            background: "hsl(222.2 84% 4.9%)",
          }}
        >
          MY{" "}
          <span className="text-tubeLight-effect font-extrabold">
            PORTFOLIO
          </span>
        </h1>
        <h1
          className="flex sm:hidden gap-4 items-center text-[2rem] sm:text-[2.75rem] 
          md:text-[3rem] lg:text-[3.8rem] leading-[56px] md:leading-[67px] lg:leading-[90px] 
          tracking-[15px] mx-auto w-fit font-extrabold about-h1"
          style={{
            background: "hsl(222.2 84% 4.9%)",
          }}
        >
          MY <span className="text-tubeLight-effect font-extrabold">WORK</span>
        </h1>
        <span className="absolute w-full h-1 top-7 sm:top-7 md:top-8 lg:top-11 z-[-1] bg-slate-200"></span>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4" role="list">
        {(viewAll ? projects : projects.slice(0, 9)).map((project) => (
          <Link to={`/project/${project._id}`} key={project._id} role="listitem">
            <img
              src={project.projectBanner?.url}
              alt={project.title}
              className="rounded-lg"
              loading="lazy"
            />
          </Link>
        ))}
      </div>
      {projects.length > 9 && (
        <div className="w-full text-center my-9">
          <Button className="w-52" onClick={() => setViewAll(!viewAll)}>
            {viewAll ? "Show Less" : "Show More"}
          </Button>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
