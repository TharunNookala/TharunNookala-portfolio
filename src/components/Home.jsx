import ProfileImage from "../assets/profile-img.JPG";
import Resume from "../assets/TharunNookala.pdf";
import HeroSection from "./HeroSection";

const Home = () => {
  return (
    <HeroSection>
      <div name="home" className="h-full text-white py-4 px-4 flex flex-col">
        <div className="max-w-[1240px] h-full sm:h-[75vh] mx-auto grid md:grid-cols-2 sm:gap-4 items-center">
          <img
            className="w-[500px] mx-auto mt-[50px] md:mt-[30px] rounded-xl opacity-80 mix-blend-overlay hover:opacity-50"
            src={ProfileImage}
            alt="userphoto"
          />
          <div className="md:mt-[100px] h-fit">
            <p className="font-bold p-2 text-2xl">Hello! I'm</p>
            <h1 className="md:text-6xl lg:text-7xl text-4xl font-bold md:py-6 text-white">
              Tharun Nookala
            </h1>
            <p className="font-bold text-2xl">
              A Frontend Engineer <br />
              Currently working as SDE 1 @
              <a
                href="https://valmi.io"
                target="_blank"
                rel="noreferrer"
                className="text-rgb(229, 88, 55)"
              >
                {" "}
                valmi.io
              </a>
            </p>
            <a href={Resume} download>
              <button className="text-black bg-white w-[200px] hover:bg-black hover:text-white rounded-md font-medium my-6 mx-auto md:mx-0 py-5">
                Download CV
              </button>
            </a>
          </div>
        </div>
      </div>
    </HeroSection>
  );
};

export default Home;
