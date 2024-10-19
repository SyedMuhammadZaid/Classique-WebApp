import React, { useEffect, useState } from 'react'
import './index.css'
import { Col, Drawer, Layout, Row } from 'antd'
import { Content, Footer, Header } from 'antd/es/layout/layout'
import logo from '../Assets/images/logo.png'
import logo2 from '../Assets/images/logo2.png'
import BasicButton from '../Components/basicButton'
import { useLocation, useNavigate } from 'react-router-dom'
import { IoMenu } from "react-icons/io5";
import HeaderDropDown from '../Components/headerDropDown'
import SignInSignUpModal from '../Pages/auth/SignInSignup'

const items = [
    {
        title: 'Home'
    },
    {
        title: 'About Us'
    },
    {
        title: 'Popular Destinations'
    },
    {
        title: 'Become Tour Vendor?'
    },
    {
        title: 'Contact Us'
    },
    {
        title: 'Car Rental Franchise?'
    }
]

const transparentBgRoutes = ['/BecomeTourVendor', '/ContactUs', '/CarRentalFranchise', '/AboutUs', '/Profile']

const AppLayout = ({ children }) => {

    const navigate = useNavigate();
    const location = useLocation();

    const [showDrawer, setShowDrawer] = useState(false);
    const [itemIsActive, setItemIsActive] = useState('Home');
    const [isLogin, setIsLogin] = useState(false);
    const [isTransparentBg, setIsTransparentBg] = useState(false);
    const [showLoginModal, setShowLoginModal] = useState(false);

    useEffect(() => {
        if (location.pathname) {
            if (location.pathname == '/') {
                setItemIsActive('Home');
                setIsTransparentBg(false);
            }
            else {
                let selectedItem = items.find((item) => '/' + item?.title.replaceAll(' ', '').replace('?', '') == location.pathname);
                if (selectedItem) {
                    setItemIsActive(selectedItem?.title)
                    if (transparentBgRoutes.includes(location.pathname)) {
                        setIsTransparentBg(true);
                    }
                    else {
                        setIsTransparentBg(false);
                    }
                } else {
                    setItemIsActive('')
                }
            }
        }
    }, [location.pathname])

    const navItemNavigator = (item) => {
        let selectedItem = item.replaceAll(' ', '')
        navigate(selectedItem == 'Home' ? '/' : `/${selectedItem}`)
        if (showDrawer) {
            setShowDrawer(false)
        }
    }

    const basicButtonHandler = () => {
        setShowLoginModal(!showLoginModal)
        if(showDrawer){
            setShowDrawer(false)
        }
    }

    return (
        <>
            <Layout className='h-fit'>
                <div className='bg-img1 relative'>
                    <div className='overlay'></div>
                    <Header className={`${!isTransparentBg ? 'bg-transparent text-white' : 'bg-white text-black box-shadow'} content py-2 px-4`}>
                        <Row align={'middle'} justify={'space-between'}>
                            <Col lg={4} className=''>
                                <img src={isTransparentBg ? logo2 : logo} className='h-12 w-48 cursor-pointer' onClick={() => navigate('/')} />
                            </Col>
                            <Col lg={18} className='flex items-center justify-end 1210px:block'>
                                <div className='hidden 1210px:flex items-center justify-around'>
                                    <ul className={`flex items-center w-5/6 gap-6 ${!isLogin && 'justify-evenly'}`}>
                                        {
                                            items?.map((item, index) => {
                                                return (
                                                    <li
                                                        key={index}
                                                        onClick={() => navItemNavigator(item.title)}
                                                        className={`cursor-pointer font-medium text-sm tracking-wider ${item?.title == itemIsActive ? 'active' : ''}`}>
                                                        {item.title}
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                    {
                                        isLogin ?
                                            <HeaderDropDown drawer={false} /> :
                                            <BasicButton text='Sign in' basicButtonHandler={basicButtonHandler} />
                                    }
                                </div>
                                <div className='1210px:hidden'>
                                    <IoMenu size={25} onClick={() => setShowDrawer(true)} />
                                </div>
                            </Col>
                        </Row>
                    </Header>
                    {
                        !isTransparentBg &&
                        <div className='hero-section content h-[80vh] flex items-center justify-center'>
                            showing some images here...
                        </div>
                    }
                </div>
                <Content className='content h-fit px-4'>
                    <div className=''>
                        {children}
                    </div>
                </Content>
                <Footer className='bg-white px-4'>
                    testing
                </Footer>
            </Layout>

            <Drawer
                title={
                    <div className='flex items-center justify-center'>
                        {
                            isLogin ?
                                <HeaderDropDown showDrawer={showDrawer} setShowDrawer={setShowDrawer} />
                                :
                                <BasicButton text='Sign in' basicButtonHandler={basicButtonHandler} />
                        }
                    </div>
                }
                placement={'right'}
                width={300}
                onClose={() => setShowDrawer(false)}
                open={showDrawer}
            >
                <ul className='flex flex-col items-start gap-8 justify-between w-5/6'>
                    {
                        items?.map((item, index) => {
                            return (
                                <li
                                    key={index}
                                    onClick={() => navItemNavigator(item.title)}
                                    className={`cursor-pointer font-medium text-sm tracking-wider ${item?.title == itemIsActive ? 'active' : ''}`}>
                                    {item.title}
                                </li>
                            )
                        })
                    }
                </ul>
            </Drawer>
            {
                showLoginModal && <SignInSignUpModal showLoginModal={showLoginModal} setShowLoginModal={setShowLoginModal} />
            }
        </>
    )
}


export default AppLayout