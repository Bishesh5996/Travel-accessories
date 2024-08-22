import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AccessoriesList.css'; // Create and style this CSS file accordingly
import AddAccessoriesModal from './AddAccessories'; // Adjust the path according to your file structure
import EditAccessoriesModal from './EditAccessories'; // Adjust the path according to your file structure

interface Accessories {
    id: number;
    accessoriesBrand: string;
    seat: number;
    price: string;
    accessoriesImage: string; // Base64 encoded image string
}

const AccessoriesList: React.FC = () => {
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [selectedAccessoriesIndex, setSelectedAccessoriesIndex] = useState<number | null>(null);
    const [accessories, setAccessoriess] = useState<Accessories[]>([]);

    useEffect(() => {
        const fetchAccessoriess = async () => {
            try {
                const response = await axios.get('http://localhost:8080/accessories/addlist');
                setAccessoriess(response.data);
            } catch (error) {
                console.error('Error fetching accessories:', error);
            }
        };

        fetchAccessoriess();
    }, []);

    const openAddModal = () => setIsAddModalOpen(true);
    const closeAddModal = () => setIsAddModalOpen(false);
    const openEditModal = (index: number) => {
        setSelectedAccessoriesIndex(index);
        setIsEditModalOpen(true);
    };
    const closeEditModal = () => setIsEditModalOpen(false);

  

    const handleDelete = async (index: number) => {
        const accessoriesToDelete = accessories[index];
        try {
            await axios.delete(`http://localhost:8080/accessories/addlist/${accessoriesToDelete.id}`);
            const updatedAccessoriess = accessories.filter((_, i) => i !== index);
            setAccessoriess(updatedAccessoriess);
        } catch (error) {
            console.error('Error deleting accessories:', error);
        }
    };

    return (
        <div className="accessories-list-container">
            <button className="add-accessories-button" onClick={openAddModal}>Add Accessories</button>
            <table className="accessories-list-table">
                <thead>
                <tr>
                    <th>Accessories ID</th>
                    <th>Accessories Image</th>
                    <th>Accessories Brand</th>
                    <th>Seat</th>
                    <th>Price</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {accessories.map((accessories, index) => (
                    <tr key={accessories.id}>
                        <td>{accessories.id}</td>
                        <td>
                            <img src={`data:image/jpeg;base64,${accessories.accessoriesImage}`} alt={`Accessories ${index}`} className="accessories-image" />
                        </td>
                        <td>{accessories.accessoriesBrand}</td>
                        <td>{accessories.seat}</td>
                        <td>{accessories.price}</td>
                        <td>
                            <button className="action-button edit-button" onClick={() => openEditModal(index)}>Edit</button>
                            <button className="action-button delete-button" onClick={() => handleDelete(index)}>Delete</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
            <AddAccessoriesModal isOpen={isAddModalOpen} onClose={closeAddModal} />
            {selectedAccessoriesIndex !== null && (
                <EditAccessoriesModal
                    isOpen={isEditModalOpen}
                    onClose={closeEditModal}
                    accessories={accessories[selectedAccessoriesIndex]} onSave={function (updatedAccessories: { id: number; accessoriesBrand: string; price: string; accessoriesImage: string; }): void {
                        throw new Error('Function not implemented.');
                    } }                    
                />
            )}
        </div>
    );
};

export default AccessoriesList;