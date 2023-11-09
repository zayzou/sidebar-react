import React from "react";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "./GlobalContext";

const Home = () => {
  return (
    <main>
      <button className="sidebar-toggle" onClick={useGlobalContext().openSidebar}>
        <FaBars />
      </button>
      <button className="btn" onClick={useGlobalContext().openModal}>
        Open Modal
      </button>
    </main>
  );
};

export default Home;
