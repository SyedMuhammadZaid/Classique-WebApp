import React, { useState } from 'react'
import DynamicForm from '../../../Components/dynamicForm/index'
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import * as yup from 'yup';


const ForgotPassword = ({ setForgetPassword, setShowRadioBtn, setOtpVerificationShow, setResetPassword }) => {

    const [showPassword, setShowPassword] = useState({
        password: false,
        confirmPassword: false
    });

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
                type: 'password',
                name: 'password',
                label: 'Password:',
                placeHolder: 'Enter your password',
                inputClassName: 'h-10 rounded-md outline-none border border-gray-300 py-2 px-3',
                icon: showPassword.password ? <FaEyeSlash className='absolute bottom-3 right-2' /> : <FaEye className='absolute bottom-3 right-2' />,
                passwordType: showPassword.password && 'text',
                iconClassName: 'relative',
                iconProps: {
                    onClick: () => { setShowPassword({ ...showPassword, password: !showPassword.password }) }
                }
            },
            {
                type: 'password',
                name: 'confirmPassword',
                label: 'Confirm Password:',
                placeHolder: 'Enter your password',
                inputClassName: 'h-10 rounded-md outline-none border border-gray-300 py-2 px-3',
                icon: showPassword.confirmPassword ? <FaEyeSlash className='absolute bottom-3 right-2' /> : <FaEye className='absolute bottom-3 right-2' />,
                passwordType: showPassword.confirmPassword && 'text',
                iconClassName: 'relative',
                iconProps: {
                    onClick: () => { setShowPassword({ ...showPassword, confirmPassword: !showPassword.confirmPassword }) }
                }
            }
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
        setShowRadioBtn(true)
        setForgetPassword(false)
        setOtpVerificationShow(false)
        setResetPassword(false)
    }

    const backToLoginHandler = () => {
        setShowRadioBtn(true)
        setForgetPassword(false)
        setOtpVerificationShow(false)
        setResetPassword(false)
    }

    return (
        <div className='flex flex-col gap-2'>
            <h3 className='text-center font-bold text-base'>Reset Password</h3>
            <DynamicForm
                data={data}
                style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '15px', padding: '5px 10px' }}
                submissionButtonText={'Submit Form'}
                submissionHandler={submissionHandler}
                submissionButtonClassName={'w-full h-[40px] rounded-none outline-none border-none text-white submission-btn'}
            />
            <p className='text-center'>Back to <span className='font-bold cursor-pointer' onClick={backToLoginHandler}>Login</span></p>
        </div>
    )
}

export default ForgotPassword