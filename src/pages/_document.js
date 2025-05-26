// SIMILAR TO _app.js File
//    custom doc ,  can update html & body text file that is used to render a page

import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Script id='theme-switcher' strategy='beforeInteractive'>
          {`
            if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
              document.documentElement.classList.add('dark');
              localStorage.setItem('theme', 'dark');
            } else {
              document.documentElement.classList.remove('dark');
              if (!localStorage.theme) localStorage.setItem('theme', 'light');
            }
          `}
        </Script>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}