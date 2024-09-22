import React from "react";
import HeroSection from "./HeroSection";
import HorizontalTimeline from "./Timeline";

const About = () => {
  return (
    <HeroSection>
      <div
        name="about"
        className="w-full h-full md:min-h-[800px] rounded-lg md:flex-col items-center justify-center p-2]"
      >
        <div className="py-2 my-2 mx-4 " data-aos="fade-up">
          <div className=" border-2 rounded-lg">
            <p className="text-[15px] lg:font-normal md:text-lg text-white p-4">
              Enthusiastic Full Stack Developer with 2.9 years of proven
              professional experience in crafting and optimizing responsive UI
              of websites. My expertise lies in technologies such as
              <span className="italic text-yellow-200">
                JavaScript, React JS, Next JS, TypeScript, Redux, Redux Toolkit,
                Material UI, Tailwind CSS, Node.js, Express.js and can handle
                databases with PostgreSQL, MongoDB.
              </span>
              <span>
                Currently building CX platform for e-commerce at valmi.io. Also
                learning and building Fullstack AI integrated projects. Out of
                Office you'll find me spending time with friends, binge watching
                movies, playing badminton, less-often reading books.
              </span>
            </p>
          </div>
        </div>

        <HorizontalTimeline />
      </div>
    </HeroSection>
  );
};

export default About;
