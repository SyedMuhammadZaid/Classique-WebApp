import { Button } from 'antd'
import React from 'react'

const BasicButton = (props) => {
  return (
    <Button className='rounded-none px-4 py-5 primary-btn-color text-lg font-bold primary-btn'>
        {props?.text}
    </Button>
  )
}

export default BasicButton