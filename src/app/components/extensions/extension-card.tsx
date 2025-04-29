import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Image from "next/image";

interface ExtensionCardProps {
  extension: {
    browser: string;
    image: string;
    version: string;
  };
}

export function ExtensionCard({ extension }: ExtensionCardProps) {
  return (
    <Card className="px-3">
      <CardContent className="flex flex-col items-center space-y-3">
        <Image
          src={extension.image}
          alt={`logo ${extension.browser}`}
          width={80}
          height={80}
        />

        <h3 className="font-bold text-lg">Add to {extension.browser}</h3>
        <p className="text-xs text-gray-400">
          Minimum version {extension.version}
        </p>
      </CardContent>
      <CardFooter className="border-t">
        <Button
          size="lg"
          variant="secondary"
          className="bg-indigo-600 w-full hover:bg-white border border-indigo-600 text-white hover:text-indigo-600"
        >
          Add & install Extension
        </Button>
      </CardFooter>
    </Card>
  );
}
