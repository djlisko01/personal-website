import "./App.css";
//----------------- Import Components ------------//
import HomeView from "./components/mainPages/HomeView";
import NavBar from "./components/NavBar";
import AboutView from "./components/mainPages/AboutView";
import ResumeView from "./components/mainPages/ResumeView";
import ProjectsView from "./components/mainPages/ProjectsView";
import SocialLinks from "./components/SocialLinks";
import ContactView from "./components/mainPages/ContactView";

// Edit Page Components
import EditProfileView from "./components/editPages/EditProfileView";
import EditMain from "./components/editPages/EditMain";
import EditProjects from "./components/editPages/EditProjects";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EditResume from "./components/editPages/EditResume";

function App() {
  const main = (
    <div>
      <NavBar />
      <HomeView />
      <div className="row">
        <div className="col-md-2 mt-5 socialContainer">
          <SocialLinks />
        </div>
        <div className="col-md-8">
          <AboutView />
          <ResumeView />
        </div>
      </div>
      <div className="ms-5 ps-5">
        <ProjectsView />
        <ContactView />
        <a href="/edit-profile/main-content"> Edit Profile</a>
      </div>
    </div>
  );

  return (
    <div className="App">
      <div className="container-fluid">
        <Router>
          <Routes>
            <Route path="/" exact element={main} />
            <Route path="edit-profile" element={<EditProfileView />}>
              <Route path="projects" element={<EditProjects />} />
              <Route path="main-content" element={<EditMain />} />
              <Route path="resume" element={<EditResume />} />
            </Route>
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
