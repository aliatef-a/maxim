import { assets } from "../../assets/assets";
import Breadcrumb from "../../components/global/Breadcrumb";
import Status from "../../components/global/Status";

const Success = () => {
    return (
        <section className="">
            <Breadcrumb path={"تم إستعادة كلمة المرور بنجاح!"} />
            <Status img={assets.success} title={"تم إستعادة كلمة المرور بنجاح!"} description={"تم إستعادة كلمة المرور بنجاح! يمكنك الآن الدخول إلى حسابك بكلمة المرور الجديدة."} buttonText={"تسوق الأن"} buttonHref={"/"} />
        </section>
    );
};

export default Success;