import { Select } from 'antd'
import React from 'react'
import './index.css'

const SelectFieldCustom = () => {
    return (
        <div className='flex flex-col w-full gap-3'>
            <Select
                placeholder='No of Guests'
                className='rounded-none bg-[#F4F4F5] h-10 custom-select'
                style={{ borderRadius: 0, background: '#F4F4F5' }}
                options={[{ label: '1 guest', value: '1' }, { label: '2 guests', value: '2' }]}
            />
            <div className='w-full text-center'>
                <span className='#778088 text-xs'>subtotal</span>
                <h3 className='text-[#2ED1E1] font-bold text-2xl'>$ 78.90</h3>
            </div>
        </div>
    )
}

export default SelectFieldCustom