import { useEffect, useState } from "react";
import API from "../../services/api";

function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    API.get("/orders")
      .then((res) => setOrders(res.data))
      .catch(console.error);
  }, []);

  return (
    <div className="container">
      <h2>All Orders</h2>

      {orders.map((order) => (
        <div key={order.id} className="card">
          <h3>Order #{order.id}</h3>
          <p><b>Name:</b> {order.customer_name}</p>
          <p><b>Item:</b> {order.item_name}</p>
          <p><b>Quantity:</b> {order.quantity}</p>
          <p><b>Status:</b> {order.status}</p>
        </div>
      ))}
    </div>
  );
}

export default Orders;
