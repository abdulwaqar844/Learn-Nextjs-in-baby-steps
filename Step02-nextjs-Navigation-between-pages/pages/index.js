import Link from "next/link";
export default function Home() {
  return (
    <div>
      Hello World.{" "}
      <Link href="/about">
        <a>About</a>
      </Link>
      <h1 className="title">
        Read
        <Link href="/posts/first-post">
          <a>First Post</a>
        </Link>
      </h1>
    </div>
  );
}
