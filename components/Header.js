import React, { useState } from 'react';
import Link from 'next/link';
import styles from '../styles/Header.module.css';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
      };

    const genericHamburgerLine = `h-px w-6 my-1 rounded-full bg-black dark:bg-white z-20 transition ease-in transform duration-50`;

  return (
    <nav className="lg:pl-60 pl-5 lg:pr-60 pr-8 pt-4 lg:pt-7 flex items-center flex-row dark:bg-sentient">
        <div className="container justify-start flex z-20">
            <a href="https://sentience.lostbookofsales.com" className="">
                <span className="text-xl lg:text-2xl font-bold dark:text-white hover:opacity-75">Sentience</span>
            </a>
        </div>
        <div className="container justify-center hidden lg:flex">
            <a href="https://sentience.lostbookofsales.com" className="flex-center">
                <span className="text-xl p-5 font-semibold whitespace-nowrap dark:text-white hover:opacity-75">Stories</span>
                <span className="text-xl p-5 font-semibold whitespace-nowrap dark:text-white hover:opacity-75">Essays</span>
            </a>
        </div>
        <div className="container hidden lg:flex justify-end">
            <a href="https://sentience.lostbookofsales.com" className="">
                <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white hover:opacity-75">About</span>
            </a>
        </div>
        <div className="container flex lg:hidden justify-end">
            <div className="flex flex-col justify-around w-6 h-4 cursor-pointer z-30" onClick={toggleMenu}>
                <button className="flex flex-col h-12 w-12 rounded justify-center items-center group" onClick={() => setIsOpen(!isOpen)}>
                    <div className={`${genericHamburgerLine} ${isOpen ? "rotate-45 translate-y-1.5 group-hover:opacity-100": "group-hover:opacity-100"}`}/>
                    <div className={`${genericHamburgerLine} ${isOpen? "-rotate-45 -translate-y-1 group-hover:opacity-100": "group-hover:opacity-100"}`}/>
                </button>
            </div>
            {isOpen && (
                <div className="fixed inset-0 bg-white dark:bg-sentient flex items-center justify-center z-10">
                    <nav className="dark:text-white text-center text-3xl space-y-7 flex flex-col">
                        <a href="#" className="font-extrabold" onClick={toggleMenu}>Stories</a>
                        <a href="#" className="font-extrabold" onClick={toggleMenu}>Essays</a>
                        <a href="#" className="font-extrabold" onClick={toggleMenu}>About</a>
                    </nav>
                </div>
            )}
        </div>
    </nav>
  );
};

export default Header;