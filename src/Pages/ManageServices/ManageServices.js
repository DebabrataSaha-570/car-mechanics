import React, { useEffect, useState } from 'react';

const ManageServices = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://guarded-springs-98889.herokuapp.com/services')
            // fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => {
                setServices(data)
            })
    }, [])
    const handleDelete = (id) => {
        console.log(id)
        const url = `https://guarded-springs-98889.herokuapp.com/services/${id}`
        // const url = `http://localhost:5000/services/${id}`
        fetch(url, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount > 0) {
                    alert('data deleted successfully')
                    const newServices = services.filter(service => service._id !== id)
                    setServices(newServices)
                }
            })
    }
    return (
        <div>
            <h3>This is manage services component</h3>
            {
                services.map(service => <div key={service._id}>
                    <h3>{service.name}</h3>
                    <button onClick={() => handleDelete(service._id)}>Delete</button>
                </div>)
            }
        </div>
    );
};

export default ManageServices;