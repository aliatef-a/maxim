import { Suspense, useEffect } from "react"
import { Outlet, useLocation } from "react-router-dom"
import { Navbar } from "../../Router/LazyRoutes"
import Footer from "../../components/header/Footer"

const Layout = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return (
        <>
            <Navbar />
            <Suspense
                fallback={
                    "loading"
                }
            >
                <Outlet />
            </Suspense>
            <Footer />
        </>
    )
}

export default Layout