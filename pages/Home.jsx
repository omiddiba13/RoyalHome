import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

// images
import banner1 from "../public/images/banner-1.jpg";

//images end
//component st
import TypewriteR from "../component/HomeComponent/TypewriteR";
import { HomeNPills } from "../component/HomeComponent/HomeNPills";
import { HomeIconButton } from "../component/HomeComponent/HomeIconButton";
// import PropertyCard from "../component/PropertyCard";
import ListSet from "../component/ListsComponent/listSet";
//component end

import { SwiperComponent } from "../component/swiper/SwiperComponent";
import { Properties } from "./Properties";
import BasicPagination from "../component/Pagination";

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

						<SwiperComponent h3SW={"Hello"} pSW={"LIST"} />
						<hr />
					</div>
				</div>
				<section className="m-5">
					<Properties />
					<BasicPagination />
				</section>
			</section>
		</>
	);
};
