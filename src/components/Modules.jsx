import { useState } from "react";

function Modules() {
  const [active, setActive] = useState(0);

  const modules = [
    "Prescription",
    "Reminders",
    "Symptoms",
    "Weekly",
    "Monthly",
    "Doctor",
    "Emergency",
  ];

  return (
    <section className="modules-section" id="modules">
      <h2>AI Modules</h2>

      {/* Tabs */}
      <div className="modules-tabs">
        {modules.map((m, i) => (
          <button
            key={i}
            className={`module-tab ${active === i ? "active" : ""}`}
            onClick={() => setActive(i)}
          >
            {m}
          </button>
        ))}
      </div>

      {/* Panels */}
      <div className="module-display">

        {active === 0 && (
          <>
            <div>
              <h3>Prescription Analysis</h3>
              <p>
                Converts complex prescriptions into simple format with schedule.
              </p>
            </div>

            <div className="module-ui">
              <div className="module-ui-body">
                <input
                  className="ui-field-input"
                  placeholder="Enter prescription..."
                />
                <button className="ui-run-btn">
                  Analyze Prescription →
                </button>

                <div className="ui-result">
                  Metformin 500mg - Take twice daily after food.
                </div>
              </div>
            </div>
          </>
        )}

        {active === 1 && (
          <>
            <div>
              <h3>Medicine Reminders</h3>
              <p>Generate friendly reminder messages.</p>
            </div>

            <div className="module-ui">
              <div className="module-ui-body">
                <input
                  className="ui-field-input"
                  placeholder="Patient name"
                />
                <button className="ui-run-btn">
                  Generate Reminder →
                </button>

                <div className="ui-result">
                  Hi Ravi, take your medicine at 8 AM.
                </div>
              </div>
            </div>
          </>
        )}

        {active === 2 && (
          <>
            <div>
              <h3>Symptom Analysis</h3>
              <p>Check symptoms and get possible conditions.</p>
            </div>

            <div className="module-ui">
              <div className="module-ui-body">
                <input
                  className="ui-field-input"
                  placeholder="Enter symptoms..."
                />
                <button className="ui-run-btn">
                  Analyze →
                </button>

                <div className="ui-result">
                  Possible: Viral Fever, Flu
                </div>
              </div>
            </div>
          </>
        )}

        {active === 3 && (
          <>
            <div>
              <h3>Weekly Analysis</h3>
              <p>Analyze weekly health data.</p>
            </div>

            <div className="module-ui">
              <div className="module-ui-body">
                <button className="ui-run-btn">
                  Generate Weekly Report →
                </button>

                <div className="ui-result">
                  Adherence: 89%, Sleep: 6.2h
                </div>
              </div>
            </div>
          </>
        )}

        {active === 4 && (
          <>
            <div>
              <h3>Monthly Report</h3>
              <p>Full monthly health insights.</p>
            </div>

            <div className="module-ui">
              <div className="module-ui-body">
                <button className="ui-run-btn">
                  Generate Monthly Report →
                </button>

                <div className="ui-result">
                  Health improving, follow-up recommended.
                </div>
              </div>
            </div>
          </>
        )}

        {active === 5 && (
          <>
            <div>
              <h3>Doctor Summary</h3>
              <p>Clinical summary for doctors.</p>
            </div>

            <div className="module-ui">
              <div className="module-ui-body">
                <button className="ui-run-btn">
                  Generate Summary →
                </button>

                <div className="ui-result">
                  Patient stable, mild headache reported.
                </div>
              </div>
            </div>
          </>
        )}

        {active === 6 && (
          <>
            <div>
              <h3>Emergency Detection</h3>
              <p>Detect critical conditions instantly.</p>
            </div>

            <div className="module-ui">
              <div className="module-ui-body">
                <input
                  className="ui-field-input"
                  placeholder="Enter symptoms..."
                />
                <button className="ui-run-btn" style={{ background: "red" }}>
                  Check Emergency →
                </button>

                <div className="ui-result">
                  ⚠ Emergency: Seek immediate care.
                </div>
              </div>
            </div>
          </>
        )}

      </div>
    </section>
  );
}

export default Modules;