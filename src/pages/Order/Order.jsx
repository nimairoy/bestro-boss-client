import React, { useState } from 'react';
import Cover from '../Shared/Cover/Cover';
import orderImg from '../../assets/shop/banner2.jpg'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './Order.css'
import useFood from '../../hooks/useFood';
import OrderTabPanel from './OrderTabPanel/OrderTabPanel';
import { useParams } from 'react-router-dom';

const Order = () => {

    const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks'];    
    const { category } = useParams();
    const initialIndex = categories.indexOf(category);
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [offereds, desserts, pizzas, soups, salads, drink] = useFood();
    console.log(category)

    return (
        <div>
            <Cover
                img={orderImg}
                heading='Order Food'
                subHeading='Would you like to try a dish?'
            ></Cover>
            <div className="py-16">
                <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList>
                        <Tab>Salad</Tab>
                        <Tab>Pizza</Tab>
                        <Tab>Soup</Tab>
                        <Tab>Dessert</Tab>
                        <Tab>Drinks</Tab>
                    </TabList>
                    <TabPanel>
                        <OrderTabPanel
                            items={salads}
                        ></OrderTabPanel>
                    </TabPanel>
                    <TabPanel>
                        <OrderTabPanel
                            items={pizzas}
                        ></OrderTabPanel>
                    </TabPanel>
                    <TabPanel>
                        <OrderTabPanel
                            items={soups}
                        ></OrderTabPanel>
                    </TabPanel>
                    <TabPanel>
                        <OrderTabPanel
                            items={desserts}
                        ></OrderTabPanel>
                    </TabPanel>
                    <TabPanel>
                        <OrderTabPanel
                            items={drink}
                        ></OrderTabPanel>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default Order;