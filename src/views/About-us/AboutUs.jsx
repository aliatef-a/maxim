import Breadcrumb from '../../components/global/Breadcrumb'
import HeaderSections from '../../components/global/HeaderSections'
import Gallry from '../../components/AboutUsPage/Gallry'
import { assets } from '../../assets/assets'
import Icons from '../../components/global/Icons'
import CardAbout from '../../components/AboutUsPage/CardAbout'

const AboutUs = () => {
    return (
        <section>
            <Breadcrumb path={"من نحن"} />
            <HeaderSections text={"الأناقة تبدأ معنا في ماكسيم."} des={"نحن شركة رائدة في تصميم وإنتاج الفساتين العصرية، نعمل بشغف وإبداع لتقديم منتجات تلبي جميع الأذواق والمناسبات، مع التركيز على الجودة والتميز في كل تفصيل. نسعى دائمًا لأن نكون الخيار الأول للمرأة الباحثة عن الأناقة والتألق."} className={"text-center section-gap "} />
            <Gallry />
            <section className="container section-gap grid sm:grid-cols-2 md:grid-cols-2  md:w-[60%] place-items-center gap-y-10">
                <Icons width={"md:w-[150px]"} icon={assets.eyes} text={"رؤية الشركة"} des={"أن نصبح الوجهة الأولى للأناقة، بتقديم فساتين راقية بتصاميم عصرية وجودة استثنائية تلبي جميع الأذواق والمناسبات."} />
                <Icons width={"md:w-[150px]"} icon={assets.massge} text={"رسالتنا"} des={"تقديم فساتين عصرية بتصاميم راقية وجودة استثنائية، لنساعد كل امرأة على التألق بإطلالة مميزة تعكس جمالها وأسلوبها الخاص."} />
            </section>
            <HeaderSections text={"فريق عمل الشركة"} des={"فريقنا يضم خبراء ومصممين مبدعين، يقدمون تصاميم فريدة بأعلى جودة لتلبية تطلعات عملائنا باحترافية وشغف."} className={"text-center section-gap "} />
            <div className='container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center gap-6'>
                <CardAbout />
                <CardAbout />
                <CardAbout />
                <CardAbout />
                <CardAbout />
                <CardAbout />
                <CardAbout />
                <CardAbout />
            </div>
        </section>
    )
}

export default AboutUs