import { Checkbox } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'

const TermsCheckboxCustom = ({ onChange }) => {

    const policyChechedHandler = (e) => {
        onChange(e.target.checked)
    }

    return (
        <div className='flex w-[100%] justify-start items-center gap-[5px] mb-[-20px]'>
            <input type='checkbox' id='rentalPolicy' className='h-10 rounded-md outline-none py-2 px-3 w-fit' onChange={policyChechedHandler} />
            <label htmlFor='rentalPolicy' className='text-[#596780] font-medium'>
                I confirm that I have read, understood and agree with the <Link className='text-[#2ED1E1]'>Rental Terms and BOOKING ENGINE TERMS & CONDITIONS</Link> provided.
            </label>
        </div >
    )
}

export default TermsCheckboxCustom