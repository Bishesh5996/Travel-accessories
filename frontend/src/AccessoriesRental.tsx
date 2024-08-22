import React from 'react';
import './AccessoriesRental.css';
import {Link} from "react-router-dom";
import sofa from "./assets/sofa.png";
import loaction from "./assets/location.png";
import user from "./assets/user.jpg";
const AccessoriesRental: React.FC = () => {
    return (
        <div className="accessories-body">
            <header className="accessories-header">
                <h1>Rent Accessories</h1>
                <div className="accessories-filters">
                    <div className="accessories-dropdown">
                        <label htmlFor="accessories-type">Accessories Type</label>
                        <select id="accessories-type">
                            <option value="all">All</option>
                            <option value="accessories">Accessories</option>
                        </select>
                    </div>
                    <div className="accessories-dropdown">
                        <label htmlFor="vehicle-brand">Brand</label>
                        <select id="vehicle-brand">
                            <option value="all">All</option>
                            <option value="SOFA">Sofa</option>
                            <option value="STUDYTABLE">StudyTable</option>
                            <option value="Beanbag">Beanbag</option>
                            <option value="Chair">Chair</option>
                            <option value="Swing">Swing</option>
                            <option value="BookSelf">BookSelf</option>
                            <option value="Bed">Bed</option>
                        </select>
                    </div>
                    <div className="accessories-dropdown">
                        <label htmlFor="price-filter">Price</label>
                        <select id="price-filter">
                            <option value="100-300">$100-$300</option>
                            <option value="301-500">$301-$500</option>
                            <option value="501-800">$501-$800</option>
                            <option value="801-1000">$801-$1000</option>
                        </select>
                    </div>
                </div>
            </header>
            <div className="accessories-vehicle-grid">
                {Array.from({ length: 14 }, (_, index) => (
                    <div className="accessories-card" key={index}>
                        <p>{getAccessoriesName(index)}</p>
                        <div className="accessories-image-container">
                            <img src={sofa} alt={`Accessories ${index + 1}`} />
                        </div>
                        <div className="accessories-info-container">
                            <div className="accessories-location">
                                <img src={loaction} alt="Location Icon" />
                                <span>Kathmandu</span>
                            </div>
                            <div className="accessories-seats">
                                <img src={user} alt="User Icon" />
                                <span>4 Seats</span>
                            </div>
                            <div className="accessories-price-section">
                                <div className="accessories-price">
                                    <span className="accessories-estimate">Estimated Price</span>
                                    <span className="accessories-amount">{getAccessoriesPrice(index)}/day</span>
                                </div>
                                <div className="accessories-book-button">
                                    <Link to='/accessoriesbooking'><button>Book</button></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

const getAccessoriesName = (index: number) => {
    const names = ['Sofa', 'Sofa', 'Study Table', 'Study Table ', 'BeanBag', 'BeanBag', 'Chair', 'Chair', 'Swing', 'Swing', 'BookSelf', 'Bookself', 'Bed', 'Bed'];
    return names[index];
};
const getAccessoriesPrice = (index: number) => {
    const prices = ['$950', '$950', '$900', '$900', '$650', '$650', '$780', '$780', '$350', '$350', '$250', '$250', '$200', '$200'];
    return prices[index];
};

export default AccessoriesRental;
