import styles from '@/styles/Home.module.css'

import Head from 'next/head'
import Image from 'next/image'

export default function Index() {
  return (
    <>
      <Head>
        <title>Sentience Platform</title>
      </Head>
      <section className="bg-white dark:bg-sentient">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
          <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Welcome to Sentience platform!</h1>
          <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">We'll keep building it here.</p>
        </div>
      </section>
    </>
  )
}