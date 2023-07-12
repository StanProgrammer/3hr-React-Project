import React, { useState, useEffect } from 'react';
import Form from './Form';
import Container from './Container';
import './App.css';


function App() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const storedOrders = localStorage.getItem('orders');
    if (storedOrders) {
      setOrders(JSON.parse(storedOrders));
    }
  }, []);

  const addOrder = (newOrder) => {
    const updatedOrders = [...orders, newOrder];
    setOrders(updatedOrders);
    localStorage.setItem('orders', JSON.stringify(updatedOrders));
  };

  const handleDelete = (orderId) => {
    const updatedOrders = orders.filter((order) => order.id !== orderId);
    setOrders(updatedOrders);
    localStorage.setItem('orders', JSON.stringify(updatedOrders));
  };

  return (
    <div className="App">
      <h1>Restaurant App</h1>
      <Form addOrder={addOrder} />
      <Container orders={orders} handleDelete={handleDelete} />
    </div>
  );
}

export default App;
