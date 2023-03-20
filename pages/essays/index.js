import React, { useState } from 'react';

import Head from 'next/head'

import PostList from '../../components/PostList';

import { getSortedPostsData } from '../../lib/posts';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Essays({ allPostsData }) {

  // State for passing identifier as a prop to PostList component
  const [pageIdentifier, setPageIdentifier] = useState("essays")

  return (
    <>
      <Head>
        <title>Essays - Sentience</title>
        <meta
                name="description"
                content=""
        />
      </Head>
      <section className="bg-white dark:bg-sentient pb-8 pt-20 lg:pt-24">
        <div className="py-8 lg:py-14 px-4 mx-auto max-w-screen-xl text-center lg:px-12">
          <h1 className="mb-1 text-3xl font-semibold leading-none tracking-tight text-gray-900 lg:text-3xl dark:text-white">Essays</h1>
        </div>
      </section>
      <PostList pageIdentifier={pageIdentifier} allPostsData={allPostsData} />
    </>
  )
}