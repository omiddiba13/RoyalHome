import React from "react";

export default function SignUp() {
	return (
		<div className="bg-dark rounded shadow-5-strong p-5 text-white">
			<form className="row g-3 needs-validation" noValidate>
				<div className="col-md-6 position-relative">
					<label htmlFor="validationTooltip01" className="form-label">
						First name
					</label>
					<input
						type="text"
						className="form-control"
						id="validationTooltip01"
						required
					/>
					<div className="valid-tooltip">Looks good!</div>
				</div>
				<div className="col-md-6 position-relative">
					<label htmlFor="validationTooltip02" className="form-label">
						Last name
					</label>
					<input
						type="text"
						className="form-control"
						id="validationTooltip02"
						required
					/>
					<div className="valid-tooltip">Looks good!</div>
				</div>
				<div className="col position-relative text-center">
					<label htmlFor="validationTooltipUsername" className="form-label">
						Username
					</label>
					<div className="input-group has-validation">
						<span
							className="input-group-text"
							id="validationTooltipUsernamePrepend">
							@
						</span>
						<input
							type="text"
							className="form-control"
							id="validationTooltipUsername"
							aria-describedby="validationTooltipUsernamePrepend"
							required
						/>
						<div className="invalid-tooltip">
							Please choose a unique and valid username.
						</div>
					</div>
				</div>
				<div className="col-12 position-relative">
					<label htmlFor="validationTooltipEmail" className="form-label">
						Email
					</label>
					<div className="input-group has-validation">
						<input
							type="email"
							className="form-control"
							id="validationTooltipEmail"
							aria-describedby="validationTooltipEmailPrepend"
							required
						/>
						<div className="invalid-tooltip">Email Please</div>
					</div>
				</div>
				<div className="col-12 position-relative">
					<label htmlFor="validationTooltipPassword" className="form-label">
						password
					</label>
					<div className="input-group has-validation">
						<input
							type="password"
							className="form-control"
							id="validationTooltipPassword"
							aria-describedby="validationTooltipPasswordPrepend"
							required
						/>
						<div className="invalid-tooltip">password Please</div>
					</div>
				</div>

				<div className="col-12 ">
					<button className="btn btn-danger-v2 m-1 w-100" type="submit">
						Submit form
					</button>
				</div>
			</form>
		</div>
	);
}
