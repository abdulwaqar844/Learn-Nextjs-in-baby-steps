import Link from "next/link";
import Head from 'next/head'
import Profile from "../components/profile";
export default function Home() {
  return (
    <div>
        <Head>
      <title>Welcome To Nextjs</title>
    </Head>
    <div style={{display:'flex',flexDirection:"column"}}>
    <div> <Profile /></div>
     
   <h3> Hello World.</h3>  
      <Link href="/about">
        <a>About</a>
      </Link></div>
    </div>
  );
}
