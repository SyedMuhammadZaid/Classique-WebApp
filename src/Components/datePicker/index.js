import { DatePicker } from 'antd'
import React from 'react'

const DatePickerCustom = ({ onChange }) => {

    const DatePickerHandler = (date, dateString) => {
        onChange(dateString)
    }

    return (
        <DatePicker
            className='rounded-none bg-[#F4F4F5] h-10'
            onChange={DatePickerHandler}
        />
    )
}

export default DatePickerCustom