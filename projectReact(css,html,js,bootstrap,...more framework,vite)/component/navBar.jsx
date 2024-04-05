import React from "react";
import { Link } from "react-router-dom";
import logo from "../public/images/logo2.png";
import { FaRegUser } from "react-icons/fa6";
import { HiOutlineMenuAlt4 } from "react-icons/hi";

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg mb-5 bg-dark" data-bs-theme="dark">
      <div className="container-fluid">
        <Link to={"/"}>
          <img src={logo} alt="" style={{ width: "", height: "" }} />{" "}
        </Link>
        <button
          className="navbar-toggler ms-auto"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="">
            <HiOutlineMenuAlt4
              style={{
                color: "black",
              }}
            />
          </span>
        </button>
        <Link to="login" className=" btn ms-3 d-lg-none ">
          <FaRegUser
            size={20}
            style={{
              color: "black",
            }}
          />
        </Link>
        <hr />
        <div className="collapse navbar-collapse mt-3" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto justify-content-between">
            <a className="nav-link fs-5 " aria-current="page" href="#">
              Home
            </a>
            <a className="nav-link fs-5" href="#">
              Features
            </a>
            <a className="nav-link fs-5" href="#">
              Pricing
            </a>
          </div>
          <Link
            to="login"
            className=" btn btn-danger-v2 ms-2 d-none d-lg-block">
            login
          </Link>
        </div>
      </div>
    </nav>
  );
}
