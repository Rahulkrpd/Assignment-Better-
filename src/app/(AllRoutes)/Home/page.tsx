"use client";
import Navbar from "./Navbar";
import Section1 from "./HomeSection1";
import Section2 from "./HomeSection2";

export default function HomeComponent() {
    return (
        <div>
          <Navbar background="#004733" color="white"/>
          <Section1/>
          <Section2/>
        </div>
    );
} 