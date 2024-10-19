import React, { useState } from 'react'
import DynamicForm from '../../../Components/dynamicForm/index'
import * as yup from 'yup';
import OtpInput from '../../../Components/otpInput';
import ForgotPassword from '../ForgotPassword';


const OtpVerification = ({ setShowRadioBtn, setOtpVerificationShow, setResetPassword }) => {

    const [forgetPassword, setForgetPassword] = useState(false);

    const data = {
        style: {
            commonFieldClasses: 'flex flex-col gap-0 w-full',
            commonFieldErrorClasses: 'm-0 p-0',
            footerClasses: 'w-full mt-1'
        },
        title: {
            content: 'A 4 digit code will be sent to your given email address',
            className: 'w-full text-center text-gray-400'
        },
        fields: [
            {
                type: 'custom',
                name: 'otp',
                inputClassName: 'h-10 rounded-md outline-none border border-gray-300 py-2 px-3',
                customComponent: <OtpInput />
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
        setForgetPassword(true)
    }

    const backToLoginHandler = () => {
        setShowRadioBtn(true)
        setOtpVerificationShow(false)
        setResetPassword(false)
    }


    return (
        <div className='flex flex-col gap-2'>
            {
                !forgetPassword ?
                    <>
                        <h3 className='text-center font-bold text-base'>Enter the 4 Digit Code</h3>
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
                    <ForgotPassword
                        setShowRadioBtn={setShowRadioBtn}
                        setForgetPassword={setForgetPassword}
                        setOtpVerificationShow={setOtpVerificationShow}
                        setResetPassword={setResetPassword} />
            }
        </div >
    )
}

export default OtpVerification