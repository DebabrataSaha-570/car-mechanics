import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = (props) => {
    const { name, price, img, id } = props.service;
    return (
        <div className="service">
            <img src={img} alt="" />
            <h3 className="text-primary">{name}</h3>
            <h5>Price: {price}</h5>
            <p className="px-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea explicabo ipsam provident nostrum unde, aspernatur facere porro! Iste, nisi velit.</p>
            <Link to={`/Booking/${id}`}>
                <button className="btn btn-warning">Book {name.toLowerCase()}</button>
            </Link>
        </div>
    );
};

export default Service;