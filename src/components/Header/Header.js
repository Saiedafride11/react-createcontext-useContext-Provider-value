import React, { useContext } from 'react';
import { CategoryContext } from '../../App';

const Header = (props) => {
    const [category, setCategory] = useContext(CategoryContext)
//    const {count, setCount} = props;
    //   const {setCount} = props;
    return (
        <div>
            <h1>Header {category}</h1>
            {/* <button onClick={() => setCount(count + 1)}>Add Click</button> */}
            {/* <button onClick={() => setCategory(category + 1)}>Add Click</button> */}

            <button onClick={() => setCategory('Laptop')}>Laptop</button>
            <button onClick={() => setCategory('Mobile')}>Mobile</button>
            <button onClick={() => setCategory('Camera')}>Camera</button>
        </div>
    );
};

export default Header;