import JobBox from "../other/JobBox";
const ResumeView = () => {
  return (
    <div id="resume" className="row mt-5">
      <h2>Experience</h2>
      <div id="timeline" className="mt-5">
        <JobBox />
        <JobBox />
        <JobBox />
        <JobBox />
      </div>
    </div>
  );
};

export default ResumeView;
