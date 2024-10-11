import React from "react";
import bgAbout from "../public/images/inner-pagebg.jpg";
import { Link } from "react-router-dom";
import Breadcrumb from "../component/breadcrumb";

export default function About() {
	return (
		<>
			<div className="bg-body-secondary  ">
				<div className="w-100 top-0 start-0 ">
					<Breadcrumb pages={"about"} className="" />
					<hr />
					<img
						src={bgAbout}
						className=" w-100 object-fit-cover img-fluid shadow "
						alt="..."
					/>{" "}
				</div>
				<hr />
				<div className="container-fluid">
					<div className=" border rounded">
						<div className="text-center text-black">
							<h1> About</h1>
						</div>
						<div className="">
							<p className="text-center text-black fs-5 ">
								Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic
								nihil saepe, possimus perspiciatis excepturi neque quibusdam
								exercitationem ipsum omnis voluptatem, repellat accusamus ipsam
								repudiandae molestiae facilis officiis? Tempore, a fuga? Lorem
								ipsum dolor, sit amet consectetur adipisicing elit. Hic nihil
								saepe, possimus perspiciatis excepturi neque quibusdam
								exercitationem ipsum omnis voluptatem, repellat accusamus ipsam
								repudiandae molestiae facilis officiis? Tempore, a fuga?
								Loremuibusdam exercitationem ipsum omnis voluptatem, repellat
								accusamus ipsam repudiandae molestiae facilis officiis? Tempore,
								a fuga? Lorem
							</p>
						</div>{" "}
					</div>
				</div>
			</div>
		</>
	);
}
