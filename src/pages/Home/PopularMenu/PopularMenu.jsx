import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuCard from '../../../components/MenuCard/MenuCard';
import useMenu from '../../../hooks/useMenu';

const PopularMenu = () => {
    // custom hooks 
    const [menu] = useMenu();
    const popularItems = menu.filter(item => item.category === 'popular');    

    return (
        <section className='mb-12'>
            <SectionTitle
                subHeading={'Popular Items'}
                heading={'From our menu'}
            ></SectionTitle>
            <div className="grid grid-cols-2 gap-x-10 gap-y-4">
                {
                    popularItems.map(item => <MenuCard
                        key={item._id}
                        item={item}
                    ></MenuCard>)
                }
            </div>
        </section>
    );
};

export default PopularMenu;