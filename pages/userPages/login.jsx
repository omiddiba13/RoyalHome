import React from "react";

export default function Login() {
	return (
		<form className="bg-dark rounded shadow-5-strong p-5 text-white">
			<div className="form-outline mb-4" data-mdb-input-init>
				<input type="email" id="form1Example1" className="form-control" />
				<label className="form-label" htmlFor="form1Example1">
					Email address
				</label>
			</div>

			<div className="form-outline mb-4" data-mdb-input-init>
				<input type="password" id="form1Example2" className="form-control" />
				<label className="form-label" htmlFor="form1Example2">
					Password
				</label>
			</div>

			<div className="row mb-4">
				<div className="col d-flex justify-content-center">
					<div className="form-check">
						<input
							className="form-check-input"
							type="checkbox"
							value=""
							id="form1Example3"
						/>
						<label className="form-check-label" htmlFor="form1Example3">
							Remember me
						</label>
					</div>
				</div>

				<div className="col text-center ">
					<a href="" className="text-decoration-none text-white">
						Forgot password?
					</a>
				</div>
			</div>

			<button
				type="submit"
				className="btn btn-danger-v2 w-100 btn-block"
				data-mdb-ripple-init>
				Sign in
			</button>
		</form>
	);
}
