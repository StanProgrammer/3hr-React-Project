import React, { useState } from 'react';
import './Form.css';

const Form = ({ addOrder }) => {
  const [orderId, setOrderId] = useState('');
  const [price, setPrice] = useState('');
  const [dish, setDish] = useState('');
  const [table, setTable] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (orderId && price && dish && table) {
      const newOrder = {
        id: Math.random().toString(36).substr(2, 9),
        orderId,
        price,
        dish,
        table,
      };
      addOrder(newOrder);
      setOrderId('');
      setPrice('');
      setDish('');
      setTable('');
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <h2>Orders</h2>
        <div>
          <label htmlFor="orderId">Order Id:</label>
          <input
            type="text"
            id="orderId"
            value={orderId}
            onChange={(e) => setOrderId(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="price">Choose Price:</label>
          <input
            type="number"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="dish">Choose Dish:</label>
          <input
            type="text"
            id="dish"
            value={dish}
            onChange={(e) => setDish(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="table">Choose Table:</label>
          <select
            id="table"
            value={table}
            onChange={(e) => setTable(e.target.value)}
          >
            <option value="">Select Table</option>
            <option value="Table 1">Table 1</option>
            <option value="Table 2">Table 2</option>
            <option value="Table 3">Table 3</option>
          </select>
        </div>
        <button type="submit">Add Order</button>
      </form>
    </div>
  );
};

export default Form;
