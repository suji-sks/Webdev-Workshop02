function Navbar() {
  const searchHandler = () => {
    const value = document.querySelector(".search-input").value;

    if (value === "") {
      alert("Please enter something to search");
    } else {
      alert(`Searching for: ${value}`);
    }
  };

  return (
    <div className="navbar">
      <div className="nav-logo border">
        <h2 className="amazon-logo">
          amazon<span>.in</span>
        </h2>
      </div>

      <div className="nav-address border">
        <p className="add-first">Deliver to</p>
        <div className="add-icon">
          <span>📍</span>
          <p className="add-second">India</p>
        </div>
      </div>

      <div className="nav-search">
        <select className="search-select">
          <option>All</option>
        </select>

        <input
          type="text"
          placeholder="Search Amazon"
          className="search-input"
        />

        <div
          className="search-icon"
          onClick={searchHandler}
        >
          🔍
        </div>
      </div>

      <div
        className="nav-signin border"
        onClick={() => alert("Redirecting to Sign In page")}
      >
        <p>
          <span>Hello, sign in</span>
        </p>
        <p className="nav-second">Account & Lists</p>
      </div>

      <div
        className="nav-return border"
        onClick={() => alert("Opening your orders")}
      >
        <p>
          <span>Returns</span>
        </p>
        <p className="nav-second">& Orders</p>
      </div>

      <div
        className="nav-cart border"
        onClick={() => alert("Your cart is currently empty")}
      >
        🛒 Cart
      </div>
    </div>
  );
}

export default Navbar;