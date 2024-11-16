import { Col, Row } from 'antd'
import React from 'react'

const ContentWithBgLayout = ({ children, mainHeading, bgImg }) => {
    return (
        <Row>
            <Col span={24} className={`h-52 w-full ${bgImg}`}>
                <div className='main-heading grid place-items-center w-full h-[80%] text-3xl sm:text-4xl md:text-5xl font-bold text-white'>
                    <h3 className='break-all text-center px-8'>{mainHeading}</h3>
                </div>
            </Col>
            <div className='w-full mt-[-55px] z-20'>
                {children}
            </div>
        </Row>
    )
}

export default ContentWithBgLayout