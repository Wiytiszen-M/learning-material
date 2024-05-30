const Contact = () => {
  return (
    <>
      <h2>Contact</h2>
      <form
        style={{
          display: "flex",
          gap: "10px",
          flexDirection: "column",
          justifyContent: "center",
          background: "#f5f5f5",
          padding: "10px",
        }}
      >
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <textarea placeholder="Message" />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Contact;
