import React from 'react'
import ContentWithBgLayout from '../../Components/contentWithBgLayout'
import './index.css'
import { Col, Row } from 'antd'
import DynamicForm from '../../Components/dynamicForm/index'

const data = {
    style: {
        commonFieldClasses: 'flex w-[100%] sm:w-[48%] md:w-[48%] lg:w-[32%] justify-between flex-col',
        commonFieldErrorClasses: 'm-0 p-0',
        footerClasses: 'w-full'
    },
    fields: [
        {
            type: 'text',
            name: 'firstName',
            placeHolder: 'Enter your First Name',
            label: 'First name:',
            labelClassName: 'text-[#1C2B38] font-semibold',
            inputClassName: 'h-10 rounded-md outline-none py-2 px-3 w-full',
        },
        {
            type: 'text',
            name: 'lastName',
            placeHolder: 'Enter your Last Name',
            label: 'Last name:',
            labelClassName: 'text-[#1C2B38] font-semibold',
            inputClassName: 'h-10 rounded-md outline-none py-2 px-3 w-full',
        },
        {
            type: 'email',
            name: 'email',
            placeHolder: 'Enter your Email',
            label: 'Email:',
            labelClassName: 'text-[#1C2B38] font-semibold',
            inputClassName: 'h-10 rounded-md outline-none  py-2 px-3 w-full',
        },
        {
            type: 'number',
            name: 'phone',
            label: 'Phone:',
            labelClassName: 'text-[#1C2B38] font-semibold',
            placeHolder: 'Enter your Number',
            inputClassName: 'h-10 rounded-md outline-none py-2 px-3 w-full',
        },
        {
            type: 'text',
            name: 'company',
            placeHolder: 'Enter Company Name',
            label: 'Company name:',
            labelClassName: 'text-[#1C2B38] font-semibold',
            inputClassName: 'h-10 rounded-md outline-none py-2 px-3 w-full',
        },
        {
            type: 'text',
            name: 'website',
            placeHolder: 'Enter Website',
            label: 'Website:',
            labelClassName: 'text-[#1C2B38] font-semibold',
            inputClassName: 'h-10 rounded-md outline-none py-2 px-3 w-full',
        },
        {
            type: 'text',
            name: 'address',
            placeHolder: 'Office Address',
            label: 'Office address:',
            labelClassName: 'text-[#1C2B38] font-semibold',
            style: { width: '100%' },
            inputClassName: 'h-10 rounded-md outline-none py-2 px-3 w-full',
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


const TourVendor = () => {

    const submissionHandler = () => {
    }


    return (
        <ContentWithBgLayout mainHeading={'Become Tour Vendor?'} bgImg={'tourVendor-form-bg'}>
            <Row align={'middle'} justify={'space-between'} className='bg-[#F9FDFF] max-w-[95%] md:max-w-[85%] w-full mx-auto card-shadow py-4 px-3 rounded-sm mb-5 h-auto flex items-end'>
                <div className='flex gap-2 flex-wrap w-full'>
                    <DynamicForm
                        data={data}
                        style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', padding: '5px 0px', gap: '16px', width:'100%', margin:'auto' }}
                        submissionButtonText={'Submit'}
                        submissionHandler={submissionHandler}
                        submissionButtonClassName={'primary-btn-color w-full sm:w-[140px] h-[40px] rounded-none outline-none border-none text-white mt-4 font-bold'}
                    />
                </div>
            </Row>
        </ContentWithBgLayout>
    )
}

export default TourVendor