import React from "react";
import { FaTelegramPlane, FaInstagram } from "react-icons/fa";

export default function Contacts() {
  return (
    <section id="contacts" className="py-10 bg-black text-center">
      <div className="flex flex-col items-center gap-6 text-lg">
        <a
          href="https://t.me/kskanaeva"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-3 hover:text-gray-300 transition italic"
        >
          <FaTelegramPlane size={24} />
          tg: kskanaeva
        </a>
        <a
          href="https://www.instagram.com/kskanaeva/"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-3 hover:text-gray-300 transition italic"
        >
          <FaInstagram size={24} />
          inst: kskanaeva
        </a>
      </div>
    </section>
  );
}
