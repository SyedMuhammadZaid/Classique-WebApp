import React from 'react'
import ContentWithBgLayout from '../../Components/contentWithBgLayout'
import { Col, Row } from 'antd'
import './index.css'
import DestinationCard from '../../Components/destinationCard'
import cityBg from '../../Assets/images/cityBg.png'

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

const DestinationListing = () => {
    return (
        <>
            <ContentWithBgLayout
                mainHeading={''}
                bgImg={'about-us-bg'}
            >
                <Row align={'middle'} justify={'space-between'} className='bg-[#F9FDFF] max-w-[95%] md:max-w-[85%] w-full mx-auto card-shadow py-6 px-5 rounded-sm mb-5 h-auto grid grid-cols-1 md:grid-cols-2 gap-8'>
                    <Col>
                        <h3 className='main-heading max-w-[400px] w-full font-bold text-2xl'>Explore popular experiences</h3>
                        <p className='text-[#778088]'>
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                        </p>
                    </Col>
                    <Col className='gap-2 mt-2 flex flex-col items-start justify-start'>
                        <div className='w-1/2'>
                            <p className='px-2 py-3 city-detail-tag text-center text-[#D176E0] font-semibold'>Public Transportations1</p>
                        </div>
                        <div className='w-full grid grid-cols-2 gap-2 flex-wrap sm:flex-nowrap'>
                            <div className=''>
                                <p className='px-2 py-3 city-detail-tag text-center text-[#D176E0] font-semibold break-all'>Public Transportations2</p>
                            </div>
                            <div className=''>
                                <p className='px-2 py-3 city-detail-tag text-center text-[#D176E0] font-semibold'>Public Transportations3</p>
                            </div>
                        </div>
                        <div className='w-full grid grid-cols-2 gap-2 flex-wrap sm:flex-nowrap'>
                            <div className=''>
                                <p className='px-2 py-3 city-detail-tag text-center text-[#D176E0] font-semibold'>Public Transportations</p>
                            </div>
                            <div className=''>
                                <p className='px-2 py-3 city-detail-tag text-center text-[#D176E0] font-semibold'>Public Transportations</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </ContentWithBgLayout>

            <Row className='gap-2 md:gap-4 max-w-[95%] md:max-w-[85%] mx-auto my-5 h-fit flex items-center justify-center'>
                <div className='flex flex-col gap-2 text-center'>
                    <h3 className='main-heading font-bold text-2xl'>Explore Popular Cities</h3>
                    <p className='max-w-[500px] w-full text-[#778088]'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit</p>
                </div>

                <Row className='gap-2 md:gap-4 w-full  mx-auto my-5 h-fit grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
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

export default DestinationListing