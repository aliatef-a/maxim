import { assets } from "../../assets/assets"
import BlogDetailsCard from "../../components/BlogsPage/BlogDetailsCard"
import Breadcrumb from "../../components/global/Breadcrumb"
import CardPost from "../../components/HomePage/CardPost"

const BlogsDetails = () => {
    return (
        <section>
            <Breadcrumb path={"اختيار الفستان المناسب لشكل جسمك"} forwardLink={"/blog"} forwardPath={"المدونة"} />
            <BlogDetailsCard />
            <div className="container section-gap flex justify-center items-center gap-3">
                <div className="border  border-[1px_solid]  w-full" />
                <img className="w-24" src={assets.Logo} alt="" />
                <div className="border border-[1px_solid]  w-full" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7 container">
                <CardPost des={"تعرفي على كيفية اختيار الفستان المثالي الذي يبرز جمالك ويتناسب مع شكل جسمك بسهولة...."} title={"اختيار الفستان المناسب لشكل جسمك."} />
                <CardPost des={"تعرفي على كيفية اختيار الفستان المثالي الذي يبرز جمالك ويتناسب مع شكل جسمك بسهولة...."} title={"اختيار الفستان المناسب لشكل جسمك."} />
                <CardPost des={"تعرفي على كيفية اختيار الفستان المثالي الذي يبرز جمالك ويتناسب مع شكل جسمك بسهولة...."} title={"اختيار الفستان المناسب لشكل جسمك."} />
            </div>
        </section>
    )
}

export default BlogsDetails