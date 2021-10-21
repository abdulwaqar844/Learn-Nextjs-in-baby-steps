import Link from 'next/link'
import Head from 'next/head'
export default function About() {
  return(
    <div>
      <Head>
        <title>About Us</title>
      </Head>
      <h2>
      About us</h2>
      <p> This is About route created in pages directory</p>
      <Link href='/'>
      <a >Back To Home</a></Link>
      </div>
  )
}
