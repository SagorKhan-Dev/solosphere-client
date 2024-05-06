import { Link } from "react-router-dom";

const JobCard = ({ job }) => {
  const {
    _id,
    category,
    description,
    job_title,
    deadline,
    min_price,
    max_price,
    buyer_email,
  } = job || {};

  return (
    <Link
      to={`/job/${_id}`}
      className="w-full max-w-sm px-5 py-4 bg-white rounded-md shadow-md hover:scale-[1.05] transition-all"
    >
      <div className="flex items-center justify-between">
        <span className="text-sm font-light text-gray-800 ">
          Deadline: {deadline}
        </span>
        <span className="px-3 py-1 text-xs text-blue-800 uppercase bg-blue-200 rounded-full ">
          {category}
        </span>
      </div>

      <div>
        <h1 className="mt-2 text-xl font-semibold text-gray-800 ">
          {job_title}
        </h1>

        <p title={description} className="mt-2 text-base text-gray-600">
          {description.substring(0, 70)}....
        </p>
        <p className="mt-2 text-base font-bold text-gray-600 ">
          Range: ${min_price}- ${max_price}
        </p>
      </div>
    </Link>
  );
};

export default JobCard;
