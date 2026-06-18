function App() {
  const services = [
    "Lawn Maintenance",
    "Garden Design",
    "Tree Trimming",
    "Irrigation Systems",
    "Landscape Installation",
    "Outdoor Lighting",
  ];

  return (
    <div>
      {/* Navigation */}
      <nav className="navbar">
        <div className="logo">GreenScape Pro</div>

        <ul className="nav-links">
          <li>Home</li>
          <li>Services</li>
          <li>Projects</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>

      {/* Hero */}
      <section className="hero">
        <div className="hero-content">
          <h1>Transform Your Outdoor Space</h1>

          <p>
            Professional landscaping, lawn care, and garden design services
            that bring your vision to life.
          </p>

          <button>Get Free Quote</button>
        </div>
      </section>

      {/* Services */}
      <section className="section">
        <h2>Our Services</h2>

        <div className="services-grid">
          {services.map((service) => (
            <div className="card" key={service}>
              <h3>{service}</h3>
              <p>
                Professional service delivered by experienced landscaping
                specialists.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section className="section light">
        <h2>About GreenScape Pro</h2>

        <p>
          We help homeowners and businesses create beautiful, sustainable
          outdoor environments through expert landscaping and maintenance.
        </p>
      </section>

      {/* Projects */}
      <section className="section">
        <h2>Featured Projects</h2>

        <div className="projects">
          <div className="project">Luxury Garden Design</div>
          <div className="project">Commercial Landscaping</div>
          <div className="project">Modern Backyard Makeover</div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section light">
        <h2>What Clients Say</h2>

        <div className="testimonial">
          "GreenScape Pro completely transformed our yard. Highly recommended!"
        </div>

        <div className="testimonial">
          "Professional team, excellent communication, beautiful results."
        </div>
      </section>

      {/* Contact */}
      <section className="section">
        <h2>Get In Touch</h2>

        <form className="contact-form">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Email Address" />
          <textarea placeholder="Tell us about your project"></textarea>

          <button type="submit">Send Inquiry</button>
        </form>
      </section>

      <footer>
        <p>© 2026 GreenScape Pro. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;