import React from 'react'
import './index.css'
import ContentWithBgLayout from '../../Components/contentWithBgLayout'
import { Col, Row } from 'antd'

const TermsConditions = () => {
    return (
        <ContentWithBgLayout
            mainHeading={'Terms & Conditions'}
            bgImg={'terms-conditions-bg'}
        >
            <Row align={'middle'} justify={'space-between'} className='bg-[#F9FDFF] max-w-[95%] md:max-w-[85%] w-full mx-auto card-shadow py-6 px-5 rounded-sm mb-5 h-auto gap-8'>
                {/* terms */}
                <div className='flex flex-col gap-2 w-full'>
                    <h3 className='main-heading text-[#1C2B38] w-full font-bold text-xl'>1. Terms</h3>
                    <p className='text-[#596780]'>By accessing the website and application at https://traer.app or using our application “Traer,” you are agreeing to be bound by these terms of service, all applicable laws, and regulations, and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site. The materials contained in this website and application are protected by applicable copyright and trademark law.</p>
                </div>

                {/* use license */}
                <div className='flex flex-col gap-2 w-full'>
                    <h3 className='main-heading text-[#1C2B38] w-full font-bold text-xl'>2. Use License</h3>
                    <p className='text-[#596780]'>By accessing the website and application at https://traer.app or using our application “Traer,” you are agreeing to be bound by these terms of service, all applicable laws, and regulations, and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site. The materials contained in this website and application are protected by applicable copyright and trademark law.</p>
                </div>

                {/* disclamier */}
                <div className='flex flex-col gap-2 w-full'>
                    <h3 className='main-heading text-[#1C2B38] w-full font-bold text-xl'>3. Disclaimer</h3>
                    <p className='text-[#596780]'>By accessing the website and application at https://traer.app or using our application “Traer,” you are agreeing to be bound by these terms of service, all applicable laws, and regulations, and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site. The materials contained in this website and application are protected by applicable copyright and trademark law. you are prohibited from using or accessing this site. The materials contained in this website and application are protected by applicable copyright and trademark law.</p>
                </div>

                {/* limitations */}
                <div className='flex flex-col gap-2 w-full'>
                    <h3 className='main-heading text-[#1C2B38] w-full font-bold text-xl'>4. Limitations</h3>
                    <p className='text-[#596780]'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                </div>
            </Row>
        </ContentWithBgLayout>
    )
}

export default TermsConditions