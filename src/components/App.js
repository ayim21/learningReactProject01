import Banner from './Banner';
import Cart from './Cart';
import ShoppingList from './ShoppingList';
//import QuestionForm from './QuestionForm';
import Footer from './Footer';

import {useState} from 'react';


function App() {
  const [cart, updateCart] = useState(0);

  return (
    <div>
      <Banner />
      <div className='lmj-layout-inner'>
        <Cart cart={cart} updateCart={updateCart} />
        <ShoppingList cart={cart} updateCart={updateCart}/>
      </div>
      {/*<QuestionForm />*/}
      <Footer />
    </div>
  );
}

export default App;
