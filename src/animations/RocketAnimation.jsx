import React from "react";
import Lottie from "react-lottie";
import rocketAnimation from "./rocket.json";

export const RocketAnimation = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: rocketAnimation,
  };

  return (
    <div
      style={{
        width: "400px",
        height: "400px",
      }}
    >
      <Lottie
        options={defaultOptions}
        isPaused={false}
        isStopped={false}
        direction={1}
        speed={1}
        w="100%"
        h="100%"
      />
    </div>
  );
};
