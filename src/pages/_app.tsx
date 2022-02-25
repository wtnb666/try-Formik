import type { AppProps } from "next/app";
import Head from "next/head";
import React from "react";
import "../../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="m-auto max-w-screen-sm bg-zinc-800">
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `!(function () {
          const viewport = document.querySelector('meta[name="viewport"]');
          function switchViewport() {
          const value =
          window.outerWidth > 360
          ? 'width=device-width, initial-scale=1'
          : 'width=360';
          if (viewport.getAttribute('content') !== value) {
          viewport.setAttribute('content', value);
        }
        }
          addEventListener('resize', switchViewport, false);
          switchViewport();
        })();`,
          }}
        />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="" />
        <title>Try Formik</title>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Noto+Sans+JP&subset=japanese"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
      </Head>
      <React.StrictMode>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Component {...pageProps} />
      </React.StrictMode>
    </div>
  );
}

export default MyApp;
