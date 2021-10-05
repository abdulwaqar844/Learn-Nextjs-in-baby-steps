import Link from "next/link";
import Profile from "./../components/profile";
export default function Home() {
  return (
    <div>
      <Profile />
      Hello World.
      <Link href="/about">
        <a>About</a>
      </Link>
    </div>
  );
}
