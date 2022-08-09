import "./App.css";
import HomeView from "./components/pages/HomeView";
import NavBar from "./components/NavBar";
import AboutView from "./components/pages/AboutView";
import ResumeView from "./components/pages/ResumeView";

function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <NavBar />

        <HomeView />
        <AboutView />
        <ResumeView />
      </div>
    </div>
  );
}

export default App;
