app/page.js
export default function Home() {
  return (
    <div style={{ fontFamily: "Arial", padding: "20px" }}>
      <h1>AB Exteriors</h1>
      <p>Professional Window Cleaning Services</p>

      <h2>About Us</h2>
      <p>
        Hey, my name is Aiden, and me and my business partner Theo are two high school students
        who have been doing window cleaning for over a year. We take pride in our professionalism
        and always leave your windows spotless.
      </p>

      <h2>Services</h2>
      <ul>
        <li>Window Cleaning: $16 downstairs / $20 upstairs</li>
        <li>Solar Panel Cleaning: $50 per panel</li>
        <li>Gutter Cleaning: $4 per foot</li>
      </ul>

      <h2>Book Now</h2>
      <iframe
       <iframe
 src="https://calendly.com/ab-windows2026"
  width="100%"
  height="500"
></iframe>
      ></iframe>

      <h2>Contact</h2>
      <p>Phone: 737-777-0592</p>
      <p>Email: ab.windows2026@gmail.com</p>
    </div>
  );
}
