const EmailForm = () => {
  return (
    <div id="email-form" className="mt-5">
      <h2>Let's connect!</h2>
      <div className=" ms-md-5 mb-2" style={{ maxWidth: "800px" }}>
        <div class="input-group mb-3">
          <span class="input-group-text" id="inputGroup-sizing-lg">
            Name
          </span>
          <input
            type="text"
            class="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
          />
        </div>
        <div class="input-group mb-3">
          <span class="input-group-text" id="inputGroup-sizing-default">
            Email
          </span>
          <input
            type="email"
            class="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-lg"
          />
        </div>
        <div class="input-group mb-3">
          <span class="input-group-text">Message</span>
          <textarea class="form-control" aria-label="With textarea"></textarea>
        </div>
        <div className="d-flex justify-content-center">
          <button className="sendBtn me-3">Send</button>
        </div>
      </div>
    </div>
  );
};

export default EmailForm;
