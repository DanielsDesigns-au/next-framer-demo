import React from "react"
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
// import Card from 'https://framer.com/m/Card-10DF.js@v2ntDUqY17S6R0LJwlNs';
import TickClick from "https://framer.com/m/Tick-Click-UzAW.js@3YhwuQXYUJdsFHrFqPxi";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
      <TickClick/>
      <br/>
      <TickClick/>
      <br/>
      <TickClick/>
    
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by<pre> </pre><strong>Bubba Chub</strong>😋
        </a>
      </footer>
    </div>
  )
}

export default Home
