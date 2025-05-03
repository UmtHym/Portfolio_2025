import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import ProfileBio from "./ProfileBio";

interface SideBarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const SideBar = ({ isOpen, setIsOpen }: SideBarProps) => {
  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen} modal={false}>
      <SheetTrigger className="absolute left-4 top-10 z-10">
        {/* Menu Button*/}
        <Menu className="h-6 w-6" />
      </SheetTrigger>
      <SheetContent
        side="left"
        className="flex w-[350px] sm:max-w-[350px]"
        onInteractOutside={(event) => event.preventDefault()}
      >
        <section className="flex h-full w-full] flex-col place-items-center gap-4 p-4 relative">
          {/* ProfileBio only shows in desktop */}
          <div className="hidden lg:block">
            <div>
              <ProfileBio />
            </div>
          </div>
          {/* Hamburger menu positioned on right edge */}
          <div>LATEST ACTIVITIES</div>
          <div className="flex justify-items-center mt-auto gap-5 text-2xl">
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
          {/* Location */}
          <div className="flex items-center gap-2 text-muted-foreground text-sm">
            <i className="bi bi-geo-alt"></i>
            <span>Barcelona, Spain</span>
          </div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="absolute -right-2 top-3"
          >
            <Menu className="h-6 w-6" />
          </button>
        </section>
      </SheetContent>
    </Sheet>
  );
};

export default SideBar;
