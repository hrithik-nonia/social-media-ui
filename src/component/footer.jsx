const Footer = () => {
  return (
    <>
      <footer className="d-flex flex-wrap justify-content-between align-items-center px-5 py-3 border-top bg-dark w-100">
        <div className="col-md-4 d-flex align-items-center">
          <a
            href="/"
            className="mb-3 me-2 mb-md-0 text-white text-decoration-none lh-1"
            aria-label="Bootstrap"
          >
            img.....
          </a>
          <span className="mb-3 mb-md-0 text-white ">© 2025 Company, Inc</span>
        </div>

        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li className="ms-3">
            <a
              className="text-white text-decoration-none"
              href="#"
              aria-label="Instagram"
            >
              instagram
            </a>
          </li>
          <li className="ms-3">
            <a
              className="text-white text-decoration-none"
              href="#"
              aria-label="Facebook"
            >
              facebook
            </a>
          </li>
        </ul>
      </footer>
    </>
  );
};
export default Footer;
