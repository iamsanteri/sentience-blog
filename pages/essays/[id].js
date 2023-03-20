import React, { useState, useEffect } from 'react';
import Head from 'next/head'

import styles from '@/styles/SinglePost.module.css'

import { getAllPostIds, getPostData } from '../../lib/posts';

export async function getStaticPaths() {
    const paths = getAllPostIds();
    return {
        paths,
        fallback: false,
    }
}

export async function getStaticProps({ params }) {
    const postData = getPostData(params.id);
    return {
        props: {
            postData,
        },
    };
}

export default function SinglePost({ postData }) {

  return (
    <>
        <Head>
            <title>{ postData.title }</title>
        </Head>
        <section className="bg-white dark:bg-sentient pt-20 lg:pt-24">
            <p>Hello world!</p>
            <br />
            { postData.id }
            <br />
            { postData.date }
        </section>
    </>
  )
}