import { Rate } from 'antd'
import React from 'react'
import './index.css'
import { useNavigate } from 'react-router-dom';

const DestinationCard = (cardData) => {

    const { cardData: details } = cardData;
    const navigate = useNavigate()
    
    const destinationDetailHandler = () => {
        navigate('/destination-detail/1')
    }

    return (
        <div className='flex flex-col items-start p-3 gap-2 cursor-pointer bg-[#FFFFFF] card-shadow' onClick={() => destinationDetailHandler()}>
            <div className='h-[140px] w-full'>
                <img src={details.image} className='w-full h-full object-cover' />
            </div>
            <h3 className='font-semibold'>{details.title}</h3>
            <p className='break-all'>{details.desc}</p>
            <div className='w-full border-b border-[#d5d9dd]'></div>
            <div className='flex justify-between items-center w-full'>
                <div className='flex flex-col items-start'>
                    <Rate disabled defaultValue={2} />
                    <span className='text-[#778088]'>{details.reviews} reviews</span>
                </div>
                <div className='flex flex-col items-start'>
                    <span className='text-[#2ED1E1] font-bold text-base'>{details.price} $</span>
                    <span className='text-[#778088]'>per person</span>
                </div>
            </div>
        </div>
    )
}

export default DestinationCard