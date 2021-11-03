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
        <div id="services" >
            <h2 className="text-primary mt-5">Our Services</h2>
            <div className="service-container ">
                {
                    service.map(service => <Service key={service.id} service={service}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;