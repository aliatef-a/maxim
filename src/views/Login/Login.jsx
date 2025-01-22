import Breadcrumb from "../../components/global/Breadcrumb";
import LoginForm from "../../components/LoginComponents/LoginForm";

const Login = () => {

    return (
        <section className="">
            <Breadcrumb path={"تسجيل الدخول"} />
            <div className="container mt-16">
                <LoginForm />
            </div>
        </section >
    );
};

export default Login;
