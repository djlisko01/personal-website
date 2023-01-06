import JobBox from "../other/JobBox";
import { EXPERIENCE } from "../../data/personal_info";

const ResumeView = () => {
  const experiences = EXPERIENCE.map((job) => {
    return (
      <JobBox
        jobTitle={job.jobTitle}
        company={job.company}
        startDate={job.startDate}
        endDate={job.endDate}
        description={job.description}
      />
    );
  });

  return (
    <div id="resume" className="row mt-5">
      <h2>Experience</h2>
      <div id="timeline">{experiences}</div>
    </div>
  );
};

export default ResumeView;
