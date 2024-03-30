import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="Generate better prompts in seconds."
          />
          {/* <meta property="og:site_name" content="BetterPrompts.io" /> */}
          <meta property="og:site_name" content="BetterPrompts" />
          <meta
            property="og:description"
            content="Generate better prompts in seconds."
          />
          <meta property="og:title" content="Better Prompts Generator" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Better Prompts Generator" />
          <meta
            name="twitter:description"
            content="Generate better prompts in seconds."
          />
          <meta
            property="og:image"
            content="https://BetterPrompts.io/og-image.png"
          />
          <meta
            name="twitter:image"
            content="https://BetterPrompts.io/og-image.png"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
