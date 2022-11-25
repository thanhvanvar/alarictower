import React from "react";

import "../public/assets/vendor/animate.css/animate.min.css"
import "../public/assets/vendor/bootstrap/css/bootstrap.min.css"
import "../public/assets/vendor/bootstrap-icons/bootstrap-icons.css"
import "../public/assets/vendor/swiper/swiper-bundle.min.css"
import "../public/assets/css/style.css"
import '../styles/globals.css'

import Content from "../components/Content";

function MyApp({Component, pageProps}) {
    return (
        <Content>
            <Component {...pageProps} />
        </Content>
    )
}

export default MyApp
