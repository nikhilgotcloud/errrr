import Features from "@/components/Features";
import Hero from "@/components/Hero";


import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hp Printer Software",
  description: "Hp Printer Software",
 
};

export default function Home() {
  return (
    <>
    
    
     <Hero />
     <Features />
  
     
    </>
  );
}
