import React from "react";
import Lottie from "react-lottie";
import * as animationData from "../../public/animations/astronaut.json";

function Astronaut() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return <Lottie options={defaultOptions} height={50} width={100} isClickToPauseDisabled={true} />;
}

export default Astronaut;