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
        <Menu className="h-6 w-6" />
      </SheetTrigger>
      <SheetContent
        side="left"
        className="flex"
        onPointerDownOutside={(e) => e.preventDefault()}
      >
        <section className="flex h-full w-[450px] flex-col place-items-center gap-4 p-4 lg:shadow-xl relative">
          {/* ProfileBio only shows in desktop */}
          <div className="hidden lg:block">
            <ProfileBio />
          </div>
          {/* Your sidebar content */}
          SIDEBAR CONTENT
          {/* Hamburger menu positioned on right edge */}
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
