import React from "react";
import ImagesGallery from "../components/Gallery/Gallery";

const About = () => {
  return (
    <section>
      {/* {Gallery Section Start} */}
      <section className="py-8 text-center px-6 md:px-12">
        <h1 className="text-[40px]  font-bold  ">
          Phòng trưng bày <span className="text-BaseColor">Của chúng tôi </span>
        </h1>
        <p className="text-lg leading-8 mb-8 text-gray-800">
          "Khám phá những điều kỳ diệu của du lịch trong bộ sưu tập của chúng tôi, một bức ảnh chụp nhanh về
          những cuộc phiêu lưu của TripsTravel."
        </p>
        <ImagesGallery />
      </section>
      {/* {Gallery Section Ends} */}
    </section>
  );
};

export default About;
