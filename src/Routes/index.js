import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AppLayout from '../Layout'
import ContactUs from '../Pages/contactUs'

const AppRouting = () => {
    return (
        <AppLayout>
            <Routes>
                <Route path='/ContactUs' element={<ContactUs />} />
            </Routes>
        </AppLayout>
    )
}

export default AppRouting