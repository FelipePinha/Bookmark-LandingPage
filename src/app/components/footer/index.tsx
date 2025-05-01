import { Contact } from "./contact";
import { FooterSocialMedia } from "./footer-social-media";

export function Footer() {
  return (
    <footer className="bg-blue-500 flex flex-col items-center justify-center text-white mt-24">
      <Contact />
      <FooterSocialMedia />
    </footer>
  );
}
