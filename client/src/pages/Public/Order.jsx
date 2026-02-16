import { useState } from "react";
import API from "../../services/api";

function Order() {
  const [form, setForm] = useState({
    customer_name: "",
    phone: "",
    address: "",
    item_id: 1,
    quantity: 1,
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    API.post("/orders", form)
      .then(() => {
        alert("Order placed successfully!");
        setForm({
          customer_name: "",
          phone: "",
          address: "",
          item_id: 1,
          quantity: 1,
        });
      })
      .catch((err) => {
        console.error(err);
        alert("Something went wrong!");
      });
  };

  return (
    <div className="container">
      <h2 style={{ marginBottom: "20px" }}>Place Your Order</h2>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="Your Name"
          value={form.customer_name}
          onChange={(e) =>
            setForm({ ...form, customer_name: e.target.value })
          }
        />
        <br /><br />

        <input
          placeholder="Phone Number"
          value={form.phone}
          onChange={(e) =>
            setForm({ ...form, phone: e.target.value })
          }
        />
        <br /><br />

        <input
          placeholder="Delivery Address"
          value={form.address}
          onChange={(e) =>
            setForm({ ...form, address: e.target.value })
          }
        />
        <br /><br />

        <button className="btn" type="submit">
          Submit Order
        </button>
      </form>
    </div>
  );
}

export default Order;
