import SideBar from "./components/SideBar.js";
import MainContent from "./components/MainContent.tsx";
import ProfileBio from "./components/ProfileBio";
import { useState, useEffect } from "react";
import "./App.css";

interface AppProps {
  // Add any props if needed
}

const App = ({}: AppProps) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // Handle responsive sidebar visibility
  useEffect(() => {
    // Function to check window width and update sidebar state
    const handleResize = () => {
      if (window.innerWidth <= 1025) {
        setIsSidebarOpen(false);
      } else {
        setIsSidebarOpen(true);
      }
    };

    // Set initial state based on window width
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="flex min-h-screen w-full flex-col bg-[#fff] text-black dark:bg-slate-800">
      {/* ProfileBio for mobile */}
      <div className="lg:hidden">
        <ProfileBio />
      </div>
      <main className="flex h-full w-full overflow-hidden">
        <SideBar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
        <div
          className={`flex-1 transition-all duration-300 ${
            isSidebarOpen ? "ml-[450px]" : "ml-0"
          }`}
        >
          <MainContent />
        </div>
      </main>
    </div>
  );
};

export default App;
