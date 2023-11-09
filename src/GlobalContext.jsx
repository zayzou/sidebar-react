import { createContext, useContext, useState } from "react";

//create a context object
const GlobalContext = createContext();

//create a custom hook to use the context object
export const useGlobalContext = () => useContext(GlobalContext);

//the context provider component
export const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeSidebar = () => {
    console.log("close sidebar");
    setIsSidebarOpen(false);
  };
  const openSidebar = () => {
    console.log("open sidebar");
    setIsSidebarOpen(true);
  };
  const closeModal = () => {
    console.log("close modal");
    setIsModalOpen(false);
  };
  const openModal = () => {
    console.log("open modal");
    setIsModalOpen(true);
  };
  return (
    <GlobalContext.Provider
      value={{
        isModalOpen,
        isSidebarOpen,
        openModal,
        openSidebar,
        closeModal,
        closeSidebar,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
