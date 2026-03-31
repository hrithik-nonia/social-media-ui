import Logo from "../assets/logo/logo-img-code";

const Login = ({ onClose }) => {
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
            maxWidth: "600px",
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

          <h4 className="fw-bold mb-3">Login</h4>

          <htmlForm>
            <Logo></Logo>
            <h1 className="h3 mb-3 fw-normal">Please login in</h1>

            <div className="row g-3">
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="First name"
                  aria-label="First name"
                />
              </div>
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Last name"
                  aria-label="Last name"
                />
              </div>
            </div>

            <div className="htmlForm-floating">
              <input
                type="email"
                className="htmlForm-control form-control mt-3"
                id="floatingInput"
                placeholder="name@example.com"
              />
            </div>

            <div className="htmlForm-floating mt-3">
              <input
                type="password"
                className="htmlForm-control form-control"
                id="floatingPassword"
                placeholder="Password"
              />
            </div>

            <div className="htmlForm-check text-start my-3">
              <input
                className="htmlForm-check-input"
                type="checkbox"
                value="remember-me"
                id="checkDefault"
              />
              <label className="form-check-label" htmlFor="checkDefault">
                Remember me
              </label>
            </div>
            <button className="btn btn-primary w-100 py-2" type="submit">
              Login
            </button>
            <p className="mt-5 mb-3 text-body-secondary">© 2017–2025</p>
          </htmlForm>
        </div>
      </div>
    </>
  );
};
export default Login;
