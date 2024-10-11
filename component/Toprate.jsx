import { FaStar, FaRegStar } from "react-icons/fa6";
export default function TopRated({ pic, title, Rate, currentPrice, oldPrice }) {
	return (
		<div className="row mb-3">
			<div className="col-4">
				<img
					src={pic}
					alt={title}
					className="rounded w-100 object-fit-cover"
					height={80}
				/>
			</div>
			<div className="col-8">
				<div className="vstack justify-content-between h-100">
					<div>{title}</div>
					<div className="text-warning">
						{Rate >= 1 ? <FaStar /> : <FaRegStar />}
						{Rate >= 2 ? <FaStar /> : <FaRegStar />}
						{Rate >= 3 ? <FaStar /> : <FaRegStar />}
						{Rate >= 4 ? <FaStar /> : <FaRegStar />}
						{Rate >= 5 ? <FaStar /> : <FaRegStar />}
					</div>
					<div>
						<span className="text-danger me-3">{currentPrice}</span>
						<span className="text-danger text-opacity-50 text-decoration-line-through small">
							{oldPrice}
						</span>
					</div>
				</div>
			</div>
		</div>
	);
}
