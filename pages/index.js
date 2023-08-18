import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  let name = 'Moon'
  let link = "http://google.com"

  return (
    <div>
      <h1 className='title'>쿠팡후레시</h1>
      <p className='title-sub'>by dev {name}</p>
      <a href={link}>링크</a>
    </div>
  )
}
