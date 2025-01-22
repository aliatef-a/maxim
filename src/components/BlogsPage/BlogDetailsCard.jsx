import { assets } from "../../assets/assets"

const BlogDetailsCard = () => {
    return (
        <div className="container section-gap space-y-5 md:space-y-7">
            <div className="rounded-md overflow-hidden h-[300px] md:h-[500px]">
                <img className="w-full h-full object-cover" src={assets.BlogArticle} alt="img" />
            </div>
            <div className="flex items-center flex-col gap-3 md:flex-row md:gap-0 justify-between md:px-2">
                <h2 className="text-secondary font-bold text-base">اختيار الفستان المناسب لشكل جسمك.</h2>
                <div className="flex items-center w-full md:w-fit justify-between  gap-5">
                    <div className="flex items-center gap-2">
                        <img className="w-4" src={assets.dateIcon} alt="icon" />
                        <p className="font-medium text-sm">23 ديسمبر 2024</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <img className="w-4" src={assets.clockIcon} alt="icon" />
                        <p className="font-medium text-sm">17:30 مساءاً</p>
                    </div>
                </div>
            </div>
            <p className="text-[#646464] text-xs md:text-base text-center md:text-start font-medium !leading-8">اختيار الفستان المثالي قد يكون محيراً أحياناً، خاصة مع تعدد الخيارات والتصاميم المتاحة. سواء كنتِ تستعدين لحفل زفاف، سهرة رسمية، أو حتى مناسبة عائلية بسيطة، فإن الفستان الذي تختارينه يجب أن يعكس شخصيتك ويبرز جمالك الطبيعي.
                اختاري الفستان الذي يناسب طبيعة المناسبة، ففساتين السهرات تختلف عن الفساتين اليومية أو العملية. احرصي على اختيار تصميم يعزز نقاط قوتك الجمالية ويخفف من أي عيوب، مثل الفساتين الضيقة للجسم الساعة الرملية أو الفضفاضة للجسم الكمثري. كما أن الألوان تلعب دوراً كبيراً، فاختاري درجات تناسب بشرتك والمناسبة، مثل الألوان الداكنة للإطلالات الرسمية والألوان الزاهية للأحداث العائلية أو الاحتفالية.
                الأهم من ذلك كله، تأكدي أن المقاس يناسبك تماماً ليمنحك شعوراً بالراحة والثقة طوال الوقت.</p>
        </div>
    )
}

export default BlogDetailsCard