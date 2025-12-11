import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Price from "./components/Price";
import Portfolio from "./components/Portfolio";
import Reviews from "./components/Reviews";
import Contacts from "./components/Contacts";
import Modal from "./components/Modal";

export default function App() {
  const [modal, setModal] = useState(null);

  return (
    <div className="font-sans text-black bg-[var(--bg-main)]">
      <Header />
      <main>
        <Hero />
        <About />
        <Price openModal={setModal} />
        <Portfolio />
        <Reviews />
        <Contacts />
      </main>

      <AnimatePresence>
        {modal && <Modal modal={modal} closeModal={() => setModal(null)} />}
      </AnimatePresence>
    </div>
  );
}
