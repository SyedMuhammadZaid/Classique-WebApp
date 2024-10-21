import React, { useRef, useState } from 'react'
import './index.css'
import ContentWithBgLayout from '../../Components/contentWithBgLayout'
import { Col, Row } from 'antd'
import DynamicForm from '../../Components/dynamicForm/index'


const Profile = () => {

    const imageRef = useRef(null);
    const [previewImage, setPreviewImage] = useState('');
    const [imageObject, setImageObject] = useState(null)

    const data = {
        style: {
            commonFieldClasses: 'flex w-[100%] sm:w-[49%] md:w-[49%] lg:w-[49%] flex-col mb-3',
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
                type: 'number',
                name: 'phone',
                label: 'Mobile number:',
                labelClassName: 'text-[#1C2B38] font-semibold',
                placeHolder: 'Enter your Number',
                inputClassName: 'h-10 rounded-md outline-none py-2 px-3 w-full',
            },
            {
                type: 'email',
                name: 'email',
                label: 'Email:',
                labelClassName: 'text-[#1C2B38] font-semibold',
                placeHolder: 'Enter your Email',
                inputClassName: 'h-10 rounded-md outline-none  py-2 px-3 w-full',
            },
            {
                type: 'text',
                name: 'address',
                placeHolder: 'Office Address',
                label: 'Office address:',
                labelClassName: 'text-[#1C2B38] font-semibold',
                style: { width: '100%' },
                className:'w-full md:w-[100%]',
                inputClassName: 'h-10 rounded-md outline-none py-2 px-3',
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

    const imageHandler = () => {
        imageRef.current.click()
    }

    const typeChangeHandler = (e) => {
        let file = e.target.files[0];
        if(file){
            let link = URL.createObjectURL(file);
            console.log(file)
            setPreviewImage(link);
            setImageObject(file);
        }
    }

    return (
        <ContentWithBgLayout mainHeading={'Profile'} bgImg={'profile-form-bg'}>
            <Row className='bg-[#F9FDFF] max-w-[95%] md:max-w-[85%] w-full mx-auto card-shadow py-4 px-3 rounded-sm mb-5 h-auto flex items-start justify-between lg:justify-start'>
                <Col lg={6} md={5} sm={24} xs={24} className='mb-4 md:mb-0 mt-1'>
                    <div className='w-full flex flex-col items-center gap-2'>
                        <div className='w-32 h-32 border border-gray-100 cursor-pointer'>
                            <input type='file' hidden onChange={typeChangeHandler} ref={imageRef} />
                            <img className='w-full h-full object-cover object-center' src={previewImage || 'https://img.freepik.com/premium-vector/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-vector-illustration_561158-3407.jpg?w=360'} onClick={imageHandler} />
                        </div>
                        <h3 className='break-all font-semibold'>John Doe</h3>
                    </div>
                </Col>
                <Col lg={16} md={16} sm={24} xs={24} className=''>
                    <div className='flex gap-2 flex-wrap w-full justify-between'>
                        <DynamicForm
                            data={data}
                            className='justify-between md:justify-start'
                            style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', padding: '0px 0px', gap: '8px' }}
                            submissionButtonText={'Update Profile'}
                            submissionHandler={submissionHandler}
                            submissionButtonClassName={'primary-btn-color w-full sm:w-[140px] h-[40px] rounded-none outline-none border-none text-white mt-4 font-bold'}
                        />
                    </div>
                </Col>
            </Row>
        </ContentWithBgLayout>
    )
}

export default Profile