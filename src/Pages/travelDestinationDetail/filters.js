import { Col, Input, Row, Select } from 'antd'
import React from 'react'
import { FaSearch } from 'react-icons/fa'
import { FiFilter } from 'react-icons/fi'

const TravelDestinationFilters = () => {
    return (
        <Row className='bg-[#F8FAFC] border border-[#16527D14] w-full p-3 gap-3' justify={'center'}>
            <Col lg={3} md={4} sm={6} xs={6} className='flex gap-1 items-center'>
                <FiFilter />
                <span className='text-[#1C2B38] font-semibold'>Filtering:</span>
            </Col>
            <Col lg={4} md={4} sm={16} xs={16}>
                <Select
                    placeholder='Recommended'
                    className='rounded-none bg-[#F4F4F5] h-10 custom-select w-full'
                    style={{ borderRadius: 0, background: '#F4F4F5' }}
                    options={[{ label: '1 guest', value: '1' }, { label: '2 guests', value: '2' }]}
                />
            </Col>
            <Col lg={4} md={4} sm={11} xs={11}>
                <Select
                    placeholder='Traveler type'
                    className='rounded-none bg-[#F4F4F5] h-10 custom-select w-full'
                    style={{ borderRadius: 0, background: '#F4F4F5' }}
                    options={[{ label: '1 guest', value: '1' }, { label: '2 guests', value: '2' }]}
                />
            </Col>
            <Col lg={4} md={4} sm={11} xs={11}>
                <Select
                    placeholder='Rating'
                    className='rounded-none bg-[#F4F4F5] h-10 custom-select w-full'
                    style={{ borderRadius: 0, background: '#F4F4F5' }}
                    options={[{ label: '1 guest', value: '1' }, { label: '2 guests', value: '2' }]}
                />
            </Col>
            <Col lg={7} md={4} sm={23} xs={23}>
                <Input
                    className='rounded-none bg-[#F4F4F5] h-10 custom-select w-full'
                    style={{ borderRadius: 0, background: '#F4F4F5' }}
                    prefix={<FaSearch color='#495560' />}
                    placeholder='Search Here'
                />
            </Col>
        </Row>
    )
}

export default TravelDestinationFilters