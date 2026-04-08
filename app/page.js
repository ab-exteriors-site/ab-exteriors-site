app/page.js
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function ABExteriors() {
  const [downstairs, setDownstairs] = useState(0);
  const [upstairs, setUpstairs] = useState(0);
  const [solarPanels, setSolarPanels] = useState(0);
  const [gutterFeet, setGutterFeet] = useState(0);

  const windowPrice = downstairs * 16 + upstairs * 20;
  const solarPrice = solarPanels * 50;
  const gutterPrice = gutterFeet * 4;

  const total = windowPrice + solarPrice + gutterPrice;

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Header */}
      <header className="bg-black text-white p-6 text-center shadow-lg">
        <h1 className="text-4xl font-bold tracking-wide">AB Exteriors</h1>
        <p className="text-lg text-blue-400">Professional Exterior Cleaning</p>
      </header>

      {/* Hero */}
      <section className="p-12 text-center bg-gradient-to-b from-blue-50 to-white">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-semibold mb-4"
        >
          Spotless Results. Every Time.
        </motion.h2>
        <p className="max-w-xl mx-auto text-lg">
          High-quality window, gutter, and solar panel cleaning you can trust.
        </p>
        <div className="mt-6 flex justify-center gap-4 flex-wrap">
          <Button className="bg-blue-600 text-white rounded-2xl px-6 py-3 text-lg shadow-md">
            Get Your Quote Below
          </Button>
          <a href="tel:7377770592">
            <Button className="bg-black text-white rounded-2xl px-6 py-3 text-lg">
              Call Now
            </Button>
          </a>
        </div>
      </section>

      {/* About */}
      <section className="p-10 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">About Us</h2>
        <p className="text-lg leading-relaxed">
          Hey, my name is Aiden, and me and my business partner Theo are two high school students who have been doing window cleaning for over a year now. We take pride in professionalism and quality. We will never leave your windows looking bad — they will always be spotless.
          <br /><br />
          Our typical job takes about two hours to get your windows looking their absolute best. I’m from California, Theo is from Portugal — he loves dirt bikes. I play baseball and my goal is to become an EMT firefighter.
        </p>
      </section>

      {/* Before & After */}
      <section className="bg-gray-100 p-12">
        <h2 className="text-3xl font-bold text-center mb-8">Before & After</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <img src="/mnt/data/dirty-window-1.jpg" className="rounded-2xl shadow-lg" />
          <img src="/mnt/data/how-to-get-good-before-and-after-pictures-v0-p84rxfc52zfb1.webp" className="rounded-2xl shadow-lg" />
          <img src="/mnt/data/images.jpg" className="rounded-2xl shadow-lg" />
        </div>
      </section>

      {/* Services */}
      <section className="bg-blue-600 text-white p-12">
        <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card><CardContent className="p-6 text-center"><h3 className="text-xl font-semibold">Window Cleaning</h3><p>$16 downstairs / $20 upstairs</p></CardContent></Card>
          <Card><CardContent className="p-6 text-center"><h3 className="text-xl font-semibold">Solar Panel Cleaning</h3><p>$50 per panel</p></CardContent></Card>
          <Card><CardContent className="p-6 text-center"><h3 className="text-xl font-semibold">Gutter Cleaning</h3><p>$4 per foot</p></CardContent></Card>
        </div>
      </section>

      {/* Quote Calculator */}
      <section className="p-12">
        <h2 className="text-3xl font-bold text-center mb-8">Instant Quote</h2>
        <div className="max-w-xl mx-auto space-y-4">
          <input type="number" placeholder="Downstairs windows" className="w-full p-3 border rounded" onChange={(e)=>setDownstairs(Number(e.target.value))}/>
          <input type="number" placeholder="Upstairs windows" className="w-full p-3 border rounded" onChange={(e)=>setUpstairs(Number(e.target.value))}/>
          <input type="number" placeholder="Solar panels" className="w-full p-3 border rounded" onChange={(e)=>setSolarPanels(Number(e.target.value))}/>
          <input type="number" placeholder="Gutter length (feet)" className="w-full p-3 border rounded" onChange={(e)=>setGutterFeet(Number(e.target.value))}/>

          <div className="bg-black text-white p-6 rounded-2xl text-center">
            <h3 className="text-xl">Estimated Total</h3>
            <p className="text-4xl font-bold text-blue-400">${total}</p>
          </div>
        </div>
      </section>

      {/* Booking */}
      <section className="bg-white p-12 text-center">
        <h2 className="text-3xl font-bold mb-6">Book an Appointment</h2>
        <p className="mb-4">Schedule easily using our online calendar:</p>
        <div className="max-w-3xl mx-auto">
          <iframe
            src="https://calendly.com/your-link"
            width="100%"
            height="600"
            frameBorder="0"
          ></iframe>
        </div>
      </section>

      {/* Service Area Map */}
      <section className="bg-gray-100 p-12 text-center">
        <h2 className="text-3xl font-bold mb-6">Service Area</h2>
        <p className="mb-4">Serving Leander, Austin, Georgetown, Liberty Hill & surrounding areas</p>
        <iframe
          src="https://www.google.com/maps?q=Austin,Texas&output=embed"
          width="100%"
          height="400"
          className="rounded-2xl shadow-lg"
        ></iframe>
      </section>

      {/* Payments */}
      <section className="p-10 text-center">
        <h2 className="text-2xl font-bold mb-4">Payment Options</h2>
        <p>Zelle, Cash App, Venmo accepted</p>
      </section>

      {/* Contact */}
      <section className="bg-black text-white p-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Contact</h2>
        <p>Phone: 737-777-0592</p>
        <p>Email: ab.windows2026@gmail.com</p>
      </section>

      <footer className="text-center p-4 bg-blue-600 text-white">
        <p>© 2026 AB Exteriors</p>
      </footer>
    </div>
  );
}
