import React from 'react';
import { useState, useEffect } from 'react'
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [service, setServices] = useState([])
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className="service-container">
            {
                service.map(service => <Service key={service.id} service={service}></Service>)
            }
        </div>
    );
};

export default Services;