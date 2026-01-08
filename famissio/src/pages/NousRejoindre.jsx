import { useState } from "react";
import "./NousRejoindre.css";

const FORM_ENDPOINT = "https://formspree.io/f/xrebwwjk";

function ContactForm() {
  const [status, setStatus] = useState("idle");
  // idle | sending | success | error

  async function handleSubmit(e) {
    e.preventDefault();
    if (status === "sending") return; // bloque double clic

    setStatus("sending");

    try {
      const form = e.currentTarget;
      const data = new FormData(form);

      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  // Écran succès (remplace le formulaire)
  if (status === "success") {
    return (
      <div className="formSuccess">
        <h3>Merci !</h3>
        <p>Votre message a bien été envoyé. Nous vous répondrons dès que possible.</p>
        <button
          type="button"
          className="btn"
          onClick={() => setStatus("idle")}
        >
          Envoyer un autre message
        </button>
      </div>
    );
  }

  return (
    <form className="contactForm" onSubmit={handleSubmit}>
      <label>
        Nom
        <input name="name" type="text" required />
      </label>

      <label>
        Email
        <input name="email" type="email" required />
      </label>

      <label>
        Message
        <textarea name="message" rows="6" required />
      </label>

      {/* anti-spam (honeypot) */}
      <input
        type="text"
        name="_gotcha"
        tabIndex="-1"
        autoComplete="off"
        className="honeypot"
      />

      <button className="btn" type="submit" disabled={status === "sending"}>
        {status === "sending" ? "Envoi..." : "Envoyer"}
      </button>

      {status === "error" && (
        <p className="formError">
          Une erreur réseau est survenue. Si vous voyez ce message mais que le mail est parti,
          vous pouvez ignorer. Sinon, réessayez dans quelques secondes.
        </p>
      )}
    </form>
  );
}

export default function NousRejoindre() {
  return (
    <div className="nousrejoindre">
      <section className="introSection">
        <div className="container">
          <h1>Nous Rejoindre</h1>
          <p>
            Vous vous sentez appelés à vivre une expérience de mission ?
            <br />
            Contactez-nous pour que nous puissions en parler.
          </p>
        </div>
      </section>

      {/* C’EST ICI l’endroit “blanc” : on met le formulaire dedans */}
      <section className="formSection" id="formulaire">
        <div className="container">
          <h2>Envoyez-nous un message</h2>
          <div className="formBox">
            <ContactForm />
          </div>
        </div>
      </section>

      <section className="contactDirectSection">
        <div className="container">
          <div className="cards">
            <div className="card">
              <h3>Par Email</h3>
              <p className="muted">Une question ? Une idée ? Écrivez-nous !</p>
              <p>
                <a href="mailto:famissio2019@gmail.com?subject=[Famissio] Demande de contact&body=Bonjour Famissio,%0D%0A%0D%0AJe vous contacte concernant...">
                  famissio2019@gmail.com
                </a>
              </p>
            </div>

            <div className="card">
              <h3>Par Téléphone</h3>
              <p className="muted">Préférez-vous nous appeler directement ?</p>
              <p>
                <a href="tel:0650824090">06.50.82.40.90</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}