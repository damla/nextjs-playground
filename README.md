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
