import { Col, Modal, Radio, Row } from 'antd'
import React, { useState } from 'react'
import logo2 from '../../../Assets/images/logo2.png'
import SignIn from './signIn';
import SignUp from './signUp';
import './index.css'

const options = [
    {
        label: 'Sign In',
        value: 'signin',
    },
    {
        label: 'Sign Up',
        value: 'signup',
    }
];

const SignInSignUpModal = ({ showLoginModal, setShowLoginModal }) => {

    const [authType, setAuthType] = useState('signin');
    const [showRadioBtn, setShowRadioBtn] = useState(true);

    const radioChangeHandler = (e) => {
        setAuthType(e?.target.value)
    }

    console.log(authType)

    return (
        <div>
            <Modal
                open={showLoginModal}
                onCancel={() => setShowLoginModal(false)}
                width={authType == 'signin' ? 450 : 520}
                centered
                footer={false}
            >
                <Row justify={'center'} className='flex flex-col items-center gap-4 px-4'>
                    <img src={logo2} className='' />
                    {
                        showRadioBtn &&
                        <Col span={24}>
                            <Radio.Group
                                block
                                options={options}
                                value={authType}
                                defaultValue="signin"
                                optionType="button"
                                buttonStyle="solid"
                                className='w-48 font-semibold'
                                onChange={radioChangeHandler}
                            />
                        </Col>
                    }
                    <Col span={24}>
                        {
                            authType == 'signin' ?
                                <SignIn showRadioBtn={showRadioBtn} setShowRadioBtn={setShowRadioBtn} /> :
                                <SignUp setAuthType={setAuthType} />
                        }
                    </Col>
                </Row>
            </Modal>
        </div>
    )
}

export default SignInSignUpModal