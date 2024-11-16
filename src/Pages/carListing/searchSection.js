import { Col, DatePicker, Radio, Row, TimePicker } from 'antd'
import React, { useState } from 'react'
import { IoLocationSharp } from 'react-icons/io5'
import LocationPicker from '../../Components/locationPicker'
import { FaCalendarAlt } from 'react-icons/fa'
import { MdAccessTime } from 'react-icons/md'
import BasicButton from '../../Components/basicButton'

const dropOffOptions = [
    {
        label: 'No',
        value: 'no',
    },
    {
        label: 'Yes',
        value: 'yes',
    },
]

const format = 'HH:mm';


const SearchCarSection = () => {

    const [differentDropOff, setDifferentDropOff] = useState('no')

    const dropOffChangeHandler = (e) => {
        setDifferentDropOff(e?.target.value)
    }

    const datePickerChangeHandler = (e) => { }

    const timePickerChangeHandler = (e) => { }

    return (
        <Row className='w-full bg-[#13253F] p-4 flex ' justify={'space-between'}>
            <Col lg={differentDropOff == 'yes' ? 5 : 11} md={differentDropOff == 'yes' ? 11 : 24} sm={differentDropOff == 'yes' ? 11 : 24} xs={differentDropOff == 'yes' ? 24 : 24} className='flex flex-col gap-2 mb-4 lg:mb-0'>
                <span className='text-white font-semibold flex items-center gap-1'>
                    <IoLocationSharp size={15} color='#FFDA32' className='inline' />
                    Pick-up Location
                </span>
                <div className='relative'>
                    <LocationPicker />
                </div>
            </Col>
            {
                differentDropOff == 'yes' &&
                <Col lg={5} md={11} sm={11} xs={24} className='flex flex-col gap-2 mb-4 lg:mb-0'>
                    <span className='text-white font-semibold flex items-center gap-1'>
                        <IoLocationSharp size={15} color='#FFDA32' className='inline' />
                        Drop-up Location
                    </span>
                    <div className='relative'>
                        <LocationPicker />
                    </div>
                </Col>
            }
            <Col lg={4} md={5} sm={5} xs={11} className='flex flex-col gap-2 mb-4 lg:mb-0'>
                <span className='text-white font-semibold flex items-center gap-1'>
                    <FaCalendarAlt size={15} color='#FFDA32' className='inline' />
                    Date
                </span>
                <DatePicker onChange={datePickerChangeHandler} placeholder='From' className='p-2 h-9 outline-none rounded-none hover:outline-none' />
            </Col>
            <Col lg={2} md={5} sm={5} xs={11} className='flex flex-col gap-2 mb-4 lg:mb-0'>
                <span className='text-white font-semibold flex items-center gap-1'>
                    <MdAccessTime size={15} color='#FFDA32' className='inline' />
                    Time
                </span>
                <TimePicker
                    format={format}
                    onChange={timePickerChangeHandler}
                    placeholder='From'
                    className='p-2 h-9 outline-none rounded-none hover:outline-none'
                />
            </Col>
            <Col lg={4} md={5} sm={5} xs={11} className='flex flex-col justify-end mb-4 lg:mb-0'>
                <DatePicker onChange={datePickerChangeHandler} placeholder='To' className='p-2 h-9 outline-none rounded-none hover:outline-none' />
            </Col>
            <Col lg={2} md={5} sm={5} xs={11} className='flex flex-col justify-end mb-4 lg:mb-0'>
                <TimePicker
                    format={format}
                    onChange={timePickerChangeHandler}
                    placeholder='To'
                    className='p-2 h-9 outline-none rounded-none hover:outline-none'
                />
            </Col>
            <Col span={24} className='mt-4 flex items-center justify-center sm:justify-between flex-wrap gap-4'>
                <div className='flex items-center gap-3 drop-off-radio-parent-class'>
                    <Radio.Group
                        block
                        options={dropOffOptions}
                        value={differentDropOff}
                        defaultValue="no"
                        optionType="button"
                        buttonStyle="solid"
                        className='w-28 font-semibold'
                        onChange={dropOffChangeHandler}
                    />
                    <p className='text-white text-xs sm:text-[14px]'>Different Drop-off Location?</p>
                </div>
                <BasicButton text={'Edit Details'} />
            </Col>
        </Row>
    )
}

export default SearchCarSection