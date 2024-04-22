import Image from "next/image";
import Hero from "./Components/Hero";
import Camp from "./Components/Camp";
import Guide from "./Components/Guide";
import Features from "./Components/Features";
import GetApp from "./Components/GetApp";

export default function Home() {
  return (
    <>
    <Hero/>
    <Camp/>
    <Guide/>
    <Features/>
    <GetApp/>
    </>
  );
}
