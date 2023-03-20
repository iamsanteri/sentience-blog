import Link from 'next/link';
import styles from '../styles/Footer.module.css';

const Footer = () => {
  return (
    <div className="mt-auto">
      <div className="lg:pl-60 pl-5 lg:pr-60 pr-8 flex text-lg flex-col text-gray-500 items-center justify-between py-16 lg:flex-row dark:bg-sentient dark:text-zinc-400">
        <p className="inline-block align-center max-lg:py-8">Sentience © { new Date().getFullYear() }</p>
        <div className="justify-center lg:flex">
          <span className="flex-center max-lg:flex max-lg:flex-col">
            <span className="whitespace-nowrap max-lg:py-2 p-3 hover:text-black dark:hover:text-white">
              <Link href="/stories">Stories</Link>
            </span>
            <span className="text-xs max-lg:hidden">•</span>
            <span className="whitespace-nowrap max-lg:py-2 p-3 hover:text-black dark:hover:text-white">
              <Link href="/essays">Essays</Link>
            </span>
            <span className="text-xs max-lg:hidden">•</span>
            <span className="whitespace-nowrap max-lg:py-2 p-3 hover:text-black dark:hover:text-white">
              <Link href="/about">About</Link>
            </span>
          </span>
        </div>
        <p className="inline-block align-center max-lg:py-8">Made for writing.</p>
      </div>
    </div>
  );
};

export default Footer;