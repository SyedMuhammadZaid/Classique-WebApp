import React, { useEffect, useState } from 'react'
import './index.css'
import { Col, Drawer, Layout, Row } from 'antd'
import { Content, Footer, Header } from 'antd/es/layout/layout'
import logo from '../Assets/images/logo.png'
import logo2 from '../Assets/images/logo2.png'
import BasicButton from '../Components/basicButton'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { IoMenu } from "react-icons/io5";
import HeaderDropDown from '../Components/headerDropDown'
import SignInSignUpModal from '../Pages/auth/SignInSignup'
import icon from '../Assets/images/icon.png'
import lassique from '../Assets/images/lassique.png'
import masterCard from '../Assets/images/masterCard.png'
import visa from '../Assets/images/Visa.png'
import fb from '../Assets/images/fb.png'
import insta from '../Assets/images/insta.png'
import twitter from '../Assets/images/twitter.png'
import pintrest from '../Assets/images/pintrest.png'
import dayjs from 'dayjs'


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
        if (showDrawer) {
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
                <Content className='content h-fit bg-white pb-6'>
                    <div className=''>
                        {children}
                    </div>
                </Content>
                <Footer className='bg-[#13253F] w-full'>
                    <>
                        <Row className='max-w-[83%] w-full mx-auto mb-4'>
                            <Col lg={7} md={7} sm={24} xs={24} className='flex flex-col gap-1 mb-4 md:mb-0'>
                                <img className='w-12 h-12' src={icon} />
                                <img className='w-48 h-12' src={lassique} />
                            </Col>
                            <Col lg={5} md={5} sm={12} xs={24} className='flex flex-col gap-2 mb-4 md:mb-0'>
                                <h3 className='text-[#FFFFFFCC] font-semibold'>Company</h3>
                                <Link className='text-[#FFFFFF99]' >About Us</Link>
                                <Link className='text-[#FFFFFF99]'>Blog</Link>
                                <Link className='text-[#FFFFFF99]'>Become Tour Vendor?</Link>
                                <Link className='text-[#FFFFFF99]'>Car Rental Franchise</Link>
                            </Col>
                            <Col lg={5} md={5} sm={12} xs={24} className='flex flex-col gap-2 mb-4 md:mb-0'>
                                <h3 className='text-[#FFFFFFCC] font-semibold'>Help</h3>
                                <Link className='text-[#FFFFFF99]' >Contact Us</Link>
                                <Link className='text-[#FFFFFF99]'>FAQs</Link>
                                <Link className='text-[#FFFFFF99]'>Terms & Conditions</Link>
                                <Link className='text-[#FFFFFF99]'>Privacy Policy</Link>
                            </Col>
                            <Col lg={6} md={6} sm={12} xs={24} className='flex flex-col gap-2'>
                                <h3 className='text-[#FFFFFFCC] font-semibold'>Payment methods possible</h3>
                                <div className='flex items-center gap-2'>
                                    <img src={masterCard} />
                                    <img src={visa} />
                                </div>
                            </Col>
                        </Row>
                        <Row className='bg-[#00000033] max-w-[100%] py-2'>
                            <div className='max-w-[83%] w-full mx-auto flex items-center gap-2 justify-between'>
                                <Col lg={17} md={17} sm={12} xs={24}>
                                    <p className='text-[#FFFFFF99]'>Copyright {dayjs()?.year()} Classique. All Rights Reserved</p>
                                </Col>
                                <Col lg={7} md={7} sm={12} xs={24}>
                                    <div className='flex items-center gap-2'>
                                        <img src={fb} />
                                        <img src={twitter} />
                                        <img src={insta} />
                                        <img src={pintrest} />
                                    </div>
                                </Col>
                            </div>
                        </Row>
                    </>
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