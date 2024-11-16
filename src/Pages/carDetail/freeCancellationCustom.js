import { Col, Radio, Row } from 'antd'
import React from 'react'
import { FaBell } from 'react-icons/fa'

const FreeCancellationCustom = ({ onChange }) => {

    const rentalSelector = (e) => {
        onChange(e.target.value)
    }

    return (
        <Row className='w-full bg-[#b1e3e7c4] px-4 py-5 flex items-start gap-2 sm:gap-0 justify-between flex-wrap'>
            <Col lg={18} md={18} sm={24} xs={24} className='flex items-start gap-3'>
                <div className='w-12 h-6 mt-1'>
                    <FaBell color='#2ED1E1' className='w-full h-full' />
                </div>
                <div className='flex flex-col items-start'>
                    <span className='text-base font-semibold'>Upgrade your Free Cancellation from 48 Hours to 2 Hours</span>
                    <span className='text-[#596780]'>Forget about cancellation charges. Now book your car stress free by paying a small amount.</span>
                </div>
            </Col>
            <Col lg={6} md={6} sm={24} xs={24} className='flex flex-col items-start w-full'>
                <span className='text-base font-semibold'>Do you want to purchase?</span>
                <Radio.Group onChange={rentalSelector} className=''>
                    <Radio value={'yes'}>Yes</Radio>
                    <Radio value={'no'}>No</Radio>
                </Radio.Group>
            </Col>
        </Row>
    )
}

export default FreeCancellationCustom