"use client";

import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import FlexCalculator from "./components/FlexCalculator";
import RecentProjects from "./components/RecentProjects";
import Subscriptions from "./components/Subscriptions";
import AboutUs from "./components/AboutUs";
import FAQ from "./components/FAQ";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

export default function Home() {
  const [activeTab, setActiveTab] = useState("services");

  return (
    <div className="bg-[#000000] min-h-screen text-slate-100 flex flex-col justify-between selection:bg-gold-main selection:text-black">
      {/* Fixed Navigation */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      {/* Main View Container */}
      <main className="flex-grow">
        <Hero />
        <Services />
        <FlexCalculator />
        <RecentProjects />
        <Subscriptions />
        <AboutUs />
        <FAQ />
        <ContactForm />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
