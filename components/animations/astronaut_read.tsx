import React from "react";
import Lottie from "react-lottie";
import * as animationData from "../../public/animations/read.json";

function Read() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return <Lottie options={defaultOptions} height={300} width={300} isClickToPauseDisabled={true} />;
}

export default Read;