import React from "react";
import { HomeCatIcon } from "./HomeCatIcon";
import cat1 from "./imagesIcons/category-1.png";
import cat2 from "./imagesIcons/category-2.png";
import cat3 from "./imagesIcons/category-3.png";
import cat4 from "./imagesIcons/category-4.png";
import cat5 from "./imagesIcons/category-5.png";
import cat6 from "./imagesIcons/category-6.png";

export const HomeIconButton = () => {
	return (
		<>
			<section id="homeCatIcons">
				<div className="container-fluid">
					<div className="row row-cols-2 row-cols-md-2 row-cols-lg-6 g-2 g-sm-1 g-md-2 mb-2">
						<div className="col">
							<HomeCatIcon icon={cat1} catUrl={"#"} catText={"Apartment"} />
						</div>
						<div className="col">
							<HomeCatIcon icon={cat2} catUrl={"#"} catText={"Houses"} />
						</div>
						<div className="col">
							<HomeCatIcon icon={cat3} catUrl={"#"} catText={"Rental House"} />
						</div>
						<div className="col">
							<HomeCatIcon icon={cat4} catUrl={"#"} catText={"Commercial"} />
						</div>
						<div className="col">
							<HomeCatIcon icon={cat5} catUrl={"#"} catText={"Office"} />
						</div>
						<div className="col">
							<HomeCatIcon icon={cat6} catUrl={"#"} catText={"Family House"} />
						</div>
					</div>
				</div>
			</section>
		</>
	);
};
