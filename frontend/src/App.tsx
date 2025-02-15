

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from './HomePage.tsx';
import AboutUs from './AboutUs.tsx';
import TermsAndConditions from './TermAndCondition.tsx';
import Footer from './Footer';
import PrivacyPolicy from './PrivacyPolicy';
import LoginSignup from './LoginSignup.tsx';
import LateReturnPolicy from "./LateReturnPolicy";
import CancellationPolicy from './CancellationPolicy.tsx';


import Sidebar from './admin/Sidebar.tsx';
import AccessoriesList from "./admin/AccessoriesList.tsx";
import UserList from "./admin/UserList.tsx";
import AccessoriesBookingList from "./admin/AccessoriesBookingList.tsx";
import AccessoriesAll from "./AccessoriesAll.tsx";
import Navbar from './Navbar.tsx';



const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<LoginSignup/>} />

                <Route path="*" element={<MainLayout />} />
                <Route path="/admin/*" element={<AdminLayout/>}/>

            </Routes>
        </BrowserRouter>

    );
};

const MainLayout: React.FC = () => (
    <>

        <Navbar/>
        <Routes>

            <Route path="/" element={<HomePage />} />
             <Route path="/about" element={<AboutUs />} />
            <Route path="/contract" element={<TermsAndConditions />} />

            <Route path="/pri" element={<PrivacyPolicy/>} />
            <Route path="/LateReturnPolicy" element={<LateReturnPolicy/>} />
            <Route path="/CancellationPolicy" element={<CancellationPolicy/>} />
            <Route path="/accessories" element={<AccessoriesAll/>} />

        </Routes>
        <Footer/>

    </>
);

const AdminLayout: React.FC = () => (
    <div className="admin-layout">
        <Sidebar />
        <div className="admin-content">
            <Routes>
            
                <Route path="/Accessorieslist" element={<AccessoriesList/>} />
                <Route path="/userlist" element={<UserList />} />
               
                <Route path="/Accessoriesbookinglist" element={<AccessoriesBookingList/>} />

            </Routes>

        </div>
</div>
);

export default App;
