function Emergency() {
  return (
    <section className="emergency-section">
      <div className="emergency-inner">

        {/* LEFT SIDE */}
        <div>
          <div className="emergency-badge">
            Life-Critical Feature
          </div>

          <h2 className="section-title">
            Emergency detection <br />
            <em>that could save lives</em>
          </h2>

          <p className="section-desc">
            MedAI analyzes symptoms instantly and guides users
            whether immediate medical attention is required.
          </p>

          <div style={{ marginTop: "20px", display: "flex", gap: "10px" }}>
            <div
              style={{
                padding: "15px",
                background: "#1a1a1a",
                borderRadius: "10px",
                flex: 1,
              }}
            >
              <h3 style={{ color: "red" }}>&lt;3s</h3>
              <p>Response Time</p>
            </div>

            <div
              style={{
                padding: "15px",
                background: "#1a1a1a",
                borderRadius: "10px",
                flex: 1,
              }}
            >
              <h3 style={{ color: "orange" }}>3-tier</h3>
              <p>Triage System</p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div>
          <div className="alert-demo">
            <div className="alert-demo-top">
              <div className="alert-demo-icon">!</div>

              <div>
                <div className="alert-demo-title">
                  Emergency Detected
                </div>
                <div className="alert-demo-sub">
                  Just now
                </div>
              </div>
            </div>

            <div className="alert-demo-text">
              Sudden chest pain, breathing difficulty, and sweating detected.
              This may indicate a serious condition.
            </div>

            <div className="alert-demo-action">
              Call Emergency Now →
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Emergency;