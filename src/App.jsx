import "./App.css";
import Banner from "./components/Banner";
import Models from "./components/Models";
import NavBar from "./components/NavBar";

const fetchModels = async () => {
  const res = await fetch("/models.json");
  return res.json();
};
const modelsPromise = fetchModels();

function App() {
  return (
    <>
      <NavBar></NavBar>

      <Banner></Banner>

      <Models modelsPromise={modelsPromise}></Models>
    </>
  );
}

export default App;
