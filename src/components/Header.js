function Header({ onHome }) {
  return (
    <header className="header">
      <div className="header-content">
        <div
          className="logo"
          onClick={() => onHome?.()}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              onHome?.();
            }
          }}
          style={{ cursor: "pointer" }}
          aria-label="Go to Home Page"
        >
          <span className="logo-mark" aria-hidden="true">
            🍋
          </span>

          <span className="logo-text">
            LITTLE LEMON
          </span>
        </div>

        <button
          type="button"
          className="menu-button"
          aria-label="Open navigation menu"
        >
          <span aria-hidden="true">☰</span>
        </button>
      </div>
    </header>
  );
}

export default Header;