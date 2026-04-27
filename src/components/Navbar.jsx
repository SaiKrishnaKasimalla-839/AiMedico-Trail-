function Navbar() {
  return (
    <nav>
      <div className="nav-logo">
        <div className="nav-logo-mark">+</div>
        <div>
          <div className="nav-logo-text">MedAI</div>
          <div className="nav-logo-sub">Health Assistant</div>
        </div>
      </div>

      <div className="nav-links">
        <a href="#features">Features</a>
        <a href="#modules">Modules</a>
        <a href="#preview">Dashboard</a>
        <a href="#pricing">Pricing</a>
      </div>

      <button className="nav-cta">Get Started</button>
    </nav>
  );
}

export default Navbar;