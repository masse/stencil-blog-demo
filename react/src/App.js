import React, {useEffect, useRef, useState} from 'react';
import './App.css';
import {PRODUCTS} from "./mock-products";

const App = () => {

  const [events, setEvents] = useState([]);
  const productCardListRef = useRef(null);

  //Hook up event handling for the addToCart event dispatched by acme-product-card element
  useEffect(() => {
    const onAddToCard = event => setEvents(e => [...e, `Added product ${event.detail}`]);

    const targetRef = productCardListRef.current;
    targetRef.addEventListener('addToCart', onAddToCard);
    return () => targetRef.removeEventListener('addToCart', onAddToCard)
  }, []);

  return (
      <div className="App">
        <h1>Using &lt;acme-product-card&gt; web component in React (17).</h1>
        <div className="products" ref={productCardListRef}>
          {PRODUCTS.map(p => <acme-product-card key={p.pid}
                                      pid={p.pid}
                                      badge={p.badge}
                                      name={p.name}
                                      desc={p.desc}
                                      image-src={p.imageSrc}
                                      price={p.price}
                                      data-testid={`card-${p.pid}`}>
                          </acme-product-card>)}

        </div>
        <ul id="events">React parent component events:
          {events.map((eventMsg, index) => <li key={index}> &#x2192; {eventMsg} </li>)}
        </ul>
      </div>
  );
};

export default App;
