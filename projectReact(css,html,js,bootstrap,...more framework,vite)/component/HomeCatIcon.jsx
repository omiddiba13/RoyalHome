import { NavLink } from "react-router-dom";

export const HomeCatIcon = ({ icon, catUrl, catText }) => {
  return (
    <div
      className="position-relative text-center bg-white shadow-sm p-3 rounded-2 "
      style={{ marginTop: "-3.5rem" }}>
      <img src={icon} alt="" className="d-block mx-auto" />
      <NavLink
        className="stretched-link nav-link fs-5 fw-bold text-decoration-none"
        to={catUrl}>
        {catText}
      </NavLink>
    </div>
  );
};
