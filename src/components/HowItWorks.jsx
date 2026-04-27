function HowItWorks() {
  return (
    <section className="how-section" id="how">
      <div className="section-label">How It Works</div>

      <h2 className="section-title">
        From input to insight <br />
        <em>in seconds</em>
      </h2>

      <div className="steps-grid">
        <div className="step">
          <div className="step-num">01</div>
          <div className="step-title">Enter Patient Data</div>
          <div className="step-desc">
            Add prescription, symptoms, or health details.
          </div>
        </div>

        <div className="step">
          <div className="step-num">02</div>
          <div className="step-title">AI Analysis</div>
          <div className="step-desc">
            AI processes data and generates insights.
          </div>
        </div>

        <div className="step">
          <div className="step-num">03</div>
          <div className="step-title">Get Insights</div>
          <div className="step-desc">
            Receive clear and actionable health suggestions.
          </div>
        </div>

        <div className="step">
          <div className="step-num">04</div>
          <div className="step-title">Track Progress</div>
          <div className="step-desc">
            Monitor health improvements over time.
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;