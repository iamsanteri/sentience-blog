import React, { useState, useEffect } from 'react';
import Head from 'next/head'

import styles from '@/styles/SinglePost.module.css'

import Recommendations from '../../components/Recommendations';

import { getAllPostIds, getPostData } from '../../lib/posts';
import { getSortedPostsData } from '../../lib/posts';

export async function getStaticPaths() {
    const paths = getAllPostIds();
    return {
        paths,
        fallback: false,
    }
}

export async function getStaticProps({ params }) {
    const allPostsData = getSortedPostsData();
    const postData = await getPostData(params.id);
    
    return {
        props: {
            postData,
            allPostsData
        },
    };
}

export default function SinglePost({ postData, allPostsData }) {
    const [pageIdentifier, setPageIdentifier] = useState("essays")

    return (
    <>
        <Head>
            <title>{ postData.title }</title>
        </Head>
        <section className="bg-white dark:bg-sentient pt-14 mb-4 pb-7 lg:mb-10 lg:pt-32">
            <div className="w-full flex justify-center">
                <div className="p-5 md:w-3/4 lg:w-3/5 xl:w-2/4 2xl:w-2/5">
                    <h1 style={{ lineHeight: 2.5 + "rem"}} className="mb-9 text-3xl md:text-4xl font-semibold leading-none tracking-tight text-gray-900 dark:text-white">{ postData.title }</h1>
                    <article style={{ lineHeight: 2 + "rem"}} className="prose prose-lg lg:prose-xl prose-strong:dark:text-gray-300 prose-a:dark:text-zinc-200 prose-a:hover:opacity-75 text-gray-700 dark:text-gray-300" dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
                </div>
            </div>
        </section>
        <Recommendations pageIdentifier={pageIdentifier} allPostsData={allPostsData} postData={postData} />
    </>
  )
}