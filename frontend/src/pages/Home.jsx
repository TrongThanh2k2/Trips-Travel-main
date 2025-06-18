/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import "tailwindcss/tailwind.css";
import card01 from "../assets/images/gallery-01.jpg";
import card02 from "../assets/images/gallery-02.jpg";
import card03 from "../assets/images/gallery-03.jpg";
import icon01 from "../assets/images/icon01.png";
import icon02 from "../assets/images/icon02.png";
import icon03 from "../assets/images/icon03.png";
import SearchBar from "../shared/searchBar/SearchBar";
import ServicesList from "../components/services/ServicesList";
import FeaturedTourList from "../components/featruredTour/FeaturedTourList";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import FaqList from "../components/Faq/FaqList";
import Testimonials from "../components/Testimonials/Testimonials";
import faqImg from "../assets/images/experience.png";
import ImagesGallery from "../components/Gallery/Gallery";

const Home = () => {
  return (
    <>
      <div className="min-h-screen bg-cover md:pt-4 px-6 md:px-12 bg-center">
        {/* {Search Section Starts} */}
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <div className="my-8">
              <h1 className="text-[33px] font-cursiveFont text-center md:text-[40px] md:text-start font-bold mb-4 ">
                Plan Your Perfect Trip with{" "}
                <span className="text-BaseColor text-[40px] font-cursiveFont">
                  TripsTravel
                </span>
              </h1>
              <p className="text-lg leading-8 text-gray-800 hidden md:block">
                "Chào mừng đến với TripsTravel, điểm đến lý tưởng cho những
                cuộc phiêu lưu khó quên! Khám phá nhiều điểm đến đa dạng, lập kế hoạch
                liền mạch và bắt đầu hành trình đáng nhớ trong đời. Khám phá
                những nơi lưu trú được lựa chọn kỹ lưỡng, kết nối với những du khách có cùng chí hướng,
                và tạo nên những kỷ niệm đáng nhớ. Cuộc phiêu lưu tiếp theo của bạn đang chờ đón với
                TripsTravel!"
              </p>

              <p className="mobpara md:hidden ">
                "Chào mừng đến với TripsTravel, điểm đến lý tưởng cho những
                cuộc phiêu lưu khó quên! Khám phá nhiều điểm đến đa dạng, lập kế hoạch
                eslint-disable-next-line react/no-unescaped-entities
                liền mạch và bắt đầu hành trình đáng nhớ trong đời."
              </p>
            </div>
          </div>
          <div className="gap-4 grid grid-cols-3 min-h-[200px]">
            <div className="rounded-lg my-8 overflow-hidden">
              <img src={card01} className="object-cover h-full" alt="" />
            </div>

            <div className="rounded-lg  overflow-hidden">
              <img src={card02} className="object-cover h-full" alt="" />
            </div>

            <div className="rounded-lg my-8 overflow-hidden">
              <img src={card03} className="object-cover h-full" alt="" />
            </div>
          </div>
        </div>
        <SearchBar />
      </div>

      {/* {Services Section Starts} */}
      <section className="pb-12 px-6 md:px-12">
        <div className="container mx-auto mt-8 flex-col flex md:flex-row">
          <div className="mb-6 flex-shrink-0 mx-4 flex-1 min-w-[30%]">
            <h2 className="text-[33px] md:text-[40px] font-cursiveFont font-bold mb-4 text-center">
              Our{" "}
              <span className="text-BaseColor text-[43px] font-cursiveFont">
                Best Services
              </span>
            </h2>
            <p className="para md:text-lg md:leading-8 md:text-start md:text-gray-800">
              "Trao quyền cho hành trình của bạn: Dịch vụ vô song được thiết kế riêng để nâng cao
              Trải nghiệm của bạn."
            </p>
            {/* Add Slider Component or Carousel Component if needed */}
          </div>
          <ServicesList className="flex-grow" />
        </div>
      </section>

      {/* {Gallery Section Start} */}
      <section className="py-8 text-center px-6 md:px-12">
        <h1 className="text-[33px] md:text-[40px] font-cursiveFont font-bold mb-4 text-center">
          Phòng trưng bày{" "}
          <span className="text-BaseColor text-[40px] font-cursiveFont">
            Của chúng tôi
          </span>
        </h1>
        <p className="text-lg leading-8 mb-8 text-gray-800">
          "Khám phá những điều kỳ diệu của du lịch trong bộ sưu tập của chúng tôi, một bức ảnh chụp nhanh về
          những cuộc phiêu lưu của TripsTravel."
        </p>
        <ImagesGallery />
      </section>
      {/* {Gallery Section Ends} */}
      <section className="min-h-screen py-8 px-6 md:px-12">
        <h1 className="text-[40px] md:text-[40px] font-cursiveFont font-bold mb-4 text-center text-BaseColor">
          Chuyến tham quan nổi bật
        </h1>
        <p className="para md:text-lg md:leading-8 md:text-gray-800">
          "Bắt đầu những chuyến đi khó quên: Khám phá các tour du lịch nổi bật của chúng tôi, nơi
          Cuộc phiêu lưu gặp gỡ những trải nghiệm phi thường."
        </p>
        <div className="">
          <FeaturedTourList />
        </div>
      </section>
      {/* {Featured seactiton ends} */}

      {/* {Testimonials section start} */}
      <section className=" md:max-h-[550px]">
        <div className="py-8 px-6 md:px-12">
          <div className="mx-auto text-center xl:w-[470px]">
            <h1 className="text-[33px] md:text-[40px] font-cursiveFont font-bold mb-4 text-center ">
              Đánh giá {" "}
              <span className="text-BaseColor text-[40px] font-cursiveFont ">
                Của chúng tôi
              </span>
            </h1>
            <p className="text-lg font-paraFont font-bold leading-8 mb-8 text-gray-800">
              "Hãy đọc những gì du khách của chúng tôi nói bằng chính lời của họ. 
              Những câu chuyện có thật, những trải nghiệm có thật."
            </p>
          </div>
          <Testimonials />
        </div>
      </section>
      {/* {Testimonials section ends} */}

      {/* {faq Section Start} */}
      <section>
        <div className="px-6 md:px-12 py-6">
          <div className="flex justify-between gap-[50px] lg:gap-0">
            <div className="w-1/2 hidden md:block">
              <img src={faqImg} alt="" />
            </div>

            <div className="w-full md:w-1/2">
              <h2 className="text-3xl text-BaseColor font-cursiveFont  font-bold text-center">
                Câu hỏi thường gặp.
              </h2>

              <FaqList />
            </div>
          </div>
        </div>
      </section>
      {/* {faq Section ends} */}
    </>
  );
};

export default Home;
