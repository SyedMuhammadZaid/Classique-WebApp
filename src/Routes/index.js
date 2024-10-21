import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AppLayout from '../Layout'
import ContactUs from '../Pages/contactUs'
import TourVendor from '../Pages/tourVendor'
import CarRentalFranchise from '../Pages/carRental'
import Profile from '../Pages/profile'

const AppRouting = () => {
    return (
        <AppLayout>
            <Routes>
                <Route path='/ContactUs' element={<ContactUs />} />
                <Route path='/BecomeTourVendor' element={<TourVendor />} />
                <Route path='/CarRentalFranchise' element={<CarRentalFranchise />} />
                <Route path='/Profile' element={<Profile />} />
            </Routes>
        </AppLayout>
    )
}

export default AppRouting