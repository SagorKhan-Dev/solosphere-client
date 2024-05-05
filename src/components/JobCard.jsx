const JobCard = ({ job }) => {
  console.log(job);
  const {
    category,
    description,
    job_title,
    deadline,
    min_price,
    max_price,
    buyer_email,
  } = job;

  return (
    <div className="w-full max-w-sm px-5 py-4 bg-white rounded-md shadow-md hover:scale-[1.05] transition-all">
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

        <p className="mt-2 text-base text-gray-600 ">{description}</p>
        <p className="mt-2 text-base font-bold text-gray-600 ">
          Range: ${min_price}- ${max_price}
        </p>
      </div>
    </div>
  );
};

export default JobCard;
