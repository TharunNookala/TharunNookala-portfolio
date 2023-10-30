import Particles from "react-tsparticles";
import particlesConfig from "./config/particles-config";
import { loadFull } from "tsparticles";
import { useCallback } from "react";
import { ChildFriendlyRounded } from "@mui/icons-material";

const ParticlesBackground = ({ children }) => {
  const particlesInit = useCallback(async (engine) => {
    // console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    // await console.log(container);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      className="absolute z-[-10] h-[95%] w-[95%]"
      params={particlesConfig}
    >
      {ChildFriendlyRounded}
    </Particles>
  );
};

export default ParticlesBackground;
