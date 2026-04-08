export default function FloorFourForm() {
  return (
    <section className="ff-form-section">
      <div className="ff-form-container">
        <h2>ROOFTOP BAR MIETEN</h2>
        <p className="ff-form-subline">
          Anfrage für private Events & exklusive Buchungen
        </p>

        <form className="ff-form">
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="E-Mail" required />
          <input type="tel" placeholder="Telefon" />
          <input type="date" />
          <textarea placeholder="Ihre Anfrage" rows="4" />

          <button type="submit">ANFRAGE SENDEN</button>
        </form>
      </div>
    </section>
  );
}