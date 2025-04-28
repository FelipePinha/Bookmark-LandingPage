import { BookmarkLogo } from "./bookmark-logo";
import { DesktopNavbar } from "./desktop-navbar";
import { MobileNavbar } from "./mobile-navbar";

export function Header() {
  return (
    <header className="h-20 flex justify-between items-center px-3">
      <BookmarkLogo />
      <MobileNavbar />
      <DesktopNavbar />
    </header>
  );
}
