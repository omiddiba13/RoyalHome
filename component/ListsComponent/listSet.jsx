import React, { useEffect, useState } from "react";
import PropertyCard from "../PropertyCard";

///images
import B from "./images/AL1.jpg";
import BasicPagination from "../Pagination";
// import Pagination from "../Pagination";
//
export default function ListSet({ h1 }) {
	const [properties, setPropertise] = useState([]);
	useEffect(() => {
		fetch("http://localhost:3001/properties")
			.then((response) => response.json())
			.then((data) => setPropertise(data))
			.catch((error) => console.error("Error fetching data:", error));
	}, []);

	return (
		<>
			<div className=" border border-black rounded-3">
				<div className="text-center mt-3 border-bottom ">
					<h2 className=" fw-bold">{h1}</h2>
				</div>
				<div className="container mt-4 ">
					<div className="col-12">
						<div className="row justify-content-center">
							{properties.map((property) => (
								<PropertyCard
									key={property.id}
									properyPic={B}
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
								/>
							))}
						</div>
					</div>
				</div>
				<BasicPagination />
			</div>{" "}
		</>
	);
}
