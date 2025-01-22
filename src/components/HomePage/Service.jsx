import { assets } from "../../assets/assets"
import Icons from "../global/Icons"

const Service = () => {
    return (
        <section className="container section-gap grid sm:grid-cols-2 md:grid-cols-3 place-items-center  gap-y-10">
            <Icons icon={assets.PaymentIcon} text={"مرونة الدفع"} des={"سهولة الدفع من خلال فيزا أو كاش."} />
            <Icons icon={assets.SupportIcon} text={"دعم 7/24"} des={"حلول تقنية موثوقة ودعم مستمر."} />
            <Icons icon={assets.DeliveryIcon} text={"سرعة التوصيل"} des={"خصومات وسرعة توصيل الطرد."} />
        </section>
    )
}

export default Service