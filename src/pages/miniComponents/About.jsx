import React, { useEffect } from "react";

const About = () => {
  useEffect(() => {
    document.title = "Ali Raza | Frontend Developer & Aspiring Full-Stack Developer";
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", "Ali Raza is a skilled frontend developer specializing in responsive, user-friendly web interfaces. Currently expanding his expertise in backend development to become a versatile full-stack developer.");
  }, []);

  return (
    <main className="w-full flex flex-col overflow-x-hidden">
      <section className="relative py-8 text-center">
        <h1
          className="flex gap-4 items-center text-[2rem] sm:text-[2.75rem] 
          md:text-[3rem] lg:text-[3.8rem] leading-[56px] md:leading-[67px] 
          lg:leading-[90px] tracking-[15px] mx-auto w-fit font-extrabold about-h1"
          style={{ background: "hsl(222.2 84% 4.9%)" }}
        >
          ABOUT <span className="text-tubeLight-effect font-extrabold">ME</span>
        </h1>
        <span className="absolute w-full h-1 top-7 sm:top-7 md:top-8 lg:top-11 z-[-1] bg-slate-200"></span>
      </section>
      <section className="text-center">
        <p className="uppercase text-xl text-slate-400">
          Allow me to introduce myself.
        </p>
      </section>
      <section className="my-8 sm:my-20 grid md:grid-cols-2 gap-14">
        <div className="flex justify-center items-center">
          <img
            src="/me.JPG"
            alt="Ali Raza - Frontend Developer"
            className="bg-white p-2 sm:p-4 rotate-[25deg] h-[240px] sm:h-[340px] md:h-[350px] lg:h-[450px]"
          />
        </div>
        <div className="flex justify-center flex-col tracking-[1px] text-xl gap-5">
          <p>
            Ali Raza is a skilled frontend developer with a keen eye for creating dynamic, responsive, and visually appealing web interfaces. With experience in React, Tailwind CSS, and various UI libraries, Ali has a strong foundation in crafting seamless user experiences and designs that are both functional and engaging. His work demonstrates attention to detail and a commitment to providing users with intuitive and accessible interfaces.
          </p>
          <p>
            Currently, Ali is diving into backend development to expand his skill set and take on full-stack roles in web development. This shift allows him to understand and control the entire application workflow, from the front-facing visuals to the underlying server-side logic. By learning technologies like Express.js, Node.js, and MongoDB, he is equipping himself to build robust APIs, manage databases, and handle server operations.
          </p>
        </div>
      </section>
      <section className="text-center tracking-[1px] text-xl px-4">
        <p>
          Ali’s transition to full-stack development reflects his ambition to become a versatile developer capable of managing every layer of an application. This newfound knowledge not only enhances his technical abilities but also positions him to create more cohesive, well-rounded projects that offer optimized performance, security, and functionality across all aspects.
        </p>
      </section>
    </main>
  );
};

export default About;
