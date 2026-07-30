function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <span className="logo-mark">🍋</span>
          <span className="logo-text">LITTLE LEMON</span>
        </div>

        <button
          type="button"
          className="menu-button"
          aria-label="Open navigation menu"
        >
          ☰
        </button>
      </div>
    </header>
  );
}

export default Header;