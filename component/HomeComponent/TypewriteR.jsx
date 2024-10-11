import React from "react";
import Typewriter from "typewriter-effect";

export default function TypewriteR() {
	return (
		<>
			<div className="hstack justify-content-center fs-4 fw-bold text-white container">
				Best Place To Find&nbsp;
				<Typewriter
					options={{
						strings: ["Apartments", "Houses", "Rental House", "Commercial"],
						autoStart: true,
						loop: true,
						cursorClassName: "text-white",
						wrapperClassName: "text-danger-v2",
					}}
				/>
			</div>
			<div className="text-center text-white">
				<h5>From as low as $10 per day with limited time offer discounts.</h5>
			</div>
		</>
	);
}
