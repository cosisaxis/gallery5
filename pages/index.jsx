import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useState } from 'react'

export default function Home() {
  const [wallet, setWallet] = useState("")

  return (
    <div className='flex min-h-screen flex-col items-center justify-center '>
      <div>
        <input onChange={(e) => {setWallet(e.target.value)}} value={wallet} type={"text"} placeholder="Your wallet address goes here"></input>
        <input type={"text"} placeholder="Your collection goes here"></input>
        <label><input type={"checkbox"}></input></label>
        <button>Search</button>
      </div>
    </div>
  )
}
