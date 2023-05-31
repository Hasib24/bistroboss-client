import React from 'react';
import MenuItem from '../shared/menuItem/MenuItem';
import { Link } from 'react-router-dom';

const MenuCategory = ({items}) => {
    return (
        <div className='container mx-auto'>
            <div className='grid md:grid-cols-2 gap-4'>
                {items.map(item=><MenuItem key={item._id} item={item}></MenuItem>)}
            </div>
            <div className='text-center'>
                <Link to='/order'>
                    <button className="btn btn-outline border-0 border-b-4 mt-4">View Full Menu</button>
                </Link>
            </div>
        </div>
    );
};

export default MenuCategory;