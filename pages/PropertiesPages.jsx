import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const PropertiesPages = () => {
  // console.log(useParams());
  const { PropertiesID } = useParams();
  // console.log(productID);

  const [Properties, setProduct] = useState(null);
  const [err, setErr] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`http://localhost:3001/properties/${PropertiesID}`)
      .then(res => {
        setProduct(res.data);
        setLoading(false);
      })
      .catch(err => {
        setErr(err);
        setLoading(false);
      });
  }, []);

  return (
    <>
      {!Properties && (
        <div className="alert alert-danger">No Product founded</div>
      )}

      {Properties && (
        <>
          <div>
            <h1>{Properties.propertyTitle}</h1>
          </div>
        </>
      )}
    </>
  );
};
