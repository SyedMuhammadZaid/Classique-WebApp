import { Checkbox, Divider, Slider } from 'antd'
import React from 'react'

const Filters = () => {

    const count = 10

    const filterHandler = (e) => {
        const { checked } = e.target;
        console.log(checked)
    }

    const renderFilters = (item, count) => {
        return (
            <Checkbox className='text-[#596780]'>{item} {`(${count})`}</Checkbox>
        )
    }

    return (
        <>
            <Divider />
            <div className='flex flex-col w-full'>
                <h3 className='font-medium text-base text-[#13253F]'>Price range</h3>
                <Slider defaultValue={30} min={0} max={100} included={true} />
                <div className='flex w-full justify-between text-[#596780]'>
                    <span>$ 0</span>
                    <span>$ 100</span>
                </div>
            </div>
            <Divider />
            <div className='flex flex-col w-full gap-2'>
                <h3 className='font-medium text-base text-[#13253F]'>Location Type</h3>
                <div className='flex flex-col w-full items-start gap-2 justify-between'>
                    <Checkbox onChange={filterHandler} className='text-[#596780]'>Terminal {`(${count})`}</Checkbox>
                    <Checkbox className='text-[#596780]'>Airport {`(${count})`}</Checkbox>
                </div>
            </div>
            <Divider />
            <div className='flex flex-col w-full gap-2'>
                <h3 className='font-medium text-base text-[#13253F]'>Car Categories</h3>
                <div className='flex flex-col w-full items-start gap-2 justify-between'>
                    <Checkbox className='text-[#596780]'>Mini {`(${count})`}</Checkbox>
                    <Checkbox className='text-[#596780]'>Economy {`(${count})`}</Checkbox>
                    <Checkbox className='text-[#596780]'>Compact {`(${count})`}</Checkbox>
                    <Checkbox className='text-[#596780]'>Standard/Intermediate {`(${count})`}</Checkbox>
                    <Checkbox className='text-[#596780]'>Fullsize {`(${count})`}</Checkbox>
                    <Checkbox className='text-[#596780]'>Van/Minivan {`(${count})`}</Checkbox>
                    <Checkbox className='text-[#596780]'>Luxury/Premium {`(${count})`}</Checkbox>
                    <Checkbox className='text-[#596780]'>Special {`(${count})`}</Checkbox>
                </div>
            </div>
            <Divider />
            <div className='flex flex-col w-full gap-2'>
                <h3 className='font-medium text-base text-[#13253F]'>Supplier</h3>
                <div className='flex flex-col w-full items-start gap-2 justify-between'>
                    <Checkbox className='text-[#596780]'>Alamo {`(${count})`}</Checkbox>
                    <Checkbox className='text-[#596780]'>ASAP Car Rental {`(${count})`}</Checkbox>
                    <Checkbox className='text-[#596780]'>Chic Car Rental {`(${count})`}</Checkbox>
                    <Checkbox className='text-[#596780]'>Drive Car Rental {`(${count})`}</Checkbox>
                    <Checkbox className='text-[#596780]'>Enterprise {`(${count})`}</Checkbox>
                    <Checkbox className='text-[#596780]'>Europcar {`(${count})`}</Checkbox>
                    <Checkbox className='text-[#596780]'>Thai Rent a Car {`(${count})`}</Checkbox>
                    <Checkbox className='text-[#596780]'>Yesaway {`(${count})`}</Checkbox>
                </div>
            </div>
            <Divider />
            <div className='flex flex-col w-full gap-2'>
                <h3 className='font-medium text-base text-[#13253F]'>Security Deposit at Pick-up</h3>
                <div className='flex flex-col w-full items-start gap-2 justify-between'>
                    <Checkbox className='text-[#596780]'>0 to 500 USD {`(${count})`}</Checkbox>
                    <Checkbox className='text-[#596780]'>500 to 1000 USD {`(${count})`}</Checkbox>
                </div>
            </div>
            <Divider />
            <div className='flex flex-col w-full gap-2'>
                <h3 className='font-medium text-base text-[#13253F]'>Seats</h3>
                <div className='flex flex-col w-full items-start gap-2 justify-between'>
                    <Checkbox className='text-[#596780]'>4-5 Seats {`(${count})`}</Checkbox>
                    <Checkbox className='text-[#596780]'>6-7 Seats {`(${count})`}</Checkbox>
                </div>
            </div>
            <Divider />
            <div className='flex flex-col w-full gap-2'>
                <h3 className='font-medium text-base text-[#13253F]'>Mileage Options</h3>
                <div className='flex flex-col w-full items-start gap-2 justify-between'>
                    <Checkbox className='text-[#596780]'>Unlimited Mileage {`(${count})`}</Checkbox>
                </div>
            </div>
            <Divider />
            <div className='flex flex-col w-full gap-2'>
                <h3 className='font-medium text-base text-[#13253F]'>Fuel Policy</h3>
                <div className='flex flex-col w-full items-start gap-2 justify-between'>
                    <Checkbox className='text-[#596780]'>Full to Full {`(${count})`}</Checkbox>
                    <Checkbox className='text-[#596780]'>Same to Same {`(${count})`}</Checkbox>
                </div>
            </div>
            <Divider />
            <div className='flex flex-col w-full gap-2'>
                <h3 className='font-medium text-base text-[#13253F]'>Car Specifications</h3>
                <div className='flex flex-col w-full items-start gap-2 justify-between'>
                    <Checkbox className='text-[#596780]'>Air-conditioning {`(${count})`}</Checkbox>
                    <Checkbox className='text-[#596780]'>Automatic Transmission {`(${count})`}</Checkbox>
                </div>
            </div>
            <Divider />
            <div className='flex flex-col w-full gap-2'>
                <h3 className='font-medium text-base text-[#13253F]'>Fuel Type</h3>
                <div className='flex flex-col w-full items-start gap-2 justify-between'>
                    <Checkbox className='text-[#596780]'>Petrol {`(${count})`}</Checkbox>
                    <Checkbox className='text-[#596780]'>Hybrid {`(${count})`}</Checkbox>
                    <Checkbox className='text-[#596780]'>Electric {`(${count})`}</Checkbox>
                </div>
            </div>
            <Divider />
            <div className='flex flex-col w-full gap-2'>
                <h3 className='font-medium text-base text-[#13253F]'>Payment Type</h3>
                <div className='flex flex-col w-full items-start gap-2 justify-between'>
                    <Checkbox className='text-[#596780]'>Full Pre-payment {`(${count})`}</Checkbox>
                </div>
            </div>
        </>
    )
}

export default Filters