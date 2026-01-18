import { useState, useEffect } from "react";
import "./Contact.css"; // Gardé pour compatibilité, mais le contenu est scopé et ne devrait pas gêner

const FORM_ENDPOINT = "https://formspree.io/f/xrebwwjk";

function ContactForm() {
  const [status, setStatus] = useState("idle");
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  async function handleSubmit(e) {
    e.preventDefault();
    if (status === "sending") return;

    setStatus("sending");

    try {
      const data = new FormData();
      // Champs textes
      data.append('name', formData.name);
      data.append('phone', formData.phone);
      data.append('email', formData.email);
      data.append('subject', formData.subject);
      data.append('message', formData.message);

      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("success");
        // Reset total du formulaire
        setFormData({ name: '', phone: '', email: '', subject: '', message: '' });
      } else {
        // --- Code de débuggage ---
        const errorData = await res.json();
        console.error("Erreur Formspree détaillée :", errorData);
        alert("Erreur technique : " + (errorData.error || "Inconnue"));
        // -------------------------
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-100 to-red-100 opacity-30"></div>
        <div className="relative bg-white rounded-3xl shadow-2xl p-12 text-center border-4 border-orange-500">
          <div className="mb-6">
            <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-600 rounded-full mx-auto flex items-center justify-center transform rotate-12 animate-bounce">
              <svg className="w-10 h-10 text-white transform -rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>
          <h3 className="text-4xl font-black mb-4 text-gray-900" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            Message envoyé !
          </h3>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-md mx-auto">
            Merci pour votre message ! Nous avons bien reçu votre demande et nous vous répondrons très rapidement.
          </p>
          <button
            onClick={() => setStatus("idle")}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-500 to-red-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl hover:scale-105 transition-all"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Envoyer un autre message
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">
            Nom & Prénom
          </label>
          <div className="bg-white border border-black border-solid rounded-2xl overflow-hidden shadow-sm">
            <input
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-6 py-4 bg-transparent border-0 outline-none text-gray-900 appearance-none placeholder-gray-400 font-medium"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
              placeholder="Jean Dupont"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">
              Téléphone
            </label>
            <div className="bg-white border border-black border-solid rounded-2xl overflow-hidden shadow-sm">
              <input
                name="phone"
                type="tel"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-6 py-4 bg-transparent border-0 outline-none text-gray-900 appearance-none placeholder-gray-400 font-medium"
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                placeholder="06 12 34 56 78"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">
              Email
            </label>
            <div className="bg-white border border-black border-solid rounded-2xl overflow-hidden shadow-sm">
              <input
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-6 py-4 bg-transparent border-0 outline-none text-gray-900 appearance-none placeholder-gray-400 font-medium"
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                placeholder="jean@exemple.fr"
              />
            </div>
          </div>
        </div>

        <div className="pt-4">
          <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">
            Votre message
          </label>
          <div className="bg-white border border-black border-solid rounded-2xl overflow-hidden shadow-sm">
            <input
              name="subject"
              type="text"
              required
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-6 py-4 bg-transparent border-0 border-b border-gray-100 outline-none text-gray-900 font-bold appearance-none"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
              placeholder="Objet : Demande d'information..."
            />
            <textarea
              name="message"
              rows="6"
              required
              value={formData.message}
              onChange={(e) => {
                handleChange(e);
                if (e.target.scrollHeight > e.target.clientHeight) {
                  e.target.style.height = `${e.target.scrollHeight}px`;
                }
              }}
              className="w-full px-6 py-4 bg-transparent border-0 outline-none resize-none text-gray-900 appearance-none"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
              placeholder="Parlez-nous de votre projet ou de vos questions..."
            />
          </div>
        </div>
      </div>

      <div className="flex justify-end pt-2">
        <button
          onClick={handleSubmit}
          disabled={status === "sending"}
          className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-orange-500 to-red-600 border-none text-white px-10 py-5 rounded-full font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
        >
          {status === "sending" ? (
            <>
              <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Envoi en cours...
            </>
          ) : (
            <>
              Envoyer le message
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </>
          )}
        </button>
      </div>

      {status === "error" && (
        <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-lg">
          <p className="text-red-700 font-semibold">
            ⚠️ Une erreur est survenue. Veuillez réessayer dans quelques instants.
          </p>
        </div>
      )}
    </div>
  );
}

export default function Contact() {

  // Intégration correcte du script Facebook via useEffect


  return (
    <div className="bg-gray-50">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700;800;900&family=Inter:wght@300;400;500;600;700;800&display=swap');
        
        .blob {
          border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
          animation: morph 8s ease-in-out infinite;
        }
        
        @keyframes morph {
          0%, 100% { border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; }
          50% { border-radius: 70% 30% 30% 70% / 70% 70% 30% 30%; }
        }

        .pattern-dots {
          background-image: radial-gradient(circle, rgba(244, 106, 7, 0.1) 1px, transparent 1px);
          background-size: 20px 20px;
        }

        .gradient-text {
          background: linear-gradient(135deg, #f46a07 0%, #c82904 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}</style>

      {/* Container système pour Facebook */}
      <div id="fb-root"></div>

      {/* HERO - GARDÉ */}
      <div className="relative bg-gray-50 text-gray-900 overflow-hidden">
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

      <div className="bg-orange-100 h-12 border-y border-orange-200"></div>

      {/* SECTION FORMULAIRE */}
      <div className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 pattern-dots"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-orange-200 to-red-200 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-red-200 to-orange-200 rounded-full blur-3xl opacity-20"></div>

        <div className="relative max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">

            <h2 className="text-5xl font-black mb-4 gradient-text" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Envoyez-nous un message
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Nous sommes là pour répondre à vos questions et vous accompagner dans votre projet de mission.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100">
            <ContactForm />
          </div>
        </div>
      </div>

      {/* SECTION CONTACTS DIRECTS */}
      <div className="bg-gradient-to-br from-red-600 to-orange-500 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-black text-white text-center mb-12" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            Autres moyens de contact
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all hover:scale-105 group">
              <div className="flex items-start gap-6">
                <div className="bg-white rounded-2xl p-4 group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2">Par Email</h3>
                  <p className="text-white/80 mb-4">Une question ? Une idée ? Écrivez-nous directement !</p>
                  <a
                    href="mailto:famissio2019@gmail.com?subject=[Famissio] Demande de contact&body=Bonjour Famissio,%0D%0A%0D%0AJe vous contacte concernant..."
                    className="inline-flex items-center gap-2 text-white font-bold hover:gap-4 transition-all"
                  >
                    famissio2019@gmail.com
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all hover:scale-105 group">
              <div className="flex items-start gap-6">
                <div className="bg-white rounded-2xl p-4 group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2">Par Téléphone</h3>
                  <p className="text-white/80 mb-4">Préférez-vous nous appeler directement ?</p>
                  <a
                    href="tel:0650824090"
                    className="inline-flex items-center gap-2 text-white font-bold hover:gap-4 transition-all"
                  >
                    06 50 82 40 90
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION RÉSEAUX SOCIAUX */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-black mb-8 gradient-text" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            Suivez-nous sur les réseaux
          </h3>

          <div className="flex justify-center gap-6">
            <a
              href="https://www.facebook.com/Famissio-108524034407006/"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-2xl flex items-center justify-center hover:scale-110 hover:rotate-6 transition-all shadow-lg hover:shadow-2xl">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </div>
            </a>

            <a
              href="https://www.youtube.com/channel/UChOz-FSMT3n6Z8ici3hAFhQ"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-2xl flex items-center justify-center hover:scale-110 hover:rotate-6 transition-all shadow-lg hover:shadow-2xl">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </div>
            </a>

            <a
              href="https://www.instagram.com/famissio/"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-2xl flex items-center justify-center hover:scale-110 hover:rotate-6 transition-all shadow-lg hover:shadow-2xl">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                </svg>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* SECTION FACEBOOK (SociableKIT) */}
      <div className="bg-gray-100 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black mb-4 gradient-text" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Notre actualité Facebook
            </h2>
            <p className="text-gray-600 text-lg">
              Découvrez nos dernières publications
            </p>
          </div>

          <div className="flex justify-center w-full">
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden w-full max-w-[550px]">

              {/* Widget SociableKIT avec ton ID 25643545 */}
              <iframe
                src='https://widgets.sociablekit.com/facebook-page-posts/iframe/25643545'
                frameBorder='0'
                width='100%'
                height='800'
                style={{ border: 'none' }}
                title="Facebook Feed"
              ></iframe>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}