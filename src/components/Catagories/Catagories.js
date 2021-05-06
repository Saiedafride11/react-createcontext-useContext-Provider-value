import React, { useContext, useEffect, useState } from 'react';
import { CategoryContext } from '../../App';
import CatagoriDetails from '../CatagoriDetails/CatagoriDetails';

const allProducts = [{name:'Asus', category:'laptop'}, {name:'lenevo', category:'laptop'}, {name:'Dell', category:'laptop'},
                    {name:'Samsung', category:'mobile'}, {name:'Nokia', category:'mobile'}, {name:'Apple', category:'mobile'},
                    {name:'Canon', category:'camera'}, {name:'Nikkon', category:'camera'}, {name:'Sonny', category:'camera'},
]

const Catagories = (props) => {
    const {count} = props;
    const [category] = useContext(CategoryContext);
    const [products, setProducts] = useState([]);

    useEffect( () => {
        // console.log({category});
        const matchedProducts = allProducts.filter(pd => pd.category.toLowerCase() === category.toLowerCase());
        setProducts(matchedProducts)
    } , [category])
    return (
        <div>
            <h3 style={{color:'red'}}>Catagories: {category}</h3>
            {
                products.map(pd => <CatagoriDetails product={pd}></CatagoriDetails>)
            }
        </div>
    );
};

export default Catagories;