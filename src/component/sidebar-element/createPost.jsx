import { useRef } from "react";
const CreatePost = ({ onClose }) => {
  const cartTitle = useRef();
  const cartContent = useRef();

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
          <h4 className="fw-bold mb-3">Create Post</h4>
          <form>
            <div className="mb-3">
              <label htmlFor="forAddContent" className="form-label">
                Card title
              </label>
              <input
                type="text"
                className="form-control"
                id="forAddContent"
                aria-describedby="emailHelp"
                ref={cartTitle}
              />
              <div id="emailHelp" className="form-text">
                Set Card Titel
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Content
              </label>
              <input
                type="text"
                className="form-control"
                id="forAddContent"
                ref={cartContent}
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
export default CreatePost;
