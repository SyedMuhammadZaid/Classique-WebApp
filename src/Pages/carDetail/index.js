import React from 'react'
import './index.css'
import { Col, Divider, Dropdown, Radio, Row } from 'antd'
import { IoLocationSharp } from 'react-icons/io5'
import { FaCalendarAlt } from 'react-icons/fa'
import { MdAccessTime } from 'react-icons/md'
import CarListingCard from '../../Components/carListingCard'
import { Link, useNavigate } from 'react-router-dom'
import { TiTick } from 'react-icons/ti'
import verify from '../../Assets/images/verify.png'
import cancel from '../../Assets/images/cancel.png'
import delivery from '../../Assets/images/delivery-man.png'
import BasicButton from '../../Components/basicButton'
import DynamicForm from '../../Components/dynamicForm/index'
import RentalDeskCustom from './rentalDeskCustom'
import FreeCancellationCustom from './freeCancellationCustom'
import AdditionalInfoCustom from './additionalInfoCustom'
import TermsCheckboxCustom from './termsCheckboxCustom'

const data = {
    style: {
        commonFieldClasses: 'flex w-[100%] sm:w-[48%] md:w-[48%] lg:w-[32%] justify-between flex-col',
        commonFieldErrorClasses: 'm-0 p-0',
        footerClasses: 'w-full flex justify-end'
    },
    fields: [
        {
            type: 'text',
            name: 'firstName',
            placeHolder: 'Enter your First Name',
            label: 'First name:',
            labelClassName: 'text-[#1C2B38] font-semibold',
            inputClassName: 'h-10 rounded-md outline-none py-2 px-3 w-full bg-[#F8FAFC]',
        },
        {
            type: 'text',
            name: 'lastName',
            placeHolder: 'Enter your Last Name',
            label: 'Last name:',
            labelClassName: 'text-[#1C2B38] font-semibold',
            inputClassName: 'h-10 rounded-md outline-none py-2 px-3 w-full bg-[#F8FAFC]',
        },
        {
            type: 'email',
            name: 'email',
            placeHolder: 'Enter your Email',
            label: 'Email:',
            labelClassName: 'text-[#1C2B38] font-semibold',
            inputClassName: 'h-10 rounded-md outline-none  py-2 px-3 w-full bg-[#F8FAFC]',
        },
        {
            type: 'number',
            name: 'phone',
            label: 'Phone:',
            labelClassName: 'text-[#1C2B38] font-semibold',
            placeHolder: 'Enter your Number',
            inputClassName: 'h-10 rounded-md outline-none py-2 px-3 w-full bg-[#F8FAFC]',
        },
        {
            type: 'text',
            name: 'company',
            placeHolder: 'address',
            label: 'I live in:',
            style: { flex: 1 },
            labelClassName: 'text-[#1C2B38] font-semibold',
            inputClassName: 'h-10 rounded-md outline-none py-2 px-3 w-full bg-[#F8FAFC]',
        },
        {
            type: 'checkbox',
            name: 'age',
            label: "Driver's age between 30-65?",
            style: { width: '100%', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'start', gap: 5 },
            labelClassName: 'text-[#1C2B38] font-semibold order-2',
            inputClassName: 'h-10 rounded-md outline-none py-2 px-3 w-fit order-1',
        },
        {
            type: 'custom',
            name: 'rentalDesk',
            style: { width: '100%' },
            customComponent: <RentalDeskCustom />
        },
        {
            type: 'custom',
            name: 'freeCancellation',
            style: { width: '100%' },
            customComponent: <FreeCancellationCustom />
        },
        {
            type: 'custom',
            name: 'additionalInfo',
            style: { width: '100%' },
            customComponent: <AdditionalInfoCustom />
        },
        {
            type: 'text',
            name: 'flightNumber',
            label: "Flight Number (Optional)",
            placeHolder: 'Flight Number',
            labelClassName: 'text-[#1C2B38] font-semibold',
            inputClassName: 'h-10 rounded-md outline-none py-2 px-3 w-full bg-[#F8FAFC]',
        },
        {
            type: 'checkbox',
            name: 'rememberMe',
            label: "Remember me on this device",
            style: { width: '100%', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'start', gap: 5, marginBottom: '-20px' },
            labelClassName: 'text-[#596780] font-medium order-2',
            inputClassName: 'h-10 rounded-md outline-none py-2 px-3 w-fit order-1',
        },
        {
            type: 'custom',
            name: 'rentalPolicy',
            style: { width: '100%' },
            customComponent: <TermsCheckboxCustom />
        },
        {
            type: 'checkbox',
            name: 'promotionalEmails',
            label: "Subscribe me to the promotional emails",
            style: { width: '100%', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'start', gap: 5, marginBottom: '-20px' },
            labelClassName: 'text-[#596780] font-medium order-2',
            inputClassName: 'h-10 rounded-md outline-none py-2 px-3 w-fit order-1',
        },
        {
            type: 'checkbox',
            name: 'privacyPolicy',
            label: "Check our Privacy Policy for information on how you can Unsubscribe to promotional emails & how your personal information is used.",
            style: { width: '100%', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'start', gap: 5 },
            labelClassName: 'text-[#596780] font-medium order-2',
            inputClassName: 'h-10 rounded-md outline-none py-2 px-3 w-fit order-1',
        },
        {
            type: 'custom',
            name: 'divider',
            style: { width: '100%' },
            customComponent: <div className='w-full h-[0.5px] bg-[#c1c3c4] border border-b border-dashed border-[#fff] my-2'></div>
        },
    ],
    // validationSchema: {
    //     firstName: yup.string().required(),
    //     lastName: yup.string().required(),
    //     email: yup.string().email().required(),
    //     password: yup.string().min(8).max(12).required(),
    //     preference: yup.string().required()
    // }
}


const CarDetail = () => {

    const navigate = useNavigate();

    const backToSearchHandler = () => {
        navigate('/')
    }

    const submissionHandler = () => {
        navigate('/payment')
    }


    return (
        <Row className='lg:max-w-[85%] w-full mx-auto rounded-sm h-auto flex items-start justify-start gap-3 mt-4 md:mt-7 p-2'>
            <Row className='w-full flex justify-between items-start gap-3 md:gap-0 px-0 mx-0' justify={'space-between'}>
                <Col lg={6} md={6} sm={24} xs={24} className='w-full flex flex-col gap-3'>
                    <div className='max-w-[100%] lg:max-w-[95%] w-full mx-auto flex flex-col justify-center gap-3 address-card px-4 py-3'>
                        <div className=''>
                            <span className='text-[#13253F] font-semibold flex items-center gap-1'>
                                <IoLocationSharp size={18} color='#2ED1E1' className='inline' />
                                Pick-up Location
                            </span>
                        </div>

                        <div className='w-full h-[0.5px] bg-[#f3f4f7]'></div>

                        <div className='flex flex-col gap-2'>
                            <span className='text-[#596780] font-medium flex items-start gap-1'>
                                Bangkok Suvarnabhumi
                            </span>
                            <div className='flex justify-between'>
                                <div className='flex items-center gap-1'>
                                    <FaCalendarAlt size={13} color='#2ED1E1' className='inline' />
                                    <span className='text-xs text-[#596780]'>Oct 12, 2024</span>
                                </div>
                                <div className='flex items-center gap-1'>
                                    <MdAccessTime size={13} color='#2ED1E1' className='inline' />
                                    <span className='text-xs text-[#596780]'>10:00</span>
                                </div>
                            </div>
                        </div>

                        <div className='w-full h-[0.5px] bg-[#f3f4f7]'></div>

                        <div className=''>
                            <span className='text-[#13253F] font-semibold flex items-center gap-1'>
                                <IoLocationSharp size={18} color='#2ED1E1' className='inline' />
                                Drop-off Location
                            </span>
                        </div>

                        <div className='flex flex-col gap-2'>
                            <span className='text-[#596780] font-medium flex items-start gap-1'>
                                Bangkok Suvarnabhumi
                            </span>
                            <div className='flex justify-between'>
                                <div className='flex items-center gap-1'>
                                    <FaCalendarAlt size={13} color='#2ED1E1' className='inline' />
                                    <span className='text-xs text-[#596780]'>Oct 12, 2024</span>
                                </div>
                                <div className='flex items-center gap-1'>
                                    <MdAccessTime size={13} color='#2ED1E1' className='inline' />
                                    <span className='text-xs text-[#596780]'>10:00</span>
                                </div>
                            </div>
                        </div>

                        <div className='w-full h-[0.5px] bg-[#f3f4f7]'></div>

                        <h3 className='text-[#13253F] text-base font-semibold underline text-center cursor-pointer' onClick={() => backToSearchHandler()}>Back to Search</h3>
                    </div>

                    <div className='max-w-[100%] lg:max-w-[95%] w-full mx-auto flex flex-col justify-center gap-3 price-card px-4 py-3'>
                        <span className='text-white'>Total Rental Price</span>
                        <div className='w-full h-[0.5px] bg-[#1e3a61]'></div>
                        <div className='flex flex-col gap-0'>
                            <span className='text-[#2ED1E1] font-bold text-lg'>USD 186.35</span>
                            <span className='text-white text-xs'>for 8 days</span>
                        </div>
                        <div className='w-full h-[0.5px] bg-[#1e3a61]'></div>
                        <div className='flex justify-between items-center text-white text-sm'>
                            <span>Rental Cost:</span>
                            <span>$ 80.00</span>
                        </div>
                        <div className='w-full h-[0.5px] bg-[#1e3a61]'></div>
                        <div className='flex justify-between items-center text-white text-sm'>
                            <span>Extras:</span>
                            <span>$ 80.00</span>
                        </div>
                        <div className='w-full h-[0.5px] bg-[#1e3a61]'></div>
                        <div className='flex justify-between items-center text-white text-sm'>
                            <span>Total Rental Cost:</span>
                            <span>$ 80.00</span>
                        </div>
                        <div className='w-full h-[0.5px] bg-[#1e3a61]'></div>
                        <div className='flex justify-between items-center text-[#2ED1E1] text-sm'>
                            <span>Pay Now</span>
                            <span>$ 80.00</span>
                        </div>
                        <div className='w-full h-[0.5px] bg-[#1e3a61]'></div>
                        <div className='flex justify-between items-center text-white text-sm'>
                            <span>At Rental Desk:</span>
                            <span>$ 80.00</span>
                        </div>
                    </div>
                </Col>
                <Col lg={18} md={17} sm={24} xs={24} className='w-full'>
                    <div className='max-w-[100%] lg:max-w-[95%] w-full mx-auto lg:mr-0 lg:ml-auto'>
                        <CarListingCard />
                    </div>
                </Col>
            </Row>
            <Row className='w-full grid grid-cols-1 md:grid-cols-2 gap-5'>
                <Col className='free-card p-4 flex flex-col gap-3 items-start'>
                    <h3 className='main-heading text-[#1C2B38] font-semibold text-lg'>We Give You The Following For Free</h3>
                    <div className='flex items-center gap-2'>
                        <div className='rounded-full flex items-center justify-center bg-[#2ED1E1]'>
                            <TiTick size={20} color='white' />
                        </div>
                        <span className='text-[#778088] text-sm'>Free Cancellation</span>
                    </div>
                    <div className='flex items-center gap-2'>
                        <div className='rounded-full flex items-center justify-center bg-[#2ED1E1]'>
                            <TiTick size={20} color='white' />
                        </div>
                        <span className='text-[#778088] text-sm'>24/7 Customer Support</span>
                    </div>
                    <div className='flex items-center gap-2'>
                        <div className='rounded-full flex items-center justify-center bg-[#2ED1E1]'>
                            <TiTick size={20} color='white' />
                        </div>
                        <span className='text-[#778088] text-sm'>Booking Amendments</span>
                    </div>
                </Col>

                <Col className='free-card p-4 flex flex-col gap-3 items-start'>
                    <h3 className='main-heading text-[#1C2B38] font-semibold text-lg'>Plus Your Rental Includes</h3>
                    <div className='flex items-center gap-2'>
                        <div className='rounded-full flex items-center justify-center bg-[#2ED1E1]'>
                            <TiTick size={20} color='white' />
                        </div>
                        <span className='text-[#778088] text-sm'>Unlimited Mileage</span>
                    </div>
                    <div className='flex items-center gap-2'>
                        <div className='rounded-full flex items-center justify-center bg-[#2ED1E1]'>
                            <TiTick size={20} color='white' />
                        </div>
                        <span className='text-[#778088] text-sm'>Theft Protection</span>
                    </div>
                    <div className='flex items-center gap-2'>
                        <div className='rounded-full flex items-center justify-center bg-[#2ED1E1]'>
                            <TiTick size={20} color='white' />
                        </div>
                        <span className='text-[#778088] text-sm'>Collision Damage Waiver</span>
                    </div>
                    <div className='flex items-center gap-2'>
                        <div className='rounded-full flex items-center justify-center bg-[#2ED1E1]'>
                            <TiTick size={20} color='white' />
                        </div>
                        <span className='text-[#778088] text-sm'>Third Party Liability (TPL)</span>
                    </div>
                </Col>
            </Row>
            <Row className='w-full extras-card p-4 flex flex-col gap-2'>
                <h3 className='main-heading text-[#1C2B38] font-semibold text-lg'>Extras</h3>
                <div className='w-full h-[0.5px] bg-[#c1c3c4] border border-b border-dashed border-[#fff]'></div>
                <Row className='w-full flex justify-between font-semibold'>
                    <Col lg={12} md={12} sm={12} xs={12} className='text-start'>Extras Description</Col>
                    <Col lg={4} md={4} sm={4} xs={4} className='text-start'>Quantity</Col>
                    <Col lg={4} md={4} sm={4} xs={4} className='text-start'>Price</Col>
                </Row>
                <Row className='w-full flex justify-between items-center bg-[#F8FAFC] px-4 py-2'>
                    <Col lg={12} md={12} sm={12} xs={12} className='flex flex-col'>
                        <span className='text-[#13253F] font-semibold'>Additional Driver <span className='text-[#596780] font-normal'>(USD 50.98 each per rental)</span></span>
                        <span className='text-[#596780]'>This is an Optional Extra</span>
                    </Col>
                    <Col lg={4} md={4} sm={4} xs={4} className='px-1'>
                        <input type='number' className='h-8 w-12 px-2 border border-[#E9EBEB]' />
                    </Col>
                    <Col lg={4} md={4} sm={4} xs={4} className='px-3 font-semibold'>USD 0.00</Col>
                </Row>

                <Row className='w-full flex justify-between items-center bg-[#F8FAFC] px-4 py-2'>
                    <Col lg={12} md={12} sm={12} xs={12} className='flex flex-col'>
                        <span className='text-[#13253F] font-semibold'>Booster Cushion <span className='text-[#596780] font-normal'>(USD 50.98 each per rental)</span></span>
                        <span className='text-[#596780]'>This is an Optional Extra</span>
                    </Col>
                    <Col lg={4} md={4} sm={4} xs={4} className='px-1'>
                        <input type='number' className='h-8 w-12 px-2 border border-[#E9EBEB]' />
                    </Col>
                    <Col lg={4} md={4} sm={4} xs={4} className='px-3 font-semibold text-start'>USD 0.00</Col>
                </Row>

                <Row className='w-full flex justify-between items-center bg-[#F8FAFC] px-4 py-2'>
                    <Col lg={12} md={12} sm={12} xs={12} className='flex flex-col'>
                        <span className='text-[#13253F] font-semibold'>Child Booster Seat <span className='text-[#596780] font-normal'>(USD 50.98 each per rental)</span></span>
                        <span className='text-[#596780]'>This is an Optional Extra</span>
                    </Col>
                    <Col lg={4} md={4} sm={4} xs={4} className='px-1'>
                        <input type='number' className='h-8 w-12 px-2 border border-[#E9EBEB]' />
                    </Col>
                    <Col lg={4} md={4} sm={4} xs={4} className='px-3 font-semibold'>USD 0.00</Col>
                </Row>

                <Row className='w-full flex justify-between items-center bg-[#F8FAFC] px-4 py-2'>
                    <Col lg={12} md={12} sm={12} xs={12} className='flex flex-col'>
                        <span className='text-[#13253F] font-semibold'>Navigation System (GPS) <span className='text-[#596780] font-normal'>(USD 50.98 each per rental)</span></span>
                        <span className='text-[#596780]'>This is an Optional Extra</span>
                    </Col>
                    <Col lg={4} md={4} sm={4} xs={4} className='px-1'>
                        <input type='number' className='h-8 w-12 px-2 border border-[#E9EBEB]' />
                    </Col>
                    <Col lg={4} md={4} sm={4} xs={4} className='px-3 font-semibold'>USD 0.00</Col>
                </Row>
            </Row>

            <Row className='w-full bg-white px-4 py-3 flex flex-col items-start gap-4'>
                <div className='flex items-center justify-between gap-2 w-full flex-wrap'>
                    <div className='flex items-center gap-3'>
                        <img src={verify} />
                        <h3 className='main-heading text-[#1C2B38] font-semibold text-lg'>Full Protection Cover - Excellent Value, Coverage & Peace Of Mind</h3>
                    </div>
                    <Link className='underline text-[#2ED1E1]'>View Details</Link>
                </div>
                <div>
                    <p className='text-[#778088]'>At the rental desk, car rental companies will block a deposit on your credit card. In case, the car is stolen or damaged, you could lose your complete deposit but with a Full Protection Cover you will get the refund from us.</p>
                </div>
                <div className='flex flex-col gap-4 w-full'>
                    <h3 className='main-heading text-[#1C2B38] font-semibold text-lg'>What's Covered?</h3>
                    <div className='flex items-center justify-between gap-2 w-full flex-wrap'>
                        <div className='flex items-center gap-2'>
                            <div className='rounded-full flex items-center justify-center bg-[#2ED1E1]'>
                                <TiTick size={20} color='white' />
                            </div>
                            <span className='text-[#778088] text-sm'>Exterior Damage/Repair</span>
                        </div>
                        <div className='flex items-center gap-2'>
                            <div className='rounded-full flex items-center justify-center bg-[#2ED1E1]'>
                                <TiTick size={20} color='white' />
                            </div>
                            <span className='text-[#778088] text-sm'>Loss/Theft Excess Refund</span>
                        </div>
                        <div className='flex items-center gap-2'>
                            <div className='rounded-full flex items-center justify-center bg-[#2ED1E1]'>
                                <TiTick size={20} color='white' />
                            </div>
                            <span className='text-[#778088] text-sm'>Taxi & Towing Expenses</span>
                        </div>
                        <div className='flex items-center gap-2'>
                            <div className='rounded-full flex items-center justify-center bg-[#2ED1E1]'>
                                <TiTick size={20} color='white' />
                            </div>
                            <span className='text-[#778088] text-sm'>Administration Charges</span>
                        </div>
                    </div>
                </div>
                <div className='w-full h-[0.5px] bg-[#c1c3c4] border border-b border-dashed border-[#fff] my-2'></div>
                <div className='flex items-start sm:items-center gap-4 md:gap-12 flex-wrap w-full'>
                    <div className='flex flex-col items-start gap-1'>
                        <span className='text-[#2ED1E1] text-lg font-bold'>$19.00/ <span className='text-[#90A3BF] text-sm font-normal'>Per Day</span></span>
                        <span className='text-black font-semibold'>Total Cost: $ 19.00</span>
                    </div>
                    <div>
                        <Radio.Group className='flex items-start md:items-center gap-3 flex-wrap'>
                            <div className='bg-[#F8FAFC] py-3 px-8'>
                                <Radio value={'with-full-protection'}>
                                    <div className='flex flex-col items-start'>
                                        <span className='text-base font-semibold text-black'>Full Protection Cover</span>
                                        <span className='text-sm font-normal text-[#596780]'>Full Protection Cover</span>
                                    </div>
                                </Radio>
                            </div>
                            <div className='bg-[#F8FAFC]  py-3 px-8'>
                                <Radio value={'without-full-protection'}>
                                    <div className='flex flex-col items-start'>
                                        <span className='text-base font-semibold text-black'>Proceed without</span>
                                        <span className='text-sm font-normal text-[#596780]'>Full Protection Cover</span>
                                    </div>
                                </Radio>
                            </div>
                        </Radio.Group>
                    </div>
                </div>
                <p className='text-[#778088]'>You agree that you have read, understood & accepted the <Link className='underline text-black'>Full Protection Cover Terms.</Link></p>
            </Row>

            <Row className='w-full bg-white px-4 py-3 flex flex-col items-start gap-4'>
                <div className='flex items-center justify-between gap-2 w-full'>
                    <div className='flex items-center gap-3'>
                        <img src={cancel} />
                        <h3 className='main-heading text-[#1C2B38] font-semibold text-lg'>Cancellation Protection</h3>
                    </div>
                </div>
                <p className='text-[#778088]'>You can now upgrade your free cancellation from <span className='font-medium text-black'>48 hours to 2 hours</span> prior to pick-up. This lets you organize your travel itinerary without the stress of any last moment or sudden changes.</p>
                <div className='flex flex-col items-start gap-3 w-full'>
                    <h3 className='main-heading text-[#1C2B38] font-semibold text-lg'>Why Opt For Cancellation Protection?</h3>
                    <div className='flex justify-between w-full flex-wrap gap-6 sm:gap-0'>
                        <div className='flex flex-col gap-3'>
                            <div className='flex items-center gap-2'>
                                <div className='rounded-full flex items-center justify-center bg-[#2ED1E1]'>
                                    <TiTick size={20} color='white' />
                                </div>
                                <span className='text-[#778088] text-sm'>Free Cancellation upto 2 hours instead of 48 hours prior to pick-up</span>
                            </div>
                            <div className='flex items-center gap-2'>
                                <div className='rounded-full flex items-center justify-center bg-[#2ED1E1]'>
                                    <TiTick size={20} color='white' />
                                </div>
                                <span className='text-[#778088] text-sm'>Cheapest plan to protect against cancellation charges</span>
                            </div>
                            <div className='flex items-center gap-2'>
                                <div className='rounded-full flex items-center justify-center bg-[#2ED1E1]'>
                                    <TiTick size={20} color='white' />
                                </div>
                                <span className='text-[#778088] text-sm'>Guarantees 100% refund on booking amount</span>
                            </div>
                            <div className='flex items-center gap-2'>
                                <div className='rounded-full flex items-center justify-center bg-[#2ED1E1]'>
                                    <TiTick size={20} color='white' />
                                </div>
                                <span className='text-[#778088] text-sm'>Flights cancelled at the last moment? No problem</span>
                            </div>
                        </div>
                        <div className='self-end mr-4 mb-4'>
                            <BasicButton text='Add to Rental' />
                        </div>
                    </div>
                </div>
                <div className='w-full h-[0.5px] bg-[#c1c3c4] border border-b border-dashed border-[#fff] my-2'></div>
                <div className='flex items-start flex-col gap-3'>
                    <div className='flex flex-col items-start gap-1'>
                        <span className='text-[#2ED1E1] text-lg font-bold'>$19.00/ <span className='text-[#90A3BF] text-sm font-normal'>Per Day</span></span>
                        <span className='text-black font-semibold'>Total Cost: $ 19.00</span>
                    </div>
                    <p className='text-[#778088]'>* Cancellation Protection charges are non-refundable. However, you will receive a full refund of booking amount upon cancellation.</p>
                </div>
            </Row>

            <Row className='w-full bg-white px-4 py-3 flex flex-col items-start gap-4'>
                <div className='flex items-center justify-between gap-2 w-full'>
                    <div className='flex items-center gap-3'>
                        <img src={delivery} />
                        <h3 className='main-heading text-[#1C2B38] font-semibold text-lg'>Main Driver's Information</h3>
                    </div>
                </div>
                <div className='flex gap-2 flex-wrap w-full'>
                    <DynamicForm
                        data={data}
                        style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', padding: '5px 0px', gap: '16px', width: '100%', margin: 'auto' }}
                        submissionButtonText={'Proceed To Payment'}
                        submissionHandler={submissionHandler}
                        submissionButtonClassName={'primary-btn-color w-full sm:w-[190px] h-[40px] rounded-none outline-none border-none text-white mt-4 font-bold'}
                    />
                </div>
            </Row>
        </Row>
    )
}

export default CarDetail