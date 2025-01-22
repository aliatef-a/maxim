import { useState } from "react"
import { assets } from "../../assets/assets"
import Breadcrumb from "../../components/global/Breadcrumb"
import Pagination from "../../components/global/Pagination"
import CardPost from "../../components/HomePage/CardPost"
import { useNavigate } from "react-router-dom"

const Blogs = () => {
    const [search, setSearch] = useState("");
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`?query=${search}`);
    }

    return (
        <section>
            <Breadcrumb path={"المدونة"} />
            <div className="container section-gap ">
                <form onSubmit={handleSubmit} className='relative border w-full md:w-[80%] lg:w-[35%] border-[#B3B3B3] border-[0.5px-solid] rounded-md mx-auto'>
                    <img className='absolute top-1/2 right-3 -translate-y-1/2 w-5' src={assets.iconSearch} alt="icon" />
                    <input onChange={(e) => setSearch(e.target.value)} type="text" className='w-full rounded py-4 px-10 text-sm font-normal text-secondary outline-none' placeholder='بحث بعنوان المدونة ....' />
                    <button className='bg-primary absolute top-1/2 left-1 -translate-y-1/2 px-7  p-3 rounded text-sm font-bold' type='submit'>بحث</button>
                </form>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7  container">
                <CardPost des={"تعرفي على كيفية اختيار الفستان المثالي الذي يبرز جمالك ويتناسب مع شكل جسمك بسهولة...."} title={"اختيار الفستان المناسب لشكل جسمك."} />
                <CardPost des={"تعرفي على كيفية اختيار الفستان المثالي الذي يبرز جمالك ويتناسب مع شكل جسمك بسهولة...."} title={"اختيار الفستان المناسب لشكل جسمك."} />
                <CardPost des={"تعرفي على كيفية اختيار الفستان المثالي الذي يبرز جمالك ويتناسب مع شكل جسمك بسهولة...."} title={"اختيار الفستان المناسب لشكل جسمك."} />
                <CardPost des={"تعرفي على كيفية اختيار الفستان المثالي الذي يبرز جمالك ويتناسب مع شكل جسمك بسهولة...."} title={"اختيار الفستان المناسب لشكل جسمك."} />
                <CardPost des={"تعرفي على كيفية اختيار الفستان المثالي الذي يبرز جمالك ويتناسب مع شكل جسمك بسهولة...."} title={"اختيار الفستان المناسب لشكل جسمك."} />
                <CardPost des={"تعرفي على كيفية اختيار الفستان المثالي الذي يبرز جمالك ويتناسب مع شكل جسمك بسهولة...."} title={"اختيار الفستان المناسب لشكل جسمك."} />
            </div>
            <div className="section-gap ">
                <Pagination />
            </div>
        </section>
    )
}

export default Blogs