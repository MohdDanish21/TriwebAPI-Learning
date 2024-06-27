import FavouriteContext from '../components/store/contextFavourite';
import ProductList from "../components/Product/ProductList";

import { useContext } from 'react';

function FavouriteItems() {
    const favouriteContext = useContext(FavouriteContext);

    return <div>
        <h1>My Favourite Items</h1>
        <ProductList products={favouriteContext.favouriteItems} />
    </div>


}

export default FavouriteItems;