import React, { useState } from 'react'
import ContentWithBgLayout from '../../Components/contentWithBgLayout'
import { Col, Row } from 'antd'
import cityBg from '../../Assets/images/cityBg.png'
import './index.css'
import DestinationCard from '../../Components/destinationCard'

const cities = [
    'New York', 'California', 'Alaska', 'Sidney', 'Dubai', 'London', 'Tokyo', 'Delhi'
]

const data = [
    {
        image: cityBg,
        title: 'Cappadocia',
        desc: 'Lorem Ipsum is simply dummy text of the printing and...',
        reviews: 584,
        price: 35.00
    },
    {
        image: cityBg,
        title: 'Cappadocia',
        desc: 'Lorem Ipsum is simply dummy text of the printing and...',
        reviews: 584,
        price: 35.00
    },
    {
        image: cityBg,
        title: 'Cappadocia',
        desc: 'Lorem Ipsum is simply dummy text of the printing and...',
        reviews: 584,
        price: 35.00
    },
    {
        image: cityBg,
        title: 'Cappadocia',
        desc: 'Lorem Ipsum is simply dummy text of the printing and...',
        reviews: 584,
        price: 35.00
    },
    {
        image: cityBg,
        title: 'Cappadocia',
        desc: 'Lorem Ipsum is simply dummy text of the printing and...',
        reviews: 584,
        price: 35.00
    },
]

const PopularDestinations = () => {

    const [activeCity, setActiveCity] = useState(cities[0]);

    const citySelectHandler = (city) => {
        setActiveCity(city)
    }
    return (
        <>
            <ContentWithBgLayout
                mainHeading={'Explore Popular Cities'}
                bgImg={'popular-destinations-bg'}
                children={<p className='text-center text-white mt-[-10px]'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit</p>}
            />

            <Row className='flex flex-col gap-4 mt-4'>
                <Row className='gap-2 md:gap-4 max-w-[1100px] w-full px-8 mx-auto my-5 h-fit flex items-center justify-center'>
                    <Col span={24} className='w-[1000px] mb-3'>
                        <div className='w-full overflow-x-auto flex gap-4 items-center justify-start md:justify-center scroll-snap-x scroll-snap-mandatory'>
                            {
                                cities && cities.map((city) => {
                                    return (
                                        <p className={`py-2 px-4 border text-nowrap border-[#2ED1E1] w-fit font-semibold ${activeCity == city ? 'btn-linear-gradient text-white border-none' : 'text-black'} cursor-pointer`} onClick={() => citySelectHandler(city)}>
                                            {city}
                                        </p>
                                    )
                                })
                            }
                        </div>
                    </Col>
                    <Col lg={24}>
                        <div className='w-full relative'>
                            <img src={cityBg} className='w-full h-[400px] object-cover' />
                            <Row className='h-[100px]'>
                                <Row className='w-[90%] h-[200px] bg-[#F9FDFF] city-detail-card mx-auto z-20 absolute top-[330px] right-5 left-5 py-5 px-4 overflow-y-scroll flex justify-between items-center'>
                                    <Col lg={8}>
                                        <h2 className='main-heading text-3xl font-bold'>Alaska</h2>
                                        <p className='text-[#778088]'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                                    </Col>
                                    <Col lg={10} className='flex flex-col gap-2 mt-2'>
                                        <div className='w-full'>
                                            <p className='px-2 py-3 city-detail-tag w-fit text-[#D176E0] font-semibold'>Public Transportations</p>
                                        </div>
                                        <div className='w-full flex justify-between gap-2 flex-wrap sm:flex-nowrap'>
                                            <div className='w-full sm:w-1/2'>
                                                <p className='px-2 py-3 city-detail-tag w-fit text-[#D176E0] font-semibold break-all'>Public Transportations</p>
                                            </div>
                                            <div className='w-full sm:w-1/2'>
                                                <p className='px-2 py-3 city-detail-tag w-fit text-[#D176E0] font-semibold'>Public Transportations</p>
                                            </div>
                                        </div>
                                        <div className='w-full flex justify-between gap-2 flex-wrap sm:flex-nowrap'>
                                            <div className='w-full sm:w-1/2'>
                                                <p className='px-2 py-3 city-detail-tag w-fit text-[#D176E0] font-semibold'>Public Transportations</p>
                                            </div>
                                            <div className='w-full sm:w-1/2'>
                                                <p className='px-2 py-3 city-detail-tag w-fit text-[#D176E0] font-semibold'>Public Transportations</p>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </Row>
                        </div>
                    </Col>
                </Row>
                <Row className='gap-2 md:gap-4 max-w-[1100px] w-full px-8 mx-auto my-5 h-fit grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
                    {
                        data && data.map((item) => {
                            return (
                                <Col>
                                    <DestinationCard cardData={item} />
                                </Col>
                            )
                        })
                    }
                </Row>
            </Row>
        </>
    )
}

export default PopularDestinations