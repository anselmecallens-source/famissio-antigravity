import React, { useState, useEffect } from 'react';

const ProtectedPage = () => {
    const [password, setPassword] = useState('');
    // L'état d'autorisation. Par défaut : faux.
    const [isAuthorized, setIsAuthorized] = useState(false);
    // Petit état pour gérer une animation d'erreur si le mot de passe est faux
    const [errorShake, setErrorShake] = useState(false);

    // 1. Au chargement, on vérifie si le navigateur a déjà le "badge" d'accès
    useEffect(() => {
        // On injecte les polices si elles ne sont pas déjà chargées dans index.html
        if (!document.getElementById('google-fonts')) {
            const linkFonts = document.createElement("link");
            linkFonts.id = "google-fonts";
            linkFonts.href = "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=Inter:wght@400;600&display=swap";
            linkFonts.rel = "stylesheet";
            document.head.appendChild(linkFonts);
        }

        // VÉRIFICATION DE SÉCURITÉ (Persistence)
        const sessionAuth = localStorage.getItem('famissio_secure_access');
        if (sessionAuth === 'granted') {
            setIsAuthorized(true);
        }
    }, []);

    // 2. Fonction de vérification du mot de passe
    const handleLogin = (e) => {
        e.preventDefault(); // Empêche le rechargement de la page
        if (password === '1234') {
            // SUCCÈS : On enregistre le "badge" dans le navigateur
            localStorage.setItem('famissio_secure_access', 'granted');
            setIsAuthorized(true);
        } else {
            // ERREUR : Animation et reset du champ
            setErrorShake(true);
            setTimeout(() => setErrorShake(false), 500);
            setPassword('');
        }
    };

    // ---- STYLES CSS (Inspirés de votre Home.js) ----
    const styles = `
        :root {
            --flame: #c82904;
            --ember: #f46a07;
            --cream: #fff8f4;
            --charcoal: #1a1a1a;
        }
        .protected-wrapper {
            min-height: 90vh; /* Prend presque tout l'écran */
            display: flex;
            justify-content: center;
            align-items: center;
            background: linear-gradient(135deg, var(--cream), #ffffff);
            font-family: 'Inter', sans-serif;
            padding: 20px;
        }

        /* Boîte de login stylisée */
        .login-card {
            background: white;
            padding: 60px 40px;
            border-radius: 30px;
            box-shadow: 0 25px 70px rgba(0,0,0,0.1);
            text-align: center;
            max-width: 480px;
            width: 100%;
            border-top: 6px solid var(--ember);
            position: relative;
            overflow: hidden;
        }
        
        .login-title {
            font-family: 'Playfair Display', serif;
            font-size: 2.2rem;
            font-weight: 900;
            color: var(--flame);
            margin-bottom: 30px;
        }

        .login-input {
            width: 100%;
            padding: 18px 25px;
            margin-bottom: 25px;
            border: 2px solid #eee;
            border-radius: 50px;
            font-size: 1.1rem;
            font-family: 'Inter', sans-serif;
            transition: all 0.3s;
            outline: none;
            text-align: center;
            letter-spacing: 4px; /* Espacement pour masquer le mdp */
        }

        .login-input:focus {
            border-color: var(--ember);
            box-shadow: 0 0 0 4px rgba(244, 106, 7, 0.1);
        }

        .login-btn {
            background: linear-gradient(135deg, var(--flame), var(--ember));
            color: white;
            border: none;
            padding: 18px 40px;
            font-size: 1.1rem;
            font-weight: 700;
            border-radius: 50px;
            cursor: pointer;
            transition: transform 0.3s, box-shadow 0.3s;
            box-shadow: 0 10px 30px rgba(200, 41, 4, 0.2);
            font-family: 'Inter', sans-serif;
            text-transform: uppercase;
            letter-spacing: 1px;
            width: 100%;
        }

        .login-btn:hover {
            transform: translateY(-3px);
            box-shadow: 0 15px 40px rgba(200, 41, 4, 0.3);
        }

        /* Animation d'erreur */
        .shake { animation: shake 0.5s; }
        @keyframes shake {
            0% { transform: translateX(0); } 25% { transform: translateX(-10px); }
            50% { transform: translateX(10px); } 75% { transform: translateX(-10px); } 100% { transform: translateX(0); }
        }

        /* Contenu secret une fois connecté */
        .secret-content {
            text-align: center;
            animation: fadeIn 1s ease-in;
        }
        .secret-title {
            font-family: 'Playfair Display', serif;
            font-size: clamp(3rem, 8vw, 6rem); /* Très grand, comme dans le "Et après" */
            font-weight: 900;
            color: var(--charcoal);
            line-height: 1.1;
        }
        @keyframes fadeIn { from { opacity:0; transform: translateY(20px);} to { opacity:1; transform: translateY(0);} }
    `;


    // 3. Affichage Conditionnel

    // S'il n'est PAS autorisé : Afficher le formulaire de connexion
    if (!isAuthorized) {
        return (
            <div className="protected-wrapper">
                <style>{styles}</style>
                <div className={`login-card ${errorShake ? 'shake' : ''}`}>
                    <h2 className="login-title">
                        <i className="fas fa-lock" style={{ marginRight: '15px', opacity: 0.6 }}></i>
                        Accès Réservé
                    </h2>
                    <p style={{ marginBottom: '30px', color: '#666' }}>Veuillez entrer le code d'accès pour voir le contenu.</p>

                    <form onSubmit={handleLogin}>
                        <input
                            type="password"
                            placeholder="••••"
                            className="login-input"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            maxLength={4} // Limite à 4 caractères
                        />
                        <button type="submit" className="login-btn">
                            Déverrouiller <i className="fas fa-arrow-right" style={{ marginLeft: '10px' }}></i>
                        </button>
                    </form>
                </div>
            </div>
        );
    }

    // S'il EST autorisé : Afficher le contenu secret
    return (
        <div className="protected-wrapper">
            <style>{styles}</style>
            <div className="secret-content">
                <h1 className="secret-title">Qui êtes vous ?</h1>
            </div>
        </div>
    );
};

export default ProtectedPage;
