import React, { useState } from 'react';

import Head from 'next/head'

import PostList from '../../components/PostList';

export default function Stories() {

  // State for passing identifier as a prop to PostList component
  const [pageIdentifier, setPageIdentifier] = useState("stories")

  return (
    <>
      <Head>
        <title>Stories - Sentience</title>
      </Head>
      <section className="bg-white dark:bg-sentient pt-20 lg:pt-24">
        <div className="py-8 lg:py-14 px-4 mx-auto max-w-screen-xl text-center lg:px-12">
          <h1 className="mb-1 text-2xl font-semibold leading-none tracking-tight text-gray-900 md:text-2xl lg:text-3xl dark:text-white">Stories</h1>
        </div>
      </section>
      <PostList pageIdentifier={pageIdentifier} />
    </>
  )
}