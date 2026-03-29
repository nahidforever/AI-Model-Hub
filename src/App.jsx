import { useState } from "react";
import "./App.css";
import Banner from "./components/Banner";
import Models from "./components/Models";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";
import Footer from "./components/Footer";

const fetchModels = async () => {
  const res = await fetch("/models.json");
  return res.json();
};
const modelsPromise = fetchModels();

function App() {
  const [activeTab, setActiveTab] = useState("model");

  const [carts, setCarts] = useState([]);
  return (
    <>
      <NavBar></NavBar>

      <Banner></Banner>

      <div className="tabs tabs-box justify-center bg-transparent">
        <input
          type="radio"
          name="my_tabs_1"
          className={`tab rounded-full font-semibold w-40 ${activeTab === "model" ? "bg-pink-500" : ""}`}
          aria-label="Models"
          defaultChecked
          onClick={() => setActiveTab("model")}
        />
        <input
          type="radio"
          name="my_tabs_1"
          className={`tab rounded-full font-semibold w-40 ${activeTab === "cart" ? "bg-pink-500" : ""}`}
          aria-label="Cart"
          onClick={() => setActiveTab("cart")}
        />
      </div>

      {activeTab === "model" && (
        <Models
          modelsPromise={modelsPromise}
          carts={carts}
          setCarts={setCarts}
        ></Models>
      )}

      {activeTab === "cart" && <Cart carts={carts} setCarts={setCarts}></Cart>}

      <Footer></Footer>
    </>
  );
}

export default App;
