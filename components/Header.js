import React from "react";
import Head from 'next/head'

export default function LayoutHeader() {
    return (
        <>
            <Head>
                <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
                <title>ALARIC VŨNG TÀU</title>

                <meta property="og:site_name"
                      content="ALARIC VŨNG TÀU"/>
                <meta property="og:type" content="article"/>
                <meta property="og:title" content="ALARIC VŨNG TÀU"/>
                <meta property="og:description"
                      content="HOME SWEET HOME - NHÀ MÌNH LÀ NHẤT"/>
                <meta name="description" content="HOME SWEET HOME - NHÀ MÌNH LÀ NHẤT"/>
                <meta property="og:image" content="assets/img/slide-02.jpg"/>
            </Head>
        </>
    )
}