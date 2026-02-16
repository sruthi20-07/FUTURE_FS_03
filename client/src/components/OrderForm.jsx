import { useState } from "react";
import API from "../services/api";

function OrderForm({ menu }) {
  const [form, setForm] = useState({
    customer_name: "",
    phone: "",
    address: "",
    item_id: "",
    quantity: 1,
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.item_id) {
      alert("Please select a food item");
      return;
    }

    API.post("/orders", form)
      .then(() => {
        alert("Order placed successfully!");
        setForm({
          customer_name: "",
          phone: "",
          address: "",
          item_id: "",
          quantity: 1,
        });
      })
      .catch(() => alert("Error placing order"));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Your Name"
        value={form.customer_name}
        onChange={(e) =>
          setForm({ ...form, customer_name: e.target.value })
        }
      /><br /><br />

      <input
        placeholder="Phone"
        value={form.phone}
        onChange={(e) =>
          setForm({ ...form, phone: e.target.value })
        }
      /><br /><br />

      <input
        placeholder="Address"
        value={form.address}
        onChange={(e) =>
          setForm({ ...form, address: e.target.value })
        }
      /><br /><br />

      <select
        value={form.item_id}
        onChange={(e) =>
          setForm({ ...form, item_id: e.target.value })
        }
      >
        <option value="">Select Item</option>
        {menu.map((item) => (
          <option key={item.id} value={item.id}>
            {item.name} - ₹{item.price}
          </option>
        ))}
      </select>

      <br /><br />

      <input
        type="number"
        min="1"
        value={form.quantity}
        onChange={(e) =>
          setForm({ ...form, quantity: e.target.value })
        }
      />

      <br /><br />

      <button className="btn">Place Order</button>
    </form>
  );
}

export default OrderForm;
