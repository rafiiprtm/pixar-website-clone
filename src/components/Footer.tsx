const Footer = () => {
  return (
    <>
      <section id="footer-section">
        <div className="content">
          <div className="social-links">
            <a href="#">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#">
              <i className="fab fa-twitter"></i>
            </a>

            <a href="#">
              <i className="fa-brands fa-youtube"></i>
            </a>

            <a href="https://www.instagram.com/rafiiprtm?igsh=MWNiNTRyaWpvZnd0cg==">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>

        <div className="footer-links">
          <a href="#">privacy policy</a> | <a href="#">terms of use</a>
          <br />
          <a href="#">your us state privacy rights</a> |
          <a href="#"> &nbsp;children's online privacy policy</a>
          <a href="#">interest-based ads</a>
        </div>

        <div className="copyright">
          <p>© 1986-2023 disney / pixar</p>
        </div>
        <button className="footer-btn">
          Do Not Sell or Share My Personal Information
        </button>
      </section>
    </>
  );
};

export default Footer;
