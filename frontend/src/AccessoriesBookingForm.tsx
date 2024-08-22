import React, { useState} from 'react';
import './AccessoriesBookingForm.css';
import accessoriesbooking from "./assets/accessoriesform.png";
import {Link} from "react-router-dom";

const AccessoriesBookingForm: React.FC = () => {
    const [showPopup, setShowPopup] = useState(false);

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        // Add your form submission logic here
        setShowPopup(true);
    };

    const handleClosePopup = () => {
        setShowPopup(false);
    };

    return (
        <div className="accessoriesbooking-body" style={{ background: `url(${accessoriesbooking})no-repeat center center/cover` }}>
            <div className="accessoriesbooking-main">
                <h2>Book Your Accessories Today!</h2>
                <form id="accessoriesBookingForm" onSubmit={handleSubmit}>
                    <label htmlFor="pickup">Pickup</label>
                    <input type="datetime-local" id="pickup" name="pickup" />

                    <label htmlFor="dropoff">Drop off</label>
                    <input type="datetime-local" id="dropoff" name="dropoff" required />

                    <label htmlFor="name">Your name</label>
                    <input type="text" id="name" name="name" required />

                    <label htmlFor="phone">Phone number</label>
                    <input type="tel" id="phone" name="phone" required />

                    <label htmlFor="email">Email address</label>
                    <input type="email" id="email" name="email" required />

                    <div className="accessoriesbooking-policy">
                        <Link to='/contract' target="-blank"><h4>Before Booking Read Our Terms And Conditions</h4></Link>
                    </div>

                    <div className="accessoriesbooking-checkbox-container">
                        <input type="checkbox" id="terms" name="terms" />
                        <label htmlFor="terms">I have read all terms & conditions</label>
                    </div>

                    <button type="submit" id="accessoriesbooking-confirmBookingButton">CONFIRM Accessories BOOKING</button>
                </form>
            </div>

            {showPopup && (
                <div id="accessoriesbooking-popup" className="accessoriesbooking-popup">
                    <div className="accessoriesbooking-popup-content">
                        <span className="accessoriesbooking-close-btn" onClick={handleClosePopup}>&times;</span>
                        <p>Booking Successful!</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AccessoriesBookingForm;
