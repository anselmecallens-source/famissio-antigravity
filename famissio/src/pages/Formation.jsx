import React, { useState } from 'react';
import { X, Download, ChevronRight, BookOpen, MessageCircle, Heart } from 'lucide-react';

const FormationsPage = () => {
    const [selectedTheme, setSelectedTheme] = useState(null);
    const [selectedFormation, setSelectedFormation] = useState(null);
    const [hoveredFormation, setHoveredFormation] = useState(null);

    const themes = [
        {
            id: 'fondamentaux',
            icon: BookOpen,
            title: 'Fondamentaux',
            count: 6,
            color: '#c82904',
            gradient: 'from-red-600 to-orange-500',
            image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=600',
            formations: [
                { id: 1, title: "Dieu existe-t-il ?", desc: "Arguments rationnels et philosophiques pour soutenir l'existence de Dieu", pdf: "https://famissio-99.webself.net/file/si1759337/download/10-%20Quels%20sont%20les%20preuves%20de%20l%E2%80%99existence%20de%20Dieu-fi36256494.pdf" },
                { id: 2, title: "La Trinité", desc: "Un Dieu unique en trois personnes : Père, Fils et Saint-Esprit", pdf: "https://famissio-99.webself.net/file/si1759337/download/12-%20Comment%20expliquer%20simplement%20la%20Trinit%C3%A9-fi36256492.pdf" },
                { id: 3, title: "Dieu fait Homme", desc: "Pourquoi Dieu a choisi de partager notre condition humaine", pdf: "https://famissio-99.webself.net/file/si1759337/download/11-%20Pourquoi%20Dieu%20s%E2%80%99est%20fait%20homme-fi36256487.pdf" },
                { id: 4, title: "Véracité des Évangiles", desc: "Prouver la fiabilité des textes sacrés et du témoignage apostolique", pdf: "https://famissio-99.webself.net/file/si1759337/download/14-%20Comment%20prouver%20la%20v%C3%A9racit%C3%A9%20des%20%C3%A9vangiles-fi36256490.pdf" },
                { id: 5, title: "La Miséricorde", desc: "Témoigner d'un amour qui pardonne et relève", pdf: "https://famissio-99.webself.net/file/si1759337/download/9-%20Comment%20t%C3%A9moigner%20de%20la%20mis%C3%A9ricorde%20de%20Dieu-fi36256500.pdf" },
                { id: 6, title: "La Vie Éternelle", desc: "Annoncer notre destinée ultime et l'espérance chrétienne", pdf: "https://famissio-99.webself.net/file/si1759337/download/1-%20Comment%20annoncer%20la%20vie%20%C3%A9ternelle-fi36256497.pdf" }
            ]
        },
        {
            id: 'rencontres',
            icon: MessageCircle,
            title: 'Rencontres Difficiles',
            count: 7,
            color: '#f46a07',
            gradient: 'from-orange-500 to-amber-500',
            image: 'https://images.unsplash.com/photo-1511884642898-4c92249e20b6?w=600',
            formations: [
                { id: 7, title: "Répondre à l'Indifférent", desc: "Celui qui n'a pas besoin de Dieu et trouve son bonheur ailleurs", pdf: "https://famissio-99.webself.net/file/si1759337/download/5-%20Que%20r%C3%A9pondre%20%C3%A0%20l%E2%80%99indiff%C3%A9rent%20qui%20n%E2%80%99a%20pas%20besoin%20de%20Dieu-fi36256493.pdf" },
                { id: 8, title: "Celui qui souffre", desc: "Accompagner la douleur et le deuil avec présence", pdf: "https://famissio-99.webself.net/file/si1759337/download/4-%20Que%20r%C3%A9pondre%20%C3%A0%20celui%20qui%20souffre-fi36256486.pdf" },
                { id: 9, title: "Dialogue avec les Musulmans", desc: "Témoigner avec respect et clarté de sa foi chrétienne", pdf: "https://famissio-99.webself.net/file/si1759337/download/13-%20Que%20r%C3%A9pondre%20%C3%A0%20un%20musulman-fi36256498.pdf" },
                { id: 10, title: "L'Église Pécheresse", desc: "Sainte mais imparfaite à cause des fautes de ses membres", pdf: "https://famissio-99.webself.net/file/si1759337/download/6-%20Que%20r%C3%A9pondre%20%C3%A0%20celui%20qui%20rejette%20l%E2%80%99Eglise%20sainte%20mais%20imparfaite-fi36256495.pdf" },
                { id: 11, title: "Je prie seul", desc: "Pourquoi la communauté et les sacrements sont essentiels", pdf: "https://famissio-99.webself.net/file/si1759337/download/7-%20Que%20r%C3%A9pondre%20%C3%A0%20celui%20qui%20prie%20seul%20et%20n%E2%80%99a%20pas%20besoin%20de%20l%E2%80%99Eglise-fi36256491.pdf" },
                { id: 12, title: "Divorcés - Remariés", desc: "Accueillir avec vérité et charité", pdf: "https://famissio-99.webself.net/file/si1759337/download/8-%20Que%20dire%20%C3%A0%20des%20personnes%20s%C3%A9par%C3%A9es%2C%20remari%C3%A9es-fi36256499.pdf" },
                { id: 13, title: "Sciences Occultes", desc: "Les dangers cachés de ces pratiques", pdf: "https://famissio-99.webself.net/file/si1759337/download/17-%20Quel%20sont%20les%20dangers%20des%20sciences%20occultes-fi36471285.pdf" }
            ]
        },
        {
            id: 'spirituel',
            icon: Heart,
            title: 'Vie Spirituelle',
            count: 5,
            color: '#1a1a1a',
            gradient: 'from-gray-900 to-gray-700',
            image: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=600',
            formations: [
                { id: 14, title: "Annoncer avec la Parole", desc: "Utiliser la Parole de Dieu pour toucher les cœurs", pdf: "https://famissio-99.webself.net/file/si1759337/download/Mission%20avec%20la%20parole%20de%20Dieu-fi36548922.pdf" },
                { id: 15, title: "Couple et Mission", desc: "Le mariage comme socle de l'évangélisation", pdf: "https://famissio-99.webself.net/file/si1759337/download/16-%20Quels%20fruits%20pour%20la%20mission%20en%20couple-fi36256501.pdf" },
                { id: 16, title: "La Gratitude", desc: "Transformer son regard sur la vie", pdf: "https://famissio-99.webself.net/file/si1759337/download/15-%20Comment%20vivre%20de%20la%20gratitude-fi36256488.pdf" },
                { id: 17, title: "Le Pardon", desc: "Un chemin de libération intérieure et spirituelle", pdf: "https://famissio-99.webself.net/file/si1759337/download/3-%20Pourquoi%20et%20comment%20pardonner-fi36256489.pdf" },
                { id: 18, title: "Comment Dieu nous guide", desc: "Reconnaître les signes de Dieu au quotidien", pdf: "https://famissio-99.webself.net/file/si1759337/download/2-%20Comment%20Dieu%20nous%20guide-t-il-fi36256496.pdf" }
            ]
        }
    ];

    const faqs = [
        { q: "Je ne crois que ce que je vois, prouvez-moi que Dieu existe", a: "On ne \"prouve\" pas Dieu comme une équation mathématique, mais des indices forts existent : la beauté et la complexité de l'univers, le désir d'infini inscrit dans le cœur de l'homme, ou le témoignage des vies transformées." },
        { q: "Si Dieu est bon, pourquoi tant de guerres et de souffrances ?", a: "Dieu n'a pas créé le mal. Le mal est souvent le fruit de la liberté humaine mal utilisée. Dieu ne supprime pas la souffrance magiquement, mais il vient la partager et la remplir de sa présence par la Croix." },
        { q: "Je suis croyant, je prie dans la nature, je n'ai pas besoin de l'Église", a: "La foi chrétienne n'est pas solitaire, elle est solidaire. L'Église est le Corps du Christ : un membre coupé du corps ne peut survivre longtemps. C'est l'Église qui nous donne les sacrements essentiels à la vie de l'âme." },
        { q: "L'Église est pleine d'hypocrites et de scandales", a: "C'est vrai, l'Église est composée de pécheurs, et c'est pour cela que Jésus est venu ! L'Église est sainte par sa tête (le Christ) et son but, mais ses membres sont en chemin de conversion. On ne rejette pas la médecine parce que le médecin est malade." },
        { q: "Les Évangiles ont été modifiés au fil du temps, c'est des légendes", a: "Historiquement faux. Nous avons des milliers de manuscrits très anciens, bien plus que pour n'importe quel autre texte de l'Antiquité. Les apôtres ont donné leur vie pour ce témoignage : on ne meurt pas pour un mensonge que l'on a inventé." },
        { q: "On m'a fait trop de mal, je ne pourrai jamais pardonner", a: "Le pardon n'est pas un sentiment (on a le droit d'avoir mal), c'est une décision de la volonté. C'est un chemin qui libère d'abord celui qui pardonne. Avec l'aide de Dieu, l'impossible devient possible." }
    ];

    const selectedThemeData = themes.find(t => t.id === selectedTheme);

    return (
        <div className="min-h-screen bg-gray-50">
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@700;800&family=Inter:wght@400;600&display=swap');
        
        .theme-card {
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .theme-card:hover {
          transform: translateY(-12px) scale(1.02);
        }
        
        .formation-reveal {
          animation: slideUp 0.6s ease-out forwards;
        }
        
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

            {/* HERO */}
            <div className="relative bg-white border-b-4 border-black">
                <div className="max-w-7xl mx-auto px-6 py-24">
                    <div className="flex items-start gap-8">
                        <div className="flex-1">
                            <div className="inline-block px-4 py-2 bg-black text-white text-xs font-bold tracking-widest mb-6">
                                ACADÉMIE FAMISSIO
                            </div>

                            <h1 className="text-7xl sm:text-8xl font-black mb-6 leading-none" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                                18 Formations
                            </h1>

                            <p className="text-2xl text-gray-700 mb-8 leading-relaxed max-w-2xl">
                                Choisissez votre thème pour découvrir les formations essentielles.
                                Préparez-vous à répondre avec justesse et compassion.
                            </p>

                            <div className="bg-orange-50 border-l-4 border-orange-500 p-6">
                                <p className="text-gray-800 font-semibold">
                                    💡 L'Esprit Saint vous guidera le moment venu. Restez à l'écoute de l'autre et portez chaque rencontre dans la prière.
                                </p>
                            </div>
                        </div>

                        <div className="hidden lg:block">
                            <div className="text-9xl font-black text-gray-100" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                                18
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* THEME SELECTION */}
            {!selectedTheme && (
                <div className="max-w-7xl mx-auto px-6 py-20">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-black mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                            Choisissez votre thème
                        </h2>
                        <p className="text-xl text-gray-600">
                            Sélectionnez un domaine pour explorer les formations
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {themes.map((theme, idx) => {
                            const Icon = theme.icon;
                            return (
                                <div
                                    key={theme.id}
                                    className="theme-card cursor-pointer group"
                                    onClick={() => setSelectedTheme(theme.id)}
                                    style={{ animationDelay: `${idx * 0.1}s` }}
                                >
                                    <div className="relative rounded-2xl shadow-xl overflow-hidden">
                                        {/* Image de fond */}
                                        <div className="absolute inset-0">
                                            <img
                                                src={theme.image}
                                                alt={theme.title}
                                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                            />
                                            <div className={`absolute inset-0 bg-gradient-to-br ${theme.gradient} opacity-90`}></div>
                                        </div>

                                        <div className="relative p-12">
                                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
                                            <div className="absolute bottom-0 left-0 w-24 h-24 bg-black/10 rounded-full -ml-12 -mb-12"></div>

                                            <div className="relative">
                                                <Icon className="w-16 h-16 text-white mb-6" />

                                                <h3 className="text-3xl font-black text-white mb-3" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                                                    {theme.title}
                                                </h3>

                                                <div className="flex items-center gap-3 text-white/90 mb-6">
                                                    <div className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-bold">
                                                        {theme.count} formations
                                                    </div>
                                                </div>

                                                <div className="flex items-center gap-2 text-white font-bold group-hover:gap-4 transition-all">
                                                    <span>Explorer</span>
                                                    <ChevronRight className="w-5 h-5" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            )}

            {/* FORMATIONS LIST */}
            {selectedTheme && selectedThemeData && (
                <div className="max-w-7xl mx-auto px-6 py-20">
                    <div className="mb-12">
                        <button
                            onClick={() => setSelectedTheme(null)}
                            className="text-gray-600 hover:text-black font-semibold mb-6 flex items-center gap-2 transition-colors"
                        >
                            ← Retour aux thèmes
                        </button>

                        <div className="flex items-center gap-6 mb-6">
                            {React.createElement(selectedThemeData.icon, {
                                className: "w-12 h-12",
                                style: { color: selectedThemeData.color }
                            })}
                            <div>
                                <h2 className="text-5xl font-black mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif', color: selectedThemeData.color }}>
                                    {selectedThemeData.title}
                                </h2>
                                <p className="text-xl text-gray-600">
                                    {selectedThemeData.count} formations disponibles
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-8">
                        {selectedThemeData.formations.map((formation, idx) => (
                            <div
                                key={formation.id}
                                className="formation-reveal bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow"
                                style={{ animationDelay: `${idx * 0.1}s` }}
                                onMouseEnter={() => setHoveredFormation(formation.id)}
                                onMouseLeave={() => setHoveredFormation(null)}
                            >
                                <div className="p-10">
                                    <div className="flex items-start justify-between gap-8">
                                        <div className="flex-1">
                                            <div className="mb-6">
                                                <div
                                                    className="text-7xl font-black opacity-15"
                                                    style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                                                >
                                                    {String(idx + 1).padStart(2, '0')}
                                                </div>
                                            </div>

                                            <h3 className="text-3xl font-black mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                                                {formation.title}
                                            </h3>

                                            <p className="text-lg text-gray-600 leading-relaxed mb-8">
                                                {formation.desc}
                                            </p>

                                            <div className="flex gap-3">
                                                <button
                                                    onClick={() => setSelectedFormation(formation)}
                                                    className="px-6 py-3 font-bold text-white rounded-lg transition-all flex items-center gap-2"
                                                    style={{
                                                        backgroundColor: selectedThemeData.color,
                                                        transform: hoveredFormation === formation.id ? 'translateY(-2px)' : 'none',
                                                        boxShadow: hoveredFormation === formation.id ? '0 8px 20px rgba(0,0,0,0.15)' : 'none'
                                                    }}
                                                >
                                                    <BookOpen className="w-5 h-5" />
                                                    <span>Lire la formation</span>
                                                </button>

                                                <a
                                                    href={formation.pdf}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="px-4 py-3 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors flex items-center"
                                                    onClick={(e) => e.stopPropagation()}
                                                >
                                                    <Download className="w-5 h-5 text-gray-700" />
                                                </a>
                                            </div>
                                        </div>

                                        <div
                                            className="hidden md:block w-2 h-40 rounded-full"
                                            style={{ backgroundColor: selectedThemeData.color }}
                                        ></div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* FAQ SECTION */}
            <div className="bg-white border-t-4 border-black py-20">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="mb-12">
                        <h2 className="text-5xl font-black mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                            Questions Fréquentes
                        </h2>
                        <p className="text-xl text-gray-600">
                            Les réponses aux objections les plus courantes en mission
                        </p>
                    </div>

                    <div className="space-y-6">
                        {faqs.map((faq, idx) => (
                            <div key={idx} className="bg-gray-50 rounded-xl p-8 border-l-4 border-orange-500">
                                <div className="mb-4">
                                    <span className="text-xs font-bold text-orange-500 tracking-widest">QUESTION</span>
                                    <h3 className="text-xl font-bold mt-2">« {faq.q} »</h3>
                                </div>
                                <div className="text-gray-700 leading-relaxed">
                                    {faq.a}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* MODAL */}
            {selectedFormation && (
                <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-6">
                    <button
                        onClick={() => setSelectedFormation(null)}
                        className="absolute top-8 right-8 text-white hover:text-orange-500 transition-colors"
                    >
                        <X className="w-10 h-10" />
                    </button>

                    <div className="w-full max-w-6xl h-[90vh] bg-white rounded-2xl overflow-hidden shadow-2xl">
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