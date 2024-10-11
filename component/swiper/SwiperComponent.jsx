import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import A from "/public/images/A1.jpg";

///

import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
///
import PropertyCardForSw from "../PropertyCardForSw";
///
export const SwiperComponent = ({ h3SW, pSW }) => {
	const [properties, setProperties] = useState([]);
	const [err, setErr] = useState(null);
	const [isLoading, setLoading] = useState(true);

	useEffect(() => {
		axios
			.get("http://localhost:3000/properties")
			.then((res) => {
				setProperties(res.data);
				setLoading(false);
			})
			.catch((err) => {
				setErr(err);
				setLoading(false);
			});
	}, []);

	return (
		<>
			<div>
				<div className="m-1">
					<div className="text-center text-dark  bg-white m-3">
						<h3 className="fs-1 fw-bolder">{h3SW}</h3>
						<p className="fs-3">{pSW}</p>
					</div>
					<Swiper
						className="pb-5 m-1"
						modules={[Navigation, Pagination, Scrollbar, A11y]}
						pagination={{ clickable: true }}
						onSwiper={(swiper) => console.log(swiper)}
						onSlideChange={() => console.log("slide change")}
						breakpoints={{
							1400: {
								slidesPerView: 4,
								spaceBetween: 20,
							},
							1024: {
								slidesPerView: 3,
								spaceBetween: 10,
							},
							992: {
								slidesPerView: 3,
								spaceBetween: 10,
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
						<div>
							<div>
								{properties.slice(0, 6).map(
									(
										property,
										index, // Slice the array and map
									) => (
										<SwiperSlide>
											<div key={index}>
												<PropertyCardForSw
													properyPic={A}
													propetyPrice={property.propertyPrice}
													propertyCategory={property.propertyCategory}
													propertTitle={property.propertyTitle}
													propertAddress={property.propertyAddress}
													propertybed={property.propertyBed}
													propertyBath={property.propertyBath}
													propertySq={property.propertySq}
													agentName={property.agentName}
													agentCategory={property.agentCategory}
													showAddFavorite={true}
													showHot={property.showHot}
													forRent={property.forRent}
													forSale={property.forSale}
													animated={true}
													url={`/properties/${property.id}`}
												/>
											</div>
										</SwiperSlide>
									),
								)}
							</div>
						</div>
					</Swiper>
					<div className="text-center m-3">
						<Link className="btn btn-danger-v2 text-decoration-none">
							View More
						</Link>
					</div>
				</div>
			</div>
		</>
	);
};
