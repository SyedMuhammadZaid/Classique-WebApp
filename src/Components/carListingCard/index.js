import { Col, Divider, Row } from 'antd'
import React from 'react'
import carDetailImg from '../../Assets/images/carDetailImg.png'
import { GiCarDoor } from 'react-icons/gi'
import { TbTransform } from 'react-icons/tb'
import { BiGasPump } from 'react-icons/bi'
import { FaDharmachakra, FaRegUser, FaSuitcaseRolling } from 'react-icons/fa'
import europeCar from '../../Assets/images/europeCar.png'
import instantConfirmation from '../../Assets/images/instantConfirmation.png'
import { Link, useNavigate } from 'react-router-dom'
import { TiTick } from "react-icons/ti";
import BasicButton from '../basicButton'
import './index.css'

const CarListingCard = (props) => {

    const count = 10
    const { viewDetailsBtn = false } = props
    const navigate = useNavigate()

    const carDetailHandler = () => {
        let id = 1
        navigate(`/car-detail/${id}`)
    }

    return (
        <Row className='w-full'>
            <Col span={24} className='car-detail-card p-4 flex flex-col gap-3 items-start'>
                <div className='flex flex-col'>
                    <h3 className='text-lg font-bold text-black'>Toyota Yaris Automatic</h3>
                    <span className='text-[#90A3BF]'>Economy</span>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-2 place-items-start gap-5 lg:gap-0 w-full'>
                    <div className='md:w-56 lg:w-64 h-32'>
                        <img src={carDetailImg} className='w-full h-full object-cover object-center' />
                    </div>
                    <div className='grid grid-cols-1 sm:grid-cols-2 place-items-start text-[#13253F] gap-2 w-full'>
                        <div className='flex items-center gap-2'>
                            <GiCarDoor size={23} color='#2ED1E1' className='' />
                            <span className='text-lg font-normal'>4 Doors</span>
                        </div>
                        <div className='flex items-center gap-2'>
                            <TbTransform size={23} color='#2ED1E1' className='' />
                            <span className='text-lg font-normal'>Transmission</span>
                        </div>
                        <div className='flex items-center gap-2'>
                            <BiGasPump size={23} color='#2ED1E1' className='' />
                            <span className='text-lg font-normal'>Petrol</span>
                        </div>
                        <div className='flex items-center gap-2'>
                            <FaDharmachakra size={23} color='#2ED1E1' className='' />
                            <span className='text-lg font-normal'>Air Conditioning</span>
                        </div>
                        <div className='flex items-center gap-2'>
                            <FaRegUser size={23} color='#2ED1E1' className='' />
                            <span className='text-lg font-normal'>5 Seats</span>
                        </div>
                        <div className='flex items-center gap-2'>
                            <FaSuitcaseRolling size={23} color='#2ED1E1' className='' />
                            <span className='text-lg font-normal'>1 Small Suitcase</span>
                        </div>
                    </div>
                </div>
                <div className='w-full bg-[#F6F7F9] py-3 px-2 flex items-center gap-10 lg:gap-2 justify-start md:justify-between flex-wrap'>
                    <div className='md:w-32 lg:w-36 h-12'>
                        <img src={europeCar} className='w-full h-full object-cover' />
                    </div>
                    <div className='flex flex-col items-start gap-1'>
                        <h3 className='font-semibold text-[#1A202C] text-base'>Europcar</h3>
                        <Link className='underline'>Rental Terms</Link>
                    </div>
                    <div className='bg-[#13253F] p-3 text-white text-base font-semibold'>
                        8.1 / 10
                    </div>
                    <div className='flex flex-col items-start gap-1 text-[#13253F]'>
                        <h3 className='font-semibold'>Excellent</h3>
                        <span>{`(${count}+ reviews)`}</span>
                    </div>
                    <div className='w-44 h-12'>
                        <img src={instantConfirmation} className='w-full h-full object-cover' />
                    </div>
                </div>
                <div className='w-full flex justify-between flex-col md:flex-row items-start md:items-center gap-4 md:gap-0 mt-4 sm:mt-0'>
                    <div className='flex flex-col gap-1'>
                        <h3 className='text-[#13253F] font-semibold text-base'>Free Cancellation</h3>
                        <div className='flex items-center gap-2'>
                            <h3 className='text-[#2ED1E1] font-bold text-2xl'>USD 186.35</h3>
                            <span className='text-[#596780] font-semibold'>for 8 days</span>
                        </div>
                        <p className='text-[#90A3BF] font-medium'>Pay Now USD 27.87</p>
                    </div>
                    {
                        viewDetailsBtn && <BasicButton text='View Details' basicButtonHandler={() => carDetailHandler()} />
                    }
                </div>
                <Divider />
                <div className='grid grid-cols-1 md:grid-cols-2 items-start  gap-10 md:gap-0'>
                    <div className='flex flex-col items-start gap-4'>
                        <h3 className='#1C2B38 main-heading text-xl font-semibold'>What Is Included!</h3>
                        <div className='flex gap-2 items-center'>
                            <div className='rounded-full flex items-center justify-center bg-[#2ED1E1]'>
                                <TiTick size={20} color='white' />
                            </div>
                            <span className='text-[#778088]'>Unlimited Mileage</span>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <div className='rounded-full flex items-center justify-center bg-[#2ED1E1]'>
                                <TiTick size={20} color='white' />
                            </div>
                            <span className='text-[#778088]'>Collision Damage Waiver</span>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <div className='rounded-full flex items-center justify-center bg-[#2ED1E1]'>
                                <TiTick size={20} color='white' />
                            </div>
                            <span className='text-[#778088]'>Third Party Liability (TPL)</span>
                        </div>
                    </div>

                    <div className='flex flex-col items-start gap-4'>
                        <div className='flex flex-col gap-2'>
                            <h3 className='#1C2B38 main-heading text-xl font-semibold'>Pick-Up: Terminal</h3>
                            <p className='text-[#778088]'>Address: Counter At Arrivals Car Rental Area, Bangkok, Bangkok, 10310, Thailand</p>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <h3 className='#1C2B38 main-heading text-xl font-semibold'>Fuel Policy</h3>
                            <p className='text-[#778088]'>Full to Full</p>
                        </div>
                    </div>
                </div>
            </Col>
        </Row>
    )
}

export default CarListingCard