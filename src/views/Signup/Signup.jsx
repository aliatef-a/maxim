import Breadcrumb from "../../components/global/Breadcrumb"
import SignupForm from "../../components/SingupComponents/SignupForm"

const Signup = () => {
    return (
        <section>
            <Breadcrumb path={"إنشاء حساب الجديد"} />
            <div className="container">
                <SignupForm />
            </div>
        </section>
    )
}

export default Signup