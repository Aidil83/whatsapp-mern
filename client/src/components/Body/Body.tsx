import React from "react";
import { Footer, Header } from "..";
import { BodyContainer, BodyWallpaper } from "./Body.styles";

const Body = () => {
  return (
    <>
      <BodyContainer>
        <Header />
        <BodyWallpaper />
        <Footer />
      </BodyContainer>
    </>
  );
};

export default Body;
