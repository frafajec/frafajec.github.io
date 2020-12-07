import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          {/* <script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GA_ID}`} />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.GA_ID}');
              `,
            }}
          /> */}

          {/* <link
            rel="preload"
            href="/fonts/Roboto-Regular.ttf"
            as="font"
            type="font/ttf"
            crossOrigin="anonymous"
          /> */}
          <link
            rel="preload"
            href="/fonts/Roboto-Light.ttf"
            as="font"
            type="font/ttf"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/fonts/Roboto-Medium.ttf"
            as="font"
            type="font/ttf"
            crossOrigin="anonymous"
          />
          {/* <link
            rel="preload"
            href="/fonts/Roboto-Bold.ttf"
            as="font"
            type="font/ttf"
            crossOrigin="anonymous"
          /> */}
          {/* <link
            rel="preload"
            href="/fonts/Roboto-Italic.ttf"
            as="font"
            type="font/ttf"
            crossOrigin="anonymous"
          /> */}
          <link
            rel="preload"
            href="/fonts/Roboto-LightItalic.ttf"
            as="font"
            type="font/ttf"
            crossOrigin="anonymous"
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
