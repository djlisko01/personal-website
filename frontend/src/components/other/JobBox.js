const JobBox = ({ jobTitle, company, startDate, endDate, description }) => {
  return (
    <div className="jobBox">
      <h2 className="jobTitle mb-0 pb-0" style={{ color: "rgb(25, 130, 196)" }}>
        {jobTitle}
      </h2>
      <p className="companyName mt-0 pt-0 text-muted"> {company}</p>
      <span className="yearsWorking" style={{ fontWeight: "bolder" }}>
        {startDate} - {endDate}
      </span>
      <div className="jobDescription">{description}</div>
    </div>
  );
};

export default JobBox;
