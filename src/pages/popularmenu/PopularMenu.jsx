import React, { useEffect, useState } from 'react';
import SectionTitle from '../../components/SectionTitle';
import MenuItem from '../shared/menuItem/MenuItem';

const PopularMenu = () => {
    const [menu, setMenu] = useState([])
    useEffect(()=>{
        fetch('menu.json')
        .then(res=> res.json())
        .then(data =>{
            const popularItems = data.filter(item=>item.category=='popular')
            setMenu(popularItems)
        })
    }, [])
    return (
        <section className='container mx-auto my-10'>
            <SectionTitle>Popular Menu</SectionTitle>
            <div className='grid md:grid-cols-2 gap-4'>
                {menu.map(item=><MenuItem key={item._id} item={item}></MenuItem>)}
            </div>
            <div className='text-center'>
                <button className="btn btn-outline border-0 border-b-4 mt-4">View Full Menu</button>
            </div>
        </section>
    );
};

export default PopularMenu;