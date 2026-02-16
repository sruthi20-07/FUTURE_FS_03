function MenuCard({ item }) {
  return (
    <div className="card">
      <img
        src={item.image_url}
        alt={item.name}
        style={{
          width: "100%",
          height: "180px",
          objectFit: "cover",
          borderRadius: "8px"
        }}
      />
      <h3>{item.name}</h3>
      <p>{item.description}</p>
      <h4>₹{item.price}</h4>
    </div>
  );
}

export default MenuCard;
