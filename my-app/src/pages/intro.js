import React from "react";
import img1 from "../media/img1.png";
import img2 from "../media/img2.png";

const Intro = () => {
  return (
    <>
      <section class="intro">
        <div class="heading">
          <h1 style={{ textAlign: "center" }}>
            Electric Assisted Foldable Kick Scooter
          </h1>
        </div>
        <div class="homepage_img">
          <img src={img1} class="rounded float-start" alt="..." />
          <img src={img2} class="rounded float-end" alt="..." />
        </div>
      </section>
    </>
  );
};

export default Intro;
