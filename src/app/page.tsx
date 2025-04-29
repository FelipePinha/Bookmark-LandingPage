import { Header } from "./components/header";
import { Hero } from "./components/hero";

export default function Home() {
  return (
    <div className="w-screen h-screen bg-white">
      <div className="max-w-7xl mx-auto">
        <Header />
        <Hero />
      </div>
    </div>
  );
}
