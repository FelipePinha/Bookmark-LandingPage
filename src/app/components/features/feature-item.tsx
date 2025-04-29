import { Button } from "@/components/ui/button";
import { TabsContent } from "@/components/ui/tabs";
import Image from "next/image";

interface FeatureItemProps {
  value: string;
  title: string;
  description: string;
  image: string;
}

export function FeatureItem({
  value,
  title,
  description,
  image,
}: FeatureItemProps) {
  return (
    <TabsContent value={value}>
      <div className="flex flex-col md:flex-row items-center px-3">
        <div className="w-full md:w-1/2 flex justify-center">
          <Image src={image} alt="imagem hero" width={400} height={300} />
        </div>
        <div className="w-full md:w-1/2 text-center md:text-left space-y-5">
          <h2 className="text-2xl md:text-4xl font-bold text-zinc-800">
            {title}
          </h2>
          <p className="w-full md:w-3/4 text-sm md:text-base text-gray-400">
            {description}
          </p>
          <Button
            variant="secondary"
            size="lg"
            className="bg-indigo-600 border border-indigo-600 hover:bg-white text-white hover:text-indigo-600"
          >
            More info
          </Button>
        </div>
      </div>
    </TabsContent>
  );
}
