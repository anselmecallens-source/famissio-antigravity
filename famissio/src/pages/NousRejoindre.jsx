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
    <div className="nousrejoindre" style={{ marginTop: 0, paddingTop: 0 }}>
      {/* HERO */}
      <div className="relative bg-gray-50 text-gray-900 overflow-hidden">
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@700;800&family=Inter:wght@400;600&display=swap');
          
          .blob {
            border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
            animation: morph 8s ease-in-out infinite;
          }
          
          @keyframes morph {
            0%, 100% { border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; }
            50% { border-radius: 70% 30% 30% 70% / 70% 70% 30% 30%; }
          }
        `}</style>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-orange-200 blob opacity-20"></div>
          <div className="absolute bottom-10 right-10 w-64 h-64 bg-red-200 blob opacity-20" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-24">
          <h1 className="text-7xl sm:text-9xl font-black mb-8 leading-none text-center text-orange-600" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            Contact
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto text-gray-700 leading-relaxed font-medium">
            Vous vous sentez appelés à vivre une expérience de mission ? Contactez-nous pour que nous puissions en parler.
          </p>
        </div>
      </div>

      {/* Bande orange décorative en bas */}
      <div className="bg-orange-100 h-12 border-y border-orange-200"></div>

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