import { useState, useContext, createContext } from "react";

//create a context
const AppContext = createContext();

//create Component
export const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openSidebar = () => setIsSidebarOpen(true);
  const closeSidebar = () => {setIsSidebarOpen(false)};
  const openModal = () => {setIsModalOpen(true)};
  const closeModal = () => {setIsModalOpen(false)};

  return (
    <AppContext.Provider
      value={{
        isSidebarOpen,
        isModalOpen,
        openModal,
        closeModal,
        openSidebar,
        closeSidebar,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

//set custom Hook
export const useGlobalContext = () => {
  return useContext(AppContext);
};
