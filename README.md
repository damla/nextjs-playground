This is a starter template for [Learn Next.js](https://nextjs.org/learn).

> Sass Module Olarak Eklendi.
>
> - yarn add sass
> - component.module.scss seklinde veya styles.scss (global) eklenebilir.
> - global eklenecek ise \_app.js icerisinde cagirilmali

> Link component'i client-side navigation sagliyor.

> By default, Next.js pre-renders every page. This means
> that Next.js generates HTML for each page in advance,
> instead of having it all done by client-side
> JavaScript. Pre-rendering can result in better performance and SEO.

- When a page is loaded by the browser, its JavaScript code runs and makes the page fully interactive. (This process is called hydration.)

> Static generation: The HTML is generated at build time and will be reused on each request.
> Server-side Rendering: The HTML is generated on each request.

- Link kullanirsan sadece gerekli yer refreshlenir ama a
  tagi kullanirsan komple butun sayfa refreshlenir

- Data fetching: https://nextjs.org/learn/basics/data-fetching/two-forms

- You should ask yourself: "Can I pre-render this page ahead of a user's request?" If the answer is yes, then you should choose Static Generation.
- Static Generation can be done with and without data.

- However, for some pages, you might not be able to render the HTML without first fetching some external data. Maybe you need to access the file system, fetch external API, or query your database at build time.

- Static Generation with Data using getStaticProps
  How does it work? Well, in Next.js, when you export a page component, you can also export an async function called getStaticProps. If you do this, then:

- getStaticProps runs at build time in production, and…
  Inside the function, you can fetch external data and send it as props to the page.

- gray matter denen zimbirti md dosyasini parse etmeni sagliyor

- Only Allowed in a Page
  getStaticProps can only be exported from a page. You can’t export it from non-page files.

- One of the reasons for this restriction is that React needs to have all the required data before the page is rendered.

- we’ll talk about the case where each page path depends on external data. Next.js allows you to statically generate pages with paths that depend on external data. This enables dynamic URLs in Next.js.

# dynamic routing

- Important: The returned list is not just an array of strings — it must be an array of objects that look like the comment above. Each object must have the params key and contain an object with the id key (because we’re using [id] in the file name). Otherwise, getStaticPaths will fail.
