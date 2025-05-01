"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

const contactFormSchema = z.object({
  email: z.string().email("Whoops, make sure it's an email"),
});

export type ContactFormSchema = z.infer<typeof contactFormSchema>;

export function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(contactFormSchema),
  });

  const onFormSubmit = (formData: ContactFormSchema) => {
    toast(`Email sent to ${formData.email}!`, {
      style: {
        background: "#fff",
        border: "3px solid oklch(70.4% 0.191 22.216)",
        color: "oklch(70.4% 0.191 22.216)",
        letterSpacing: "1.5px",
      },
      position: "top-left",
    });
  };

  return (
    <form
      onSubmit={handleSubmit(onFormSubmit)}
      className="w-full flex flex-col md:flex-row items-center justify-center gap-5"
    >
      <div className="relative">
        <Input
          className="w-full md:w-80 bg-white placeholder:text-gray-400 h-12 text-black"
          type="email"
          placeholder="your.email@email.com"
          {...register("email")}
        />
        {errors.email && (
          <span className="absolute w-full rounded-bl-md rounded-br-md bg-red-400 text-sm -bottom-[18px] left-0 text-start px-2">
            {errors.email.message}
          </span>
        )}
      </div>

      <Button
        size="lg"
        variant="secondary"
        className="bg-red-400 hover:bg-white border-2 border-red-400 text-white hover:text-red-400 transition-colors h-12"
        type="submit"
      >
        Contact Us
      </Button>
    </form>
  );
}
