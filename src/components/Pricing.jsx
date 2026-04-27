function Pricing() {
  return (
    <section className="pricing-section" id="pricing">
      <h2 className="section-title">
        Simple <em>Pricing</em>
      </h2>

      <div className="pricing-grid">
        <div className="pricing-card">
          <h3>Basic</h3>
          <p>Free</p>
        </div>

        <div className="pricing-card featured">
          <h3>Pro</h3>
          <p>₹499/month</p>
        </div>

        <div className="pricing-card">
          <h3>Premium</h3>
          <p>₹999/month</p>
        </div>
      </div>
    </section>
  );
}

export default Pricing;