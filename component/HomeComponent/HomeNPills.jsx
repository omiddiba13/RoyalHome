import React from "react";

export const HomeNPills = () => {
	return (
		<>
			<section className="col-12">
				<ul
					className="nav nav-pills m-3 justify-content-center"
					id="pills-tab"
					role="tablist">
					<li className="nav-item" role="presentation">
						<button
							className=" btn btn-danger-v3 active "
							id="pills-home-tab"
							data-bs-toggle="pill"
							data-bs-target="#pills-home"
							type="button"
							role="tab"
							aria-controls="pills-home"
							aria-selected="true">
							Home
						</button>
					</li>
					<li className="nav-item mx-3" role="presentation">
						<button
							className=" btn btn-danger-v3  "
							id="pills-profile-tab"
							data-bs-toggle="pill"
							data-bs-target="#pills-profile"
							type="button"
							role="tab"
							aria-controls="pills-profile"
							aria-selected="false">
							Profile
						</button>
					</li>
					<li className="nav-item" role="presentation">
						<button
							className=" btn btn-danger-v3 "
							id="pills-contact-tab"
							data-bs-toggle="pill"
							data-bs-target="#pills-contact"
							type="button"
							role="tab"
							aria-controls="pills-contact"
							aria-selected="false">
							Contact
						</button>
					</li>
				</ul>
				<div className="tab-content container-fluid" id="pills-tabContent">
					<div
						className="tab-pane fade show active"
						id="pills-home"
						role="tabpanel"
						aria-labelledby="pills-home-tab"
						tabIndex="0">
						<form action="" className="container bg-white rounded p-3  ">
							<div className="row g-2 ">
								<div className="col-lg-4 col-12 ">
									{" "}
									<input
										className="form-control rounded"
										type="text"
										placeholder=""
										aria-label="default input example"
									/>{" "}
								</div>
								<div className="col-12 col-lg-2 ">
									<select
										value="0"
										className="form-select  rounded"
										aria-label="Default select example">
										<option value="0">property type </option>
										<option value="1">One</option>
										<option value="2">Two</option>
										<option value="3">Three</option>
									</select>
								</div>
								<div className="col-12 col-lg-2">
									<select
										value="0"
										className="form-select  rounded"
										aria-label="Default select example">
										<option value="0">property type </option>
										<option value="1">One</option>
										<option value="2">Two</option>
										<option value="3">Three</option>
									</select>{" "}
								</div>
								<div className="col-12 col-lg-2  rounded-3">
									<button
										className="btn btn-outline-danger btn-danger-v2 w-100"
										type="button"
										data-bs-toggle="collapse"
										data-bs-target="#optionsBuy"
										aria-expanded="false"
										aria-controls="optionsBuy">
										Button
									</button>

									<div className="collapse" id="optionsBuy">
										<div className="card card-body z-1 mb-3 bg-dark">
											<div className="container-fluid rounded-3">
												<div className="row g-2 rounded-3">
													<select
														value="0"
														className="form-select  rounded"
														aria-label="Default select example">
														<option value="0">property type </option>
														<option value="1">One</option>
														<option value="2">Two</option>
														<option value="3">Three</option>
													</select>{" "}
													<select
														value="0"
														className="form-select  rounded"
														aria-label="Default select example">
														<option value="0">property type </option>
														<option value="1">One</option>
														<option value="2">Two</option>
														<option value="3">Three</option>
													</select>{" "}
													<select
														value="0"
														className="form-select  rounded"
														aria-label="Default select example">
														<option value="0">property type </option>
														<option value="1">One</option>
														<option value="2">Two</option>
														<option value="3">Three</option>
													</select>{" "}
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="col-lg-2">
									<input
										type="submit"
										value="Search"
										className="btn w-100 btn-danger-v2 "
									/>
								</div>
							</div>
						</form>
					</div>
					<div
						className="tab-pane fade"
						id="pills-profile"
						role="tabpanel"
						aria-labelledby="pills-profile-tab"
						tabIndex="0">
						{/* profile */}
					</div>
					<div
						className="tab-pane fade"
						id="pills-contact"
						role="tabpanel"
						aria-labelledby="pills-contact-tab"
						tabIndex="0">
						{/* contact */}
					</div>
				</div>
			</section>
		</>
	);
};
