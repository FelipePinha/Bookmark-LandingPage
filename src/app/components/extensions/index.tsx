import { ExtensionCard } from "./extension-card";

const extensions = [
  {
    browser: "Chrome",
    image: "/logo-chrome.svg",
    version: "62",
    style: "mt-0",
  },
  {
    browser: "Firefox",
    image: "/logo-firefox.svg",
    version: "55",
    style: "mt-4",
  },
  {
    browser: "Opera",
    image: "/logo-opera.svg",
    version: "46",
  },
];

export function Extensions() {
  return (
    <section className="flex flex-col items-center mt-24 space-y-3">
      <h2 className="text-2xl md:text-4xl font-bold text-zinc-800">
        Download the extension
      </h2>
      <p className="w-full md:w-1/2 text-gray-400 text-sm md:text-base text-center">
        We've got more browsers in the pipeline. Please do let us know if you've
        got a favourite you'd like us to priorize.
      </p>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-y-4 gap-x-8">
        {extensions.map((extension) => (
          <ExtensionCard key={extension.browser} extension={extension} />
        ))}
      </div>
    </section>
  );
}
