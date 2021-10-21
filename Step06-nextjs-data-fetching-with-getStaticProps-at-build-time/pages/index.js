// import Link from "next/link";
import Head from "next/head";
export default function Home({ posts }) {
  return (
    <div>
      <Head>
        <title>Welcome To Nextjs</title>
      </Head>
      <div>
        <h2>All posts</h2>
        {posts.map((post) => {
          return (
            <div key={post.userId}>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export async function getStaticProps(context) {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();
  return {
    props: { posts }, // will be passed to the page component as props
  };
}
