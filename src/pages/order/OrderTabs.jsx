import React from 'react';
import FoodCard from '../../components/FoodCard';

const OrderTabs = ({items}) => {
    return (
        <div className='grid md:grid-cols-3 gap-6'>
            {items.map(item =><FoodCard item={item} key={item._id}></FoodCard>)}
        </div>
    );
};

export default OrderTabs;