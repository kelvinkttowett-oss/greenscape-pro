function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="bg-green-900 text-white">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <h1 className="text-2xl font-bold">GreenScape Pro</h1>

          <ul className="hidden md:flex gap-8">
            <li className="cursor-pointer hover:text-green-300">Home</li>
            <li className="cursor-pointer hover:text-green-300">Services</li>
            <li className="cursor-pointer hover:text-green-300">Projects</li>
            <li className="cursor-pointer hover:text-green-300">About</li>
            <li className="cursor-pointer hover:text-green-300">Contact</li>
          </ul>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-gradient-to-r from-green-900 to-green-700 text-white">
        <div className="max-w-7xl mx-auto px-6 py-28">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Beautiful Outdoor
            <br />
            Spaces Built To Last
          </h1>

          <p className="text-xl max-w-2xl mb-8">
            Professional landscaping, lawn care, irrigation, and garden
            design services for homes and businesses.
          </p>

          <button className="bg-white text-green-900 px-8 py-4 rounded-lg font-semibold hover:scale-105 transition">
            Get Free Quote
          </button>
        </div>
      </section>

      {/* Services */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-14">
            Our Services
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              "Lawn Maintenance",
              "Garden Design",
              "Irrigation Systems",
              "Tree Trimming",
              "Landscape Installation",
              "Outdoor Lighting",
            ].map((service) => (
              <div
                key={service}
                className="bg-white shadow-lg rounded-xl p-8 hover:-translate-y-2 transition"
              >
                <h3 className="text-2xl font-semibold mb-4">{service}</h3>

                <p className="text-gray-600">
                  High-quality professional landscaping solutions tailored
                  to your property.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="bg-gray-100 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-14">
            Featured Projects
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="h-64 rounded-xl bg-green-700"></div>
            <div className="h-64 rounded-xl bg-green-800"></div>
            <div className="h-64 rounded-xl bg-green-900"></div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8">
            Why Choose GreenScape Pro?
          </h2>

          <p className="text-lg text-gray-600">
            We combine creativity, craftsmanship, and sustainability to
            create outdoor spaces that enhance beauty, functionality,
            and property value.
          </p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-green-50 py-24">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-12">
            What Our Clients Say
          </h2>

          <div className="bg-white shadow-lg rounded-xl p-8">
            <p className="text-lg italic">
              "GreenScape Pro completely transformed our backyard.
              Professional service and amazing results."
            </p>

            <h4 className="mt-4 font-semibold">
              — Happy Homeowner
            </h4>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="bg-green-900 text-white py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready To Transform Your Landscape?
          </h2>

          <p className="mb-8">
            Contact us today for a free consultation and estimate.
          </p>

          <button className="bg-white text-green-900 px-8 py-4 rounded-lg font-semibold">
            Contact Us
          </button>
        </div>
      </section>
    </div>
  )
}

export default App