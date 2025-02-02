import SideBar from "./components/SideBar.js";
import MainContent from "./components/MainContent.tsx";
import ProfileBio from "./components/ProfileBio";
import { useState } from "react";
import "./App.css";

interface AppProps {
  // Add any props if needed
}

const App = ({}: AppProps) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

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
