import React, { useState } from 'react';
import { X, Download, BookOpen, Lock, Unlock, Eye } from 'lucide-react';

const FormationsPage = () => {
    const [selectedFormation, setSelectedFormation] = useState(null);
    const [expandedCategory, setExpandedCategory] = useState(null);
    const [hoveredId, setHoveredId] = useState(null);

    const categories = [
        {
            id: 'fondamentaux',
            title: 'Fondamentaux',
            subtitle: 'Les piliers de la foi',
            color: '#c82904',
            formations: [
                { id: 1, title: "Dieu existe-t-il ?", tag: "Philosophie", desc: "Arguments rationnels et témoignages de l'existence divine", pdf: "https://famissio-99.webself.net/file/si1759337/download/10-%20Quels%20sont%20les%20preuves%20de%20l%E2%80%99existence%20de%20Dieu-fi36256494.pdf" },
                { id: 2, title: "La Trinité", tag: "Mystère", desc: "Un Dieu en trois personnes, explication simple", pdf: "https://famissio-99.webself.net/file/si1759337/download/12-%20Comment%20expliquer%20simplement%20la%20Trinit%C3%A9-fi36256492.pdf" },
                { id: 3, title: "Dieu fait Homme", tag: "Incarnation", desc: "Pourquoi Dieu a choisi de partager notre humanité", pdf: "https://famissio-99.webself.net/file/si1759337/download/11-%20Pourquoi%20Dieu%20s%E2%80%99est%20fait%20homme-fi36256487.pdf" },
                { id: 4, title: "Évangiles", tag: "Histoire", desc: "Preuves de la fiabilité des textes sacrés", pdf: "https://famissio-99.webself.net/file/si1759337/download/14-%20Comment%20prouver%20la%20v%C3%A9racit%C3%A9%20des%20%C3%A9vangiles-fi36256490.pdf" },
                { id: 5, title: "Miséricorde", tag: "Amour", desc: "Le cœur de Dieu révélé à Sainte Faustine", pdf: "https://famissio-99.webself.net/file/si1759337/download/9-%20Comment%20t%C3%A9moigner%20de%20la%20mis%C3%A9ricorde%20de%20Dieu-fi36256500.pdf" },
                { id: 6, title: "Vie Éternelle", tag: "Espérance", desc: "Notre destinée : Ciel, Purgatoire, Jugement", pdf: "https://famissio-99.webself.net/file/si1759337/download/1-%20Comment%20annoncer%20la%20vie%20%C3%A9ternelle-fi36256497.pdf" }
            ]
        },
        {
            id: 'rencontres',
            title: 'Rencontres',
            subtitle: 'Face aux objections',
            color: '#f46a07',
            formations: [
                { id: 7, title: "L'Indifférent", tag: "Dialogue", desc: "Celui qui n'a pas besoin de Dieu", pdf: "https://famissio-99.webself.net/file/si1759337/download/5-%20Que%20r%C3%A9pondre%20%C3%A0%20l%E2%80%99indiff%C3%A9rent%20qui%20n%E2%80%99a%20pas%20besoin%20de%20Dieu-fi36256493.pdf" },
                { id: 8, title: "La Souffrance", tag: "Compassion", desc: "Accompagner celui qui souffre avec présence", pdf: "https://famissio-99.webself.net/file/si1759337/download/4-%20Que%20r%C3%A9pondre%20%C3%A0%20celui%20qui%20souffre-fi36256486.pdf" },
                { id: 9, title: "Dialogue Musulman", tag: "Respect", desc: "Témoigner avec clarté et bienveillance", pdf: "https://famissio-99.webself.net/file/si1759337/download/13-%20Que%20r%C3%A9pondre%20%C3%A0%20un%20musulman-fi36256498.pdf" },
                { id: 10, title: "Église Pécheresse", tag: "Vérité", desc: "Sainte par le Christ, imparfaite par ses membres", pdf: "https://famissio-99.webself.net/file/si1759337/download/6-%20Que%20r%C3%A9pondre%20%C3%A0%20celui%20qui%20rejette%20l%E2%80%99Eglise%20sainte%20mais%20imparfaite-fi36256495.pdf" },
                { id: 11, title: "Prier Seul", tag: "Communion", desc: "Pourquoi l'Église et les sacrements sont vitaux", pdf: "https://famissio-99.webself.net/file/si1759337/download/7-%20Que%20r%C3%A9pondre%20%C3%A0%20celui%20qui%20prie%20seul%20et%20n%E2%80%99a%20pas%20besoin%20de%20l%E2%80%99Eglise-fi36256491.pdf" },
                { id: 12, title: "Divorcés", tag: "Accueil", desc: "Vérité et charité pour les remariés", pdf: "https://famissio-99.webself.net/file/si1759337/download/8-%20Que%20dire%20%C3%A0%20des%20personnes%20s%C3%A9par%C3%A9es%2C%20remari%C3%A9es-fi36256499.pdf" },
                { id: 13, title: "Occulte", tag: "Vigilance", desc: "Dangers cachés des pratiques ésotériques", pdf: "https://famissio-99.webself.net/file/si1759337/download/17-%20Quel%20sont%20les%20dangers%20des%20sciences%20occultes-fi36471285.pdf" }
            ]
        },
        {
            id: 'spirituel',
            title: 'Vie Spirituelle',
            subtitle: 'Grandir en mission',
            color: '#1a1a1a',
            formations: [
                { id: 14, title: "La Parole", tag: "Annonce", desc: "Utiliser l'Écriture pour toucher les cœurs", pdf: "https://famissio-99.webself.net/file/si1759337/download/Mission%20avec%20la%20parole%20de%20Dieu-fi36548922.pdf" },
                { id: 15, title: "Couple", tag: "Témoignage", desc: "Le mariage comme socle d'évangélisation", pdf: "https://famissio-99.webself.net/file/si1759337/download/16-%20Quels%20fruits%20pour%20la%20mission%20en%20couple-fi36256501.pdf" },
                { id: 16, title: "Gratitude", tag: "Joie", desc: "Transformer son regard par l'action de grâce", pdf: "https://famissio-99.webself.net/file/si1759337/download/15-%20Comment%20vivre%20de%20la%20gratitude-fi36256488.pdf" },
                { id: 17, title: "Pardon", tag: "Libération", desc: "Le chemin difficile mais libérateur", pdf: "https://famissio-99.webself.net/file/si1759337/download/3-%20Pourquoi%20et%20comment%20pardonner-fi36256489.pdf" },
                { id: 18, title: "Discernement", tag: "Écoute", desc: "Comment Dieu nous parle au quotidien", pdf: "https://famissio-99.webself.net/file/si1759337/download/2-%20Comment%20Dieu%20nous%20guide-t-il-fi36256496.pdf" }
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@400;700&family=Inter:wght@400;600;800&display=swap');
        
        .paper-tear {
          clip-path: polygon(
            0 2%, 2% 0, 4% 2%, 6% 0, 8% 2%, 10% 0, 12% 2%, 14% 1%, 16% 2%, 18% 0,
            20% 2%, 22% 1%, 24% 2%, 26% 0, 28% 2%, 30% 1%, 32% 2%, 34% 0, 36% 2%,
            38% 1%, 40% 2%, 42% 0, 44% 2%, 46% 1%, 48% 2%, 50% 0, 52% 2%, 54% 1%,
            56% 2%, 58% 0, 60% 2%, 62% 1%, 64% 2%, 66% 0, 68% 2%, 70% 1%, 72% 2%,
            74% 0, 76% 2%, 78% 1%, 80% 2%, 82% 0, 84% 2%, 86% 1%, 88% 2%, 90% 0,
            92% 2%, 94% 1%, 96% 2%, 98% 0, 100% 2%,
            100% 100%, 0 100%
          );
        }
        
        .formation-stack {
          transform-style: preserve-3d;
        }
        
        .formation-layer {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .formation-stack:hover .formation-layer:nth-child(1) {
          transform: translateY(-8px) rotate(-2deg);
        }
        
        .formation-stack:hover .formation-layer:nth-child(2) {
          transform: translateY(-4px) rotate(1deg);
        }
      `}</style>

            {/* HERO */}
            <div className="relative bg-white border-b-8 border-black overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-orange-500/5 to-transparent"></div>

                <div className="relative max-w-7xl mx-auto px-6 py-24">
                    <div className="max-w-3xl">
                        <div className="inline-block mb-6 px-4 py-1 bg-black text-white text-xs font-bold tracking-widest">
                            ACADÉMIE FAMISSIO
                        </div>

                        <h1 className="text-8xl sm:text-9xl font-black mb-6 leading-none" style={{ fontFamily: 'Libre Baskerville, serif' }}>
                            18
                        </h1>

                        <h2 className="text-5xl sm:text-6xl font-black mb-8 leading-tight">
                            Formations pour<br />
                            <span className="italic" style={{ fontFamily: 'Libre Baskerville, serif' }}>répondre en mission</span>
                        </h2>

                        <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                            <p>
                                Nourrissez votre foi et préparez-vous aux questions les plus profondes.
                                Chaque formation est un dossier complet pour comprendre et transmettre.
                            </p>
                            <div className="border-l-4 border-orange-500 pl-6 py-4 bg-orange-50">
                                <p className="font-semibold text-gray-900">
                                    Rappelez-vous : il n'existe pas de réponses toutes faites.
                                    L'Esprit Saint vous guidera le moment venu.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* CATEGORIES */}
            <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="space-y-16">
                    {categories.map((category, catIdx) => (
                        <div key={category.id} className="relative">
                            {/* Header */}
                            <div className="mb-12">
                                <div className="flex items-end gap-8 mb-4">
                                    <div
                                        className="text-9xl font-black leading-none opacity-10"
                                        style={{ fontFamily: 'Libre Baskerville, serif' }}
                                    >
                                        {String(catIdx + 1).padStart(2, '0')}
                                    </div>
                                    <div className="pb-4">
                                        <h2 className="text-5xl font-black mb-2" style={{ color: category.color }}>
                                            {category.title}
                                        </h2>
                                        <p className="text-xl text-gray-600">{category.subtitle}</p>
                                    </div>
                                </div>
                                <div
                                    className="h-1 w-32 rounded-full"
                                    style={{ backgroundColor: category.color }}
                                ></div>
                            </div>

                            {/* Formations Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {category.formations.map((formation, idx) => (
                                    <div
                                        key={formation.id}
                                        className="formation-stack relative group cursor-pointer"
                                        onMouseEnter={() => setHoveredId(formation.id)}
                                        onMouseLeave={() => setHoveredId(null)}
                                    >
                                        {/* Shadow layers */}
                                        <div className="formation-layer absolute inset-0 bg-gray-300 rounded-lg" style={{ transform: 'translateY(8px) rotate(2deg)', zIndex: 0 }}></div>
                                        <div className="formation-layer absolute inset-0 bg-gray-200 rounded-lg" style={{ transform: 'translateY(4px) rotate(-1deg)', zIndex: 1 }}></div>

                                        {/* Main card */}
                                        <div
                                            className="formation-layer relative bg-white border-2 rounded-lg shadow-lg overflow-hidden"
                                            style={{
                                                borderColor: hoveredId === formation.id ? category.color : '#e5e7eb',
                                                zIndex: 2
                                            }}
                                        >
                                            {/* Torn top edge */}
                                            <div
                                                className="paper-tear h-3"
                                                style={{ backgroundColor: category.color }}
                                            ></div>

                                            <div className="p-8">
                                                {/* Tag */}
                                                <div className="inline-block mb-4 px-3 py-1 bg-gray-100 text-xs font-bold tracking-wider text-gray-600">
                                                    {formation.tag}
                                                </div>

                                                {/* Title */}
                                                <h3 className="text-2xl font-black mb-3 leading-tight">
                                                    {formation.title}
                                                </h3>

                                                {/* Description */}
                                                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                                                    {formation.desc}
                                                </p>

                                                {/* Actions */}
                                                <div className="flex gap-2">
                                                    <button
                                                        onClick={() => setSelectedFormation(formation)}
                                                        className="flex-1 py-3 px-4 font-bold text-white transition-all flex items-center justify-center gap-2"
                                                        style={{
                                                            backgroundColor: category.color,
                                                            transform: hoveredId === formation.id ? 'translateY(-2px)' : 'none',
                                                            boxShadow: hoveredId === formation.id ? '0 8px 20px rgba(0,0,0,0.15)' : 'none'
                                                        }}
                                                    >
                                                        <Eye className="w-4 h-4" />
                                                        <span>Lire</span>
                                                    </button>
                                                    <a
                                                        href={formation.pdf}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="p-3 bg-gray-900 text-white hover:bg-black transition-colors"
                                                        onClick={(e) => e.stopPropagation()}
                                                    >
                                                        <Download className="w-5 h-5" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* FAQ Section */}
            <div className="bg-black text-white py-20">
                <div className="max-w-4xl mx-auto px-6">
                    <h2 className="text-5xl font-black mb-4">En Mission</h2>
                    <p className="text-xl text-gray-400 mb-12">Réponses rapides aux objections courantes</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                            { q: "Je ne crois que ce que je vois", a: "La beauté de l'univers, le désir d'infini, les vies transformées : autant d'indices de Dieu." },
                            { q: "Pourquoi la souffrance ?", a: "Dieu vient partager notre souffrance par la Croix et la remplir de sa présence." },
                            { q: "Pas besoin d'Église", a: "L'Église donne les sacrements essentiels. Un membre coupé du corps ne survit pas." },
                            { q: "L'Église est hypocrite", a: "Elle est sainte par le Christ mais ses membres sont en chemin de conversion." },
                            { q: "Évangiles modifiés", a: "Des milliers de manuscrits anciens. Les apôtres sont morts pour ce témoignage." },
                            { q: "Je ne peux pas pardonner", a: "Le pardon libère d'abord celui qui pardonne. Avec Dieu, l'impossible devient possible." }
                        ].map((faq, idx) => (
                            <div key={idx} className="border-l-4 border-orange-500 pl-4 py-3">
                                <div className="font-bold mb-2">"{faq.q}"</div>
                                <div className="text-sm text-gray-400">{faq.a}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* MODAL */}
            {selectedFormation && (
                <div className="fixed inset-0 bg-black/98 z-50 flex items-center justify-center p-4">
                    <button
                        onClick={() => setSelectedFormation(null)}
                        className="absolute top-6 right-6 text-white hover:text-orange-500 transition-colors"
                    >
                        <X className="w-8 h-8" />
                    </button>

                    <div className="w-full max-w-6xl h-[90vh] bg-white rounded-lg overflow-hidden shadow-2xl">
                        <iframe
                            src={`https://docs.google.com/gview?url=${encodeURIComponent(selectedFormation.pdf)}&embedded=true`}
                            className="w-full h-full"
                            title={selectedFormation.title}
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default FormationsPage;