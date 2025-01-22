import FormChangePassword from "../../components/FormChangePassword/FormChangePassword"
import Breadcrumb from "../../components/global/Breadcrumb"

const ChangePassword = () => {
    return (
        <section>
            <Breadcrumb path={"تغيير كلمة المرور"} forwardPath={"الملف الشخصي  "} forwardLink={"/profile"} />
            <div className="container">
                <FormChangePassword />
            </div>
        </section>
    )
}

export default ChangePassword