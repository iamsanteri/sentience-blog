import Link from 'next/link';
import styles from '../styles/Footer.module.css';

const Footer = () => {
  return (
    <div className="lg:pl-60 pl-5 lg:pr-60 pr-8 flex text-lg text-gray-500 items-center justify-between py-16 flex-row dark:bg-sentient dark:text-gray-400">
      <p className="inline-block align-center">Sentience © { new Date().getFullYear() }</p>
      <div className="justify-center hidden lg:flex">
        <span className="flex-center">
          <span className="whitespace-nowrap p-3 hover:text-black dark:hover:text-white">
            <a href="#">Stories</a>
          </span>
          <span className="text-xs">•</span>
          <span className="whitespace-nowrap p-3 hover:text-black dark:hover:text-white">
            <a href="#">Essays</a>
          </span>
        </span>
      </div>
      <p className="inline-block align-center">Made for writing.</p>
    </div>
  );
};

export default Footer;