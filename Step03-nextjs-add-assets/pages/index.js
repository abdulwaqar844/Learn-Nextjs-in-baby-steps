import Link from "next/link";
import Profile from "./../components/profile";
export default function Home() {
  return (
    <div style={{display:'flex',flexDirection:'column-reverse'}}>
    <div>  <Profile /></div>
     <hr/>
      <h2>Hello World.</h2>
      <Link href="/about">
        <a>About</a>
      </Link>
    </div>
  );
}
