import React from "react";
import img3 from "../media/img3.png";
import img4 from "../media/img4.png";
import img5 from "../media/img5.png";

const Prodinfo = () => {
  return (
    <>
      <section className="handlebar">
        <div className="handlebar_wrapper">
          <h2>Handle Bar</h2>
          <div>
            A telescopic handle is used for steering applications which can be
            reduced in size due it’s telescopic capabilities and the handle fold
            too further reducing the space occupied by the scooter.
          </div>
          <img src={img3} alt="" />
        </div>
      </section>

      <section className="handlebar">
        <div className="handlebar_wrapper">
          <h2>Main Frame</h2>
          <div>
            <ul>
              <li>
                Main Frame is the main component of the Scooter onto which
                wheels and other components are fitted. The material selected
                for the mainframe is Aluminum 6061 T6. The frame was supported
                with two fixed supports one at the rear suspension bearing
                housing and one at the front folding pivot point. A load of 3000
                N was applied at the center of the platform simulating human
                load.
              </li>
              <li>
                Overall factor of safety of 3 was taken while performing
                simulations and calculations.
              </li>
            </ul>
          </div>
          <img src={img4} alt="" style={{ paddingTop: "20px" }} />
        </div>
      </section>
      <section className="handlebar">
        <div className="handlebar_wrapper">
          <h2>Board Sketch and Dimensions</h2>

          <img
            src={img5}
            alt=""
            style={{ paddingTop: "20px" }}
            className="boardsketch"
          />
        </div>
      </section>
    </>
  );
};

export default Prodinfo;
