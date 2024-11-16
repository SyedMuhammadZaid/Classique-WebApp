import { Avatar, Button, Carousel, Col, DatePicker, Divider, Input, Progress, Rate, Row, Select } from 'antd'
import React, { useRef, useState } from 'react'
import './index.css'
import { IoLocationSharp } from 'react-icons/io5'
import destination1 from '../../Assets/images/cityBg.png'
import destination2 from '../../Assets/images/Rectangle 129.png'
// import destination3 from '../../Assets/images/destination3.jpg'
// import destination4 from '../../Assets/images/destination4.jpg'
// import destination5 from '../../Assets/images/destination5.jpg'
import DynamicForm from '../../Components/dynamicForm/index'
import DatePickerCustom from '../../Components/datePicker'
import SelectFieldCustom from '../../Components/selectField'
import { FaSearch, FaShare } from "react-icons/fa";
import { TiCancel, TiUserOutline } from "react-icons/ti";
import { MdHealthAndSafety } from "react-icons/md";
import { TbDeviceMobileMessage } from "react-icons/tb";
import { IoMdTime } from "react-icons/io";
import { GiConfirmed } from "react-icons/gi";
import { PiHeadCircuitFill } from "react-icons/pi";
import { Link } from 'react-router-dom'
import { GrNext, GrPrevious } from 'react-icons/gr'
import carousalDivider from '../../Config/utils/CarousalDivider'
import DestinationCard from '../../Components/destinationCard'
import cityBg from '../../Assets/images/cityBg.png'
import { FiFilter } from "react-icons/fi";
import TravelDestinationFilters from './filters'


const data = {
    style: {
        commonFieldClasses: 'flex flex-col gap-0 w-full',
        commonFieldErrorClasses: 'm-0 p-0',
        footerClasses: 'w-full mt-1'
    },
    fields: [
        {
            type: 'custom',
            name: 'from',
            label: 'From',
            labelClassName: 'font-semibold',
            inputClassName: 'h-10 outline-none border border-gray-300 py-2 px-3',
            customComponent: <DatePickerCustom />
        },
        {
            type: 'custom',
            name: 'to',
            label: 'To',
            labelClassName: 'font-semibold',
            inputClassName: 'h-10 rounded-none outline-none border border-gray-300 py-2 px-3',
            customComponent: <DatePickerCustom />
        },
        {
            type: 'custom',
            name: 'guests',
            label: 'No. Of Guest',
            labelClassName: 'font-semibold',
            inputClassName: 'h-10 rounded-none outline-none border border-gray-300 py-2 px-3',
            customComponent: <SelectFieldCustom />
        },
    ],
    // validationSchema: {
    //     // firstName: yup.string().required(),
    //     // lastName: yup.string().required(),
    //     email: yup.string().email().required(),
    //     password: yup.string().min(8).max(12).required(),
    //     // preference: yup.string().required()
    // }
}

const relatedSearches = [
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


const TravelDestinationDetail = () => {

    const [displayImage, setDisplayImage] = useState(destination1);

    const [activeCarousalBtn, setActiveCarousalBtn] = useState({
        destinations: { prev: false, next: true },
    })

    const popularDestinationRef = useRef(null);

    const popularDestinations = carousalDivider(relatedSearches, 4);

    const submissionHandler = () => { }

    const carousalSlideChangeHandler = () => { }


    const previousHandler = (name) => {
        if (name == 'destinations') {
            popularDestinationRef.current.prev();
            setActiveCarousalBtn((previous) => ({ ...previous, destinations: { prev: true, next: false } }))
        }
    }

    const nextHandler = (name) => {
        if (name == 'destinations') {
            popularDestinationRef.current.next();
            setActiveCarousalBtn((previous) => ({ ...previous, destinations: { prev: false, next: true } }))
        }
    }

    const reviewPercentage = 4.8; // Dynamic percentage value


    return (
        <Row className='flex flex-col gap-4 mt-4'>
            <Row className='gap-2 md:gap-4 lg:gap-8 max-w-[1100px] w-full px-2 mx-auto mt-5 h-fit'>
                <Col lg={12} md={12} sm={24} xs={24} className='flex flex-col items-start gap-4'>
                    <h2 className='font-semibold text-2xl main-heading'>Vintage Double Decker Bus Tour & Thames River Cruise</h2>
                    <div className='flex items-center gap-2'>
                        <div className='flex items-center gap-1'>
                            <IoLocationSharp size={15} color='#778088' className='inline' />
                            <span>Gothenburg</span>
                        </div>
                        <Rate value={4} allowHalf />
                        <span className='text-[#778088]'>(348 reviews)</span>
                    </div>
                </Col>
            </Row>

            <Row className='gap-2 md:gap-4 lg:gap-8 max-w-[1100px] w-full px-2 mx-auto h-fit' justify={'space-between'}>
                <Col lg={16} md={15} sm={14} xs={24} className='flex flex-col gap-2 items-start'>
                    <Row className='flex w-full'>
                        <Col lg={24}>
                            <img src={displayImage} className='w-full h-[400px] object-cover' />
                        </Col>
                    </Row>
                    <Row className="w-full overflow-x-auto">
                        <Col lg={24} className="flex w-[100%] items-center gap-3 overflow-x-auto hide-scrollbar">
                            {[destination2].map((item, index) => (
                                <div key={index} className={`h-24 w-24 flex-shrink-0 ${item == displayImage ? 'border-2 border-[#7BBCB0]' : ''}`}>
                                    <img src={item} className="w-full h-full object-cover object-center cursor-pointer" onClick={() => setDisplayImage(item)} />
                                </div>
                            ))}
                        </Col>
                    </Row>
                </Col>
                <Col lg={7} md={8} sm={9} xs={24} className='destination-booking-card p-5'>
                    <h3 className='font-semibold text-base'>Booking</h3>
                    <Divider />
                    <div>
                        <DynamicForm
                            data={data}
                            style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '20px', padding: '0px' }}
                            submissionButtonText={'Confirm Booking'}
                            submissionHandler={submissionHandler}
                            submissionButtonClassName={'w-full h-[40px] rounded-none outline-none border-none text-white submission-btn mt-[-5px]'}
                        />
                    </div>
                    <Button icon={<FaShare style={{ color: '#778088' }} />} className='w-full rounded-none h-[40px] outline-none border border-[#778088] mt-[5px] text-[#778088]'>Share The Activity</Button>
                </Col>
            </Row>

            <Row className='max-w-[1100px] w-full px-2 mx-auto h-fit'>
                <div className='md:w-[730px] grid grid-cols-1 md:grid-cols-2 md:gap-4 bg-[#F8FAFC] border border-[#16527D14] py-5 px-4'>
                    <Col className='p-3 flex flex-col gap-5'>
                        <div className='flex items-start gap-3'>
                            <TiCancel size={28} color='#2ED1E1' />
                            <div className='flex flex-col'>
                                <span className='font-semibold'>Free Cancellation</span>
                                <p className='text-[#495560]'>Cancel up to 24 hours in advance to receive a full refund</p>
                            </div>
                        </div>
                        <div className='flex items-start gap-3'>
                            <TbDeviceMobileMessage size={25} color='#2ED1E1' />
                            <div className='flex flex-col'>
                                <span className='font-semibold'>Mobile Ticketing</span>
                                <p className='text-[#495560]'>Use your phone or print your voucher</p>
                            </div>
                        </div>
                        <div className='flex items-start gap-3'>
                            <GiConfirmed size={20} color='#2ED1E1' />
                            <div className='flex flex-col'>
                                <span className='font-semibold'>Instant Confirmation</span>
                                <p className='text-[#495560]'>Don’t wait for the confirmation!</p>
                            </div>
                        </div>
                    </Col>
                    <Col className='p-3 flex flex-col gap-5'>
                        <div className='flex items-start gap-3'>
                            <MdHealthAndSafety size={28} color='#2ED1E1' />
                            <div className='flex flex-col'>
                                <span className='font-semibold'>Health Precautions</span>
                                <p className='text-[#495560]'>Special health and safety measures apply. Learn more</p>
                            </div>
                        </div>
                        <div className='flex items-start gap-3'>
                            <IoMdTime size={25} color='#2ED1E1' />
                            <div className='flex flex-col'>
                                <span className='font-semibold'>Duration 3.5 Hours</span>
                                <p className='text-[#495560]'>Check availability to see starting times.</p>
                            </div>
                        </div>
                        <div className='flex items-start gap-3'>
                            <PiHeadCircuitFill size={20} color='#2ED1E1' />
                            <div className='flex flex-col'>
                                <span className='font-semibold'>Live Tour Guide In English</span>
                                <p className='text-[#495560]'>English</p>
                            </div>
                        </div>
                    </Col>
                </div>
            </Row>

            <Row className='max-w-[1100px] w-full px-2 mx-auto h-fit'>
                <Col lg={16} className='px-2 lg:px-0'>
                    <div className='flex flex-col gap-4'>
                        <h3 className='main-heading font-semibold text-2xl'>Description</h3>
                        <p className='text-[#495560]'>See the highlights of London via 2 classic modes of transport on this half-day adventure. First, you will enjoy great views of Westminster Abbey, the Houses of Parliament, and the London Eye, as you meander through the historic streets on board a vintage double decker bus. Continue to see St. Paul’s Cathedral, Sir Christopher Wren’s architectural masterpiece, where Admirals Nelson and Wellington are buried, and Princess Diana and Prince Charles got married. Continue to the Tower of London, built nearly 1,000 years ago during the reign of William the Conqueror. Home to the Crown Jewels, the Tower is protected by the famous Beefeaters, and the imposing palace has been used as a fortress and a prison throughout its history. Your guide will take you to Traitors Gate, where prisoners entered the Tower for the last time. Next, take a short trip along the River Thames, passing Shakespeare’s Globe, Cleopatra’s Needle, and London Bridge, before arriving at Westminster Pier. Rejoin the bus and head for Buckingham Palace. Make your way to the perfect spot to watch the world famous Changing of the Guard ceremony as the soldiers, dressed in their fabulous tunics and busbies, march to military music.</p>
                    </div>
                    <Divider />
                    <div className='flex flex-col gap-4'>
                        <h3 className='main-heading font-semibold text-2xl'>Activity</h3>
                        <span className='main-heading text-base'>What You Will Do</span>
                        <ul className='list-disc px-3 lg:px-0'>
                            <li className='text-[#495560] font-semibold'>Discover London on board a classic Routemaster vintage double decker bus </li>
                        </ul>
                    </div>

                    <Divider />

                    <div className='flex flex-col gap-4 max-w-[800px] w-full'>
                        <h3 className='main-heading font-semibold text-2xl'>What Is Included / Not Included</h3>
                        <div className='flex gap-5 w-full flex-wrap md:flex-nowrap px-3 lg:px-0'>
                            <div className=''>
                                <span className='main-heading text-base'>Includes</span>
                                <ul className='list-disc'>
                                    <li className='text-[#495560] font-semibold'>Discover London on board a classic Routemaster vintage double decker bus </li>
                                </ul>
                            </div>

                            <div>
                                <span className='main-heading text-base'>Not Includes</span>
                                <ul className='list-disc'>
                                    <li className='text-[#495560] font-semibold'>Discover London on board a classic Routemaster vintage double decker bus </li>
                                </ul>
                            </div>
                        </div>

                    </div>

                    <Divider />

                    <div className='flex flex-col gap-4'>
                        <h3 className='main-heading font-semibold text-2xl'>Safety</h3>
                        <span className='main-heading text-base'>Health Precautions</span>
                        <ul className='list-disc px-3 lg:px-0'>
                            <li className='text-[#495560] font-semibold'>All required protective equipment is provided</li>
                        </ul>
                    </div>

                    <Divider />

                    <div className='flex flex-col gap-4 w-full'>
                        <h3 className='main-heading font-semibold text-2xl'>Details</h3>
                        <Row className='w-full px-3 lg:px-0 gap-4 sm:gap-0'>
                            <Col lg={5} md={5} sm={12} xs={24}>
                                <span className='main-heading text-base'>Language</span>
                                <ul className='list-disc'>
                                    <li className='text-[#495560] font-semibold'>English</li>
                                    <li className='text-[#495560] font-semibold'>French</li>
                                </ul>
                            </Col>
                            <Col lg={5} md={5} sm={12} xs={24}>
                                <span className='main-heading text-base'>Duration</span>
                                <ul className='list-disc'>
                                    <li className='text-[#495560] font-semibold'>2 hours</li>
                                </ul>
                            </Col>
                            <Col lg={5} md={5} sm={12} xs={24}>
                                <span className='main-heading text-base'>Number Of People</span>
                                <ul className='list-disc'>
                                    <li className='text-[#495560] font-semibold'>5 Poeple</li>
                                </ul>
                            </Col>
                            <Col span={24} className='my-5'>
                                <span className='main-heading text-base'>Meeting Point Address</span>
                                <ul className='list-disc'>
                                    <li className='text-[#495560] font-semibold'>Meet your guide inside the west entrance of Altab Ali Park (Whitechapel Road). It's opposite the entrance to Aldgate East Tube Station and the Whitechapel Gallery. Look for a guide wearing SMT attire and holding a red SMT flag</li>
                                </ul>
                            </Col>
                            <Link className='text-[#2ED1E1] underline font-medium'>Open in Google Maps</Link>
                        </Row>


                    </div>
                </Col>
                <Divider />

            </Row>

            <Row className='gap-2 md:gap-4 max-w-[1100px] w-full px-2 mx-auto h-fit'>
                <Row className='w-full' justify={'space-between'} align={'middle'}>
                    <Col lg={10} md={16} sm={16} xs={18} className=''>
                        <h3 className='main-heading text-2xl font-bold'>Related Tours In Today</h3>
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
                        afterChange={carousalSlideChangeHandler}
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

                <Divider />
            </Row>

            <Row className='max-w-[1100px] w-full px-2 mx-auto h-fit gap-3'>
                <Row className='w-full' justify={'space-between'}>
                    <Col span={24}>
                        <h3 className='main-heading text-2xl font-bold'>Customer Review</h3>
                    </Col>
                    <Col lg={11} className='flex flex-col gap-3'>
                        <div>
                            <span className='text-[#778088] text-2xl font-light'>854 Reviews</span>
                        </div>
                        <Rate value={4} />
                    </Col>
                    <Col lg={8} className='flex flex-col gap-3 w-full mt-3 md:mt-0'>
                        <div className='flex gap-2'>
                            <span className='text-[#495560] font-semibold'>Guide</span>
                            <Progress
                                percent={reviewPercentage}
                                showInfo={true}
                                trailColor='#E8EAEB'
                                strokeColor='#FFDA32'
                                format={() => `${reviewPercentage}%`} // Ensures displayed text matches the fill
                                className='flex-1'
                            />
                        </div>
                        <div className='flex gap-2'>
                            <span className='text-[#495560] font-semibold'>Transportation</span>
                            <Progress
                                percent={reviewPercentage}
                                showInfo={true}
                                trailColor='#E8EAEB'
                                strokeColor='#FFDA32'
                                format={() => `${reviewPercentage}%`}
                                className='flex-1'
                            />
                        </div>
                        <div className='flex gap-2'>
                            <span className='text-[#495560] font-semibold'>Value for money</span>
                            <Progress
                                percent={reviewPercentage}
                                showInfo={true}
                                trailColor='#E8EAEB'
                                strokeColor='#FFDA32'
                                format={() => `${reviewPercentage}%`}
                                className='flex-1'
                            />
                        </div>
                        <div className='flex gap-2'>
                            <span className='text-[#495560] font-semibold'>Safety</span>
                            <Progress
                                percent={reviewPercentage}
                                showInfo={true}
                                trailColor='#E8EAEB'
                                strokeColor='#FFDA32'
                                format={() => `${reviewPercentage}%`}
                                className='flex-1'

                            />
                        </div>
                    </Col>
                </Row>

                <Row className='w-full'>
                    <TravelDestinationFilters />
                </Row>

                <Row className='w-full mt-6 gap-4 md:gap-0'>
                    <Col lg={6} className='flex items-start gap-4'>
                        <div className='review-person-img w-11 h-11'>
                            <Avatar className='w-full h-full' shape='square' src='https://cdn.prod.website-files.com/61c18ea0e48c2e36634ea0cf/622b7d2b8e075ac2d5dd685f_avatar-3637425_640.png' />
                        </div>
                        <div className='flex flex-col'>
                            <Rate value={4}  />
                            <span className='text-xs font-semibold'>Arlene Mccoy</span>
                            <span className='text-xs text-[#778088]'>2 October 2012</span>
                        </div>
                    </Col>
                    <Col lg={12} className='flex flex-col gap-2'>
                        <h3 className='text-black font-semibold'>Good Tour, Really Well Organised</h3>
                        <p className='text-[#495560]'>The tour was very well organised. One minus is that you get completely bombarded with information. You also have to stand up for too long at the private entrance to the Tower of London, which leads to a lack of time later. Lunch was the same, too stress, the quality was great but you couldn't enjoy it. I'd like to ask the organisers: please</p>
                    </Col>
                </Row>
                <Divider />
            </Row>


        </Row>
    )
}

export default TravelDestinationDetail