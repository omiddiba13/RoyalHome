import { NavLink } from "react-router-dom";

export const HomeCatIcon = ({ icon, catUrl, catText }) => {
	return (
		<div className="position-relative text-center bg-white shadow-lg p-2  rounded-3 ">
			<img src={icon} alt="" className="d-block mx-auto" />
			<NavLink
				className="stretched-link nav-link-v2 fs-5 fw-bold text-decoration-none"
				to={catUrl}>
				{catText}
			</NavLink>
		</div>
	);
};
