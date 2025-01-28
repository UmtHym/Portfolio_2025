import SideBar from "./components/SideBar";
import MainContent from "./components/MainContent";
import "./App.css";

const App = () => {
  return (
    <div className="flex w-full flex-col bg-[#fff] text-black dark:bg-slate-800">
      <main className="flex h-full w-full overflow-hidden max-lg:flex-col">
        <SideBar />
        <MainContent />
      </main>
    </div>
  );
};

export default App;
