import SkillsSection from "./SkillsSection";
import AboutSection from "./AboutSection";
import WorkSection from "./WorkSection";
import ContactSection from "./ContactSection";
import { useState } from "react";

interface MainContentProps {
  // Add any props if needed
}

type TabType = "about" | "skills" | "work" | "contact";

const MainContent = ({}: MainContentProps) => {
  const [activeTab, setActiveTab] = useState<TabType>("about");

  return (
    <div className="h-full w-full overflow-hidden">
      <header className="relative flex w-[100%] overflow-hidden p-2 lg:h-[80px] min-h-[80px]">
        {/* Tabs */}
        <div className="absolute left-1/2 top-4 flex h-[60px] -translate-x-1/2 gap-4 overflow-x-auto rounded-md border-2 border-primary p-1 px-4 md:w-fit">
          <button
            className={`tab-btn ${activeTab === "about" ? "tab-active" : ""}`}
            onClick={() => setActiveTab("about")}
          >
            About
          </button>
          <button
            className={`tab-btn ${activeTab === "skills" ? "tab-active" : ""}`}
            onClick={() => setActiveTab("skills")}
          >
            Skills
          </button>
          <button
            className={`tab-btn ${activeTab === "work" ? "tab-active" : ""}`}
            onClick={() => setActiveTab("work")}
          >
            Work
          </button>
          <button
            className={`tab-btn ${activeTab === "contact" ? "tab-active" : ""}`}
            onClick={() => setActiveTab("contact")}
          >
            Contact
          </button>
        </div>

        {/* Theme controls - we can handle this later */}
      </header>

      {/* Tab content */}
      <div>
        {activeTab === "about" && <AboutSection />}
        {activeTab === "skills" && <SkillsSection />}
        {activeTab === "work" && <WorkSection />}
        {activeTab === "contact" && <ContactSection />}
      </div>
    </div>
  );
};

export default MainContent;
