import { Checkbox, Col, DatePicker, Divider, Rate, Row, TimePicker } from 'antd'
import React from 'react'
import './index.css'
import suv from '../../Assets/images/suv.png'
import { useForm, Controller } from 'react-hook-form'
import LocationPicker from '../../Components/locationPicker'
import BasicButton from '../../Components/basicButton'
import { PiShieldCheckFill } from "react-icons/pi";


const format = 'HH:mm';

const Payment = () => {

    const { control, handleSubmit, reset } = useForm({
        mode: 'onChange'
    })

    const promoCodeHandler = () => { }

    const submissionHandler = (data) => {
        console.log(data)
    }

    return (
        <Row className='lg:max-w-[85%] w-full mx-auto rounded-sm h-auto flex items-start justify-start gap-3 mt-4 md:mt-7 p-2'>
            <Col lg={15} md={15} sm={11} xs={24} className='order-2 sm:order-1'>
                <form className='rounded-md flex flex-col gap-3'>
                    {/* billing info */}
                    <Row className='w-full flex flex-col gap-3 billing-info p-3'>
                        <div className='w-full'>
                            <h3 className='font-semibold text-black text-base'>Billing Info</h3>
                            <p className='text-[#90A3BF] text-sm'>Please enter your billing info</p>
                        </div>
                        <div className='flex gap-2 flex-wrap w-full'>
                            <div className='grid grid-cols-1 md:grid-cols-2 py-5 px-0 gap-3 w-full'>
                                <div className='flex w-[100%] flex-col'>
                                    <label className='text-[#1A202C] font-semibold'>Name</label>
                                    <Controller
                                        name='name'
                                        control={control}
                                        render={({ field, fieldState }) => {
                                            return (
                                                <input
                                                    type={'text'}
                                                    className={'h-10 rounded-md outline-none py-2 px-3 w-full bg-[#F6F7F9]'}
                                                    placeholder={'Your Name'}
                                                    name='name'
                                                    {...field}
                                                />
                                            )
                                        }}
                                    />
                                </div>
                                <div className='flex w-[100%] flex-col'>
                                    <label className='text-[#1A202C] font-semibold'>Phone Number</label>
                                    <Controller
                                        name='number'
                                        control={control}
                                        render={({ field, fieldState }) => {
                                            return (
                                                <input
                                                    type={'number'}
                                                    className={'h-10 rounded-md outline-none py-2 px-3 w-full bg-[#F6F7F9]'}
                                                    placeholder={'Your Number'}
                                                    name='Phone number'
                                                    {...field}
                                                />
                                            )
                                        }}
                                    />
                                </div>
                                <div className='flex w-[100%] flex-col'>
                                    <label className='text-[#1A202C] font-semibold'>Address</label>
                                    <Controller
                                        name='address'
                                        control={control}
                                        render={({ field, fieldState }) => {
                                            return (
                                                <input
                                                    type={'text'}
                                                    className={'h-10 rounded-md outline-none py-2 px-3 w-full bg-[#F6F7F9]'}
                                                    placeholder={'Address'}
                                                    name='address'
                                                    {...field}
                                                />
                                            )
                                        }}
                                    />
                                </div>
                                <div className='flex w-[100%] flex-col'>
                                    <label className='text-[#1A202C] font-semibold'>Town / City</label>
                                    <Controller
                                        name='town'
                                        control={control}
                                        render={({ field, fieldState }) => {
                                            return (
                                                <input
                                                    type={'text'}
                                                    className={'h-10 rounded-md outline-none py-2 px-3 w-full bg-[#F6F7F9]'}
                                                    placeholder={'Town or city'}
                                                    name='town'
                                                    {...field}
                                                />
                                            )
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    </Row>

                    {/* Rental info */}
                    <Row className='w-full flex flex-col gap-3 billing-info p-3'>
                        <div className='w-full'>
                            <h3 className='font-semibold text-black text-base'>Rental Info</h3>
                            <p className='text-[#90A3BF] text-sm'>Please select your rental date</p>
                        </div>

                        <div className='flex items-center gap-2'>
                            <div className='w-4 h-4 bg-[#2ED1E14D] rounded-full flex items-center justify-center'>
                                <div className='w-2 h-2 bg-[#2ED1E1] rounded-full'></div>
                            </div>
                            <span className='text-black text-base font-medium'>Pick - Up</span>
                        </div>

                        <div className='flex gap-2 flex-wrap w-full'>
                            <div className='grid grid-cols-1 md:grid-cols-2 py-5 px-0 gap-3 w-full'>
                                <div className='flex w-[100%] flex-col'>
                                    <label className='text-[#1A202C] font-semibold'>Locations</label>
                                    <Controller
                                        name='pickupLocation'
                                        control={control}
                                        render={({ field, fieldState }) => {
                                            return (
                                                <div className='relative'>
                                                    <LocationPicker
                                                        inputClasses={'h-10 rounded-md outline-none py-2 px-3 w-full bg-[#F6F7F9] border-none'}
                                                        searchContainerStyle={{ backgroundColor: '', border: '1px solid #90A3BF', borderBottomLeftRadius: '5px', borderBottomRightRadius: '5px' }}
                                                    />
                                                </div>
                                            )
                                        }}
                                    />
                                </div>

                                <div className='flex w-[100%] flex-col custom-fields'>
                                    <label className='text-[#1A202C] font-semibold'>Date</label>
                                    <Controller
                                        name='pickupDate'

                                        control={control}
                                        render={({ field: { value, onChange }, fieldState }) => {
                                            return (
                                                <DatePicker
                                                    onChange={(date, dateString) => {
                                                        onChange(date)
                                                    }}
                                                    value={value}
                                                    placeholder='Select your date'
                                                    className={'h-10 rounded-md outline-none py-2 px-3 w-full bg-[#F6F7F9] border-none'}
                                                />
                                            )
                                        }}
                                    />
                                </div>


                                <div className='flex w-[100%] flex-col custom-fields'>
                                    <label className='text-[#1A202C] font-semibold'>Time</label>
                                    <Controller
                                        name='pickupTime'
                                        control={control}
                                        render={({ field: { value, onChange }, fieldState }) => {
                                            return (
                                                <TimePicker
                                                    format={format}
                                                    onChange={(date, dateString) => {
                                                        onChange(date)
                                                    }}
                                                    value={value}
                                                    placeholder='Select your time'
                                                    className={'h-10 rounded-md outline-none py-2 px-3 w-full bg-[#F6F7F9] border-none'}
                                                />
                                            )
                                        }}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className='flex items-center gap-2'>
                            <div className='w-4 h-4 bg-[#2ED1E14D] rounded-full flex items-center justify-center'>
                                <div className='w-2 h-2 bg-[#2ED1E1] rounded-full'></div>
                            </div>
                            <span className='text-black text-base font-medium'>Drop - Off</span>
                        </div>

                        <div className='flex gap-2 flex-wrap w-full'>
                            <div className='grid grid-cols-1 md:grid-cols-2 py-5 px-0 gap-3 w-full'>
                                <div className='flex w-[100%] flex-col'>
                                    <label className='text-[#1A202C] font-semibold'>Locations</label>
                                    <Controller
                                        name='dropoffLocation'
                                        control={control}
                                        render={({ field, fieldState }) => {
                                            return (
                                                <div className='relative'>
                                                    <LocationPicker
                                                        inputClasses={'h-10 rounded-md outline-none py-2 px-3 w-full bg-[#F6F7F9] border-none'}
                                                        searchContainerStyle={{ backgroundColor: '', border: '1px solid #90A3BF', borderBottomLeftRadius: '5px', borderBottomRightRadius: '5px' }}
                                                    />
                                                </div>
                                            )
                                        }}
                                    />
                                </div>

                                <div className='flex w-[100%] flex-col custom-fields'>
                                    <label className='text-[#1A202C] font-semibold'>Date</label>
                                    <Controller
                                        name='dropoffDate'
                                        control={control}
                                        render={({ field: { value, onChange }, fieldState }) => {
                                            return (
                                                <DatePicker
                                                    onChange={(date, dateString) => {
                                                        onChange(date)
                                                    }}
                                                    value={value}
                                                    placeholder='Select your date'
                                                    className={'h-10 rounded-md outline-none py-2 px-3 w-full bg-[#F6F7F9] border-none'}
                                                />
                                            )
                                        }}
                                    />
                                </div>


                                <div className='flex w-[100%] flex-col custom-fields'>
                                    <label className='text-[#1A202C] font-semibold'>Time</label>
                                    <Controller
                                        name='dropoffTime'
                                        control={control}
                                        render={({ field: { value, onChange }, fieldState }) => {
                                            return (
                                                <TimePicker
                                                    format={format}
                                                    onChange={(date, dateString) => {
                                                        onChange(date)
                                                    }}
                                                    value={value}
                                                    placeholder='Select your time'
                                                    className={'h-10 rounded-md outline-none py-2 px-3 w-full bg-[#F6F7F9] border-none'}
                                                />
                                            )
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    </Row>

                    {/* payment info */}
                    <Row className='w-full flex flex-col gap-3 billing-info p-3'>
                        <div className='w-full'>
                            <h3 className='font-semibold text-black text-base'>Payment Method</h3>
                            <p className='text-[#90A3BF] text-sm'>Please enter your payment method</p>
                        </div>
                    </Row>

                    {/* confirmation info */}
                    <Row className='w-full flex flex-col gap-3 billing-info p-3'>
                        <div className='w-full'>
                            <h3 className='font-semibold text-black text-base'>Confirmation</h3>
                            <p className='text-[#90A3BF] text-sm'>We are getting to the end. Just few clicks and your rental is ready!</p>
                        </div>
                        <div className='flex gap-2 flex-wrap w-full'>
                            <div className='flex flex-wrap justify-between items-center py-5 px-0 gap-3 w-full'>
                                <div className='flex w-[100%] flex-col'>
                                    <Controller
                                        name='confirm1'
                                        control={control}
                                        render={({ field, fieldState }) => {
                                            return (
                                                <div className='bg-[#F6F7F9] p-3'>
                                                    <Checkbox className='text-[#1A202C]' {...field}>
                                                        I agree with sending an Marketing and newsletter emails. No spam, promissed!
                                                    </Checkbox>
                                                </div>
                                            )
                                        }}
                                    />
                                </div>
                                <div className='flex w-[100%] flex-col'>
                                    <Controller
                                        name='confirm2'
                                        control={control}
                                        render={({ field, fieldState }) => {
                                            return (
                                                <div className='bg-[#F6F7F9] p-3'>
                                                    <Checkbox className='text-[#1A202C]' {...field}>
                                                        I agree with our terms and conditions and privacy policy.
                                                    </Checkbox>
                                                </div>
                                            )
                                        }}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className='w-full mb-2'>
                            <BasicButton type='submit' text='Rent Now' basicButtonHandler={handleSubmit(submissionHandler)} />
                        </div>

                        <div className='w-full flex flex-col gap-2'>
                            <PiShieldCheckFill size={25} color='#3563E9' />
                            <span className='text-[#1A202C] font-medium text-base'>All your data is safe</span>
                            <p className='text-[#90A3BF] text-base'>We are using the most advanced security to provide you the best experience ever.</p>
                        </div>
                    </Row>
                </form>
            </Col>

            {/* rental details */}
            <Col lg={8} md={8} sm={11} xs={24} className='order-1 sm:order-2 p-3 summary-card rounded-md flex flex-col gap-3'>
                <div className='w-full'>
                    <h3 className='font-semibold text-black text-base'>Rental Summary</h3>
                    <p className='text-[#90A3BF] text-sm'>Prices may change depending on the length of the rental and the prices of your rental car.</p>
                </div>
                <div className='flex items-center gap-2 flex-wrap'>
                    <img src={suv} className='w-20 h-20 object-cover object-center' />
                    <div className='flex flex-col'>
                        <span className='text-ellipsis font-bold text-xl'>Nissan GT-R</span>
                        <div className='flex gap-2'>
                            <Rate value={4} />
                            <span>440+ reviews</span>
                        </div>
                    </div>
                </div>
                <Divider />
                <div className='flex justify-between items-center'>
                    <span className='text-[#90A3BF] text-sm'>Subtotal</span>
                    <span className='text-black font-medium text-base'>$80.00</span>
                </div>
                <div className='flex justify-between items-center'>
                    <span className='text-[#90A3BF] text-sm'>Tax</span>
                    <span className='text-black font-medium text-base'>$80.00</span>
                </div>
                <div className='flex justify-between items-center bg-[#F6F7F9] p-3 flex-wrap gap-2'>
                    <input className='h-7 w-40 px-2 outline-none' placeholder='Apply promo code' />
                    <span className='text-black font-medium text-base cursor-pointer hover:text-[#3f4041]' onClick={promoCodeHandler}>Apply now</span>
                </div>
                <div className='flex justify-between items-center'>
                    <div className='flex items-start flex-col'>
                        <span className='text-black font-medium text-base'>Total Rental Price</span>
                        <span className='text-[#90A3BF] text-sm'>Overall price and includes rental discount</span>
                    </div>
                    <span className='text-[#2ED1E1] text-xl font-semibold'>$80.00</span>
                </div>
            </Col>
        </Row>
    )
}

export default Payment