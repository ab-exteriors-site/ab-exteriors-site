export default function Home() {
  return (
    <main style={{ fontFamily: "Arial", padding: "40px", textAlign: "center" }}>
      
      <h1>AB Exteriors</h1>
      <p>Professional Window Cleaning Services</p>

      <h2>About Us</h2>
      <p>
        Hey, my name is Aiden, and me and my business partner Theo are two high school students
        who have been doing window cleaning for over a year. We take pride in our work and always
        leave your windows spotless.
      </p>

      <h2>Our Services</h2>
      <p>Window Cleaning: $16 downstairs / $20 upstairs</p>
      <p>Solar Panel Cleaning: $50 per panel</p>
      <p>Gutter Cleaning: $4 per foot</p>

      <h2>Book an Appointment</h2>
      <a
        href="https://calendly.com/ab-windows2026"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "inline-block",
          padding: "15px 25px",
          backgroundColor: "#0070f3",
          color: "white",
          textDecoration: "none",
          borderRadius: "5px",
          marginTop: "10px"
        }}
      >
        Book Now
      </a>

      <h2>Contact Us</h2>
      <p>📞 737-777-0592</p>
      <p>✉️ ab.windows2026@gmail.com</p>

    </main>
  );
}
