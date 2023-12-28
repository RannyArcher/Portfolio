import { Metadata } from "next";
import About from "./about";

export default function () {
  return <About />;
}

export const metadata: Metadata = {
  title: "About Me",
};
