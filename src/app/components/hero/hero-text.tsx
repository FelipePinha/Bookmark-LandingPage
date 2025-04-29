import { Button } from "@/components/ui/button";

export function HeroText() {
  return (
    <div className="w-full md:w-1/2 flex flex-col space-y-5 text-center md:text-start px-3">
      <h1 className="font-bold text-3xl md:text-5xl text-zinc-800">
        A Simple Bookmark Manager
      </h1>
      <p>
        A clean and Simple interface to organize your favorite websites. Open a
        new browser tab and see your sites load instantly. Try it for free.
      </p>

      <div className="flex items-center gap-3">
        <Button
          variant="outline"
          size="lg"
          className="bg-indigo-600 hover:bg-white border-2   border-indigo-600 text-white hover:text-indigo-600 transition-colors"
        >
          Get it on Chrome
        </Button>
        <Button
          variant="outline"
          size="lg"
          className="border-2 border-white hover:border-gray-600 text-gray-600 font-bold shadow-md transition-colors"
        >
          Get it on Firefox
        </Button>
      </div>
    </div>
  );
}
