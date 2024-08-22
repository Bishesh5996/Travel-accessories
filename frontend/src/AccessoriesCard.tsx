import React from 'react';
import './AccessoriesCard.css'; // Ensure you create and style this CSS file accordingly

interface AccessoriesCardProps {
    accessories: {
        id: number;
        accessoriesBrand: string;
        seat: number;
        price: string;
        accessoriesImage: string;
        isBooked: boolean;
        rentalEndDateTime: string;
    };
    onBook: (accessoriesId: number) => void; // Ensure this is typed correctly
}

const AccessoriesCard: React.FC<AccessoriesCardProps> = ({ accessories, onBook }) => {
    return (
        <div className="accessories-Card">
            <img src={accessories.accessoriesImage} alt={`${accessories.accessoriesBrand} image`} className="accessories-image" />
            <h2>{accessories.accessoriesBrand}</h2>
            
            <p>Price: {accessories.price}</p>
            <p>Status: {accessories.isBooked ? 'Booked' : 'Available'}</p>
            <p>Rental End: {accessories.rentalEndDateTime}</p>
            <button onClick={() => onBook(accessories.id)} disabled={accessories.isBooked}>
                {accessories.isBooked ? 'Booked' : 'Book Now'}
            </button>
        </div>
    );
};

export default AccessoriesCard;
