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
  <a href="#features" className="nav-link">Features</a>
  <a href="#modules" className="nav-link">Modules</a>
  <a href="#preview" className="nav-link">Dashboard</a>
  <a href="#pricing" className="nav-link">Pricing</a>
</div>
      <button className="nav-cta">Get Started</button>
    </nav>
  );
}

export default Navbar;