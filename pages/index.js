import React, { useState, useEffect } from 'react';

import styles from '@/styles/Home.module.css'

import Head from 'next/head'
import Image from 'next/image'

import PostList from '../components/PostList';

import { getSortedPostsData } from '../lib/posts';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  // Logic for adjusting cover image based on system mode
  const [coverImg, setCoverImg] = useState("abstract-christmas-tree-cover.png")
  const [pageIdentifier, setPageIdentifier] = useState("index")

  useEffect(() => {
      if (typeof window !== "undefined") {
          if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
              setCoverImg("abstract-christmas-tree-white-cover.png")
          }
          window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
              const newColorScheme = event.matches ? "dark" : "light";
              if (newColorScheme == "light") {
                  setCoverImg("abstract-christmas-tree-cover.png")
              } else {
                  setCoverImg("abstract-christmas-tree-white-cover.png")
              }
          });
       }
  });

  return (
    <>
      <Head>
        <title>Sentience Platform</title>
      </Head>
      <section className="bg-white dark:bg-sentient pt-20 lg:pt-24">
        <div className="flex justify-center">
          <Image src={coverImg} priority alt="Sentience cover image" width={120} height={120} className="object-contain" />
        </div>
        <div className="py-8 lg:py-10 px-4 mx-auto max-w-screen-xl text-center lg:px-12">
          <h1 className="mb-1 text-2xl font-semibold leading-none tracking-tight text-gray-900 md:text-2xl lg:text-3xl dark:text-white">Stories as a creative outlet.</h1>
          <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">We'll keep building it here.</p>
        </div>
      </section>
      <PostList pageIdentifier={pageIdentifier} allPostsData={allPostsData} />
    </>
  )
}