import React, { createContext, props } from 'react';
import all_products from '../more/assets/all_product';

export const ShopContext = createContext(null);

const ShopContextProvider = () => {
    const contextValue = {all_products};

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;