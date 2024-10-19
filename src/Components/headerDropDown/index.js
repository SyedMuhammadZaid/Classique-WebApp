import { Avatar, Dropdown, Tooltip } from 'antd'
import React, { useEffect, useState } from 'react'
import { CaretDownOutlined, UserOutlined } from "@ant-design/icons";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './index.css'

const HeaderDropDown = ({ showDrawer, setShowDrawer, drawer = true }) => {

    const navigate = useNavigate();
    const location = useLocation();

    const [itemIsActive, setItemIsActive] = useState('');

    const navItemNavigator = (key, item) => {
        let selectedItem = item?.replaceAll(' ', '');
        if (item) {
            navigate(`/${selectedItem}`);
        }

        setItemIsActive(item);
        if (drawer) setShowDrawer(false);
    }


    const items = [
        {
            key: 1,
            title: 'Profile',
            label: (
                <Link className="flex items-center gap-4">
                    <span className={`${itemIsActive == 'Profile' ? 'text-white' : ''}`}>Profile</span>
                </Link>
            ),
            onClick: () => navItemNavigator(1, 'Profile'),
        },
        {
            label: (
                <div className="border-b border-dashed w-full"></div>
            ),
        },
        {
            key: 2,
            title: 'My Order',
            label: (
                <Link className="flex items-center gap-4">
                    <span className={`${itemIsActive == 'My Order' ? 'text-white' : ''}`}>My order</span>
                </Link>
            ),
            onClick: () => navItemNavigator(2, 'My Order'),
        },
        {
            label: (
                <div className="border-b border-dashed w-full"></div>
            ),
        },
        {
            key: 3,
            title: 'Change Password',
            label: (
                <Link className="flex items-center gap-4">
                    <span className={`${itemIsActive == 'Change Password' ? 'text-white' : ''}`}>Change Password</span>
                </Link>
            ),
            onClick: () => navItemNavigator(3, 'Change Password'),
        },
        {
            label: (
                <div className="border-b border-dashed w-full"></div>
            ),
        },
        {
            key: 4,
            title: 'Logout',
            label: (
                <Link className="flex items-center gap-4">
                    <span className={`${itemIsActive == 'Logout' ? 'text-white' : ''}`}>Logout</span>
                </Link>
            ),
            onClick: () => navItemNavigator(4, 'Logout'),
        },
    ];


    useEffect(() => {
        if (location.pathname !== '/') {
            let selectedItem = items.find((item) => '/' + item?.title?.replaceAll(' ', '') == location.pathname);
            if (selectedItem) {
                setItemIsActive(selectedItem?.title)
            } else {
                setItemIsActive('')
            }
        }
    }, [location.pathname])

    return (
        <Dropdown
            menu={{ items, activeKey: itemIsActive }}
            className="group w-44 h-10 flex items-center justify-between px-3 py-3 cursor-pointer primary-btn primary-btn-color"
        >
            <div className="flex gap-1">
                <div className="w-10 h-10 flex items-center justify-center">
                    <Avatar icon={<UserOutlined />} className='flex items-center justify-center' shape="circle" />
                </div>
                <span className="text-ellipsis truncate">
                    <p className='font-medium text-sm tracking-wider'>John Doe</p>
                </span>
                <CaretDownOutlined className="" />
            </div>
        </Dropdown>
    )
}

export default HeaderDropDown