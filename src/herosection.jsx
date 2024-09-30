import React from "react";
import Bike from "./assets/fun-cartoon-casual-character-copy 1.png";
import line from "./assets/Vector 6.png";
import line2 from "./assets/Vector 5.png";
import line3 from "./assets/Vector 4.png";

function HeroSection() {
  return (
    <div className="mt-5">
      <div className="container col-xxl-8 px- py-5 ">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-12  col-lg-6 position-relative   my-5 py-5 align-items-canter">
            <img src={line} className="   img-fluid  " alt="Bike" />
            <img
              src={line3}
              className="position-absolute line-2   img-fluid  "
              alt="Bike"
            />
            <img
              src={line2}
              className="position-absolute line   img-fluid  "
              alt="Bike"
            />
            <img
              src={Bike}
              className=" position-absolute line-3   img-fluid  "
              alt="Bike"
            />
          </div>
          <div className="col-lg-6 my-5 py-5">
            <h1 className="display-6 text-body-emphasis lh-1 mb-3">
              Fair price ride
            </h1>
            <h1 className="display-4 fw-bold text-body-emphasis lh-1 mb-3">
              Rent our<span className="text-warning ms-3">Scooter</span>
            </h1>
            <p className="  text-body-emphasis  mb-3">
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
