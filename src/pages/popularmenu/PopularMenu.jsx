import React, { useEffect, useState } from 'react';
import SectionTitle from '../../components/SectionTitle';
import MenuItem from '../shared/menuItem/MenuItem';
import useMenu from '../../hooks/useMenu';

const PopularMenu = () => {
    const [menu] =useMenu()
    const popularItems = menu.filter(item=>item.category=='popular')
    
    return (
        <section className='container mx-auto my-10'>
            <SectionTitle>Popular Menu</SectionTitle>
            <div className='grid md:grid-cols-2 gap-4'>
                {popularItems.map(item=><MenuItem key={item._id} item={item}></MenuItem>)}
            </div>
            <div className='text-center'>
                <button className="btn btn-outline border-0 border-b-4 mt-4">View Full Menu</button>
            </div>
        </section>
    );
};

export default PopularMenu;