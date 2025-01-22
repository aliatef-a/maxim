import Locations from "../../components/ContactUsPage/Locations"
import Breadcrumb from "../../components/global/Breadcrumb"
import Maps from "./Maps"

const ContactUs = () => {
    return (
        <section>
            <Breadcrumb path={"تواصل معنا"} />
            <div className="container section-gap flex flex-col-reverse lg:flex-row items-start gap-10">
                <Locations />
                <Maps />
            </div>
        </section>
    )
}

export default ContactUs