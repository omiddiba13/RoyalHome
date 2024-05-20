import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function User() {
  return (
    <>
      <header>
        <div id="intro" className="bg-image shadow-2-strong">
          <div
            className="mask d-flex align-items-center h-100"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-xl-5 col-md-8 text-center">
                  <NavLink
                    type="submit"
                    data-mdb-ripple-init
                    className="btn btn-danger-v2 justify-content-center  text-decoration-none rounded m-2 p-2 btn-block "
                    to="/user/login">
                    Login
                  </NavLink>

                  <NavLink
                    type="submit"
                    data-mdb-ripple-init
                    className="btn btn-danger-v2 justify-content-center  text-decoration-none rounded mx-3 p-2 btn-block"
                    to="/user/signUp">
                    sign up
                  </NavLink>
                  <Outlet />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
