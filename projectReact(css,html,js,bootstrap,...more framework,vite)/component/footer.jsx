import React from "react";
import { Link } from "react-router-dom";
import { CiLocationArrow1 } from "react-icons/ci";
import { MdKeyboardArrowRight } from "react-icons/md";
import { BsFillTelephoneFill, BsFacebook } from "react-icons/bs";
import {
  AiOutlineMail,
  AiOutlineInstagram,
  AiFillTwitterCircle,
  AiFillYoutube,
} from "react-icons/ai";

export default function Footer() {
  return (
    <>
      <footer className="container-fluid bg-dark textcolorwhite rounded">
        <div className=" row-cols-lg-3  row container-fluid">
          <div className=" container row p-3 mb-3">
            <h5>about us</h5>
            <div className="container-fluid row ">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam
                quae repudiandae molestiae odit voluptate id natus est modi, ab
                quisquam nemo nobis quis debitis doloribus, voluptas, dolorum
                ipsum. Reprehenderit, iusto.
              </p>
              <Link
                to="/about"
                className="icon-link icon-link-hover link-secondary text-decoration-none">
                Read More
                <MdKeyboardArrowRight className="bi fs-3" />
              </Link>
            </div>
          </div>
          <div className="container row p-3">
            <h5>contact us</h5>
            <span>
              <CiLocationArrow1 className="m-1" />
              this part location{" "}
            </span>

            <span>
              <BsFillTelephoneFill className="m-1" />
              +12345678
            </span>
            <span>
              <Link
                className="text-decoration-none text-white "
                to="omiddiba13@gmail.com">
                <AiOutlineMail className="m-1" /> XD@gmail.com
              </Link>
            </span>
          </div>
          <div className="container row p-3">
            <h5>Remain Updated</h5>
            <div className="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
              />
              <button className="btn btn-danger-v2 m-2">
                <span className="fs-6">Submits</span>
              </button>
            </div>
            <hr />
            <div className="row row-cols-auto ">
              <Link className="nav-link-v2" href="#">
                <AiFillYoutube size={28} className="m-1 border rounded" />
              </Link>
              <Link className="nav-link-v2" aria-current="page" href="">
                <AiOutlineInstagram
                  size={28}
                  className="m-1 border rounded  "
                />
              </Link>{" "}
              <Link className="nav-link-v2" href="#">
                <BsFacebook size={28} className="m-1 border rounded" />
              </Link>{" "}
              <Link class="nav-link-v2">
                <AiFillTwitterCircle size={28} className="m-1 border rounded" />
              </Link>
            </div>
          </div>

          <div className="row mt-3">
            <hr />

            <span>© 2023. All rights reserved.</span>
            <span>Contact Us FAQ Privacy Terms & Conditions</span>
          </div>
        </div>
      </footer>
    </>
  );
}
