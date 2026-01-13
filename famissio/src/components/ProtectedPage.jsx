import React, { useState, useEffect } from 'react';

const ProtectedPage = () => {
    const [password, setPassword] = useState('');
    const [isAuthorized, setIsAuthorized] = useState(false);

    // Vérifie si l'utilisateur s'est déjà connecté auparavant
    useEffect(() => {
        const session = localStorage.getItem('auth_access');
        if (session === 'granted') {
            setIsAuthorized(true);
        }
    }, []);

    const checkPassword = (e) => {
        e.preventDefault();
        if (password === '1234') {
            localStorage.setItem('auth_access', 'granted'); // Enregistre la connexion
            setIsAuthorized(true);
        } else {
            alert('Code erroné');
        }
    };

    if (!isAuthorized) {
        return (
            <div style={{ padding: '20px', textAlign: 'center' }}>
                <h3>Accès restreint</h3>
                <form onSubmit={checkPassword}>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Entrez le code"
                    />
                    <button type="submit">Entrer</button>
                </form>
            </div>
        );
    }

    return (
        <div style={{ padding: '20px' }}>
            <h1>Qui êtes vous ?</h1>
        </div>
    );
};

export default ProtectedPage;
