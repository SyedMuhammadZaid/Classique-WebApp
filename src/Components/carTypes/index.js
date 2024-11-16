import React from 'react'
import suvIcon from '../../Assets/images/suvIcon.png'
import { Col, Row } from 'antd'

const carTypes = [
    {
        icon: suvIcon,
        name: 'Suv'
    },
    {
        icon: suvIcon,
        name: 'Sedan'
    },
    {
        icon: suvIcon,
        name: 'Large'
    },
    {
        icon: suvIcon,
        name: 'Coupe'
    },
    {
        icon: suvIcon,
        name: 'Convertible'
    },
    {
        icon: suvIcon,
        name: 'Van'
    },
    {
        icon: suvIcon,
        name: 'Truck'
    }
]

const CarTypes = () => {
    return (
        <Row className='w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-2'>
            {
                carTypes.map((type) => {
                    return (
                        <Col className='flex flex-col gap-2 items-center px-5 py-5 bg-[#F8FAFC] border border-[#E9E9E9] cursor-pointer'>
                            <img src={type.icon} />
                            <span>{type.name}</span>
                        </Col>
                    )
                })
            }
        </Row>
    )
}

export default CarTypes