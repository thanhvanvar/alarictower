// In `pages/_document.js`
import {Html, Head, Main, NextScript} from 'next/document'
import Script from 'next/script'
import React from "react";

export default function Document() {

    return (
        <Html>
            <Head>
                <meta charSet="utf-8"/>
                <meta content="" name="description"/>
                <meta content="" name="keywords"/>
                <link href="/assets/img/logo-alaric.png" rel="icon"/>
                <link href="/assets/img/apple-touch-icon.png" rel="apple-touch-icon"/>
                <link
                    href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700&display=optional"
                    rel="stylesheet"
                />
            </Head>
            <body>
            <Main/>
            <NextScript/>
            <Script src="/assets/vendor/bootstrap/js/bootstrap.bundle.min.js" strategy="beforeInteractive"
                    crossOrigin="anonymous"/>
            <Script src="/assets/vendor/php-email-form/validate.js" strategy="beforeInteractive"
                    crossOrigin="anonymous"/>
            <Script src="/assets/js/main.js" strategy="beforeInteractive" crossOrigin="anonymous"/>

            </body>
        </Html>
    )
}