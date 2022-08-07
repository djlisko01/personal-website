import "./App.css";
import HomeView from "./components/pages/HomeView";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <NavBar />

        <HomeView />
      </div>
    </div>
  );
}

export default App;
