import React from 'react';

import mechanic1 from '../../../img/mechanic/mechanic-1.jpeg'
import mechanic2 from '../../../img/mechanic/mechanic-2.jpeg'
import mechanic3 from '../../../img/mechanic/mechanic-3.jpeg'
import mechanic4 from '../../../img/mechanic/mechanic-4.jpeg'
import Expert from '../Expert/Expert';

const ourExperts = [
    {
        img: mechanic1,
        name: 'Andrew Smith',
        expertize: '-Engine Expert-'
    },
    {
        img: mechanic2,
        name: 'John Anderson',
        expertize: '-Polish Expert-'
    },
    {
        img: mechanic3,
        name: 'Zakaria Smith',
        expertize: '-Coloring Expert-'
    },
    {
        img: mechanic4,
        name: 'Sakib Enderson',
        expertize: '-Alrounder Expert-'
    },

]

const Experts = () => {
    return (
        <div className="">
            <h2 className="text-primary mt-3">Our Experts </h2>
            <div className="row">
                {
                    ourExperts.map(expert => <Expert key={expert.name} expert={expert}></Expert>)
                }
            </div>
        </div>
    );
};

export default Experts;