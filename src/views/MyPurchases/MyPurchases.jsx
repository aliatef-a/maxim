import Breadcrumb from "../../components/global/Breadcrumb"
import Orders from "../../components/Myorders/Orders"

const MyPurchases = () => {
    return (
        <section className="bg-[#f5f5f5] ">
            <Breadcrumb path={"مشترياتي"} />
            <div className="container !-mb-16 pb-10">
                <Orders />
            </div>
        </section>
    )
}

export default MyPurchases