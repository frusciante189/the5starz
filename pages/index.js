import Client from "../components/Home/Client";
import Hero from "../components/Home/Hero";
import Inspired from "../components/Home/Inspired";
import ProblemSolution from "../components/Home/ProblemSolution";

export default function Home() {
  return (
    <>
      <Hero />
      <ProblemSolution />
      <Client />
      <Inspired />
    </>
  );
}
