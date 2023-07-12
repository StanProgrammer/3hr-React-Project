import React from 'react';
import './Container.css'
const Container = ({ orders, handleDelete }) => {
  const table1Orders = orders.filter((order) => order.table === 'Table 1');
  const table2Orders = orders.filter((order) => order.table === 'Table 2');
  const table3Orders = orders.filter((order) => order.table === 'Table 3');

  return (
    <div className="container">
      <div className="card">
        <h3>Table 1</h3>
        <ul>
          {table1Orders.map((order) => (
            <li key={order.id}>
              Order ID: {order.orderId} - Dish: {order.dish} - Price: {order.price}
              <button onClick={() => handleDelete(order.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
      <div className="card">
        <h3>Table 2</h3>
        <ul>
          {table2Orders.map((order) => (
            <li key={order.id}>
              Order ID: {order.orderId} - Dish: {order.dish} - Price: {order.price}
              <button onClick={() => handleDelete(order.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
      <div className="card">
        <h3>Table 3</h3>
        <ul>
          {table3Orders.map((order) => (
            <li key={order.id}>
              Order ID: {order.orderId} - Dish: {order.dish} - Price: {order.price}
              <button onClick={() => handleDelete(order.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Container;
