### Learn NEXTJS In Baby Steps

To build a complete web application with React from scratch, there are many important details you need to consider:

- Code has to be bundled using a bundler like webpack and transformed using a compiler like Babel.
- You need to do production optimizations such as code splitting.
- You might want to statically pre-render some pages for performance and SEO. You might also want to use server-side rendering or client-side rendering.
- You might have to write some server-side code to connect your React app to your data store.

A _framework_ can solve these problems. But such a framework must have the right level of abstraction — otherwise it won’t be very useful. It also needs to have great "Developer Experience", ensuring you and your team have an amazing experience while writing code.

#### Next.js: The React Framework

Enter Next.js, the React Framework. Next.js provides a solution to all of the above problems. But more importantly, it puts you and your team in the pit of success when building React applications.

Next.js aims to have best-in-class developer experience and many built-in features, such as:

- An intuitive page-based routing system (with support for dynamic routes)
- Pre-rendering, both static generation (SSG) and server-side rendering (SSR) are supported on a per-page basis
- Automatic code splitting for faster page loads
- Client-side routing with optimized prefetching
- Built-in CSS and Sass support, and support for any CSS-in-JS library
- Development environment with Fast Refresh support
- API routes to build API endpoints with Serverless Functions
- Fully extendable

Next.js is used in tens of thousands of production-facing websites and web applications, including many of the world's largest brands.

### Step 1 : Setup for Hello World NextJS App

First, let’s make sure that your development environment is ready.

If you don’t have Node.js installed, install it from here.

- - You’ll need Node.js version 10.13 or later.
- - You’ll be using your own text editor and terminal app for this tutorial.

#### Create a Next.js app

To create a Next.js app, open your terminal, goto the directory where you want to create your first NEXTJS app in and run the following command:

```javascript
npx create-next-app --example basic-export basic-export-app
```

#### Run the development server

You now have a new directory called nextjs-blog. Let’s cd into it:

```javascript
cd nextjs-blog
```

Then, run the following command:

```javascript
npm run dev
```

This starts your Next.js app’s "development server" on port 3000.

To verify if it’s working or not Open http://localhost:3000 from your browser.

You will see one page when you access http://localhost:3000. Next We will updated index.js page. In NextJS all pages are React Components.

#### Let’s try editing the starter page.

- Make sure the Next.js development server is still running.
- Open pages/index.js with your text editor.
- Find the text that says “Welcome to” under the `<h1>` tag and change it to “Learn”.
- Save the file.

As soon as you save the file, the browser automatically updates the page with the new text in your browser.

The Next.js development server has Fast Refresh enabled. When you make changes to files, Next.js automatically applies the changes in the browser almost instantly. No refresh needed! This will help you iterate on your app quickly.

##### Great job! That’s it for the first lesson.

### Step 2 : Navigation Between Pages

A page is a React Component exported from a file in the pages directory.
Pages are associated with a route based on their file name. For example, in development:

- pages/index.js is associated with the / route.
- pages/about.js is aassociated with the /about route.
- pages/posts/first-post.js is associated with the /posts/first-post route.
  We already have the pages/index.js file, so let’s create pages/about.js and pages/posts/first-post.js to see how it works in pages/about.js and pages/posts/first-post.js.

Copy and paste the following Code in apages/about.js page

```javascript
import React from "react";
function About() {
  return <div>About us</div>;
}
export default About;
```

Copy and paste the following Code in pages/posts/first-post.js page

```javascript
import React from "react";
const firstpost = () => {
  return <h2> This is First Post </h2>;
};
export default firstpost;
```

You will above created components when accessing the following urls:

http://localhost:3000/about

http://localhost:3000/post/first-post

Normally , When linking between pages on websites, you use the `<a>` HTML tag.

In Next.js, you use the Link Component from next/link to wrap the `<a>` tag. `<Link>` allows you to do client-side navigation to a different page in the application.

#### Usage of `<Link>`

First, open `pages/index.js`, and import the Link component from `next/link` by adding this line at the top:

```javascript
import Link from "next/link";
```

Then add this code under the `<h2>` element:

```javascript
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
```

Next, open `pages/posts/first-post.js` and replace its content with the following:

```javascript
import Link from "next/link";

export default function FirstPost() {
  return (
    <div>
      <h1>First Post</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </div>
  );
}
```

As you can see, the Link component is similar to using `<a>` tags, but instead of
`<a href="…">`, you use `<Link href="…">` and put an `<a>` tag inside.

_The Link component enables client-side navigation between two pages in the same Next.js app._

### Step 3 : Assets, Metadata, and CSS

### Step 4 : Pre-rendering and Data Fetching

### Step 5 : Dynamic Routes

### Step 6 : API Routes

### Step 7 : Deploying Your Next.js App
