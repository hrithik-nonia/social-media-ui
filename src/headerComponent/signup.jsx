import Logo from "../assets/logo/logo-img-code";

const SignUp = ({ onClose }) => {
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
          <h4 className="fw-bold mb-3">Sign Up</h4>

          <htmlForm>
            <Logo></Logo>
            <h1 class="h3 mb-3 fw-normal">Please sign in</h1>

            <div class="htmlForm-floating">
              <input
                type="email"
                class="htmlForm-control"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label htmlFor="floatingInput">Email address</label>
            </div>

            <div class="htmlForm-floating mt-3">
              <input
                type="password"
                class="htmlForm-control"
                id="floatingPassword"
                placeholder="Password"
              />
              <label htmlFor="floatingPassword">Password</label>
            </div>

            <div class="htmlForm-check text-start my-3">
              <input
                class="htmlForm-check-input"
                type="checkbox"
                value="remember-me"
                id="checkDefault"
              />
              <label class="form-check-label" htmlFor="checkDefault">
                Remember me
              </label>
            </div>
            <button class="btn btn-primary w-100 py-2" type="submit">
              Sign in
            </button>
            <p class="mt-5 mb-3 text-body-secondary">© 2017–2025</p>
          </htmlForm>
        </div>
      </div>
    </>
  );
};
export default SignUp;
