import React from 'react'
import { assets } from '../../assets/assets'

const CardAbout = () => {
    return (
        <div className='p-3 shadow-[0px_0px_10px_0px_#00000033] rounded-xl'>
            <div className='rounded-lg relative overflow-hidden'>
                <img className='w-full h-full' src={assets.ProfileImg} alt="img" />
            </div>
            <div className='text-center my-2 space-y-2'>
                <h3 className='font-bold text-lg leading-7 text-secondary'>أحمد عطيه</h3>
                <h4 className='font-bold text-sm text-[#646464]'>مؤسس الشركة</h4>
            </div>
        </div>
    )
}

export default CardAbout