import { redirect } from "next/navigation";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FormationNet - Find Training in Tunisia",
  description: "Discover the best training centers in Tunisia. Compare programs, explore certified courses, and advance your career.",
  robots: { index: false, follow: true },
};

export default function Home() {
  redirect("/en");
}
