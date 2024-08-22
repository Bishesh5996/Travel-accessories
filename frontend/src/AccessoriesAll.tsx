import React, { useState, useEffect} from 'react';
import axios from 'axios';
import AccessoriesCard from './AccessoriesCard';
import './AccessoriesAll.css';

interface Accessories {
    id: number;
    accessoriesBrand: string;
    seat: number;
    price: string;
    accessoriesImage: string;
    isBooked: boolean;
    rentalEndDateTime: string;
}

const AccessoriesAll: React.FC = () => {
    const [accessoriess, setAccessoriess] = useState<Accessories[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchAccessoriess = async () => {
            try {
                const response = await axios.get('http://localhost:8080/accessoriess/addlist');
                setAccessoriess(response.data);
                setError(null); // Clear any previous error
            } catch (error) {
                console.error('Error fetching accessoriess:', error);
                setError('Failed to fetch accessories data. Please try again later.');
            }
        };

        fetchAccessoriess();
    }, []);

    const handleBook = (accessoriesId: number) => {
        console.log(`Accessories ${accessoriesId} booked`);
    };

    return (
        <div className="accessories-all-container">
            <h1>Accessoriess Available in Kathmandu</h1>
            {error && <div className="error-message">{error}</div>}
            <div className="accessories-list">
                {accessoriess.length > 0 ? (
                    accessoriess.map((accessories) => (
                        <AccessoriesCard key={accessories.id} accessories={accessories} onBook={handleBook} />
                    ))
                ) : (
                    <p>No accessoriess available</p>
                )}
            </div>
        </div>
    );
};

export default AccessoriesAll;
