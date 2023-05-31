import React from 'react';
import SectionTitle from '../../components/SectionTitle';
import Cover from '../shared/cover/Cover';
import img from '../../assets/menu/banner3.jpg';
import useMenu from '../../hooks/useMenu';
import MenuCategory from '../menuCategory/MenuCategory';

const Menu = () => {
    const [menu] =useMenu()
    const offered = menu.filter(item=>item.category=='offered')
    const pizza = menu.filter(item=>item.category=='pizza')
    const salad = menu.filter(item=>item.category=='salad')
    const soup = menu.filter(item=>item.category=='soup')
    const dessert = menu.filter(item=>item.category=='dessert')
    return (
        <div>
            <Cover img={img} title="Our Menu"></Cover>
            <SectionTitle>Today's Offer</SectionTitle>
            <MenuCategory items={offered} title="offer"></MenuCategory>

            <SectionTitle>Pizza Offer</SectionTitle>
            <MenuCategory items={pizza} title="pizza"></MenuCategory>

            <SectionTitle>Salad</SectionTitle>
            <MenuCategory items={salad} title="salad"></MenuCategory>

            <SectionTitle>Soup</SectionTitle>
            <MenuCategory items={soup} title="soup"></MenuCategory>

            <SectionTitle>Dessert</SectionTitle>
            <MenuCategory items={dessert} title="dessert"></MenuCategory>
        </div>
    );
};

export default Menu;