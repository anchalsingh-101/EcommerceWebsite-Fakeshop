import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Home from './Pages/Home';
import ProductsDetails from './Pages/ProductsDetails'
import Cart from './Pages/Cart';


    export default function UseEffectAPI(){
    const UseEffectAPI=(()=>{
        fetch('https://fakestoreapi.com/products')
        .then((response)=>console.log(response));
    },[]);

  return (
    <>
   
    <Router>

        <Routes>
        <Route exact path='/'element={<Home/>}></Route>
        <Route exact path='/productsDetails'element={<ProductsDetails/>}></Route>
        <Route exact path='/cart'element={<Cart/>}></Route>
        </Routes>
    </Router>
    
   
    
    </>
  );
  }