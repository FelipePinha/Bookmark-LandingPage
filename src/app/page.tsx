import { Extensions } from "./components/extensions";
import { Features } from "./components/features";
import { Header } from "./components/header";
import { Hero } from "./components/hero";
import { Questions } from "./components/questions";

export default function Home() {
  return (
    <div className="w-screen h-screen bg-white overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        <Header />
        <Hero />
        <Features />
        <Extensions />
        <Questions />
      </div>
    </div>
  );
}
