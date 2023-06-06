
import useMenu from './useMenu';

const useFood = () => {
    const [menu] = useMenu();
    const offereds = menu.filter(item => item.category === 'offered');
    const desserts = menu.filter(item => item.category === 'dessert');
    const pizzas = menu.filter(item => item.category === 'pizza');
    const salads = menu.filter(item => item.category === 'salad');
    const soups = menu.filter(item => item.category === 'soup');
    const drink = menu.filter(item => item.category === 'drinks');
    const deshi = menu.filter(item => item.category === 'deshi');

    return [offereds, desserts, pizzas, salads, soups, drink, deshi];
};

export default useFood;