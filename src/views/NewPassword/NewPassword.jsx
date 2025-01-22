import Breadcrumb from "../../components/global/Breadcrumb";
import NewPasswordForm from "../../components/NewPasswordForm/NewPasswordForm";

const NewPassword = () => {
    return (
        <section className="">
            <Breadcrumb path={"إعادة تعيين كلمة المرور"} />
            <div className="container">
                <NewPasswordForm />
            </div>
        </section>
    );
};

export default NewPassword;