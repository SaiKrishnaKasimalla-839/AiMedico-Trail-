function Testimonials() {
  return (
    <section className="testimonials">
      <h2 className="section-title">
        What users <em>say</em>
      </h2>

      <div className="testimonials-grid">
        <div className="testimonial">
          <p>"Great app for tracking medicines!"</p>
          <h4>— Ravi</h4>
        </div>

        <div className="testimonial">
          <p>"Very helpful for my parents."</p>
          <h4>— Priya</h4>
        </div>

        <div className="testimonial">
          <p>"Clean and simple UI."</p>
          <h4>— Doctor Sharma</h4>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;