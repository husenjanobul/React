import React from 'react';
import './App.css';
import Hobbies from './components/Hobbies'
import Guarantee from './components/Guarantee'
import Counter from './components/Counter'

import Delivery from './images/f-delivery.png'
import Coin from './images/coin.png';
import Chat from './images/chat.png';

function App() {
  const ServiceData = {
    shipping: {
      img: `${Delivery}`,
      title: 'Free shipping',
      description: 'Fusce urna quam, euismod sit amet mollis quis, vestibulum quis velit. Vestibulum mal esuada aliquet libero viverra cursus.'
    },
    return: {
      img: `${Coin}`,
      title: '100% Money back',
      description: 'Urna quam, euismod sit amet mollis quis, vestibulum quis velit. Vestibulum mal esuada aliquet libero viverra cursus.'
    },
    support: {
      img: `${Chat}`,
      title: 'Online support 24/7',
      description: 'Fusce urna quam, euismod sit amet mollis quis, vestibulum quis velit. Vestibulum mal esuada aliquet libero viverra cursus.'
    }
  }
  return (
    <div className="App">
      <h1>Exercise 1: Extreme hobbies</h1>
      <Hobbies />
      <h1>Exercise 2: Perfect customer service!</h1>
      <div className="service">
        <Guarantee img={ServiceData.shipping.img} title={ServiceData.shipping.title}  description={ServiceData.shipping.description} />
        <Guarantee img={ServiceData.return.img} title={ServiceData.return.title} description={ServiceData.return.description} />
        <Guarantee img={ServiceData.support.img} title={ServiceData.support.title} description={ServiceData.support.description} />
      </div>
      <h1>Exercise 3: It's higher than 10!</h1>
      <div className="counter" >
        <Counter />
      </div>
    </div>
  );
}

export default App;
