import ProductList from "../components/Product/ProductList";
import { useState } from 'react';
import { useEffect } from 'react';

function Product() {
    let [products, setProducts] = useState([]);
    let [isDataFetching, setIsDataFetching] = useState(true);

    useEffect(() => {
        setIsDataFetching(true);
        fetch("http://localhost:3004/product")
            .then(response => response.json())
            .then(responseData => {
                setIsDataFetching(false);
                setProducts(responseData.data);
            })
            .catch(err => console.log(err));
    }, []);

    if (isDataFetching) {
        return <div>
            Data is loading
        </div>
    }
    return <div>
        With datas
        <ProductList products={products} />
    </div>
}

export default Product;
// How to set the data to component, which is coming from Backend / REST API