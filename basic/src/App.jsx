
import './App.css';

import Product from './Components/Product';
import { Routes, Route } from 'react-router-dom';
import ProductDetails from './Components/ProductDetails';
// import Counter from './Components/Counter';
// import Button from './Components/Buttan';
// import ProductDetails from './Components/ProductDetails';

function App() {
  return (
    <div className="App">
          {/* <Counter /> */}
           {/* <Button/> */}
          {/* <Product/> */}
          <Routes>
            <Route path="/" element={<Product/>}/>
            <Route path="/ProductDetails/:id" element={<ProductDetails/>}/>

          </Routes>
    </div>
  );
}

export default App;
