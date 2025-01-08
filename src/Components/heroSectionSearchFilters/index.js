import { Col, DatePicker, Radio, Row, Spin, TimePicker, Tooltip } from 'antd'
import React, { useState } from 'react'
import { IoLocationSharp } from "react-icons/io5";
import { FaCalendarAlt } from "react-icons/fa";
import { MdAccessTime } from "react-icons/md";
import './index.css'
import dayjs from 'dayjs';
import { LoadingOutlined } from '@ant-design/icons';
import LocationPicker from '../locationPicker';
import BasicButton from '../basicButton';
import { useNavigate } from 'react-router-dom';


const options = [
    {
        label: 'Car Rentals',
        value: 'cars',
    },
    {
        label: 'Things to Do',
        value: 'destinations',
    }
];

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

const HeroSectionSearchFilters = ({ bgTypeNotifier }) => {

    const [searchType, setSearchType] = useState('cars');
    const [differentDropOff, setDifferentDropOff] = useState('no')

    const navigate = useNavigate()

    const radioChangeHandler = (e) => {
        setSearchType(e?.target.value)
        bgTypeNotifier(e?.target.value)
    }

    const dropOffChangeHandler = (e) => {
        setDifferentDropOff(e?.target.value)
    }

    const datePickerChangeHandler = (e) => { }

    const timePickerChangeHandler = (e) => { }

    const searchCarHandler = () => {
        navigate('/car-listing')
    }

    const searchDestinationHandler = () => {
        navigate('/destination-listing')
    }


    return (
        <Row className='flex flex-col gap-8 max-w-[1100px] w-full px-8'>
            <Col lg={24} md={24} sm={24} xs={0} className='hidden flex-col items-center gap-1 sm:flex'>
                <h2 className='main-heading text-4xl text-center font-bold text-white custom-heading-shadow'>
                    {searchType == 'cars' ? 'Easy Book Your Dream Car Today' : 'Travel top destination of the world'}
                </h2>
                <p className='text-center text-white custom-desc-shadow'>{searchType == 'cars' ?
                    (
                        <>
                            Luxury Cars at low-cost, starts $75 / day from over 100 premium
                            <br />
                            locations
                        </>
                    )
                    :
                    (
                        <>
                            Where adventure meets comfort. We create unforgettable travel
                            <br />
                            experiences
                        </>
                    )
                }
                </p>
            </Col>
            <Col lg={24} className='flex items-center justify-center flex-col'>
                <div className='radio-parent-class'>
                    <Radio.Group
                        block
                        options={options}
                        value={searchType}
                        defaultValue="cars"
                        optionType="button"
                        buttonStyle="solid"
                        className='w-64 font-semibold '
                        onChange={radioChangeHandler}
                    />
                </div>
                {
                    searchType == 'cars' ?
                        <Row className='w-full bg-[#13253F] p-4 flex mb-3' justify={'space-between'}>
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
                                <BasicButton text={'Search Car'} basicButtonHandler={() => searchCarHandler()}  />
                            </Col>
                        </Row>
                        :
                        <Row className='w-full bg-[#13253F] p-4 flex mb-3 justify-between' justify={'space-between'}>
                            <Col lg={24} className='w-full flex gap-2 mb-4 lg:mb-0 items-end flex-wrap'>
                                <div className='flex flex-col flex-1 gap-2'>
                                    <span className='text-white font-semibold flex items-center gap-1'>
                                        <IoLocationSharp size={15} color='#7BBCB0' className='inline' />
                                        NearBy
                                    </span>
                                    <div className='relative'>
                                        <LocationPicker placeholder={'Attraction, activity or destination'} />
                                    </div>
                                </div>
                                <div>
                                    <BasicButton text='Search' basicButtonHandler={() => searchDestinationHandler()} />
                                </div>
                            </Col>
                        </Row>
                }
            </Col>
        </Row>
    )
}

export default HeroSectionSearchFilters