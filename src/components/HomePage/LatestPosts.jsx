import { Link } from "react-router-dom"
import { assets } from "../../assets/assets"
import HeaderSections from "../global/HeaderSections"
import CardPost from "./CardPost"

const LatestPosts = () => {
    return (
        <section>
            <div className="container">
                <HeaderSections className={"!items-start"} text={"أحدث التدوينات"} des={"أحدث التدوينات تلهمك بأفكار تنسيقات عصرية ونصائح لاختيار الفساتين المثالية لك."} />

                <Link to={""} className="underline block text-end font-bold text-[#646464] mb-4">عرض المزيد</Link>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    <CardPost title={"نصائح لاختيار الفستان المثالي لأي مناسبة."} des={"تعرفي على أهم النصائح التي تساعدك في اختيار الفستان المثالي لإطلالة رائعة تناسب جميع المناسبات..."} />
                    <CardPost title={"نصائح لاختيار الفستان المثالي لأي مناسبة."} des={"تعرفي على أهم النصائح التي تساعدك في اختيار الفستان المثالي لإطلالة رائعة تناسب جميع المناسبات..."} />
                    <CardPost title={"نصائح لاختيار الفستان المثالي لأي مناسبة."} des={"تعرفي على أهم النصائح التي تساعدك في اختيار الفستان المثالي لإطلالة رائعة تناسب جميع المناسبات..."} />
                    <CardPost title={"نصائح لاختيار الفستان المثالي لأي مناسبة."} des={"تعرفي على أهم النصائح التي تساعدك في اختيار الفستان المثالي لإطلالة رائعة تناسب جميع المناسبات..."} />
                    <CardPost title={"نصائح لاختيار الفستان المثالي لأي مناسبة."} des={"تعرفي على أهم النصائح التي تساعدك في اختيار الفستان المثالي لإطلالة رائعة تناسب جميع المناسبات..."} />
                    <CardPost title={"نصائح لاختيار الفستان المثالي لأي مناسبة."} des={"تعرفي على أهم النصائح التي تساعدك في اختيار الفستان المثالي لإطلالة رائعة تناسب جميع المناسبات..."} />
                </div>
            </div>
        </section>
    )
}

export default LatestPosts