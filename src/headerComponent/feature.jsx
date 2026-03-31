const Feature = ({ onClose }) => {
  return (
    <>
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
            maxWidth: "800px",
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
          <h4 className="fw-bold mb-3">Features</h4>
          <p>
            Why Socialify? In a world full of noise, Socialify gives you a space
            to just think and speak. No filters, no feeds full of images — just
            pure, honest conversation. ✍️ Text-First Experience Share your
            thoughts without the pressure of perfect photos or videos. On
            Socialify, your words are enough. 🔍 Search by Keywords Looking for
            a specific topic or conversation? Find exactly what you need with
            our powerful keyword search. 📈 Trending Posts See what the world is
            talking about right now. Stay updated with the most liked and
            discussed posts of the day. 👤 Follow & Unfollow Freely Build your
            own feed by following people whose thoughts inspire you. Unfollow
            anytime — no hard feelings. 👍 Like & Comment React to posts that
            resonate with you. Start a conversation with a comment and connect
            with like-minded people. 🔒 Your Privacy, Our Priority We never sell
            your data. Your account, your rules — stay public or go private, the
            choice is yours. 💬 Direct Messaging Have a deeper conversation in
            private. Send direct messages to anyone in your network. 🌐 100%
            Free — Always Socialify is completely free to use. No hidden
            charges, no premium walls — every feature, for everyone.
          </p>
        </div>
      </div>
    </>
  );
};
export default Feature;
