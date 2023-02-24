import etsy from'./assets/data/etsy.json';
import Listing from './Listing';

import './App.css'

function App() {
  const state = {
    etsy
  }
  const filteredEtsy = state.etsy.filter(item => item.state == 'active');
  console.log(filteredEtsy)
  return (
    <div className="App">
      <div className="wrapper"> 
        {filteredEtsy.map((item, index)=>{
        return (
        <Listing key={index}
                  a={item.url}
                  mainImage={item.MainImage.url_570xN}
                  title={item.title}
                  currencyCode={item.currency_code}
                  price={item.price}
                  quantity={item.quantity}
                  />
        );})}
      </div> 
    </div>
  )
}

export default App


