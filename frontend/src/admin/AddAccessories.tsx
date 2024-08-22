import React, { useState } from 'react';
import axios from 'axios';
import './AddAccessories.css';

interface AddAccessoriesModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const AddAccessoriesModal: React.FC<AddAccessoriesModalProps> = ({ isOpen, onClose }) => {
    const [accessoriesBrand, setAccessoriesBrand] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState<File | null>(null);
    const [showPopup, setShowPopup] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('accessoriesBrand', accessoriesBrand);
       
        formData.append('price', price);
        if (image) {
            formData.append('accessoriesImage', image);
        }

        try {
            const response = await axios.post('http://localhost:8080/accessoriess/add', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log(response)
            setShowPopup(true); // Show success popup
            setTimeout(() => {
                setShowPopup(false);
                onClose(); // Close the modal after hiding the popup
            }, 2000); // Hide popup after 3 seconds
        } catch (error) {
            console.error('Error adding accessories:', error);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="modal-close" onClick={onClose}>×</button>
                <h2>Add New Accessories</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="accessoriesBrand">Accessories Brand:</label>
                        <input
                            type="text"
                            id="accessoriesBrand"
                            value={accessoriesBrand}
                            onChange={(e) => setAccessoriesBrand(e.target.value)}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="price">Price:</label>
                        <input
                            type="text"
                            id="price"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="image">Accessories Image:</label>
                        <input
                            type="file"
                            id="image"
                            onChange={(e) => setImage(e.target.files ? e.target.files[0] : null)}
                            required
                        />
                    </div>
                    <button type="submit" className="submit-button">Add Accessories</button>
                </form>
            </div>
            {showPopup && (
                <div className="popup-overlay">
                    <div className="popup-content">
                        <p>Accessories added successfully!</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AddAccessoriesModal;
