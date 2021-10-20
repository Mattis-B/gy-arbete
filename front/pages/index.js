import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React from 'react'

export default class Home extends React.Component {
  render(){
    return (
      <>
        <Head>
          <title>Gamenetwork - Home</title>
          <meta name="description" content="Gamenetwork" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div>Hello World!</div>
      </>
    )
  }
}
