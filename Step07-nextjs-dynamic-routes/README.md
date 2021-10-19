### Steps to Follow are 
For better SEO Optimization NextJS has added feature of adding metadata in Nextjs Webstie such as the ``` <title>``` HTML tag.

NextJS provide a Head Component which we can use add metadata information in our application.
Open the pages/posts/first-post.js file and add an import for ```Head``` from ```next/head``` at the beginning of the file:
```javascript
import Head from 'next/head'
```
Then, update the exported FirstPost component to include the Head component. For now, we‘ll add just the title tag:

```javascript
export default function FirstPost() {
  return (
    <>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First Post</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </>
  )
}
```
We can update title with dynamic data at build time.


Try accessing [http://localhost:3000/posts/first-post](http://localhost:3000/posts/first-post). The browser tab should now say “First Post”. By using your browser’s developer tools, you should see that the `title` tag is added to `<head>`.

> To learn more about the `Head` component, check out the [API reference for `next/head`](/docs/api-reference/next/head).
> 
> If you want to customize the `<html>` tag, for example to add the `lang` attribute, you can do so by creating a `pages/_document.js` file. Learn more in the [custom `Document` documentation](https://nextjs.org//docs/advanced-features/custom-document).