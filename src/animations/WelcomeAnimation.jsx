import React from "react";
import Lottie from "react-lottie";
import welcomeAnimation from "./welcome.json";

export const WelcomeAnimation = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: welcomeAnimation,
  };
  return (
    <div>
      <Lottie options={defaultOptions} width="100%" height="100%" />
    </div>
  );
};
