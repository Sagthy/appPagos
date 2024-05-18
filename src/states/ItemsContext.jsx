/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { useState, createContext, useContext, useEffect } from 'react';
import paymentsConstants from '../constants/payments.constants';

export const ItemsContext = createContext();

export const useItems = () => {
    return useContext(ItemsContext);
}

const ItemsProvider = ({ children }) => {
    const [items, setItems] = useState(localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : paymentsConstants);

    useEffect(() => {
        localStorage.setItem('items', JSON.stringify(items));
    }, [items]);

    const addItem = (item) => {
        let newItem = { ...item };

        if (item.meses.includes('mensual')) {
            newItem.mensual = true;
            newItem.meses = [];
        } else {
            newItem.mensual = false;
        }

        setItems([...items, newItem]);
    }

    const removeItem = (item) => {
        setItems(items.filter(i => i !== item));
    }

    return (
        <ItemsContext.Provider value={{ items, addItem, removeItem }}>
            {children}
        </ItemsContext.Provider>
    );
}

export default ItemsProvider;

