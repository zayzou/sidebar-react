import React from "react";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "./GlobalContext";

const Home = () => {
  return (
    <main>
      <button className="sidebar-toggle" onClick={useGlobalContext().openModal}>
        <FaBars />
      </button>
      <button className="btn" onClick={useGlobalContext().openSidebar}>
        Open Sidebar
      </button>
    </main>
  );
};

export default Home;
