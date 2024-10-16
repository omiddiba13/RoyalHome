import React from "react";
import { Link } from "react-router-dom";

export default function Breadcrumb({ pages }) {
	return (
		<>
			<div className="">
				{" "}
				<div className="">
					<nav className="ps-3">
						<ol className="breadcrumb fs-5">
							<li className="breadcrumb-item">
								<Link to={"/"} className="text-decoration-none fs-5 text-black">
									Home
								</Link>
							</li>
							<li className="breadcrumb-item active" aria-current="page">
								<Link
									to={pages}
									className="text-decoration-none fs-5 text-danger-v2">
									{pages}
								</Link>
							</li>
						</ol>
					</nav>
				</div>
			</div>
		</>
	);
}
