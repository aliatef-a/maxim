import ForgotPasswordForm from "../../components/forgetPasswordForm/ForgotPasswordForm";
import Breadcrumb from "../../components/global/Breadcrumb";

const ForgotPassword = () => {
    return (
        <section className="">
            <Breadcrumb path={"نسيت كلمة المرور"} />
            <div className="container">
                <ForgotPasswordForm />
            </div>
        </section>
    );
};

export default ForgotPassword;