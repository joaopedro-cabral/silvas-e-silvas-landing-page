import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Categories } from './components/Categories';
import { About } from './components/About';
import { Brands } from './components/Brands';
import { HowItWorks } from './components/HowItWorks';
import { Testimonials } from './components/Testimonials';
import { ContactForm } from './components/ContactForm';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { FloatingCTA } from './components/FloatingCTA';

const App: React.FC = () => {
  return (
    <div className="font-sans antialiased text-gray-900 bg-white min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <Hero />
        <Brands />
        {/* New Categories Section */}
        <Categories />
        {/* Replaced generic Benefits with the "Why Choose Us" About section requested */}
        <About />
        <HowItWorks />
        <Testimonials />
        <FAQ />
        <ContactForm />
      </main>

      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default App;