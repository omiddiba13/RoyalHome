// import React from "react";
// import coverCardsSells from "../public/images/fe-property-img-2.jpg";
// import { AiFillStar } from "react-icons/ai";

// export default function CardsSells() {
//   return (
//     <div className="container-fluid border-black col-lg-3 col-md-2 col-sm-1 overflow-hidden border rounded-2 ">
//       <div>
//         <div className="position-relative">
//           <img src={coverCardsSells} className="w-100" />
//           <div className="position-absolute top-0 start-0 bottom-0 end-0  d-flex flex-column justify-content-between ">
//             <div className="end-100 align-self-end">
//               <div className="container-fluid">
//                 <div className="flag bg-success  ">
//                   {" "}
//                   <AiFillStar className="" color="#fff" />
//                 </div>
//                 <div className="flag bg-success col">
//                   {" "}
//                   <AiFillStar className="" color="#fff" />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className=" container">
//         <div>
//           <h5 className="text-danger pb-2">House</h5>
//           <h6>Modern Apartment </h6>
//         </div>
//       </div>
//     </div>
//   );
// }

import {
  FaBath,
  FaBed,
  FaCircle,
  FaExpand,
  FaFire,
  FaHeart,
  FaStar,
} from "react-icons/fa";
import { FaArrowRightArrowLeft, FaLocationDot } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

export const PropertyCard = ({
  properyPic,
  agentPic,
  propetyPrice,
  propertyCategory,
  propertTitle,
  propertAddress,
  propertybed,
  propertyBath,
  propertySq,
  agentName,
  agentCategory,
  showAddFavorite,
  showHot,
  forRent,
  forSale,
}) => {
  return (
    <div className="border border-secondary border-opacity-50 rounded-2 overflow-hidden">
      <div className="position-relative">
        <img src={properyPic} alt={propertTitle} className="w-100" />
        <div className="position-absolute top-0 start-0 bottom-0 end-0  d-flex flex-column justify-content-between">
          <div className=" d-flex align-items-start">
            {forRent && (
              <span className="badge text-bg-dark fs-6 fw-normal my-2 ms-4 me-auto">
                For Rent
              </span>
            )}

            {forSale && (
              <span className="badge text-bg-danger fs-6 fw-normal my-2 ms-4 me-auto">
                For Sale
              </span>
            )}

            {showAddFavorite && (
              <button className="flag bg-success border-0 text-white me-2">
                <FaStar />
              </button>
            )}

            {showHot && (
              <button className="flag bg-danger border-0 text-white me-2">
                <FaFire />
              </button>
            )}
          </div>
          <div className="d-flex align-items-start px-4 py-2">
            <span className="text-white fw-bold fs-5"> {propetyPrice}</span>

            <button className="btn ms-auto p-0">
              <span className="fa-stack fa-2x">
                <FaCircle className="fa-stack-3x " color="white" />
                <FaHeart className="fa-stack-1x link-dark-v2" />
              </span>
            </button>

            <button className="btn p-0 ms-2">
              <span className="fa-stack fa-2x">
                <FaCircle className="fa-stack-3x " color="white" />
                <FaArrowRightArrowLeft className="fa-stack-1x link-dark-v2" />
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className="p-3">
        <div className="text-danger"> {propertyCategory}</div>
        <h3>
          <NavLink className="link-dark-v2 text-decoration-none fs-5">
            {propertTitle}
          </NavLink>
        </h3>
        <p className="text-secondary">
          <FaLocationDot />
          {propertAddress}
        </p>
        <div className="d-flex justify-content-between text-secondary">
          <div>
            {propertybed}
            <FaBed className="ms-2" />
            <br />
            Bedrooms
          </div>
          <div>
            {propertyBath}
            <FaBath className="ms-2" /> <br /> Bathrooms
          </div>
          <div>
            {propertySq}
            <FaExpand className="ms-2" /> <br /> square Ft
          </div>
        </div>
      </div>
      <div className="border-top border-secondary border-opacity-50 p-3 d-flex justify-content-between ">
        <div className="hstack ">
          <img src={agentPic} alt="" />

          <div className="vstack ms-2">
            <NavLink className="link-dark-v2 text-decoration-none fw-bold">
              {agentName}
            </NavLink>
            <span className="small text-secondary">{agentCategory}</span>
          </div>
        </div>

        <div className="text-secondary vstack  justify-content-center align-items-end">
          1 days ago
        </div>
      </div>
    </div>
  );
};