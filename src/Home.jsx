import React from "react";
import { useGlobalContext } from "./GlobalContext";

const Home = () => {
  return (
    <main>
      <button className="sidebar-toggle" onClick={useGlobalContext().openModal}>
        Open Modal
      </button>
      <button className="btn" onClick={useGlobalContext().openSidebar}>
        Open Sidebar
      </button>
    </main>
  );
};

export default Home;
