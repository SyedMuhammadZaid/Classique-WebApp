import React from 'react'

const LocationPicker = (props) => {
    const { onChange } = props
    return (
        <div>
            <input type='text' className='h-10 rounded-md outline-none border border-gray-300 py-2 px-3 w-full' />
        </div>
    )
}

export default LocationPicker