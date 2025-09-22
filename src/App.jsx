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
    <div className="font-sans text-white bg-black select-none">
      <Header />
      <Hero />
      <About />
      <Price openModal={setModal} />
      <Portfolio />
      <Reviews />
      <Contacts />

      {/* Модалка */}
      <AnimatePresence>
        {modal && <Modal modal={modal} closeModal={() => setModal(null)} />}
      </AnimatePresence>
    </div>
  );
}
