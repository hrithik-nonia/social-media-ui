const AboutComponent = ({ onClose }) => {
  return (
    <div
      onClick={onClose} // ✅ Background click se band
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(0,0,0,0.7)",
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()} // ✅ Content click se band nahi ho
        style={{
          background: "#fff",
          borderRadius: "12px",
          padding: "2rem",
          maxWidth: "500px",
          width: "90%",
          color: "#000",
          position: "relative",
        }}
      >
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "10px",
            right: "15px",
            background: "none",
            border: "none",
            fontSize: "1.5rem",
            cursor: "pointer",
          }}
        >
          ✕
        </button>
        <h4 className="fw-bold mb-3">About Us</h4>
        <p>
          Welcome to <strong>Socialify</strong> — a clean, distraction-free
          space where words take center stage. We believe that a single thought,
          expressed clearly, can spark a conversation that matters. No images,
          no noise — just authentic stories, opinions, and ideas shared by real
          people. Whether you're here to read, reflect, or share your own voice,
          this is your community. Join us and let your words speak for
          themselves.
        </p>
      </div>
    </div>
  );
};

export default AboutComponent;
