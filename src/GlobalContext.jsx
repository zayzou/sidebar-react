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
    setIsSidebarOpen(false);
  };
  const openSidebar = () => {
    setIsSidebarOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  const openModal = () => {
    setIsModalOpen(true);
  };
  return (
    <GlobalContext.Provider
      value={{ openModal, openSidebar, closeModal, closeSidebar }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
