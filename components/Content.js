import Footer from './Footer'
import Header from "./Header";

export default function LayoutContent({children}) {
    return (
        <>
            <Header/>
            <main>{children}</main>
            <Footer/>
        </>
    )
}