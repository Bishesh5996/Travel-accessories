import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './EditAccessories.css';

interface EditAccessoriesModalProps {
    isOpen: boolean;
    onClose: () => void;
    accessories: { id: number; accessoriesBrand: string;  price: string; accessoriesImage: string } | null;
    onSave: (updatedAccessories: { id: number; accessoriesBrand: string;  price: string; accessoriesImage: string }) => void;
}

const EditAccessoriesModal: React.FC<EditAccessoriesModalProps> = ({ isOpen, onClose, accessories, onSave }) => {
    const [accessoriesBrand, setAccessoriesBrand] = useState('');
    
    const [price, setPrice] = useState('');
    const [imageFile, setImageFile] = useState<File | null>(null);

    useEffect(() => {
        if (accessories) {
            setAccessoriesBrand(accessories.accessoriesBrand);

            setPrice(accessories.price);
        }
    }, [accessories]);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            const file = e.target.files[0];
            setImageFile(file);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (accessories) {
            try {
                const formData = new FormData();
                formData.append('accessoriesBrand', accessoriesBrand);

                formData.append('price', price);

                // Append the image file if it was selected
                if (imageFile) {
                    formData.append('accessoriesImage', imageFile);
                }

                // Make the PUT request to update the accessories
                const response = await axios.put(`http://localhost:8080/accessoriess/accessories/${accessories.id}`, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                });

                console.log('Response:', response);

                // Update the accessories object and pass it back via onSave
                const updatedAccessories = {
                    ...accessories,
                    accessoriesBrand,
                   
                    price,
                    accessoriesImage: imageFile ? URL.createObjectURL(imageFile) : accessories.accessoriesImage,
                };

                // @ts-ignore
                onSave(updatedAccessories);
                onClose();
            } catch (error) {
                // @ts-ignore
                console.error('Error updating accessories:', error.response?.data || error.message);
            }
        }
    };

    if (!isOpen || !accessories) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="modal-close" onClick={onClose}>×</button>
                <h2>Edit Accessories</h2>
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
                        <label htmlFor="seats">Seats:</label>
                        
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
                            onChange={handleFileChange}
                        />
                    </div>
                    <button type="submit" className="submit-button">Save Changes</button>
                </form>
            </div>
        </div>
    );
};

export default EditAccessoriesModal;

