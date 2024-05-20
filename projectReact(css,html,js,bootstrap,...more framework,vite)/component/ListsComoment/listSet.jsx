import React from "react";
import PropertyCard from "../PropertyCard";

///images
import B from "./images/AL1.jpg";
//
export default function ListSet({ h1 }) {
  return (
    <>
      <div className=" border border-black p-4 rounded-3">
        <div className="text-center mt-3 border-bottom ">
          {" "}
          <h2 className=" fw-bold">{h1}</h2>
        </div>
        <div className="container col-10 mt-4 ">
          <div className="row row-cols-auto justify-content-sm-center justify-content-md-center justify-content-lg-center justify-content-xl-center justify-content-xxl-between g-4 ">
            <div className="col">
              <PropertyCard
                properyPic={B}
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
                showHot={false}
                forRent={false}
                forSale={true}
              />{" "}
            </div>{" "}
            <div className="col ">
              <PropertyCard
                properyPic={B}
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
                showHot={false}
                forRent={false}
                forSale={true}
              />{" "}
            </div>{" "}
            <div className="col ">
              <PropertyCard
                properyPic={B}
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
                showHot={false}
                forRent={false}
                forSale={true}
              />{" "}
            </div>{" "}
            <div className="col">
              <PropertyCard
                properyPic={B}
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
                showHot={false}
                forRent={false}
                forSale={true}
              />{" "}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
