import './App.css';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Shipment from './components/Shipment/Shipment';
import { createContext, useState } from 'react';

export const CategoryContext = createContext();

function App() {
  // const [category, setCategory] = useState(0);
  const [category, setCategory] = useState('laptop');
  return (
    // <CategoryContext.Provider value="computer">
    // <CategoryContext.Provider value={count}>
    <CategoryContext.Provider value={[category, setCategory]}>
      <p>Count Value: {category}</p>
      {/* <Header count={count} setCount={setCount}></Header> */}
      {/* <Header setCount={setCount}></Header> */}
      <Header></Header>
      <Home></Home>
      <Shipment/>
    </CategoryContext.Provider>
  );
}

export default App;
