import React, { useState } from 'react'
import DynamicForm from '../../../../Components/dynamicForm'
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import * as yup from 'yup';
import ResetPassword from '../../Reset';



const SignIn = ({ showRadioBtn, setShowRadioBtn }) => {

    const [showPassword, setShowPassword] = useState(false);
    const [resetPassword, setResetPassword] = useState(false);


    const data = {
        style: {
            commonFieldClasses: 'flex flex-col gap-0 w-[300px]',
            commonFieldErrorClasses: 'm-0 p-0',
            footerClasses: 'w-full'
        },
        title: {
            content: 'Welcome back! login with your Email Address',
            className: 'w-full text-center text-gray-400'
        },
        fields: [
            // {
            //     type: 'text',
            //     name: 'firstName',
            //     label: 'FirstName',
            //     placeHolder: 'Enter your firstName',
            //     inputStyle: { height: "20px", borderRadius: '5px', outline: "none", border: '1px solid gray', padding: '2px 4px' }
            // },
            // {
            //     type: 'text',
            //     name: 'lastName',
            //     label: 'LastName',
            //     placeHolder: 'Enter your lastName',
            //     inputStyle: { height: "20px", borderRadius: '5px', outline: "none", border: '1px solid gray', padding: '2px 4px' }
            // },
            {
                type: 'email',
                name: 'email',
                label: 'Email',
                placeHolder: 'Enter your email',
                inputClassName: 'h-10 rounded-md outline-none border border-gray-300 py-2 px-3',
                icon: <IoPersonSharp className='absolute bottom-3 right-2' />,
                iconClassName: 'relative'
            },
            {
                type: 'password',
                name: 'password',
                label: 'Password',
                placeHolder: 'Enter your password',
                inputClassName: 'h-10 rounded-md outline-none border border-gray-300 py-2 px-3',
                icon: showPassword ? <FaEyeSlash className='absolute bottom-3 right-2' /> : <FaEye className='absolute bottom-3 right-2' />,
                passwordType: showPassword && 'text',
                iconClassName: 'relative',
                iconProps: {
                    onClick: () => { setShowPassword(!showPassword) }
                }
            },
            {
                type: 'checkbox',
                name: 'rememberMe',
                label: 'Remember Me',
                inputClassName: 'h-10 rounded-md outline-none border border-gray-300 py-2 px-3 order-1 remember-check',
                labelClassName: 'order-2',
                style: { flexDirection: 'row', alignItems: 'center', gap: '8px' }
            },

            // {
            //     type: 'number',
            //     name: 'phone',
            //     label: 'Phone Number',
            //     placeHolder: 'Enter your number',
            //     inputStyle: { height: "20px", borderRadius: '5px', outline: "none", border: '1px solid gray', padding: '2px 4px' }
            // },
            // {
            //     type: 'select',
            //     name: 'interest',
            //     label: 'Interest',
            //     placeHolder: 'Select Your Interest',
            //     options: [{ value: 'javascript', name: 'JavaScript' }, { value: 'python', name: 'Python' },],
            //     inputStyle: { height: "25px", borderRadius: '5px', outline: "none", border: '1px solid gray', padding: '2px 4px' }
            // },
            // {
            //     type: 'custom',
            //     name: 'date',
            //     label: 'Date',
            //     customComponent: <DatePickerComponent />,
            //     style: { display: 'block', width: '100%' }
            // },  
            // {
            //     type: 'checkbox',
            //     name: 'rememberCheck',
            //     label: 'Remember Me',
            //     style: { flexDirection: 'row', alignItems: 'center' },
            //     inputStyle: { height: "20px", borderRadius: '5px', outline: "none", border: '1px solid gray', padding: '2px 4px' }
            // },
            // {
            //     type: 'radio',
            //     name: 'preference',
            //     label: 'Your Preference:',
            //     style: { flexDirection: 'row', alignItems: 'center', gap: '10px', flexWrap: 'wrap' },
            //     options: [{ value: 'Frontend', name: 'Frontend' }, { value: 'Backend', name: 'Backend' }],
            //     radioContainerStyle: { display: 'flex', alignItems: 'center' }
            // },
            // {
            //     type: 'textarea',
            //     name: 'suggestion',
            //     label: 'Your Suggestions',
            //     style: { width: '100%' },
            //     inputStyle: { borderRadius: '5px', outline: "none", border: '1px solid gray', padding: '2px 4px' },
            //     inputProps: {
            //         cols: 10
            //     }
            // }
        ],
        validationSchema: {
            // firstName: yup.string().required(),
            // lastName: yup.string().required(),
            email: yup.string().email().required(),
            password: yup.string().min(8).max(12).required(),
            // preference: yup.string().required()
        }
    }


    const submissionHandler = () => { }

    const passwordResetHandler = () => {
        setResetPassword(true);
        setShowRadioBtn(false);
    }

    return (
        <div className='flex flex-col gap-2'>
            {
                !resetPassword ?
                    <>
                        <DynamicForm
                            data={data}
                            style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '15px', padding: '5px 10px' }}
                            submissionButtonText={'Submit Form'}
                            submissionHandler={submissionHandler}
                            submissionButtonClassName={'w-full h-[40px] rounded-none outline-none border-none text-white submission-btn'}
                        />
                        <p className='text-center'>Forgot Password ? <span className='font-bold cursor-pointer' onClick={passwordResetHandler}>Reset</span></p>
                    </>
                    :
                    <ResetPassword setResetPassword={setResetPassword} setShowRadioBtn={setShowRadioBtn} />
            }

        </div>
    )
}

export default SignIn