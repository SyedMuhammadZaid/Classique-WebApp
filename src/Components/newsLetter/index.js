import React, { useState } from 'react'
import './index.css'
import { Input } from 'antd'
import { BiSolidNavigation } from "react-icons/bi";

const NewsLetter = (props) => {
    const [email, setEmail] = useState('');
    return (
        <div className={props.className}>
            <h3 className='main-heading text-2xl'>Sign up to our newsletter</h3>
            <p className='max-w-[400px] w-full mx-auto text-center'>
                Lorem ipsum dolor sit amet consectetur. Egestas et feugiat purus enim facilisi nunc blandit nullam.
            </p>
            <Input
                type='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className='w-72 h-10'
                placeholder='Enter Your email address'
                suffix={<div className='p-2 flex items-center justify-center bg-[#a7f3fa]'><BiSolidNavigation color='white' size={12} /></div>}
            />
        </div>
    )
}

export default NewsLetter