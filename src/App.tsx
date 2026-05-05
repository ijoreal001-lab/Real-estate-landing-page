/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import WhyChooseMe from "./components/WhyChooseMe";
import FeaturedProperties from "./components/FeaturedProperties";
import Testimonials from "./components/Testimonials";
import Process from "./components/Process";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="font-sans antialiased bg-white selection:bg-gold selection:text-primary">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyChooseMe />
        <FeaturedProperties />
        <Testimonials />
        <Process />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
