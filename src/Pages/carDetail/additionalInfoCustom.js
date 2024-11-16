import React from 'react'
import { FaPlus } from 'react-icons/fa'

const AdditionalInfoCustom = () => {
    return (
        <div className='w-full flex gap-2'>
            <div className='w-fit flex items-center justify-center p-1 bg-black rounded-full'>
                <FaPlus color='white' size={15} />
            </div>
            <span className='underline font-semibold'>Additional Info</span>
        </div>
    )
}

export default AdditionalInfoCustom