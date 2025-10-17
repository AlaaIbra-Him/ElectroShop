import Hero from "./components/Hero";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
    <div className="bg-black text-white">
      <Hero />

      <Testimonials />
    </div>
  );
}
