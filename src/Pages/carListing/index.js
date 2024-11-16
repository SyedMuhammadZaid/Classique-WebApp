import React, { useState } from 'react'
import SearchCarSection from './searchSection'
import ContentWithBgLayout from '../../Components/contentWithBgLayout'
import { Button, Checkbox, Col, Divider, Drawer, Row, Slider } from 'antd'
import CarTypes from '../../Components/carTypes'
import './index.css'
import BasicButton from '../../Components/basicButton'
import { FaFilter } from "react-icons/fa";
import Filters from './filters'
import carDetailImg from '../../Assets/images/carDetailImg.png'
import { GiCarDoor } from "react-icons/gi";
import { TbTransform } from "react-icons/tb";
import { BiGasPump } from "react-icons/bi";
import { FaDharmachakra } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { FaSuitcaseRolling } from "react-icons/fa6";
import europeCar from '../../Assets/images/europeCar.png'
import instantConfirmation from '../../Assets/images/instantConfirmation.png'
import { Link } from 'react-router-dom'
import { TiTick } from "react-icons/ti";
import CarListingCard from '../../Components/carListingCard'


const CarListing = () => {

    const count = 10

    const [filtersModal, setFiltersModal] = useState(false);

    const showDrawer = () => {
        setFiltersModal(true);
    };
    const onClose = () => {
        setFiltersModal(false);
    };


    return (
        <div className='flex flex-col gap-6 w-full'>
            <ContentWithBgLayout
                mainHeading={'Find the best car rental deals'}
                bgImg={'car-listing-bg'}
            >
                <Row align={'middle'} justify={'space-between'} className=' max-w-[95%] md:max-w-[85%] w-full mx-auto card-shadow rounded-sm h-auto flex items-end'>
                    <SearchCarSection />
                </Row>
            </ContentWithBgLayout>

            <Row className=' max-w-[95%] lg:max-w-[85%] w-full mx-auto rounded-sm h-auto flex items-end gap-2'>
                <h3 className='main-heading font-semibold text-lg'>Browse By Type</h3>
                <Row className='w-full'>
                    <CarTypes />
                </Row>

                <Row className='w-full mt-4' justify={'space-between'}>
                    <Col lg={8} md={8} className='bg-[#F6F7F9] flex-col items-start p-4 sm:flex hidden h-fit'>
                        <h3 className='main-heading font-semibold text-base text-[#13253F]'>Filter By</h3>
                        <Filters />
                    </Col>

                    {/* for mobile screens filters */}
                    <Col span={24} className='flex gap-2 items-center sm:hidden cursor-pointer mb-3'>
                        <div onClick={() => setFiltersModal(true)}>
                            <FaFilter size={20} color='#13253F' />
                        </div>
                        <span className='main-heading font-semibold text-base text-[#13253F]'>Browse By Filters</span>
                    </Col>

                    <Col lg={15} md={15} className='flex flex-col gap-3'>
                        <CarListingCard viewDetailsBtn={true} />
                    </Col>
                </Row>

                {
                    filtersModal &&
                    <Drawer title="Filter By" onClose={onClose} open={filtersModal} width={330}>
                        <Row className='w-full'>
                            <Col span={24} className=' flex flex-col items-start p-4'>
                                <Filters />
                            </Col>
                            <Col span={24} className='p-4'>
                                <BasicButton text='Search' />
                            </Col>
                        </Row>
                    </Drawer>
                }



            </Row>
        </div>
    )
}

export default CarListing