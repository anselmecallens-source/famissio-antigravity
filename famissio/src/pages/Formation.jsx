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
            title: 'Fondamentaux de la Foi',
            count: 6,
            color: '#c82904',
            gradient: 'from-red-600 to-orange-500',
            image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=600',
            formations: [
                { id: 1, title: "Dieu existe-t-il ?", desc: "Arguments rationnels et philosophiques pour soutenir l'existence de Dieu", pdf: "https://www.dropbox.com/scl/fi/gxeuxskdawmc8h1sa1lgx/10-Quels-sont-les-preuves-de-l-existence-de-Dieu.pdf?rlkey=wsr4rl5gyy98gw0w9fg7lt8n2&st=ugcak1yi&raw=1" },
                { id: 2, title: "La Trinité", desc: "Un Dieu unique en trois personnes : Père, Fils et Saint-Esprit", pdf: "https://www.dropbox.com/scl/fi/hi7cwj9h93xrlk6fdyt3h/12-Comment-expliquer-simplement-la-Trinit.pdf?rlkey=uwm8idppua8ydsncrofy30j6n&st=fj6v0waf&raw=1" },
                { id: 3, title: "Dieu fait Homme", desc: "Pourquoi Dieu a choisi de partager notre condition humaine", pdf: "https://www.dropbox.com/scl/fi/cxxsrs6unfscii0hxv3ug/11-Pourquoi-Dieu-s-est-fait-homme.pdf?rlkey=citj0u78m84pqe82ioymn5gtt&st=up04c10b&raw=1" },
                { id: 4, title: "Véracité des Évangiles", desc: "Prouver la fiabilité des textes sacrés et du témoignage apostolique", pdf: "https://www.dropbox.com/scl/fi/1t3it5m8blri0m9qlyrc0/14-Comment-prouver-la-v-racit-des-vangiles.pdf?rlkey=lcnmsqxjx7okgk1v1pqjv2r0z&st=xpxqusbv&raw=1" },
                { id: 5, title: "La Miséricorde", desc: "Témoigner d'un amour qui pardonne et relève", pdf: "https://www.dropbox.com/scl/fi/6x4oz51p2ar3a4gggz4s5/9-Comment-t-moigner-de-la-mis-ricorde-de-Dieu.pdf?rlkey=3eek1gb3warec8tl69o40cvdy&st=e9o3lu4u&raw=1" },
                { id: 6, title: "La Vie Éternelle", desc: "Annoncer notre destinée ultime et l'espérance chrétienne", pdf: "https://www.dropbox.com/scl/fi/388cdic3scxdjwfon62wu/1-Comment-annoncer-la-vie-ternelle.pdf?rlkey=7rplgl8i76h13bwt8u5qz3vgx&st=pw9xzni7&raw=1" }
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
                { id: 7, title: "Répondre à l'Indifférent", desc: "Celui qui n'a pas besoin de Dieu et trouve son bonheur ailleurs", pdf: "https://www.dropbox.com/scl/fi/sistxpoev7z65xt2racgt/5-Que-r-pondre-l-indiff-rent-qui-n-a-pas-besoin-de-Dieu.pdf?rlkey=bdjc0yvfqtlkm2axxe2q74s6e&st=vlrb3spf&raw=1" },
                { id: 8, title: "Celui qui souffre", desc: "Accompagner la douleur et le deuil avec présence", pdf: "https://www.dropbox.com/scl/fi/4jg617ap9ean6nbrcejrk/4-Que-r-pondre-celui-qui-souffre.pdf?rlkey=2zipvtosv7btbl5iwk4ts2cv7&st=wlg2c5cd&raw=1" },
                { id: 9, title: "Dialogue avec les Musulmans", desc: "Témoigner avec respect et clarté de sa foi chrétienne", pdf: "https://www.dropbox.com/scl/fi/0mxwoqkxlfc6ml1d196uw/13-Que-r-pondre-un-musulman.pdf?rlkey=016t41w0vbcgrqnsx7hmsbsci&st=a3av3qfe&raw=1" },
                { id: 10, title: "L'Église : Sainte mais pécheresse", desc: "Sainte mais imparfaite à cause des fautes de ses membres", pdf: "https://www.dropbox.com/scl/fi/8fystg103uj375yen44pz/6-Que-r-pondre-celui-qui-rejette-l-Eglise-sainte-mais-imparfaite.pdf?rlkey=wh1jsmwcvpiqqixo14l2pmpng&st=hhavtdpa&raw=1" },
                { id: 11, title: "Je prie seul, sans l'Église", desc: "Pourquoi la communauté et les sacrements sont essentiels", pdf: "https://www.dropbox.com/scl/fi/pzi69x7u3k3r5j7wsegsz/7-Que-r-pondre-celui-qui-prie-seul-et-n-a-pas-besoin-de-l-Eglise.pdf?rlkey=nqhn10gy5axzszuwbffqstlcn&st=9tii22v4&raw=1" },
                { id: 12, title: "Divorcés - Remariés", desc: "Accueillir avec vérité et charité", pdf: "https://www.dropbox.com/scl/fi/8i83msy562og2s81gv252/8-Que-dire-des-personnes-s-par-es-remari-es.pdf?rlkey=yxgt51ofz5tiqnsafadgv6dzp&st=3amln5uf&raw=1" },
                { id: 13, title: "Sciences Occultes", desc: "Les dangers cachés de ces pratiques", pdf: "https://www.dropbox.com/scl/fi/z85vwsygdfqtt6o3cpnxs/17-Quel-sont-les-dangers-des-sciences-occultes.pdf?rlkey=mi9ukcn3wbuj7bcmly1eiy8yl&st=75xbo8pi&raw=1" }
            ]
        },
        {
            id: 'spirituel',
            icon: Heart,
            title: 'Vivre sa foi',
            count: 5,
            color: '#1a1a1a',
            gradient: 'from-gray-900 to-gray-700',
            image: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=600',
            formations: [
                { id: 14, title: "Annoncer avec la Parole", desc: "Utiliser la Parole de Dieu pour toucher les cœurs", pdf: "https://www.dropbox.com/scl/fi/edywe39fgmjlky8wx2i4j/Mission-avec-la-parole-de-Dieu.pdf?rlkey=o3ucv7ystsgbtdlbdzo3erc09&st=ztcgw8vp&raw=1" },
                { id: 15, title: "Couple et Mission", desc: "Le mariage comme socle de l'évangélisation", pdf: "https://www.dropbox.com/scl/fi/62nd3rwd4vvksi2jmafpz/16-Quels-fruits-pour-la-mission-en-couple.pdf?rlkey=u8kcwjnsm6p0vx0vaw7xxh2c9&st=icad0a71&raw=1" },
                { id: 16, title: "La Gratitude", desc: "Transformer son regard sur la vie", pdf: "https://www.dropbox.com/scl/fi/sgdnsvxzaulfz6ocgqwfe/15-Comment-vivre-de-la-gratitude.pdf?rlkey=o77tachq7mo02jpwvkcpi5naw&st=lrxustq8&raw=1" },
                { id: 17, title: "Le Pardon", desc: "Un chemin de libération intérieure et spirituelle", pdf: "https://www.dropbox.com/scl/fi/gjeam66o0nt3pzytja4gq/3-Pourquoi-et-comment-pardonner.pdf?rlkey=d934fv994tgi73e9chaaumhaf&st=w1n95j9v&raw=1" },
                { id: 18, title: "Comment Dieu nous guide", desc: "Reconnaître les signes de Dieu au quotidien", pdf: "https://www.dropbox.com/scl/fi/024ir8x8m6cx476zkmqs4/2-Comment-Dieu-nous-guide-t-il.pdf?rlkey=wprqiszi0amwzu2wnalslrm8c&st=hirb085n&raw=1" }
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

        .blob {
          border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
          animation: morph 8s ease-in-out infinite;
        }
          
        @keyframes morph {
          0%, 100% { border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; }
          50% { border-radius: 70% 30% 30% 70% / 70% 70% 30% 30%; }
        }
      `}</style>

            {/* HERO */}
            <div className="relative bg-gray-50 text-gray-900 overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute top-20 left-20 w-96 h-96 bg-orange-200 blob opacity-20"></div>
                    <div className="absolute bottom-10 right-10 w-64 h-64 bg-red-200 blob opacity-20" style={{ animationDelay: '2s' }}></div>
                </div>

                <div className="relative max-w-7xl mx-auto px-6 py-24">
                    <h1 className="text-7xl sm:text-9xl font-black mb-8 leading-none text-center text-orange-600" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                        Formation
                    </h1>

                    <p className="text-xl text-center max-w-3xl mx-auto text-gray-700 leading-relaxed font-medium">
                        Retrouvez ici les 18 formations essentielles pour nourrir votre foi et vous aider à répondre aux questions en mission.
                    </p>
                </div>
            </div>

            {/* Bande orange décorative en bas (Style Témoignages : Largeur visuelle) */}
            <div className="bg-orange-100 h-12 border-y border-orange-200"></div>

            {/* THEME SELECTION */}
            {!selectedTheme && (
                <div className="max-w-7xl mx-auto px-6 py-20">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-black mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                            Choisissez votre thème
                        </h2>
                        <p className="text-xl text-gray-600 mb-8">
                            Sélectionnez un domaine pour explorer les formations
                        </p>

                        <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 max-w-3xl mx-auto">
                            <p className="text-gray-800 font-medium italic">
                                💡 "Il n'y a pas de réponse toute faite. L'Esprit Saint vous donnera la parole juste. Soyez les instruments du Seigneur en privilégiant l'écoute et la prière pour chaque rencontre."
                            </p>
                        </div>
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
                                    <div className="relative rounded-2xl shadow-xl overflow-hidden h-[420px] group-hover:h-[460px] transition-all duration-500">
                                        {/* Image de fond */}
                                        <div className="absolute inset-0">
                                            <img
                                                src={theme.image}
                                                alt={theme.title}
                                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                            />
                                            <div className={`absolute inset-0 bg-gradient-to-br ${theme.gradient} opacity-90`}></div>
                                        </div>

                                        <div className="relative p-10">
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