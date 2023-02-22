import etsy from'./assets/data/etsy.json';
import PropTypes from 'prop-types';

import './App.css'

function App() {
  const state = {
    etsy,
    classItemQuentity: ['item-quantity level-low', 'item-quantity level-medium', 'item-quantity level-high']
  }

  return (
    <div className="App">
      <Listing state={state}/>
    </div>
  )
}

export default App

function Listing({state}){
  return (
    <div>
      <div className="item-list">
        <div className="item">
          <div className="item-image">
            <a href={etsy[0].url}>
              <img src={etsy[0].MainImage.url_570xN}/>
            </a>
          </div>
          <div className="item-details">
            <p className="item-title">{etsy[23].title.length > 50 ? 
              etsy[23].title.slice(0, 49) + "..." :
              etsy[23].title}</p>
            <p className="item-price">{etsy[23].currency_code == "USD" ? 
              "$" + etsy[23].price :
              etsy[23].currency_code == "EUR" ?
              "€" + etsy[23].price :
              etsy[23].price + ' £'}</p>
            <p className='item-quantity level-medium'>{etsy[23].quantity} left</p>
          </div>
        </div>
      </div>
    </div>
  )
}

