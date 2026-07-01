"use client";

import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import FlexCalculator from "./components/FlexCalculator";
import Subscriptions from "./components/Subscriptions";
import ClientPortal from "./components/ClientPortal";
import AboutUs from "./components/AboutUs";
import FAQ from "./components/FAQ";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

export default function Home() {
  const [activeTab, setActiveTab] = useState("services");
  const [showPortal, setShowPortal] = useState(false);

  return (
    <div className="bg-[#020205] min-h-screen text-slate-100 flex flex-col justify-between selection:bg-[#bd00ff] selection:text-white">
      {/* Fixed Navigation */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        showPortal={showPortal}
        setShowPortal={setShowPortal}
      />

      {/* Main View Container */}
      <main className="flex-grow">
        {showPortal ? (
          <div className="pt-20">
            <ClientPortal />
          </div>
        ) : (
          <>
            <Hero setShowPortal={setShowPortal} />
            <Services />
            <FlexCalculator />
            <Subscriptions />
            <AboutUs />
            <FAQ />
            <ContactForm />
          </>
        )}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
