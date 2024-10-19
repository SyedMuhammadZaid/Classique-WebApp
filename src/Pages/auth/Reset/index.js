import React, { useState } from 'react'
import DynamicForm from '../../../Components/dynamicForm/index'
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import * as yup from 'yup';
import OtpVerification from '../OtpVerification';
import { MdEmail } from "react-icons/md";



const ResetPassword = ({ setResetPassword, setShowRadioBtn }) => {

    const [OtpVerificationShow, setOtpVerificationShow] = useState(false)

    const data = {
        style: {
            commonFieldClasses: 'flex flex-col gap-0 w-full',
            commonFieldErrorClasses: 'm-0 p-0',
            footerClasses: 'w-full mt-1'
        },
        title: {
            content: 'Enter your Email address for the verification process, we will send a 4 digit code to your email.',
            className: 'w-full text-center text-gray-400'
        },
        fields: [
            {
                type: 'email',
                name: 'email',
                label: 'Email',
                placeHolder: 'Enter your email',
                inputClassName: 'h-10 rounded-md outline-none border border-gray-300 py-2 px-3',
                icon: <MdEmail className='absolute bottom-3 right-2' />,
                iconClassName: 'relative'
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


    const submissionHandler = () => {
        setOtpVerificationShow(true)
    }

    const backToLoginHandler = () => {
        setShowRadioBtn(true)
        setResetPassword(false)
    }


    return (
        <div className='flex flex-col gap-2'>
            {
                !OtpVerificationShow ?
                    <>
                        <h3 className='text-center font-bold text-base'>Forgot password</h3>
                        <DynamicForm
                            data={data}
                            style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '15px', padding: '5px 10px' }}
                            submissionButtonText={'Submit'}
                            submissionHandler={submissionHandler}
                            submissionButtonClassName={'w-full h-[40px] rounded-none outline-none border-none text-white submission-btn'}
                        />
                        <p className='text-center'>Back to <span className='font-bold cursor-pointer' onClick={backToLoginHandler}>Login</span></p>
                    </>
                    :
                    <OtpVerification
                        setShowRadioBtn={setShowRadioBtn}
                        setOtpVerificationShow={setOtpVerificationShow}
                        setResetPassword={setResetPassword}
                    />
            }
        </div>
    )
}

export default ResetPassword