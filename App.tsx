import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Categories } from './components/Categories';
import { About } from './components/About';
import { Brands } from './components/Brands';
import { HowItWorks } from './components/HowItWorks';
import { Testimonials } from './components/Testimonials';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';
import { ElectricalProducts } from './pages/ElectricalProducts';

const App: React.FC = () => {
  const isElectricalPage = /^\/produtos-eletricos(?:\/index\.html)?\/?$/.test(window.location.pathname);

  return (
    <div className="font-sans antialiased text-brand-black bg-transparent min-h-screen flex flex-col">
      <Header isElectricalPage={isElectricalPage} />
      
      <main id="conteudo" className="flex-grow">
        {isElectricalPage ? <ElectricalProducts /> : <>
        <Hero />
        <Brands />
        <Categories />
        <About />
        <HowItWorks />
        <Testimonials />
        <ContactForm />
        </>}
      </main>

      <Footer />
    </div>
  );
};

export default App;
