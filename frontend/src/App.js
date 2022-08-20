import "./App.css";
//----------------- Import Components ------------//
import HomeView from "./components/pages/HomeView";
import NavBar from "./components/NavBar";
import AboutView from "./components/pages/AboutView";
import ResumeView from "./components/pages/ResumeView";
import ProjectsView from "./components/pages/ProjectsView";
import SocialLinks from "./components/SocialLinks";
import ContactView from "./components/pages/ContactView";

//----------------- Import Components ------------//
function App() {
  return (
    <div className="App">
      <div className="container-fluid">
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
        </div>
      </div>
    </div>
  );
}

export default App;
