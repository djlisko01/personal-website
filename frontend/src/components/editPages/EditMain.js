import React from "react";
import { useState } from "react";
import AddModal from "./AddModal";
import { plusBtn } from "../../public/icons";
const test = { "main-header": "", "main-description": "", "about-me": "" };

function EditMain({ showModal, setShowModal }) {
  const [profileData, setProfileData] = useState(test);

  const saveData = (event) => {
    event.preventDefault();
    console.log(profileData);
  };

  const handleChange = (event) => {
    test[event.target.name] = event.target.value;
    setProfileData(test);
  };

  return (
    <div id="edit-main" className="row mt-5">
      <div className="col-lg-6">
        <h3>Main Descriptions</h3>
        <form className="main-form row">
          <label htmlFor="main-header">
            <h6>Main Header </h6>
            <textarea
              name="main-header"
              className="no-resize"
              onChange={handleChange}
              rows="1"
              cols="30"
              defaultValue={profileData["main-header"]}
            ></textarea>
          </label>
          <label htmlFor="main-description">
            <h6>Main Descriptions </h6>
            <textarea
              rows="10"
              cols="35"
              name="main-description"
              onChange={handleChange}
              defaultValue={profileData["main-description"]}
            ></textarea>
          </label>
          <label htmlFor="about-me">
            <h6>About Me </h6>
            <textarea
              rows="10"
              cols="35"
              name="about-me"
              onChange={handleChange}
              defaultValue={profileData["about-me"]}
            ></textarea>
          </label>
          <button className="save-btn" type="submit" onClick={saveData}>
            Save
          </button>
        </form>
      </div>

      {/***************** Contact Section ***********************/}
      <div className="col-lg-6" id="contact-info">
        <h3>Contact Info</h3>
        <form>
          <label htmlFor="email">
            <h6>Email</h6>
            <input type="email" name="email" onChange={handleChange}></input>
          </label>
          <label htmlFor="twitter">
            <h6>Twitter URL</h6>
            <input type="url" name="twitter" onChange={handleChange}></input>
          </label>
          <label htmlFor="twitter">
            <h6>Github URL</h6>
            <input type="url" name="github" onChange={handleChange}></input>
          </label>
          <label htmlFor="twitter">
            <h6>LinkedIn URL</h6>
            <input type="url" name="linkedin" onChange={handleChange}></input>
          </label>
          <button
            className="save-btn"
            type="submit"
            onClick={saveData}
            style={{ display: "block" }}
          >
            Save
          </button>
        </form>
        {/***************** Full Stack Skills Section ***********************/}
        <div className="edit-skill-title mt-5">
          <h3 style={{ display: "inline-block" }}>Full Stack Skills</h3>

          <button
            className="plusBtn"
            onClick={() => setShowModal(true)}
            style={{ height: "35px", width: "35px" }}
          >
            {plusBtn}
          </button>
        </div>
        {showModal ? <AddModal setShowModal={setShowModal} /> : ""}
        <div className="skill-body">
          <div className="skill-container p-2">
            HTML
            <button className="x-close-btn">
              <span aria-hidden="true" style={{ color: "rgb(255, 89, 94)" }}>
                &times;
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditMain;
