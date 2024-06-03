import React from "react";
import { Link } from "react-router-dom";
import PropertyCard from "../component/PropertyCard";
import a from "../public/images/A1.jpg";
import { BsThreeDotsVertical } from "react-icons/bs";
import { AiFillCaretRight } from "react-icons/ai";
import { Properties } from "./Properties";
import {
  FaEllipsisVertical,
  FaCaretRight,
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa6";
import TopRated from "../component/Toprate";
import Breadcrumb from "../component/breadcrumb";
// import ListSet from "../component/ListsComponet/listSet";

export default function PropertyLists() {
  return (
    <section className="container-fluid bg-body-secondary">
      <Breadcrumb pages={"PropertyLists"} />
      <div className="">
        <h1 className="fw-bolder fs-3 text-black">simple List - grid view</h1>
        <hr className="w-25" />
      </div>
      <div className=" container-fluid col-12">
        {" "}
        <div className=" row">
          <div className="col-12 col-lg-4 col-md-4">
            <div className="">
              <div className="">
                <div className="container-fluid p-3  bg-white rounded">
                  <form action="" className="row g-2">
                    <div className="col-12">
                      <input
                        type="email"
                        className="form-control"
                        id="exampleFormControlInput1"
                        placeholder="name@example.com"
                      />
                    </div>
                    <div className="col-12">
                      <select
                        className="form-select"
                        aria-label="Default select example">
                        <option selected>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                    <div className="col-12">
                      <select
                        className="form-select"
                        aria-label="Default select example">
                        <option selected>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>{" "}
                    <div className="col-12">
                      <select
                        className="form-select"
                        aria-label="Default select example">
                        <option selected>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>{" "}
                    <div className="col-12">
                      <select
                        className="form-select"
                        aria-label="Default select example">
                        <option selected>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                    <div className="col-12">
                      <select
                        className="form-select"
                        aria-label="Default select example">
                        <option selected>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                    <div className="col-6">
                      <input
                        type="email"
                        className="form-control"
                        id="exampleFormControlInput1"
                        placeholder="name@example.com"
                      />
                    </div>{" "}
                    <div className="col-6">
                      <input
                        type="email"
                        className="form-control"
                        id="exampleFormControlInput1"
                        placeholder="name@example.com"
                      />
                    </div>{" "}
                    <div className="col-6">
                      <input
                        type="email"
                        className="form-control"
                        id="exampleFormControlInput1"
                        placeholder="name@example.com"
                      />
                    </div>{" "}
                    <div className="col-6">
                      <input
                        type="email"
                        className="form-control"
                        id="exampleFormControlInput1"
                        placeholder="name@example.com"
                      />
                    </div>
                  </form>
                  <div
                    className="accordion mt-2 p-1 "
                    id="accordionPanelsStayOpenExample">
                    <div className="accordion-item ">
                      <h3 className="accordion-header">
                        <button
                          className="btn p-1 m-1 btn-danger-v2"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#panelsStayOpen-collapseOne"
                          aria-expanded="true"
                          aria-controls="panelsStayOpen-collapseOne">
                          <BsThreeDotsVertical size={15} /> More option
                        </button>
                      </h3>
                      <div
                        id="panelsStayOpen-collapseOne"
                        className="accordion-collapse collapse ">
                        <div className="accordion-body">
                          <div className="col-12 row">
                            <div class="form-check col-6">
                              <input
                                class="form-check-input"
                                type="checkbox"
                                value=""
                                id="flexCheckIndeterminate"
                              />
                              <label
                                class="form-check-label"
                                for="flexCheckIndeterminate">
                                Indeterminate checkbox
                              </label>
                            </div>{" "}
                            <div class="form-check col-6">
                              <input
                                class="form-check-input"
                                type="checkbox"
                                value=""
                                id="flexCheckIndeterminate"
                              />
                              <label
                                class="form-check-label"
                                for="flexCheckIndeterminate">
                                Indeterminate checkbox
                              </label>
                            </div>
                            <div class="form-check col-6">
                              <input
                                class="form-check-input"
                                type="checkbox"
                                value=""
                                id="flexCheckIndeterminate"
                              />
                              <label
                                class="form-check-label"
                                for="flexCheckIndeterminate">
                                Indeterminate checkbox
                              </label>
                            </div>
                            <div class="form-check col-6">
                              <input
                                class="form-check-input"
                                type="checkbox"
                                value=""
                                id="flexCheckIndeterminate"
                              />
                              <label
                                class="form-check-label"
                                for="flexCheckIndeterminate">
                                Indeterminate checkbox
                              </label>
                            </div>
                            <div class="form-check col-6">
                              <input
                                class="form-check-input"
                                type="checkbox"
                                value=""
                                id="flexCheckIndeterminate"
                              />
                              <label
                                class="form-check-label"
                                for="flexCheckIndeterminate">
                                Indeterminate checkbox
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded mt-2 col-12">
                  <div>
                    <h4 className="fw-bold p-2 ">Property Category</h4>
                  </div>

                  <div className="list-group list-group-flush p-2">
                    <Link
                      to=""
                      class="list-group-item  border-0 icon-link d-flex link-dark-v2 p-0 pt-3"
                      aria-current="true">
                      <FaCaretRight />
                      Apartment
                      <span className="ms-auto">6 properties</span>
                    </Link>
                    <Link
                      to=""
                      class="list-group-item  border-0 icon-link d-flex link-dark-v2 p-0 pt-3"
                      aria-current="true">
                      <FaCaretRight />
                      Apartment
                      <span className="ms-auto">6 properties</span>
                    </Link>
                    <Link
                      to=""
                      class="list-group-item  border-0 icon-link d-flex link-dark-v2 p-0 pt-3"
                      aria-current="true">
                      <FaCaretRight />
                      Apartment
                      <span className="ms-auto">6 properties</span>
                    </Link>
                    <Link
                      to=""
                      class="list-group-item  border-0 icon-link d-flex link-dark-v2 p-0 pt-3"
                      aria-current="true">
                      <FaCaretRight />
                      Apartment
                      <span className="ms-auto">6 properties</span>
                    </Link>
                    <Link
                      to=""
                      class="list-group-item  border-0 icon-link d-flex link-dark-v2 p-0 pt-3"
                      aria-current="true">
                      <FaCaretRight />
                      Apartment
                      <span className="ms-auto">6 properties</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className=" bg-white rounded col-12 mt-2 p-2">
              {" "}
              <div>
                <TopRated
                  pic={a}
                  title={"Lorem ipsum dolor sit cing"}
                  Rate={1}
                  currentPrice={30000}
                  oldPrice={35000}
                />
              </div>
              <div>
                <TopRated
                  pic={a}
                  title={"Lorem ipsum dolor sit cing"}
                  Rate={1}
                  currentPrice={30000}
                  oldPrice={35000}
                />
              </div>
              <div>
                <TopRated
                  pic={a}
                  title={"Lorem ipsum dolor sit cing"}
                  Rate={1}
                  currentPrice={30000}
                  oldPrice={35000}
                />
              </div>
            </div>
          </div>

          <div className=" col-12 col-lg-8 col-md-8  ">
            {" "}
            <div className="row">
              <div className=" bg-white rounded py-1 mt-2">
                <div className=" col-auto ">
                  {" "}
                  10 Search results
                  {}
                </div>
                <div className="col-12 row justify-content-end">
                  <div className="col-auto m-1 ">
                    <select
                      className="form-select"
                      aria-label="Default select example">
                      <option selected>Open this select menu</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                  <div className="col-auto m-1">
                    <select
                      className="form-select"
                      aria-label="Default select example">
                      <option selected>Open this select menu</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="mt-3">
                <Properties />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
