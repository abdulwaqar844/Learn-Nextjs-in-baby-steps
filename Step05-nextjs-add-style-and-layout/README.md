### Addin style to components

Next.js has built-in support for CSS and Sass which allows you to import .css and .scss files.

We can use libraries to write CSS code in JS code. example of these libraries is styled-jsx and styled-components.

In this step we will learn two features that we can use in Nextjs:

- Global Layout
- Global Style

### Global Layout

First, Let’s create a Layout component which will be shared across all pages.

- Create a top-level directory called components.
- Inside components, create a file called layout.js with the following content:

```javascript
export default function Layout({ children }) {
  return <div>{children}</div>;
}
```

Then, open pages/posts/first-post.js, add an import for the Layout component, and make it the outermost component:

```javascript
import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/layout";

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First Post</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </Layout>
  );
}
```

We will add CSS to layout component. To do so we will use use CSS modules. which allows us to import CSS files in a React component.In React CSS module file must ends with `componentname.module.css` like layout.module.css.

Create a file called components/layout.module.css with the following content:

```CSS
.container {
  max-width: 36rem;
  padding: 0 1rem;
  margin: 3rem auto 6rem;
}
```

To use this container class inside components/layout.js, you need to:

- Import the CSS file and assign a name to it, like styles
- Use styles.container as the className

Open components/layout.js and replace its content with the following:

```javascript
import styles from "./layout.module.css";

export default function Layout({ children }) {
  return <div className={styles.container}>{children}</div>;
}
```

If you go to http://localhost:3000/posts/first-post now, you should see that the text is now inside a centered container. Use of modules in React Component create unique names for component classes. To check class name go to devtools and check the style component class name.

## Global Style

CSS Modules are useful for component-level styles. But if you want some CSS to be loaded by every page, Next.js has support for that as well.

To load global CSS files, create a file called pages/\_app.js with the following content:

```javascript
export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
```

This App component is the top-level component which will be common across all the different pages.

In Next.js, we add global CSS files by importing them in `pages/_app.js`. You cannot import global CSS anywhere else.All Global level components and files can be used by importing `pages/_app.js`.

You can place the global CSS file anywhere and use any name. So let’s do the following:

- Create a top-level styles directory and create global.css inside.
- Add the following content to styles/global.css. It resets some styles and changes the color of the a tag:

```CSS
html,
body {
  padding: 0;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu,
    Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  line-height: 1.6;
  font-size: 18px;
}

* {
  box-sizing: border-box;
}

a {
  color: #0070f3;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

img {
  max-width: 100%;
  display: block;
}
```

Finally, open `pages/_app.js` add import the CSS file like so:

```javascript
import "../styles/global.css";

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
```

Now, if you access http://localhost:3000/posts/first-post, you’ll see that the styles are applied.Make sure you restart the development server when you add pages/_app.js.
~~~
Note: We imported Global styles file in pages/_app.js simillarly  we will import Layout file in pages/_app.js file to apply it globally.
~~~
Update Code with following content to add layout globally.before adding it in _app.js file remove it from first-post.js.
 
 ```javascript
 import Layout from "../../components/layout";
import "../styles/global.css";
export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
 ```
 Congratulations You have learned how to add global style and global Layout in NextJs Appliaction.You are ready to go to Next Step .