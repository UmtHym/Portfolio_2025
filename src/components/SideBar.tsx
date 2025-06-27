import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import ProfileBio from "./ProfileBio";
import LatestActivities from "./LatestActivities";

interface SideBarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const SideBar = ({ isOpen, setIsOpen }: SideBarProps) => {
  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen} modal={false}>
      <SheetTrigger className="fixed left-4 top-4 z-50">
        {/* Menu Button*/}
        <Menu className="h-6 w-6" />
      </SheetTrigger>
      <SheetContent
        side="left"
        className="w-[350px] p-0 sm:max-w-[350px]"
        style={{ width: "350px", maxWidth: "350px" }}
        onInteractOutside={(event) => event.preventDefault()}
      >
        <section className="flex h-full w-full flex-col gap-10 p-4 relative">
          {/* ProfileBio only shows in desktop */}
          <div className="hidden lg:block">
            <ProfileBio />
          </div>
          {/* Latest Activities */}
          <div className="flex-1 overflow-y-auto">
            <LatestActivities />
          </div>
          {/* Social Links */}
          <div className="flex justify-center gap-5 text-2xl mt-auto">
            <a href="https://github.com/UmtHym" className="link">
              <i className="bi bi-github"></i>
            </a>
            <a href="https://x.com/umthym" className="link">
              <i className="bi bi-twitter-x"></i>
            </a>
            <a href="https://www.linkedin.com/in/umit-hayim/" className="link">
              <i className="bi bi-linkedin"></i>
            </a>
            <a href="mailto:umitbcn@gmail.com" className="link">
              <i className="bi bi-envelope-at-fill"></i>
            </a>
          </div>
          {/* Close button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="absolute right-4 top-4"
          >
            <Menu className="h-6 w-6" />
          </button>
        </section>
      </SheetContent>
    </Sheet>
  );
};
export default SideBar;
