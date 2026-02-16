import { useEffect, useState } from "react";
import API from "../../services/api";

function ManageMenu() {
  const [menu, setMenu] = useState([]);
  const [newItem, setNewItem] = useState({
    name: "",
    description: "",
    price: "",
    image_url: "",
    category: "",
  });

  const fetchMenu = () => {
    API.get("/menu").then((res) => setMenu(res.data));
  };

  useEffect(() => {
    fetchMenu();
  }, []);

  const addItem = () => {
    API.post("/menu", newItem).then(() => {
      alert("Item added");
      fetchMenu();
    });
  };

  const deleteItem = (id) => {
    API.delete(`/menu/${id}`).then(() => fetchMenu());
  };

  return (
    <div className="container">
      <h2>Manage Menu</h2>

      <input placeholder="Name"
        onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
      /><br /><br />

      <input placeholder="Description"
        onChange={(e) => setNewItem({ ...newItem, description: e.target.value })}
      /><br /><br />

      <input placeholder="Price"
        onChange={(e) => setNewItem({ ...newItem, price: e.target.value })}
      /><br /><br />

      <input placeholder="Image URL"
        onChange={(e) => setNewItem({ ...newItem, image_url: e.target.value })}
      /><br /><br />

      <input placeholder="Category"
        onChange={(e) => setNewItem({ ...newItem, category: e.target.value })}
      /><br /><br />

      <button className="btn" onClick={addItem}>Add Item</button>

      <hr /><br />

      {menu.map((item) => (
        <div key={item.id} className="card">
          {item.name} - ₹{item.price}
          <button
            style={{ marginLeft: "20px" }}
            onClick={() => deleteItem(item.id)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default ManageMenu;
