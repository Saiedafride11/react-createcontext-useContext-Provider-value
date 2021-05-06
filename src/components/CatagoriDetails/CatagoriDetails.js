import React, { useContext } from 'react';
// import { CategoryContext } from '../../App';

const CatagoriDetails = (props) => {
    const {name} = props.product;
    // const category = useContext(CategoryContext);
    return (
        <div>
            <p>Selected Catagory <strong>{name}</strong></p>
        </div>
    );
};

export default CatagoriDetails;