function Contact() {
  return (
    <div className="container">
      <h2>Contact Us</h2>

      <p><b>Phone:</b> +91 9876543210</p>
      <p><b>Email:</b> support@cloudkitchen.com</p>
      <p><b>Location:</b> Bangalore, Karnataka</p>

      <iframe
        title="map"
        width="100%"
        height="300"
        style={{ borderRadius: "8px" }}
        loading="lazy"
        allowFullScreen
        src="https://www.google.com/maps/embed?pb=!1m18..."
      ></iframe>
    </div>
  );
}

export default Contact;
