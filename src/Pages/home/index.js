import { Avatar, Carousel, Col, Rate, Row } from 'antd'
import React, { useState, useRef } from 'react'
import suv from '../../Assets/images/suv.png'
import supercar from '../../Assets/images/supercar.png'
import bmw from '../../Assets/images/bmw.png'
import { TiTick } from "react-icons/ti";
import BasicButton from '../../Components/basicButton'
import './index.css'
import ContentWithBgLayout from '../../Components/contentWithBgLayout'
import cityBg from '../../Assets/images/cityBg.png'
import DestinationCard from '../../Components/destinationCard'
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
import carousalDivider from '../../Config/utils/CarousalDivider'
import VehicleCard from '../../Components/vehicleCard'
import homeAlaska from '../../Assets/images/homeAlaska.png'
import appDownload from '../../Assets/images/appDownload.png'
import { IoLocationSharp } from "react-icons/io5";
import { IoMdHeart } from "react-icons/io";
import { IoIosShareAlt } from "react-icons/io";
import { FaApple } from "react-icons/fa";
import { GrAndroid } from "react-icons/gr";
import { FaUserAlt } from "react-icons/fa";
import NewsLetter from '../../Components/newsLetter'
import { useNavigate } from 'react-router-dom'

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

const vehicleData = [
    {
        image: cityBg,
        title: 'Koenigsegg',
        desc: 'Sport',
        price: 35.00,
        type: 'Manual',
        count: 2,
        litre: '90'
    },
    {
        image: cityBg,
        title: 'Koenigsegg',
        desc: 'Sport',
        price: 35.00,
        type: 'Manual',
        count: 2,
        litre: '90'
    },
    {
        image: cityBg,
        title: 'Koenigsegg',
        desc: 'Sport',
        price: 35.00,
        type: 'Manual',
        count: 2,
        litre: '90'
    },
    {
        image: cityBg,
        title: 'Koenigsegg',
        desc: 'Sport',
        price: 35.00,
        type: 'Manual',
        count: 2,
        litre: '90'
    },
    {
        image: cityBg,
        title: 'Koenigsegg',
        desc: 'Sport',
        price: 35.00,
        type: 'Manual',
        count: 2,
        litre: '90'
    },
    {
        image: cityBg,
        title: 'Koenigsegg',
        desc: 'Sport',
        price: 35.00,
        type: 'Manual',
        count: 2,
        litre: '90'
    },
    {
        image: cityBg,
        title: 'Koenigsegg',
        desc: 'Sport',
        price: 35.00,
        type: 'Manual',
        count: 2,
        litre: '90'
    },
    {
        image: cityBg,
        title: 'Koenigsegg',
        desc: 'Sport',
        price: 35.00,
        type: 'Manual',
        count: 2,
        litre: '90'
    },
    {
        image: cityBg,
        title: 'Koenigsegg',
        desc: 'Sport',
        price: 35.00,
        type: 'Manual',
        count: 2,
        litre: '90'
    },
]

const reviews = [
    {
        comment: "It's an amazing experience to be able to vacation to a new place, thank you Oelinken",
        user: <FaUserAlt />,
        name: 'Benjamin Robert',
        rating: 4
    },
    {
        comment: "It's an amazing experience to be able to vacation to a new place, thank you Oelinken",
        user: <FaUserAlt />,
        name: 'Benjamin Robert',
        rating: 4
    },
    {
        comment: "It's an amazing experience to be able to vacation to a new place, thank you Oelinken",
        user: <FaUserAlt />,
        name: 'Benjamin Robert',
        rating: 4
    },
    {
        comment: "It's an amazing experience to be able to vacation to a new place, thank you Oelinken",
        user: <FaUserAlt />,
        name: 'Benjamin Robert',
        rating: 4
    }
]

const Home = () => {

    const [activeCity, setActiveCity] = useState(cities[0]);
    const popularDestinationRef = useRef(null);
    const carRef = useRef(null);
    const reviewsRef = useRef(null);
    const navigate = useNavigate()

    const popularDestinations = carousalDivider(data, 4);
    const cars = carousalDivider(vehicleData, 4);
    const reviewsData = carousalDivider(reviews, 3);

    const [activeCarousalBtn, setActiveCarousalBtn] = useState({
        destinations: { prev: false, next: true },
        cars: { prev: false, next: true },
        reviews: { prev: false, next: true }
    })

    const citySelectHandler = (city) => {
        setActiveCity(city)
    }

    const carousal1SlideChangeHandler = (event) => {
        console.log(event)
    }

    const previousHandler = (name) => {
        if (name == 'destinations') {
            popularDestinationRef.current.prev();
            setActiveCarousalBtn((previous) => ({ ...previous, destinations: { prev: true, next: false } }))
        }
        else if (name == 'reviews') {
            reviewsRef.current.prev();
            setActiveCarousalBtn((previous) => ({ ...previous, reviews: { prev: true, next: false } }))
        }
        else {
            carRef.current.prev();
            setActiveCarousalBtn((previous) => ({ ...previous, cars: { prev: true, next: false } }))
        }
    }

    const nextHandler = (name) => {
        if (name == 'destinations') {
            popularDestinationRef.current.next();
            setActiveCarousalBtn((previous) => ({ ...previous, destinations: { prev: false, next: true } }))
        }
        else if (name == 'reviews') {
            reviewsRef.current.next();
            setActiveCarousalBtn((previous) => ({ ...previous, reviews: { prev: false, next: true } }))
        }
        else {
            carRef.current.next();
            setActiveCarousalBtn((previous) => ({ ...previous, cars: { prev: false, next: true } }))
        }
    }


    return (
        <Row className='flex flex-col gap-4 mt-4'>
            <Row className='gap-2 md:gap-4 lg:gap-8 max-w-[1100px] w-full px-8 mx-auto my-5 h-fit'>
                <Col lg={14} md={15} sm={24} xs={24} className='flex my-2 '>
                    <Row className='w-full flex flex-row h-full gap-4 justify-center items-center sm:justify-start sm:items-center'>
                        <Col className='flex mx-auto sm:mx-0 sm:flex-col gap-4 h-fit justify-center items-center md:items-start'>
                            <div className='h-full sm:h-[200px] w-full'>
                                <img src={suv} className='w-full h-full object-cover object-center' />
                            </div>
                            <div className='h-full sm:h-[200px] w-full lg:w-[180px] self-end'>
                                <img src={supercar} className='w-full h-full object-cover object-center' />
                            </div>
                        </Col>

                        <Col className='flex gap-2 items-start sm:mt-6 lg:mt-0 lg:items-center mx-auto sm:mx-0'>
                            <div className='h-[200px] sm:h-[260px]'>
                                <img src={bmw} className='w-full h-full object-cover object-center' />
                            </div>
                        </Col>
                    </Row>
                </Col>
                <Col lg={9} md={8} sm={24} xs={24} className=' flex flex-col py-6 text-left gap-4'>
                    <h3 className='main-heading text-3xl font-bold'>Get A Fair Price For Your Car Sell To Us Today</h3>
                    <p className='text-[#778088]'>We are committed to providing our customers with exceptional service, competitive pricing, and a wide range of.</p>
                    <div className='flex flex-col gap-3 text-[#778088]'>
                        <div className='flex gap-2 items-start'>
                            <div className='p-1 bg-[#405FF212] rounded-full'>
                                <TiTick />
                            </div>
                            <span>The largest provider, with more patrols in more places</span>
                        </div>
                        <div className='flex gap-2 items-start'>
                            <div className='p-1 bg-[#405FF212] rounded-full'>
                                <TiTick />
                            </div>
                            <span>You get 24/7 roadside assistance</span>
                        </div>
                        <div className='flex gap-2 items-start'>
                            <div className='p-1 bg-[#405FF212] rounded-full'>
                                <TiTick />
                            </div>
                            <span>The largest provider, with more patrols in more places</span>
                        </div>
                    </div>
                    <div className='mt-2'>
                        <BasicButton text='Get Started' />
                    </div>
                </Col>
            </Row>

            <Row className='gap-2 md:gap-4 max-w-[1100px] w-full px-8 mx-auto my-5 h-fit flex items-center justify-center'>
                <Col span={24} className='flex flex-col items-center justify-center text-center'>
                    <h3 className='main-heading text-2xl font-bold'>Explore Popular Cities</h3>
                    <p className='text-[#778088]'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. <br /> Velit officia consequat duis enim velit mollit</p>
                </Col>

                <Col span={24} className='w-[1000px] my-3'>
                    <div className='w-full overflow-x-auto flex gap-4 items-center justify-start md:justify-center scroll-snap-x scroll-snap-mandatory'>
                        {
                            cities && cities.map((city) => {
                                return (
                                    <p className={`py-2 px-4 text-nowrap border border-[#2ED1E1] w-fit font-semibold ${activeCity == city ? 'btn-linear-gradient text-white border-none' : 'text-black'} cursor-pointer`} onClick={() => citySelectHandler(city)}>
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

            <Row className='w-full trending-bg py-8 gap-4 sm:gap-0 px-2 sm:px-0' justify={'space-around'} align={'middle'}>
                <Col lg={12} md={12} sm={12} xs={24} className='flex items-center justify-center'>
                    <img src={homeAlaska} className='h-80 w-80' />
                </Col>
                <Col lg={12} md={12} sm={12} xs={24} className='flex flex-col gap-2 items-center sm:items-start'>
                    <p className='bg-[#AFFFF0] px-3 py-2 w-fit font-semibold'>Trending Now</p>
                    <h3 className='main-heading text-2xl font-semibold text-white'>Wilderlife of Alaska</h3>
                    <div className='flex gap-2 items-start flex-wrap justify-center'>
                        <div className='text-white flex gap-1 items-center justify-center'>
                            <IoLocationSharp />
                            <span>Alaska, USA</span>
                        </div>
                        <div className=' text-white'> | </div>
                        <div className='flex items-center gap-2 text-white'>
                            <Rate disabled value={4.5} allowHalf />
                            <span>4.5</span>
                            <span>( 300 reviews )</span>
                        </div>
                    </div>
                    <div className='max-w-[400px] my-3'>
                        <p className='text-white text-center sm:text-start'>
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                        </p>
                    </div>
                    <div className='flex items-center gap-4'>
                        <BasicButton text='Book Now' />
                        <div className=' text-white'> | </div>
                        <div className='flex items-center gap-1'>
                            <span className='p-2 flex items-center justify-center bg-[#76a9b6] rounded-full '>
                                <IoMdHeart color='white' />
                            </span>
                            <span className='p-2 flex items-center justify-center bg-[#76a9b6] rounded-full '>
                                <IoIosShareAlt color='white' />
                            </span>
                        </div>
                    </div>
                </Col>
            </Row>

            {/* Featured Destinations */}
            <Row className='gap-2 md:gap-4 max-w-[1100px] w-full px-8 mx-auto my-5 h-fit'>
                <Row className='w-full' justify={'space-between'} align={'middle'}>
                    <Col lg={10} md={16} sm={16} xs={18} className=''>
                        <h3 className='main-heading text-2xl font-bold'>Featured Destinations</h3>
                        <p className='text-[#778088]'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit</p>
                    </Col>
                    <Col lg={10} md={8} sm={8} xs={6} className=' flex gap-3 justify-end'>
                        <div className={`flex items-center justify-center w-7 cursor-pointer h-7 ${activeCarousalBtn.destinations.prev ? 'bg-[#FFDA32]' : 'border border-[#FFDA32]'} rounded-full`} onClick={() => previousHandler('destinations')}>
                            <GrPrevious />
                        </div>
                        <div className={`flex items-center justify-center w-7 h-7 cursor-pointer ${activeCarousalBtn.destinations.next ? 'bg-[#FFDA32]' : 'border border-[#FFDA32]'} rounded-full`} onClick={() => nextHandler('destinations')}>
                            <GrNext />
                        </div>
                    </Col>
                </Row>

                <div className='w-full'>
                    <Carousel
                        swipe={false}
                        afterChange={carousal1SlideChangeHandler}
                        dots={false}
                        draggable={false}
                        ref={popularDestinationRef}
                        className='w-full'
                    >
                        {
                            popularDestinations && popularDestinations.map((destination, index) => {
                                return (
                                    <div className="w-full" key={index}>
                                        <Row className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 items-start' justify={'space-between'} align={'middle'}>
                                            {
                                                destination?.map((dest) => {
                                                    return (
                                                        <Col>
                                                            <DestinationCard cardData={dest} />
                                                        </Col>
                                                    )
                                                })
                                            }
                                        </Row>
                                    </div>
                                )
                            })
                        }

                    </Carousel>
                </div>
            </Row>

            {/* explore all vehicle */}
            <Row className='gap-2 md:gap-4 max-w-[1100px] w-full px-8 mx-auto my-5 h-fit'>
                <Row className='w-full' justify={'space-between'} align={'middle'}>
                    <Col lg={10} md={16} sm={16} xs={18}>
                        <h3 className='main-heading text-2xl font-bold'>Explore All Vehicles</h3>
                        <p className='text-[#778088]'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit</p>
                    </Col>
                    <Col lg={10} md={8} sm={8} xs={6} className=' flex gap-3 justify-end'>
                        <div className={`flex items-center justify-center w-7 cursor-pointer h-7 ${activeCarousalBtn.cars.prev ? 'bg-[#FFDA32]' : 'border border-[#FFDA32]'} rounded-full`} onClick={() => previousHandler('cars')}>
                            <GrPrevious />
                        </div>
                        <div className={`flex items-center justify-center w-7 h-7 cursor-pointer ${activeCarousalBtn.cars.next ? 'bg-[#FFDA32]' : 'border border-[#FFDA32]'} rounded-full`} onClick={() => nextHandler('cars')}>
                            <GrNext />
                        </div>
                    </Col>
                </Row>

                <div className='w-full'>
                    <Carousel
                        swipe={false}
                        afterChange={carousal1SlideChangeHandler}
                        dots={false}
                        draggable={false}
                        ref={carRef}
                        className='w-full'
                    >
                        {
                            cars && cars.map((car, index) => {
                                return (
                                    <div className="w-full" key={index}>
                                        <Row className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 lg:gap-3 items-start' justify={'space-between'} align={'middle'}>
                                            {
                                                car?.map((carDetail) => {
                                                    return (
                                                        <Col>
                                                            <VehicleCard cardData={carDetail} />
                                                        </Col>
                                                    )
                                                })
                                            }
                                        </Row>
                                    </div>
                                )
                            })
                        }

                    </Carousel>
                </div>
            </Row>

            {/* app download */}
            <Row className='w-full appDownload-bg py-8' justify={'space-around'} align={'middle'}>
                <Col lg={12} md={12} sm={24} xs={24} className='flex items-center justify-center'>
                    <img src={appDownload} className='h-80 w-80' />
                </Col>
                <Col lg={12} md={12} sm={24} xs={24} className='flex flex-col gap-4 text-white items-center md:items-start md:gap-0 px-2 md:px-0'>
                    <h3 className='main-heading text-2xl font-bold mt-4 md:mt-0'>Classique Mobile App</h3>
                    <p className='font-semibold'>Available on IOS & Android</p>
                    <div className='max-w-[400px] my-3'>
                        <p className='text-center md:text-start'>
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                        </p>
                    </div>
                    <div className='flex items-center gap-3 md:flex-wrap px-3 md:px-0'>
                        <div className='flex gap-2 items-center py-3 px-4 bg-[#FFDA32] text-black cursor-pointer'>
                            <FaApple size={20} />
                            <span className='font-semibold'>Download For IOS</span>
                        </div>
                        <div className='flex gap-2 items-center py-3 px-4 bg-[#FFDA32] text-black cursor-pointer'>
                            <GrAndroid size={20} />
                            <span className='font-semibold'>Download For Android</span>
                        </div>
                    </div>
                </Col>
            </Row>

            {/* reviews */}
            <Row className='max-w-[1100px] w-full mx-auto my-6 px-2 md:px-0' justify={'center'} align={'middle'}>
                <Col span={24} className='flex items-center justify-center flex-col'>
                    <p className='main-heading text-2xl md:text-3xl font-bold'>Contact us to review</p>
                    <p className='main-heading text-2xl md:text-3xl font-bold'> <span className='text-[#2ED1E1]'>your experience</span> with us</p>
                    <p className='max-w-[350px] text-center text-[#778088] my-3'>Give us feedback and let us know what experiences you had while on vacation with us</p>
                </Col>

                <div className='w-full mt-4'>
                    <div className='flex items-center mx-auto justify-between'>
                        <div className={`flex items-center mx-1 lg:mx-0 justify-center w-7 cursor-pointer h-7 ${activeCarousalBtn.reviews.prev ? 'bg-[#FFDA32]' : 'border border-[#FFDA32]'} rounded-full`} onClick={() => previousHandler('reviews')}>
                            <GrPrevious />
                        </div>

                        <Carousel
                            swipe={false}
                            afterChange={carousal1SlideChangeHandler}
                            dots={false}
                            draggable={false}
                            ref={reviewsRef}
                            className='max-w-[250px] sm:max-w-[500px] md:max-w-[700px] lg:max-w-[900px] w-full mx-auto'
                        >
                            {
                                reviewsData && reviewsData.map((review, index) => {
                                    return (
                                        <div className="w-full mx-auto" key={index}>
                                            <Row className='w-full gap-2 lg:gap-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-center' justify={'space-between'} align={'middle'}>
                                                {
                                                    review?.map((reviewRecord) => {
                                                        return (
                                                            <Col className='flex flex-col py-5 px-3 gap-2 reviews-card'>
                                                                <p className='text-[#12121299] text-sm'>{reviewRecord.comment}</p>
                                                                <div className='flex items-center gap-3'>
                                                                    <Avatar icon={reviewRecord.user} shape='circle' />
                                                                    <div className='flex flex-col gap-2 items-start'>
                                                                        <p className='text-xs'>{reviewRecord.name}</p>
                                                                        <Rate value={reviewRecord.rating} disabled />
                                                                    </div>
                                                                </div>
                                                            </Col>
                                                        )
                                                    })
                                                }

                                            </Row>
                                        </div>
                                    )
                                })
                            }

                        </Carousel>

                        <div className={`flex items-center  mx-1 lg:mx-0 justify-center w-7 h-7 cursor-pointer ${activeCarousalBtn.reviews.next ? 'bg-[#FFDA32]' : 'border border-[#FFDA32]'} rounded-full`} onClick={() => nextHandler('reviews')}>
                            <GrNext />
                        </div>
                    </div>
                </div>
            </Row>

            <Row className='w-full mx-auto flex items-center justify-center'>
                <NewsLetter
                    className='w-full flex items-center flex-col justify-center gap-3 news-letter-bg py-12 px-2'
                />
            </Row>
        </Row>
    )
}

export default Home