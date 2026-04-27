function DashboardPreview() {
  return (
    <section className="preview-section" id="preview">
      <div className="section-label">Dashboard Preview</div>

      <h2 className="section-title">
        Everything in one <br />
        <em>beautiful view</em>
      </h2>

      <p className="section-desc">
        A simple preview of how patient data and health insights are shown.
      </p>

      <div className="preview-container">
        {/* Top Bar */}
        <div className="preview-topbar">
          <div className="topbar-dot" style={{ background: "red" }}></div>
          <div className="topbar-dot" style={{ background: "orange" }}></div>
          <div className="topbar-dot" style={{ background: "green" }}></div>
          <span style={{ marginLeft: "10px", fontSize: "12px" }}>
            MedAI Dashboard
          </span>
        </div>

        {/* Body */}
        <div className="preview-body">
          {/* Sidebar */}
          <div className="preview-sidebar">
            <div className="preview-sidebar-title">Modules</div>

            <div className="preview-sidebar-item active">Prescription</div>
            <div className="preview-sidebar-item">Reminders</div>
            <div className="preview-sidebar-item">Symptoms</div>
            <div className="preview-sidebar-item">Weekly</div>
            <div className="preview-sidebar-item">Monthly</div>
          </div>

          {/* Main Content */}
          <div className="preview-main">
            {/* KPIs */}
            <div className="preview-kpi-row">
              <div className="preview-kpi">
                <div className="preview-kpi-val">87%</div>
                <div className="preview-kpi-label">Adherence</div>
              </div>

              <div className="preview-kpi">
                <div className="preview-kpi-val">1</div>
                <div className="preview-kpi-label">Missed</div>
              </div>

              <div className="preview-kpi">
                <div className="preview-kpi-val">6.2h</div>
                <div className="preview-kpi-label">Sleep</div>
              </div>

              <div className="preview-kpi">
                <div className="preview-kpi-val">14d</div>
                <div className="preview-kpi-label">Streak</div>
              </div>
            </div>

            {/* Cards */}
            <div className="preview-content-row">
              <div className="preview-card">
                <div className="preview-card-title">
                  Today's Medicines
                </div>

                <div className="med-row">
                  <span>Metformin</span>
                  <span>✔</span>
                </div>

                <div className="med-row">
                  <span>Amlodipine</span>
                  <span>✔</span>
                </div>

                <div className="med-row">
                  <span>Atorvastatin</span>
                  <span>Pending</span>
                </div>
              </div>

              <div className="preview-card">
                <div className="preview-card-title">
                  Weekly Status
                </div>

                <p>Mon: 100%</p>
                <p>Tue: 100%</p>
                <p>Wed: 75%</p>
                <p>Thu: 100%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DashboardPreview;