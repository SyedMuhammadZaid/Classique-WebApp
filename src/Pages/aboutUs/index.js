import React from 'react'
import ContentWithBgLayout from '../../Components/contentWithBgLayout'
import './index.css'
import { Row } from 'antd'

const AboutUs = () => {
    return (
        <>
            <ContentWithBgLayout
                mainHeading={'About Us'}
                bgImg={'about-us-bg'}
            >
                <Row align={'middle'} justify={'space-between'} className='bg-[#F9FDFF] max-w-[95%] md:max-w-[85%] w-full mx-auto card-shadow p-4 px-5 rounded-sm mb-5 h-auto flex gap-3'>
                    <h3 className='main-heading max-w-[400px] w-full font-bold text-2xl'>We are the best architect firm & Building Consultant</h3>
                    <p className='text-[#778088]'>
                        Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Lorem ipsum dolor sit amet, consectetur adipiscing elit Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis risus eget urna mollis ornare vel eu leo. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit avmet risus.
                    </p>
                </Row>
            </ContentWithBgLayout>
        </>
    )
}

export default AboutUs