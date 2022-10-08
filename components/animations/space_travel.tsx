import React from "react";
import Lottie from "react-lottie";
import * as animationData from "../../public/animations/travel.json";

function SpaceTravel() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return <Lottie options={defaultOptions} height={150} width={150} isClickToPauseDisabled={true} />;
}

export default SpaceTravel;