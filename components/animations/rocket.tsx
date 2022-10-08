import React from "react";
import Lottie from "react-lottie";
import * as animationData from "../../public/animations/rocket.json";

function Rocket() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return <Lottie options={defaultOptions} height={200} width={200} isClickToPauseDisabled={true} />;
}

export default Rocket;