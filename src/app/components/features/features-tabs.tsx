import { Tabs, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import { TabsList } from "@radix-ui/react-tabs";
import { FeatureItem } from "./feature-item";

const tabs = [
  {
    value: "bookmarking",
    title: "Bookmark in one click",
    description: `Organize your bookmarks however you like. Our simple drag-and-drop
            interface gives you complete control over how you manage your
            favorite sites.`,
    image: "/illustration-features-tab-1.svg",
  },
  {
    value: "searching",
    title: "Speedy Searching",
    description: `Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks`,
    image: "/illustration-features-tab-2.svg",
  },
  {
    value: "sharing",
    title: "Easy Sharing",
    description: `Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button`,
    image: "/illustration-features-tab-3.svg",
  },
];

export function FeatureTabs() {
  return (
    <Tabs defaultValue="bookmarking" className="mt-10">
      <TabsList className="grid w-4/5 mx-auto grid-cols-1 md:grid-cols-3 gap-y-3 mb-10">
        <TabsTrigger
          className="hover:text-red-400 cursor-pointer"
          value="bookmarking"
        >
          Simple Bookmarking
        </TabsTrigger>
        <TabsTrigger
          className="hover:text-red-400 cursor-pointer"
          value="searching"
        >
          Speedy Searching
        </TabsTrigger>
        <TabsTrigger
          className="hover:text-red-400 cursor-pointer"
          value="sharing"
        >
          Easy Sharing
        </TabsTrigger>
      </TabsList>
      {tabs.map((tab) => (
        <TabsContent key={tab.value} value={tab.value}>
          <FeatureItem
            title={tab.title}
            value={tab.value}
            description={tab.description}
            image={tab.image}
          />
        </TabsContent>
      ))}
    </Tabs>
  );
}
