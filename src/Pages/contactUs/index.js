import React from 'react'
import { Col, Row } from 'antd'
import './index.css'
import ContentWithBgLayout from '../../Components/contentWithBgLayout'
import { IoLocationSharp } from "react-icons/io5";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import DynamicForm from '../../Components/dynamicForm/index';

const data = {
    style: {
        commonFieldClasses: 'flex w-[100%] lg:w-[48%]',
        commonFieldErrorClasses: 'm-0 p-0',
        footerClasses: 'w-full'
    },
    fields: [
        {
            type: 'text',
            name: 'firstName',
            placeHolder: 'Enter your First Name',
            inputClassName: 'h-10 rounded-md outline-none py-2 px-3 w-full',
        },
        {
            type: 'text',
            name: 'lastName',
            placeHolder: 'Enter your Last Name',
            inputClassName: 'h-10 rounded-md outline-none py-2 px-3 w-full',
        },
        {
            type: 'email',
            name: 'email',
            placeHolder: 'Enter your Email',
            inputClassName: 'h-10 rounded-md outline-none  py-2 px-3 w-full',
        },
        {
            type: 'number',
            name: 'phone',
            placeHolder: 'Enter your Number',
            inputClassName: 'h-10 rounded-md outline-none py-2 px-3 w-full',
        },
        {
            type: 'textarea',
            name: 'comment',
            placeHolder: 'Write your Message',
            style: { width: '100%' },
            inputClassName: 'rounded-md outline-none py-2 px-3 w-full',
            inputProps: {
                cols: 10
            }
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

const submissionHandler = () => {
}



const ContactUs = () => {
    return (
        <ContentWithBgLayout mainHeading={'We are here to help you.'} bgImg={'bg-contact-img'}>
            <Row align={'middle'} justify={'space-between'} className='bg-[#F9FDFF] max-w-[95%] md:max-w-[85%] w-full mx-auto card-shadow py-4 px-3 rounded-sm mb-5 h-auto flex items-end'>
                <Col lg={11} md={11} sm={24} className='flex flex-col gap-2'>
                    <h2 className='text-[#13253F] text-2xl font-bold'>Have Any Questions?</h2>
                    <p className='text-[#596780] text-base'>Have a inquiry or some feedback for us? Fill out the form below to contact our team.</p>
                    <Row className='flex flex-col gap-4'>
                        <Col span={24} className='flex items-center gap-4 bg-white py-5 px-3 address-card-shadow'>
                            <div className='p-2 grid place-items-center bg-gray-100'>
                                <IoLocationSharp size={30} color='#43D6E5' />
                            </div>
                            <div className='flex flex-col'>
                                <h4 className='font-semibold'>Our Address</h4>
                                <p className='text-[#596780]'>433 Yonge St, 2nd Floor Toronto ON, M5B 1T3</p>
                            </div>
                        </Col>
                        <Col span={24} className='flex items-center gap-4 bg-white py-5 px-3 address-card-shadow'>
                            <div className='p-2 grid place-items-center bg-gray-100'>
                                <IoCall size={30} color='#43D6E5' />
                            </div>
                            <div className='flex flex-col'>
                                <h4 className='font-semibold'>Support 24/7</h4>
                                <p className='text-[#596780]'>+61 (0) 345 876 654</p>
                                <p className='text-[#596780]'>0123475684</p>
                            </div>
                        </Col>
                        <Col span={24} className='flex items-center gap-4 bg-white py-5 px-3 address-card-shadow'>
                            <div className='p-2 grid place-items-center bg-gray-100'>
                                <MdEmail size={30} color='#43D6E5' />
                            </div>
                            <div className='flex flex-col'>
                                <h4 className='font-semibold'>E-mail</h4>
                                <p className='text-[#596780]'>sale@skillbridge.com</p>
                                <p className='text-[#596780]'>help@skillbridge.com</p>
                            </div>
                        </Col>
                    </Row>
                </Col>
                <Col lg={12} md={11} sm={24} className='contact-form-bg h-full px-3 py-4 flex flex-col gap-2'>
                    <h3 className='text-[#2ED1E1] font-bold text-base'>Contact Us</h3>
                    <h2 className='font-bold text-2xl'>Get in Touch</h2>
                    <p className='text-[#596780]'>Lorem ipsum dolor sit amet adipiscing elit, sed do eiusmod tempor eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <div
                        className='flex gap-2 flex-wrap'
                    >
                        <DynamicForm
                            data={data}
                            style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', padding: '5px 0px', gap: '12px' }}
                            submissionButtonText={'Send Message'}
                            submissionHandler={submissionHandler}
                            submissionButtonClassName={'primary-btn-color w-full sm:w-[140px] h-[40px] rounded-none outline-none border-none text-white mt-4 font-bold'}
                        />
                    </div>
                </Col>
            </Row>
        </ContentWithBgLayout>
    )
}

export default ContactUs