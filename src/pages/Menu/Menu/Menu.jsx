
import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuImg from '../../../../src/assets/menu/banner3.jpg'
import desertsImg from '../../../assets/menu/dessert-bg.jpeg';
import pizzaImg from '../../../assets/menu/pizza-bg.jpg';
import saladImg from '../../../assets/menu/salad-bg.jpg';
import soupImg from '../../../assets/menu/soup-bg.jpg';
import MenuCard from '../../../components/MenuCard/MenuCard';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';
import useFood from '../../../hooks/useFood';

const Menu = () => {    
    const [offereds, desserts, pizzas, salads, soups] = useFood();

    return (
        <div>
            <Helmet>
                <title> Bestro Boss Restaurant | Menu </title>
            </Helmet>

            {/* ///////////////menu cover/////////////// */}

            <Cover
                img={menuImg}
                heading={'Our Menu'}
                subHeading={'Would you like to try a dish?'}
            ></Cover>

            {/* todays offers  */}
            <div className='mb-12'>
                <SectionTitle
                    subHeading={"Don't miss"}
                    heading={"today's offer"}
                ></SectionTitle>

                <MenuCategory
                    items={offereds}                   
                ></MenuCategory>
            </div>

            {/* /////////////////desserts ///////////////// */}
            <MenuCategory
                items={desserts}
                title={"dessert"}
                coverImg={desertsImg}
            ></MenuCategory>

            {/* /////////////////pizza ///////////////// */}
            <MenuCategory
                items={pizzas}
                title={"pizza"}
                coverImg={pizzaImg}
            ></MenuCategory>

            {/* /////////////////Salads ///////////////// */}
            <MenuCategory
                items={salads}
                title={"salad"}
                coverImg={saladImg}
            ></MenuCategory>
               

            {/* /////////////////Soups ///////////////// */}
            <MenuCategory
                items={soups}
                title={"soup"}
                coverImg={soupImg}
            ></MenuCategory>

        </div>
    );
};

export default Menu;