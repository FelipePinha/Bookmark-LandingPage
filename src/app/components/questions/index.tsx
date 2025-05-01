import { Button } from "@/components/ui/button";
import { Accordions } from "./accordions";

export function Questions() {
  return (
    <section className="mt-24 flex flex-col items-center space-y-10">
      <div className="space-y-2 text-center px-3">
        <h2 className="text-2xl md:text-4xl text-zinc-800">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-400 text-sm md:text-base">
          Here are some of our FAQs. If you have any other questions you'd like
          answered please feel free to email us.
        </p>
      </div>

      <Accordions />

      <Button
        variant="secondary"
        size="lg"
        className="bg-indigo-600 hover:bg-white border border-indigo-600 text-white hover:text-indigo-600 transition-colors"
      >
        More info
      </Button>
    </section>
  );
}
