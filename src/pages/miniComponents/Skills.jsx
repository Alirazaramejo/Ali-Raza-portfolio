import { Card } from "@/components/ui/card";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Skills = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const getMySkills = async () => {
      const { data } = await axios.get(
        "https://backend-porfolio-nine.vercel.app/api/v1/skill/getall",
        { withCredentials: true }
      );
      setSkills(data.skills);
    };
    getMySkills();

    // Set SEO metadata
    document.title = "Ali Raza's Skills | Full Stack Developer Expertise";
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", "Explore Ali Raza's diverse skill set in web development, including expertise in frontend, backend, and full-stack development technologies.");
  }, []);

  return (
    <section aria-labelledby="skills-heading" className="w-full flex flex-col gap-8 sm:gap-12">
      <header className="text-center">
        <h1
          id="skills-heading"
          className="text-tubeLight-effect text-[2rem] sm:text-[2.75rem] md:text-[3rem] 
          lg:text-[3.8rem] tracking-[15px] dancing_text mx-auto w-fit"
        >
          SKILLS
        </h1>
      </header>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4" role="list">
        {skills.map((skill) => (
          <Card
            className="h-fit p-7 flex flex-col justify-center items-center gap-3"
            key={skill._id}
            role="listitem"
          >
            <img
              src={skill.svg?.url}
              alt={`${skill.title} icon`}
              className="h-12 sm:h-24 w-auto"
              loading="lazy"
            />
            <p className="text-muted-foreground text-center">
              {skill.title}
            </p>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Skills;
