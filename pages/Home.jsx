import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
// images
import banner1 from "../public/images/banner-1.jpg";
import a from "../public/images/A1.jpg";
//images end
//component st
import TypewriteR from "../component/home Componet/TypewriteR";
import { HomeNPills } from "../component/home Componet/HomeNPills";
import { HomeIconButton } from "../component/home Componet/HomeIconButton";
import PropertyCard from "../component/PropertyCard";
import ListSet from "../component/ListsComoment/listSet";
//component end
///swiper import
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

/// swiper end

/////////
export const Home = () => {
  return (
    <>
      <div className="position-absolute w-100 vh-100 top-0 start-0 z-n1">
        <img
          src={banner1}
          className=" w-100 object-fit-cover vh-100 "
          alt="..."
        />
      </div>
      <section>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="row align-content-center vh-100 w-100 ">
                <div className="col-12">
                  <TypewriteR />
                </div>
                <HomeNPills />
              </div>
            </div>
            <HomeIconButton />

            {/* swiper */}

            <div className="mt-2">
              <div className="text-center text-dark  bg-white">
                <h3 className="">Featured Properties</h3>
                <p className="">
                  Lorem ipsum dolor sit
                  <hr className="text-center" />
                </p>
              </div>
              <Swiper
                className="pb-5"
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={0}
                slidesPerView={3}
                pagination={{ clickable: true }}
                onSwiper={swiper => console.log(swiper)}
                onSlideChange={() => console.log("slide change")}
                breakpoints={{
                  1400: {
                    slidesPerView: 4,
                    spaceBetween: 15,
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 15,
                  },
                  992: {
                    slidesPerView: 3,
                    spaceBetween: 15,
                  },
                  540: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                  },
                  320: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                  },
                }}>
                <SwiperSlide>
                  <div>
                    <PropertyCard
                      style={{ width: "30rem", margin: "1rem" }}
                      properyPic={a}
                      propetyPrice={"$300,200"}
                      propertyCategory={"House"}
                      propertTitle={"Modern Apartments"}
                      propertAddress={
                        "1421 San Pedro St, Los Angeles, CA 90015"
                      }
                      propertybed={2}
                      propertyBath={2}
                      propertySq={4000}
                      agentName={"Johnathan Doe 2"}
                      agentCategory={"Estate Agents 2"}
                      showAddFavorite={true}
                      showHot={false}
                      forRent={false}
                      forSale={true}
                    />
                  </div>
                </SwiperSlide>{" "}
                <SwiperSlide>
                  <div>
                    <PropertyCard
                      properyPic={a}
                      propetyPrice={"$300,200"}
                      propertyCategory={"House"}
                      propertTitle={"Modern Apartments"}
                      propertAddress={
                        "1421 San Pedro St, Los Angeles, CA 90015"
                      }
                      propertybed={2}
                      propertyBath={2}
                      propertySq={4000}
                      agentName={"Johnathan Doe 2"}
                      agentCategory={"Estate Agents 2"}
                      showAddFavorite={true}
                      showHot={true}
                      forRent={true}
                      forSale={false}
                    />
                  </div>
                </SwiperSlide>{" "}
                <SwiperSlide>
                  <div>
                    <PropertyCard
                      properyPic={a}
                      propetyPrice={"$300,200"}
                      propertyCategory={"House"}
                      propertTitle={"Modern Apartments"}
                      propertAddress={
                        "1421 San Pedro St, Los Angeles, CA 90015"
                      }
                      propertybed={2}
                      propertyBath={2}
                      propertySq={4000}
                      agentName={"Johnathan Doe 2"}
                      agentCategory={"Estate Agents 2"}
                      showAddFavorite={true}
                      showHot={true}
                      forRent={true}
                      forSale={false}
                    />
                  </div>
                </SwiperSlide>{" "}
                <SwiperSlide>
                  <div>
                    <PropertyCard
                      properyPic={a}
                      propetyPrice={"$300,200"}
                      propertyCategory={"House"}
                      propertTitle={"Modern Apartments"}
                      propertAddress={
                        "1421 San Pedro St, Los Angeles, CA 90015"
                      }
                      propertybed={2}
                      propertyBath={2}
                      propertySq={4000}
                      agentName={"Johnathan Doe 2"}
                      agentCategory={"Estate Agents 2"}
                      showAddFavorite={true}
                      showHot={true}
                      forRent={true}
                      forSale={false}
                    />
                  </div>
                </SwiperSlide>{" "}
                <SwiperSlide>
                  <div>
                    <PropertyCard
                      properyPic={a}
                      propetyPrice={"$300,200"}
                      propertyCategory={"House"}
                      propertTitle={"Modern Apartments"}
                      propertAddress={
                        "1421 San Pedro St, Los Angeles, CA 90015"
                      }
                      propertybed={2}
                      propertyBath={2}
                      propertySq={4000}
                      agentName={"Johnathan Doe 2"}
                      agentCategory={"Estate Agents 2"}
                      showAddFavorite={true}
                      showHot={true}
                      forRent={true}
                      forSale={false}
                    />
                  </div>
                </SwiperSlide>{" "}
                <SwiperSlide>
                  <div>
                    <PropertyCard
                      properyPic={a}
                      propetyPrice={"$300,200"}
                      propertyCategory={"House"}
                      propertTitle={"Modern Apartments"}
                      propertAddress={
                        "1421 San Pedro St, Los Angeles, CA 90015"
                      }
                      propertybed={2}
                      propertyBath={2}
                      propertySq={4000}
                      agentName={"Johnathan Doe 2"}
                      agentCategory={"Estate Agents 2"}
                      showAddFavorite={true}
                      showHot={true}
                      forRent={true}
                      forSale={false}
                    />
                  </div>
                </SwiperSlide>{" "}
                <SwiperSlide>
                  <div>
                    <PropertyCard
                      properyPic={a}
                      propetyPrice={"$300,200"}
                      propertyCategory={"House"}
                      propertTitle={"Modern Apartments"}
                      propertAddress={
                        "1421 San Pedro St, Los Angeles, CA 90015"
                      }
                      propertybed={2}
                      propertyBath={2}
                      propertySq={4000}
                      agentName={"Johnathan Doe 2"}
                      agentCategory={"Estate Agents 2"}
                      showAddFavorite={true}
                      showHot={true}
                      forRent={true}
                      forSale={false}
                    />
                  </div>
                </SwiperSlide>{" "}
                <SwiperSlide>
                  <div>
                    <PropertyCard
                      properyPic={a}
                      propetyPrice={"$300,200"}
                      propertyCategory={"House"}
                      propertTitle={"Modern Apartments"}
                      propertAddress={
                        "1421 San Pedro St, Los Angeles, CA 90015"
                      }
                      propertybed={2}
                      propertyBath={2}
                      propertySq={4000}
                      agentName={"Johnathan Doe 2"}
                      agentCategory={"Estate Agents 2"}
                      showAddFavorite={true}
                      showHot={true}
                      forRent={true}
                      forSale={false}
                    />
                  </div>
                </SwiperSlide>{" "}
                <SwiperSlide>
                  <div>
                    <PropertyCard
                      properyPic={a}
                      propetyPrice={"$300,200"}
                      propertyCategory={"House"}
                      propertTitle={"Modern Apartments"}
                      propertAddress={
                        "1421 San Pedro St, Los Angeles, CA 90015"
                      }
                      propertybed={2}
                      propertyBath={2}
                      propertySq={4000}
                      agentName={"Johnathan Doe 2"}
                      agentCategory={"Estate Agents 2"}
                      showAddFavorite={true}
                      showHot={true}
                      forRent={true}
                      forSale={false}
                    />
                  </div>
                </SwiperSlide>
              </Swiper>
              <div className="text-center m-3">
                <Link className="btn btn-danger-v2 text-decoration-none">
                  View More
                </Link>
              </div>
            </div>
            {/* end swiper */}
            <section className="">
              <ListSet h1={"List"} />
            </section>
          </div>
        </div>
      </section>
    </>
  );
};
