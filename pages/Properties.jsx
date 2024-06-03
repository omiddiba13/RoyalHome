import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import PropertyCard from "../component/PropertyCard";
import B from "../public/images/A1.jpg";
export const Properties = () => {
  const [properties, setProperties] = useState([]);
  const [err, setErr] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:3001/properties")
      .then(res => {
        setProperties(res.data);
        setLoading(false);
      })
      .catch(err => {
        setErr(err);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <div className="container-fluid col-12 mt-2">
        <div className="col-12">
          <div className="row  justify-content-evenly  ">
            {properties.map(property => (
              <PropertyCard
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
                url={`/properties/${property.id}`}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
