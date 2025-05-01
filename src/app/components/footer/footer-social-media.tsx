import { BookmarkLogo } from "../header/bookmark-logo";
import { navbarItems } from "../header/helpers/navbar-items";
import { ImFacebook2, ImTwitter } from "react-icons/im";

export function FooterSocialMedia() {
  return (
    <div className="bg-blue-900 w-full mt-10 p-5">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center space-y-10 sm:space-y-0">
        <div className="flex flex-col sm:flex-row items-center gap-x-16 space-y-5 sm:space-y-0">
          <BookmarkLogo />
          <ul className="flex flex-col sm:flex-row items-center gap-5">
            {navbarItems.map((item) => (
              <li
                key={item}
                className="text-sm text-white font-semibold hover:text-red-400 transition-colors cursor-pointer"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center gap-x-8">
          <ImFacebook2
            size={30}
            className="text-white hover:text-red-400 transition-colors"
          />
          <ImTwitter
            size={30}
            className="text-white hover:text-red-400 transition-colors"
          />
        </div>
      </div>
    </div>
  );
}
