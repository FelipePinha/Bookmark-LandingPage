import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { questionsList } from "./utils/questions-list";

export function Accordions() {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full flex flex-col items-center justify-center"
    >
      {questionsList.map((question) => (
        <AccordionItem
          value={question.value}
          key={question.value}
          className="border-b border-b-slate-200 dark:border-b-slate-700 w-full md:w-[68%] p-3"
        >
          <AccordionTrigger className="text-xl hover:text-red-400">
            {question.question}
          </AccordionTrigger>
          <AccordionContent className="text-gray-400 leading-7 text-base md:text-lg">
            {question.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
