import { Features } from "./components/features";
import { Header } from "./components/header";
import { Hero } from "./components/hero";

export default function Home() {
  return (
    <div className="w-screen h-screen bg-white overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        <Header />
        <Hero />
        <Features />
      </div>
    </div>
  );
}
