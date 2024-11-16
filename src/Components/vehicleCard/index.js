import { Rate } from 'antd'
import React from 'react'
import './index.css'
import BasicButton from '../basicButton';
import { FaGasPump } from "react-icons/fa";
import { TbSteeringWheel } from "react-icons/tb";
import { BsPeopleFill } from "react-icons/bs";

const VehicleCard = (cardData) => {
    const { cardData: details } = cardData;
    return (
        <div className='flex flex-col items-start p-3 gap-3 cursor-pointer bg-[#FFFFFF] card-shadow'>
            <h3 className='font-semibold'>{details.title}</h3>
            <p className='break-all text-[#90A3BF]'>{details.desc}</p>
            <div className='h-[140px] w-full'>
                <img src={details.image} className='w-full h-full object-cover' />
            </div>
            <div className='w-full flex items-center justify-between'>
            <div className='flex items-center gap-2 text-[#90A3BF]'>
                    <FaGasPump />
                    <span>{details.litre} L</span>
                </div>
                <div className='flex items-center gap-2 text-[#90A3BF]'>
                    <TbSteeringWheel />
                    <span>{details.type}</span>
                </div>
                <div className='flex items-center gap-2 text-[#90A3BF]'>
                    <BsPeopleFill />
                    <span>{details.count} people</span>
                </div>
            </div>
            <div className='flex justify-between items-center w-full'>
                <span className='text-[#2ED1E1] font-bold text-base'>$ {details.price}/ <span className='text-[#90A3BF]'>day</span></span>
                <p className='py-2 px-3 text-black bg-[#FFDA32] cursor-pointer'>Rent Now</p>
            </div>
        </div>
    )
}

export default VehicleCard