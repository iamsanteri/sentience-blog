import React, { useState } from 'react';
import Link from 'next/link';
import styles from '../styles/Header.module.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
            <a href="https://sentience.lostbookofsales.com" className="flex items-center">
                <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Sentience</span>
            </a>
        </div>
    </nav>
  );
};

export default Header;