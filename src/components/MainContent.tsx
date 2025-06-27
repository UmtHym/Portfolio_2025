import SkillsSection from "./SkillsSection";
import AboutSection from "./AboutSection";
import WorkSection from "./WorkSection";
import ContactSection from "./ContactSection";
import { useTheme } from "./ThemeProvider";
import { Moon, Sun } from "lucide-react";

import { useState } from "react";

interface MainContentProps {
  // Add any props if needed
}

type TabType = "about" | "skills" | "work" | "contact";

const MainContent = ({}: MainContentProps) => {
  const [activeTab, setActiveTab] = useState<TabType>("about");
  const { theme, toggleTheme } = useTheme();
  return (
    <div className="h-full w-full overflow-hidden flex flex-col">
      <header className="relative flex w-full items-center justify-center overflow-hidden px-4 py-6 lg:h-[80px]">
        {/* Tabs */}
        <nav
          className="relative flex h-[60px] gap-1 md:gap-2 overflow-x-auto rounded-xl border-2 border-primary/40 bg-background p-1.5 px-2 md:px-4 shadow-md"
          style={{ backdropFilter: "blur(8px)" }}
        >
          <TabButton
            label="About"
            isActive={activeTab === "about"}
            onClick={() => setActiveTab("about")}
          />
          <TabButton
            label="Skills"
            isActive={activeTab === "skills"}
            onClick={() => setActiveTab("skills")}
          />
          <TabButton
            label="Work"
            isActive={activeTab === "work"}
            onClick={() => setActiveTab("work")}
          />
          <TabButton
            label="Contact"
            isActive={activeTab === "contact"}
            onClick={() => setActiveTab("contact")}
          />
        </nav>

        {/* Theme controls */}
        <button
          onClick={toggleTheme}
          className="absolute right-4 top-4 p-2 rounded-lg hover:bg-secondary transition-colors"
        >
          {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
        </button>
      </header>

      {/* Tab content */}
      <div className="flex-1 overflow-auto">
        {activeTab === "about" && <AboutSection />}
        {activeTab === "skills" && <SkillsSection />}
        {activeTab === "work" && <WorkSection />}
        {activeTab === "contact" && <ContactSection />}
      </div>
    </div>
  );
};

// TabButton component for cleaner code
interface TabButtonProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

const TabButton = ({ label, isActive, onClick }: TabButtonProps) => {
  return (
    <button
      className={`relative flex min-w-[80px] items-center justify-center whitespace-nowrap rounded-lg px-3 py-1.5 text-sm font-medium transition-all duration-300 md:min-w-[100px] md:px-5 ${
        isActive
          ? "bg-primary text-primary-foreground shadow-sm"
          : "text-foreground hover:bg-primary/10"
      }`}
      onClick={onClick}
    >
      {label}
      {isActive && (
        <span className="absolute -bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-primary-foreground"></span>
      )}
    </button>
  );
};

export default MainContent;
