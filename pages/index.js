import Client from "../components/Home/Client";
import Hero from "../components/Home/Hero";
import Inspired from "../components/Home/Inspired";
import ProblemSolution from "../components/Home/ProblemSolution";
import Testimonial from "../components/Home/Testimonial";

export default function Home() {
  return (
    <>
      <Hero />
      <ProblemSolution />
      <Client />
      <Inspired />
      <Testimonial />
    </>
  );
}
