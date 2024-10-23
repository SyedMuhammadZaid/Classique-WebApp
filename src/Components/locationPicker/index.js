import { Spin, Tooltip } from 'antd'
import React, { useState, useRef } from 'react'
import { LoadingOutlined } from '@ant-design/icons';

const LocationPicker = ({ placeholder }) => {

    const [searchValue, setSearchValue] = useState('');
    const [spin, setSpin] = useState(false);
    const [searchResults, setsearchResults] = useState(null);
    const inputRef = useRef(null);

    const debounce = (query, timer) => {
        clearTimeout(inputRef.current);
        inputRef.current = setTimeout(() => {
            console.log('debounce check', query)
        }, [timer])

    }

    const inputChangeValueHandler = (e) => {
        const query = e.target.value;
        setSearchValue(query);
        debounce(query, 500);
    }

    const pickedLocation = () => {
        // we'll send this picked location to the parent component
    }

    return (
        <>
            <input type='text' className='p-2 outline-none w-full truncate pr-10' placeholder={placeholder ? placeholder : 'Select your city'} value={searchValue} onChange={inputChangeValueHandler} />
            <Spin spinning={false} indicator={<LoadingOutlined spin />} size='' className='absolute bottom-2 right-2 w-5 text-[#13253F]' />
            {
                searchResults && searchResults?.length > 0 &&
                <div className='w-full max-h-[150px] mt-[0.2px] absolute z-10 bg-[#fff] overflow-y-scroll'>
                    <ul className='flex flex-col gap-1'>
                        <Tooltip title={''}>
                            <li className='cursor-pointer py-2 hover:bg-[#FFDA32] hover:text-white font-semibold text-base truncate px-1' onClick={() => pickedLocation()}>Karachi, pakistan, Karachi, pakistan Karachi, pakistan Karachi, pakistan</li>
                        </Tooltip>
                    </ul>
                </div>
            }
        </>
    )
}

export default LocationPicker