import "./App.css";
//----------------- Import Components ------------//
import HomeView from "../components/mainPages/HomeView";
import NavBar from "../components/NavBar";
import AboutView from "../components/mainPages/AboutView";
import ResumeView from "../components/mainPages/ResumeView";
import ProjectsView from "../components/mainPages/ProjectsView";
import SocialLinks from "../components/SocialLinks";
import LoginView from "../components/editPages/LoginView";

// Edit Page Components
import EditProfileView from "../components/editPages/EditProfileView";
import EditMain from "../components/editPages/EditMain";
import EditProjects from "../components/editPages/EditProjects";
import EditResume from "../components/editPages/EditResume";

// External Packages
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [showModal, setShowModal] = useState(false);

  const runFetch = async (targetName, data, method = "POST") => {
    const res = await fetch(`http://localhost:9000/api/${targetName}/`, {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    return await res.json();
  };

  const main = (
    <div>
      <NavBar />
      <HomeView />
      <div className="row">
        <div
          className="col-md-2 mt-5 socialContainer"
          style={{ maxWidth: "125px" }}
        >
          <SocialLinks />
        </div>
        <div className="col-md-10">
          <AboutView />
          <ResumeView />
          <ProjectsView />
          <div id="contact-me">
            <h2 className="mt-5" style={{ textAlign: "center" }}>
              I'd love to connect with you!
            </h2>
            <SocialLinks
              inlineStyle={{
                flexDirection: "row",
                justifyContent: "center",
                paddingBottom: "10px",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="App">
      <div className="container-fluid">
        <Router>
          <Routes>
            <Route path="/" exact element={main} />
            <Route path="login" element={<LoginView runFetch={runFetch} />} />
            <Route path="edit-profile" element={<EditProfileView />}>
              <Route path="projects" element={<EditProjects />} />
              <Route
                path="main-content"
                element={
                  <EditMain showModal={showModal} setShowModal={setShowModal} />
                }
              />
              <Route path="resume" element={<EditResume />} />
            </Route>
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
