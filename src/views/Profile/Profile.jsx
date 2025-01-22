import FormProfile from "../../components/FormProfile/FormProfile"
import Breadcrumb from "../../components/global/Breadcrumb"

const Profile = () => {
    return (
        <section>
            <Breadcrumb path={"الملف الشخصي"} />
            <div className="container">
                <FormProfile />
            </div>
        </section>
    )
}

export default Profile