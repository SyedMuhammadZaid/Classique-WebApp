import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AppLayout from '../Layout'
import ContactUs from '../Pages/contactUs'
import TourVendor from '../Pages/tourVendor'
import CarRentalFranchise from '../Pages/carRental'

const AppRouting = () => {
    return (
        <AppLayout>
            <Routes>
                <Route path='/ContactUs' element={<ContactUs />} />
                <Route path='/BecomeTourVendor' element={<TourVendor />} />
                <Route path='/CarRentalFranchise' element={<CarRentalFranchise />  } />
            </Routes>
        </AppLayout>
    )
}

export default AppRouting