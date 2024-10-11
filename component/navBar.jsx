import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../public/images/logo1.png";
import { FaRegUser } from "react-icons/fa6";
import { HiOutlineMenuAlt4 } from "react-icons/hi";

export default function NavBar() {
	return (
		<nav
			className="navbar navbar-expand-lg  bg-dark sticky-top"
			data-bs-theme="dark">
			<div className="container">
				<Link to={"/"}>
					<img src={logo} alt="" style={{ width: "75%" }} />
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
				<Link to="User/login" className=" btn ms-3 d-lg-none ">
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
						<NavLink to={"/"} className="nav-link fs-5 ">
							Home
						</NavLink>
						<NavLink to="/about" className="nav-link fs-5">
							About Us
						</NavLink>
						<NavLink to="PropertyLists" className="nav-link fs-5">
							Property
						</NavLink>
						{/* <NavLink to="/Properties"    className"nav-link fs-5">
              Properties
            </NavLink> */}
					</div>
					<Link
						to="User/login"
						className=" btn btn-danger-v2 ms-2 d-none d-lg-block">
						login
					</Link>
				</div>
			</div>
		</nav>
	);
}
