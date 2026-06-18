function Footer() {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer>
      <div
        className="foot-panel1"
        onClick={scrollTop}
      >
        Back to Top
      </div>

      <div className="foot-panel2">
        <ul>
          <h3>Get to Know Us</h3>
          <a>About Amazon</a>
          <a>Careers</a>
          <a>Press Releases</a>
          <a>Amazon Science</a>
        </ul>

        <ul>
          <h3>Make Money with Us</h3>
          <a>Sell on Amazon</a>
          <a>Amazon Global Selling</a>
          <a>Become an Affiliate</a>
          <a>Advertise Your Products</a>
        </ul>

        <ul>
          <h3>Amazon Payment Products</h3>
          <a>Amazon Business Card</a>
          <a>Shop with Points</a>
          <a>Reload Your Balance</a>
          <a>Amazon Currency Converter</a>
        </ul>

        <ul>
          <h3>Let Us Help You</h3>
          <a>Your Account</a>
          <a>Your Orders</a>
          <a>Shipping Rates</a>
          <a>Returns & Replacements</a>
          <a>Help</a>
        </ul>
      </div>

      <div className="foot-panel4">
        <div className="pages">
          <a>Conditions of Use</a>
          <a>Privacy Notice</a>
          <a>Your Ads Privacy Choices</a>
        </div>

        <div className="copyright">
          ©️ 1996-2026 Amazon Clone. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;