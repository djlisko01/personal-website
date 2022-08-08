import "./App.css";
import HomeView from "./components/pages/HomeView";
import NavBar from "./components/NavBar";
import AboutView from "./components/pages/AboutView";

function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <NavBar />

        <HomeView />
        <AboutView />
      </div>
    </div>
  );
}

export default App;
