import CartContent from "../../components/CartContent/CartContent";
import Breadcrumb from "../../components/global/Breadcrumb";
import CartProgress from "../../components/global/CartProgress";
import { currentStep } from "../../store/slices/cartProgressSlice";

const Cart = () => {
    return (
        <section className="bg-[#F5F5F5] -mb-16 pb-16">
            <Breadcrumb path={"السلة"} />
            <div className="container section-gap">
                <CartProgress currentStep={currentStep} />

                {/* Cart Content */}
                <div className="mt-8">
                    <CartContent />
                </div>
            </div>
        </section>
    );
};

export default Cart;