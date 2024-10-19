import React, { useState } from 'react'
import DynamicForm from '../../../../Components/dynamicForm';
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import * as yup from 'yup';
import LocationPicker from '../../../../Components/locationPicker';

const SignUp = ({ setAuthType }) => {

    const [showPassword, setShowPassword] = useState({
        password: false,
        confirmPassword: false
    });

    const data = {
        style: {
            commonFieldClasses: 'flex flex-col gap-0 w-full md:w-[200px] mb-4 md:mb-0',
            commonFieldErrorClasses: 'm-0 p-0',
            footerClasses: 'w-full'
        },
        title: {
            content: 'Create your account!',
            className: 'w-full text-center text-gray-400'
        },
        fields: [
            {
                type: 'text',
                name: 'firstName',
                label: 'First Name:',
                placeHolder: 'Enter your First Name',
                inputClassName: 'h-10 rounded-md outline-none border border-gray-300 py-2 px-3',
            },
            {
                type: 'text',
                name: 'lastName',
                label: 'Last Name:',
                placeHolder: 'Enter your Last Name',
                inputClassName: 'h-10 rounded-md outline-none border border-gray-300 py-2 px-3',
            },
            {
                type: 'email',
                name: 'email',
                label: 'Email',
                placeHolder: 'Enter your Email',
                inputClassName: 'h-10 rounded-md outline-none border border-gray-300 py-2 px-3',
            },
            {
                type: 'number',
                name: 'phone',
                label: 'Phone:',
                placeHolder: 'Enter your Number:',
                inputClassName: 'h-10 rounded-md outline-none border border-gray-300 py-2 px-3',
            },
            {
                type: 'custom',
                name: 'location',
                label: 'Location:',
                customComponent: <LocationPicker />,
                inputClassName: 'h-10 rounded-md outline-none border border-gray-300 py-2 px-3 w-full',
                style: { width: '100%' }
            },
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
        //     firstName: yup.string().required(),
        //     lastName: yup.string().required(),
        //     email: yup.string().email().required(),
        //     password: yup.string().min(8).max(12).required(),
        //     preference: yup.string().required()
        // }
    }


    const submissionHandler = () => {
        setAuthType('signin')
    }


    return (
        <div
            className='flex flex-col gap-2'
        >
            <DynamicForm
                data={data}
                style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', gap: '8px', padding: '5px 15px' }}
                submissionButtonText={'Create Account'}
                submissionHandler={submissionHandler}
                submissionButtonClassName={'w-full h-[40px] rounded-none outline-none border-none text-white submission-btn mt-4'}
            />
        </div>
    )
}

export default SignUp