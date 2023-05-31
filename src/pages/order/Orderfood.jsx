import React, { useState } from 'react';
import Cover from '../shared/cover/Cover';
import useMenu from '../../hooks/useMenu';
import coverImg from '../../assets/shop/banner2.jpg';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import FoodCard from '../../components/FoodCard';
import OrderTabs from './OrderTabs';

const Orderfood = () => {
    const [tabIndex, setTabIndex ] = useState(0)

    const [menu] =useMenu()
    const offered = menu.filter(item=>item.category=='offered')
    const pizza = menu.filter(item=>item.category=='pizza')
    const salad = menu.filter(item=>item.category=='salad')
    const soup = menu.filter(item=>item.category=='soup')
    const dessert = menu.filter(item=>item.category=='dessert')

    return (
        <div className='container mx-auto'>
            <Cover img={coverImg} title="Order Food" ></Cover>
            <div>
            <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                  <Tab>Salad</Tab>
                  <Tab>Pizza</Tab>
                  <Tab>Soup</Tab>
                  <Tab>Dessert</Tab>
                </TabList>

                <TabPanel> <OrderTabs items={salad}></OrderTabs> </TabPanel>
                <TabPanel> <OrderTabs items={pizza}></OrderTabs> </TabPanel>
                <TabPanel> <OrderTabs items={soup}></OrderTabs> </TabPanel>
                <TabPanel> <OrderTabs items={dessert}></OrderTabs> </TabPanel>
                
            </Tabs>
            </div>
        </div>
    );
};

export default Orderfood;