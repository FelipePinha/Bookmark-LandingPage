import { ContactForm } from "./contact-form";

export function Contact() {
  return (
    <div className="text-center space-y-5 pt-10 px-3">
      <p className="uppercase tracking-wider text-xs sm:text-sm">
        35.000 + ALREADY JOINED
      </p>
      <h2 className="text-lg sm:text-3xl font-bold">
        Stay up-to-date with what we're doing
      </h2>
      <ContactForm />
    </div>
  );
}
