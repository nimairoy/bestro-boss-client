import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuCard from '../../../components/MenuCard/MenuCard';

const PopularMenu = () => {
    const [menu, setMenu] = useState([]);
    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const popularItems = data.filter(item => item.category === 'popular');
                setMenu(popularItems)
                console.log(menu)
            })
    }, [])

    return (
        <section className='mb-12'>
            <SectionTitle
                subHeading={'Popular Items'}
                heading={'From our menu'}
            ></SectionTitle>
            <div className="grid grid-cols-2 gap-x-10 gap-y-4">
                {
                    menu.map(item => <MenuCard
                        key={item._id}
                        item={item}
                    ></MenuCard>)
                }
            </div>
        </section>
    );
};

export default PopularMenu;