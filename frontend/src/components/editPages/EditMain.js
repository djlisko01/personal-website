import React from "react";

function EditMain() {
  return (
    <div id="edit-main">
      <form className="main-form row">
        <div className="col-6">
          <label for="main-header">
            <h6>Main Header </h6>
            <input type="text" name="main-header"></input>
          </label>
          <label for="main-description">
            <h6>Main Descriptions </h6>
            <textarea rows="10" cols="30" name="main-description"></textarea>
          </label>
          <label for="about-me">
            <h6>About Me </h6>
            <textarea rows="10" cols="30" name="about-me"></textarea>
          </label>
        </div>
        <div className="col-6">
          <label for="email">
            <h6>Email</h6>
            <input type="email" name="email"></input>
          </label>
          <label for="twitter">
            <h6>Twitter URL</h6>
            <input type="url" name="twitter"></input>
          </label>
          <label for="twitter">
            <h6>Github URL</h6>
            <input type="url" name="twitter"></input>
          </label>
          <label for="twitter">
            <h6>LinkedIn URL</h6>
            <input type="url" name="twitter"></input>
          </label>
        </div>
      </form>
      <form>
        <h2>Skills</h2>
      </form>
    </div>
  );
}

export default EditMain;
