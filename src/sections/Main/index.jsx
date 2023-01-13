import React from "react";
import { RocketAnimation } from "../../animations/RocketAnimation";
import { WelcomeAnimation } from "../../animations/WelcomeAnimation";

export const Main = () => {
  return (
    <>
      <div
        style={{
          backgroundColor: "#000",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100vh",
          flexDirection: "column",
        }}
      >
        <div>
          <h1
            style={{
              color: "#fff",
              marginBottom: "50px",
              maxWidth: "420px",
              fontWeight: "bold",
            }}
          >
            Hey There 👋, I'm{" "}
            <span style={{ color: "#682EEF" }}>Marcelo Bracet!</span>
          </h1>
          <h1 style={{ color: "#fff", maxWidth: "420px", fontWeight: "bold" }}>
            Using Lottie with React JS ⚛️
          </h1>
          <RocketAnimation />
        </div>
      </div>
      <div
        style={{ width: "100%", height: "100vh", backgroundColor: "#682EEF" }}
      >
        <div
          style={{
            paddingTop: "30px",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <WelcomeAnimation />
        </div>
      </div>
    </>
  );
};
