function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-badge">
          <span className="hero-badge-dot"></span>
          AI-Powered Medical Intelligence
        </div>

        <h1 className="hero-title">
          Your health,<br />
          <em>intelligently</em><br />
          managed.
        </h1>

        <p className="hero-desc">
          MedAI transforms complex prescriptions and health data into insights.
        </p>

        <div className="hero-actions">
          <button className="btn-primary">Explore Features</button>
          <button className="btn-outline">See Dashboard</button>
        </div>
      </div>
    </section>
  );
}

export default Hero;