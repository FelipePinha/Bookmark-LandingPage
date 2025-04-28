import { Button } from "@/components/ui/button";
import { navbarItems } from "./helpers/navbar-items";

export function DesktopNavbar() {
  return (
    <ul className="hidden md:flex items-center gap-8">
      {navbarItems.map((item) => (
        <li key={item} className="cursor-pointer hover:text-red-400">
          {item}
        </li>
      ))}
      <li>
        <Button
          className="bg-red-400 text-white hover:bg-white hover:text-red-400 hover:border 
          hover:border-red-400 transition-colors"
          variant="outline"
          size="lg"
        >
          Login
        </Button>
      </li>
    </ul>
  );
}
