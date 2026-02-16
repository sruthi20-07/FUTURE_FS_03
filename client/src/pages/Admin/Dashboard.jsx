import { useEffect, useState } from "react";
import API from "../../services/api";

function Dashboard() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    API.get("/orders").then((res) => setOrders(res.data));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Admin Dashboard</h2>

      {orders.map((order) => (
        <div key={order.id} style={{ border: "1px solid gray", margin: "10px", padding: "10px" }}>
          <p><b>Name:</b> {order.customer_name}</p>
          <p><b>Item:</b> {order.item_name}</p>
          <p><b>Status:</b> {order.status}</p>
        </div>
      ))}
    </div>
  );
}

export default Dashboard;
