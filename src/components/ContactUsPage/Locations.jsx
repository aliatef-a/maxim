import { assets } from "../../assets/assets"
import Accordion from "./Accordion"

const Locations = () => {
    return (
        <div className="flex flex-col gap-7 w-full lg:w-[60%] ">
            <h2 className="text-secondary font-bold text-xl">جميع الفروع (27)</h2>
            <div className="">
                <form className='relative border w-full border-[#B3B3B3] border-[0.5px-solid] rounded-md '>
                    <img className='absolute top-1/2 right-3 -translate-y-1/2 w-5' src={assets.iconSearch} alt="icon" />
                    <input type="email" className='w-full rounded py-4 px-10 text-sm font-normal text-secondary outline-none' placeholder='ابحث بإسم الفرع' />
                    <button className='bg-primary absolute top-1/2 left-1 -translate-y-1/2 px-7  p-3 rounded text-sm font-bold' type='submit'>بحث</button>
                </form>
            </div>
            <div className="flex flex-col gap-4">
                <Accordion title="بلقاس">
                    <p>
                        React is a JavaScript library for building user interfaces. It is
                        maintained by Facebook and a community of developers.
                    </p>
                </Accordion>
                <Accordion title="الرياض">
                    <p>
                        Tailwind CSS is a utility-first CSS framework for rapidly building
                        custom user interfaces.
                    </p>
                </Accordion>

            </div>
        </div>
    )
}

export default Locations