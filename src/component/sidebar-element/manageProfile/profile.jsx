const ProfileElements = ({ onClose }) => {
  return (
    <>
      <div
        className="offcanvas offcanvas-start show text-bg-dark"
        tabindex="-1"
        id="offcanvasDark"
        aria-labelledby="offcanvasDarkLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasDarkLabel">
            Offcanvas
          </h5>
          <button
            type="button"
            className="btn-close btn-close-white"
            onClick={onClose}
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <p>Place offcanvas content here.</p>
        </div>
      </div>
    </>
  );
};
export default ProfileElements;
