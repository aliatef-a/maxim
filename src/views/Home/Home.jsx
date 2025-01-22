import Hero from "../../components/HomePage/Hero"
import LatestPosts from "../../components/HomePage/LatestPosts"
import LatestProducts from "../../components/HomePage/LatestProducts"
import Service from "../../components/HomePage/Service"
import TheLatestModern from "../../components/HomePage/TheLatestModern"

const Home = () => {
    return (
        <main>
            <Hero />
            <Service />
            <LatestProducts />
            <TheLatestModern />
            <LatestPosts />
        </main>
    )
}

export default Home