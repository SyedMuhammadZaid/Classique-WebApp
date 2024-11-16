import * as React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import AppLayout from '../Layout'
import Home from '../Pages/home'
import FullScreenLoader from '../Components/loader'

// lazy loading components.
const ContactUs = React.lazy(() => import('../Pages/contactUs'))
const TourVendor = React.lazy(() => import('../Pages/tourVendor'))
const CarRentalFranchise = React.lazy(() => import('../Pages/carRental'))
const CarListing = React.lazy(() => import('../Pages/carListing'))
const CarDetail = React.lazy(() => import('../Pages/carDetail'))
const TravelDestinationDetail = React.lazy(() => import('../Pages/travelDestinationDetail'))
const PopularDestinations = React.lazy(() => import('../Pages/popularDestinations'))
const Payment = React.lazy(() => import('../Pages/payment'))
const AboutUs = React.lazy(() => import('../Pages/aboutUs'))
const DestinationListing = React.lazy(() => import('../Pages/destinationListing'))
const PrivacyPolicies = React.lazy(() => import('../Pages/privacyPolicy'))
const TermsConditions = React.lazy(() => import('../Pages/TermsConditions'))
const Faqs = React.lazy(() => import('../Pages/Faqs'))
const Profile = React.lazy(() => import('../Pages/profile'))

const AppRouting = () => {
    return (
        <AppLayout>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route
                    path='/*'
                    element={
                        <React.Suspense fallback={<FullScreenLoader />}>
                            <Routes>
                                <Route path='/car-listing' element={<CarListing />} />
                                <Route path='/car-detail/:id' element={<CarDetail />} />
                                <Route path='/destination-listing' element={<DestinationListing />} />
                                <Route path='/destination-detail/:id' element={<TravelDestinationDetail />} />
                                <Route path='/ContactUs' element={<ContactUs />} />
                                <Route path='/BecomeTourVendor' element={<TourVendor />} />
                                <Route path='/CarRentalFranchise' element={<CarRentalFranchise />} />
                                <Route path='/Profile' element={<Profile />} />
                                <Route path='/PopularDestinations' element={<PopularDestinations />} />
                                <Route path='/AboutUs' element={<AboutUs />} />
                                <Route path='/payment' element={<Payment />} />
                                <Route path='/privacy-policy' element={<PrivacyPolicies />} />
                                <Route path='/terms-conditions' element={<TermsConditions />} />
                                <Route path='/faqs' element={<Faqs />} />
                                <Route path='*' element={<Navigate to={'/'} />} />
                            </Routes>
                        </React.Suspense>
                    }
                />
            </Routes>
        </AppLayout>
    )
}

export default AppRouting