import React from "react";
import banner1 from "../public/images/banner-1.jpg";
import cat1 from "../public/images/category-1.png";
import cat2 from "../public/images/category-2.png";
import cat3 from "../public/images/category-3.png";
import cat4 from "../public/images/category-4.png";
import cat5 from "../public/images/category-5.png";
import cat6 from "../public/images/category-6.png";
import Typewriter from "typewriter-effect";
import { HomeCatIcon } from "../component/HomeCatIcon";
import { PropertyCard } from "../component/PropertyCard";
import a from "../public/images/fe-property-img-2.jpg";

export const Home = () => {
  return (
    <>
      <div className="position-absolute w-100 vh-100 top-0 start-0  z-n1 ">
        <div
          id="carouselExampleAutoplaying"
          className="carousel slide carousel-fade"
          data-bs-ride="true">
          <img
            src={banner1}
            className="d-block w-100 object-fit-cover vh-100 "
            alt="..."
          />
        </div>
      </div>

      <section>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="row align-content-center vh-100 h-75 w-100">
                <div className="col-12">
                  <div className="hstack justify-content-center fs-4 fw-bold text-white container">
                    Best Place To Find&nbsp;
                    <Typewriter
                      options={{
                        strings: [
                          "Apartments",
                          "Houses",
                          "Rental House",
                          "Commercial",
                        ],
                        autoStart: true,
                        loop: true,
                        cursorClassName: "text-white",
                        wrapperClassName: "text-danger-v2",
                      }}
                    />
                  </div>
                </div>
                <div className="text-center text-white">
                  <h5>
                    From as low as $10 per day with limited time offer
                    discounts.
                  </h5>
                </div>
                {/*  */}
                <section className="col-12">
                  <ul
                    className="nav nav-pills mb-3 mt-3 justify-content-center"
                    id="pills-tab"
                    role="tablist">
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link-2 btn btn-danger-v2 active "
                        id="pills-home-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-home"
                        type="button"
                        role="tab"
                        aria-controls="pills-home"
                        aria-selected="true">
                        Home
                      </button>
                    </li>
                    <li className="nav-item mx-3" role="presentation">
                      <button
                        className="nav-link-2 btn btn-danger-v2  "
                        id="pills-profile-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-profile"
                        type="button"
                        role="tab"
                        aria-controls="pills-profile"
                        aria-selected="false">
                        Profile
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link-2 btn btn-danger-v2 "
                        id="pills-contact-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-contact"
                        type="button"
                        role="tab"
                        aria-controls="pills-contact"
                        aria-selected="false">
                        Contact
                      </button>
                    </li>
                  </ul>
                  <div className="tab-content" id="pills-tabContent">
                    <div
                      className="tab-pane fade show active"
                      id="pills-home"
                      role="tabpanel"
                      aria-labelledby="pills-home-tab"
                      tabIndex="0">
                      <form
                        action=""
                        className="container-fluid bg-white rounded p-3 ">
                        <div className="row g-3">
                          <div className="col-lg-4 col-12 ">
                            {" "}
                            <input
                              class="form-control rounded"
                              type="text"
                              placeholder=""
                              aria-label="default input example"></input>{" "}
                          </div>
                          <div className="col-12 col-lg-2 ">
                            <select
                              class="form-select  rounded"
                              aria-label="Default select example">
                              <option selected>property type </option>
                              <option value="1">One</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                            </select>{" "}
                          </div>
                          <div className=" col-12 col-lg-2">
                            <select
                              class="form-select  rounded"
                              aria-label="Default select example">
                              <option selected>property type </option>
                              <option value="1">One</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                            </select>{" "}
                          </div>
                          <div className="col-12 col-lg-2">
                            <button
                              className="btn btn-outline-danger btn-danger-v2 w-100"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#optionsBuy"
                              aria-expanded="false"
                              aria-controls="optionsBuy">
                              Button
                            </button>

                            <div className="collapse" id="optionsBuy">
                              <div className="card card-body">
                                <div className="container-fluid">
                                  <div className="row g-3">
                                    <select
                                      class="form-select  rounded"
                                      aria-label="Default select example">
                                      <option selected>property type </option>
                                      <option value="1">One</option>
                                      <option value="2">Two</option>
                                      <option value="3">Three</option>
                                    </select>{" "}
                                    <select
                                      class="form-select  rounded"
                                      aria-label="Default select example">
                                      <option selected>property type </option>
                                      <option value="1">One</option>
                                      <option value="2">Two</option>
                                      <option value="3">Three</option>
                                    </select>{" "}
                                    <select
                                      class="form-select  rounded"
                                      aria-label="Default select example">
                                      <option selected>property type </option>
                                      <option value="1">One</option>
                                      <option value="2">Two</option>
                                      <option value="3">Three</option>
                                    </select>{" "}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-2">
                            <input
                              type="submit"
                              value="Search"
                              className="btn w-100 btn-danger-v2 "
                            />
                          </div>
                        </div>
                      </form>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="pills-profile"
                      role="tabpanel"
                      aria-labelledby="pills-profile-tab"
                      tabIndex="0">
                      ...
                    </div>
                    <div
                      className="tab-pane fade"
                      id="pills-contact"
                      role="tabpanel"
                      aria-labelledby="pills-contact-tab"
                      tabIndex="0">
                      ...
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>{" "}
          <section id="homeCatIcons">
            <div className="container">
              <div className="row row-cols-1 row-cols-md-3 row-cols-lg-6 g-5 g-md-3">
                <div className="col">
                  <HomeCatIcon icon={cat1} catUrl={"#"} catText={"Apartment"} />
                </div>
                <div className="col">
                  <HomeCatIcon icon={cat2} catUrl={"#"} catText={"Houses"} />
                </div>
                <div className="col">
                  <HomeCatIcon
                    icon={cat3}
                    catUrl={"#"}
                    catText={"Rental House"}
                  />
                </div>
                <div className="col">
                  <HomeCatIcon
                    icon={cat4}
                    catUrl={"#"}
                    catText={"Commercial"}
                  />
                </div>
                <div className="col">
                  <HomeCatIcon icon={cat5} catUrl={"#"} catText={"Office"} />
                </div>
                <div className="col">
                  <HomeCatIcon
                    icon={cat6}
                    catUrl={"#"}
                    catText={"Family House"}
                  />
                </div>
              </div>
            </div>
          </section>
          <br />
          <div className="row row-cols-lg-3 row-cols-md-2 row-cols-sm-1">
            <div className=" ">
              <PropertyCard
                properyPic={a}
                propetyPrice={"$300,200"}
                propertyCategory={"House"}
                propertTitle={"Modern Apartments"}
                propertAddress={"1421 San Pedro St, Los Angeles, CA 90015"}
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
            <div className="  ">
              <PropertyCard
                properyPic={a}
                propetyPrice={"$300,200"}
                propertyCategory={"House"}
                propertTitle={"Modern Apartments"}
                propertAddress={"1421 San Pedro St, Los Angeles, CA 90015"}
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
            <div className="">
              <PropertyCard
                properyPic={a}
                propetyPrice={"$300,200"}
                propertyCategory={"House"}
                propertTitle={"Modern Apartments"}
                propertAddress={"1421 San Pedro St, Los Angeles, CA 90015"}
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
          </div>
        </div>
      </section>
    </>
  );
};
