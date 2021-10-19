import Link from "next/link";
import Head from 'next/head'
import Profile from "../components/profile";
export default function Home() {
  return (
    <div>
        <Head>
      <title>Welcome To Nextjs</title>
    </Head>
      <Profile />
      Hello World.
      <Link href="/about">
        <a>About</a>
      </Link>
    </div>
  );
}
