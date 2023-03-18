import Header from '../components/Header';

import Head from 'next/head'

import React, { useState, useEffect } from 'react';

export default function Layout({ children }) {

    // Logic for adjusting favicon based on system mode
    const [favicon, setFavicon] = useState("/images/abstract-christmas-tree.png")

    useEffect(() => {
        if (typeof window !== "undefined") {
            if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                setFavicon("/images/abstract-christmas-tree-white.png")
            }
            window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
                const newColorScheme = event.matches ? "dark" : "light";
                if (newColorScheme == "light") {
                    setFavicon("/images/abstract-christmas-tree.png")
                } else {
                    setFavicon("/images/abstract-christmas-tree-white.png")
                }
            });
         }
    });

    return (
      <>
        <Head>
            <title>Sentience Platform</title>
            <link rel="shortcut icon" href={favicon} />
        </Head>
        <Header />
        <main>{children}</main>
      </>
    )
  }