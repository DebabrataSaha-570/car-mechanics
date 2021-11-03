import React from 'react';
import { Link } from 'react-router-dom';
import error from '../../img/404/404.png'
const NotFound = () => {
    return (
        <div>
            <div>
                <img className="w-50 my-3" src={error} alt="" />
                <br />
                <Link to="/">
                    <button className="btn btn-primary">Go Back</button>
                </Link>
            </div>
        </div>
    );
};

export default NotFound;