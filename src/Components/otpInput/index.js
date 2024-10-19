import { Input } from 'antd'
import React from 'react'

const OtpInput = (props) => {
    
    const { onChange } = props;

    const otpValueHandler = (value) => {
        onChange(value)
    }

    return (
        <Input.OTP variant="filled" {...props} length={4} onChange={otpValueHandler} />
    )
}

export default OtpInput