import Breadcrumb from "../../components/global/Breadcrumb";
import VerifyCodeForm from "../../components/VerifyCodeForm/VerifyCodeForm";

const VerifyCode = () => {
    return (
        <section className="">
            <Breadcrumb path={"تأكيد البريد الإلكتروني"} />
            <div className="container">
                <VerifyCodeForm />
            </div>
        </section>
    );
};

export default VerifyCode;