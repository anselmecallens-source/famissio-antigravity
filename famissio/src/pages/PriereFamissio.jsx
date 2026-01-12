import React, { useState, useRef } from 'react';
import { Play, Pause, Download, Music, BookOpen, ChevronDown, ChevronUp } from 'lucide-react';

export default function PriereFamissio() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [expandedSections, setExpandedSections] = useState({
        audio: true,
        paroles: true,
        partition: true
    });
    const audioRef = useRef(null);

    const togglePlay = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    const toggleSection = (section) => {
        setExpandedSections(prev => ({
            ...prev,
            [section]: !prev[section]
        }));
    };

    const stanzas = [
        {
            title: "PRIÈRE DE FAMISSIO",
            text: [
                "Loué sois-Tu pour Ton Église qui œuvre partout dans le monde.",
                "Seigneur, multiplie Tes disciples pour mieux révéler Ta présence",
                "Et annoncer que Tu demeures un Père plein de miséricorde",
                "Fais de nous tous des missionnaires généreux, dociles et ardents."
            ]
        },
        {
            title: "Seigneur, Jésus,",
            text: [
                "Loué sois-tu pour Notre-Dame, que tu nous donnes pour modèle.",
                "Qu'à son exemple nous soyons fidèles témoins de Ton amour.",
                "Pétris nos cœurs de charité, rends-nous attentifs à nos frères,",
                "Fais-nous voir Ton visage en l'autre, ouvre les cœurs les plus endurcis."
            ]
        },
        {
            title: "Seigneur, Jésus,",
            text: [
                "Loué sois-Tu de nous avoir ainsi donné la Sainte Famille.",
                "Qu'à son exemple, nos familles puissent grandir et porter du fruit.",
                "Que notre foi devienne ardente et notre cœur rempli d'Espérance.",
                "Que nos paroles et nos actions soient toutes pour Ta plus grande gloire."
            ]
        }
    ];

    const refrain = [
        "Que L'Esprit nous insuffle l'audace et l'humilité,",
        "La foi, la joie et l'amour pour faire de nous des missionnaires."
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
            {/* Hero Section */}
            <div className="relative overflow-hidden bg-gradient-to-r from-red-700 via-red-600 to-orange-600 text-white">
                <div className="absolute inset-0 bg-black opacity-10"></div>
                <div className="absolute inset-0" style={{
                    backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)',
                }}></div>

                <div className="relative max-w-5xl mx-auto px-6 py-16 md:py-24">
                    <div className="text-center">
                        <div className="inline-block mb-4 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold">
                            Association Famissio
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">
                            Prière de Famissio
                        </h1>
                        <p className="text-lg md:text-xl text-red-100 max-w-2xl mx-auto">
                            Une prière pour inspirer la mission et la foi dans nos cœurs
                        </p>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-5xl mx-auto px-6 py-12 space-y-6">

                {/* Audio Section */}
                <section className="bg-white rounded-2xl shadow-xl overflow-hidden border border-red-100">
                    <button
                        onClick={() => toggleSection('audio')}
                        className="w-full flex items-center justify-between p-6 hover:bg-red-50 transition-colors"
                    >
                        <div className="flex items-center gap-3">
                            <div className="p-3 bg-red-100 rounded-xl">
                                <Music className="w-6 h-6 text-red-600" />
                            </div>
                            <h2 className="text-2xl font-bold text-gray-900">Écouter la prière</h2>
                        </div>
                        {expandedSections.audio ? (
                            <ChevronUp className="w-6 h-6 text-gray-400" />
                        ) : (
                            <ChevronDown className="w-6 h-6 text-gray-400" />
                        )}
                    </button>

                    {expandedSections.audio && (
                        <div className="px-6 pb-6">
                            <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-6 border border-red-100">
                                <audio
                                    ref={audioRef}
                                    onPlay={() => setIsPlaying(true)}
                                    onPause={() => setIsPlaying(false)}
                                    onEnded={() => setIsPlaying(false)}
                                    className="hidden"
                                >
                                    <source
                                        src="https://famissio-99.webself.net/file/si1759337/download/Audio%20-%20Pri%C3%A8re%20de%20famissio-fi36531802.mp3"
                                        type="audio/mpeg"
                                    />
                                </audio>

                                <div className="flex items-center gap-4">
                                    <button
                                        onClick={togglePlay}
                                        className="flex-shrink-0 w-16 h-16 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center text-white transition-all shadow-lg hover:shadow-xl"
                                    >
                                        {isPlaying ? (
                                            <Pause className="w-7 h-7" fill="currentColor" />
                                        ) : (
                                            <Play className="w-7 h-7 ml-1" fill="currentColor" />
                                        )}
                                    </button>

                                    <div className="flex-1">
                                        <p className="text-sm font-semibold text-red-900 mb-1">
                                            Audio - Prière de Famissio
                                        </p>
                                        <audio
                                            controls
                                            className="w-full"
                                            src="https://famissio-99.webself.net/file/si1759337/download/Audio%20-%20Pri%C3%A8re%20de%20famissio-fi36531802.mp3"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </section>

                {/* Paroles Section */}
                <section className="bg-white rounded-2xl shadow-xl overflow-hidden border border-red-100">
                    <button
                        onClick={() => toggleSection('paroles')}
                        className="w-full flex items-center justify-between p-6 hover:bg-red-50 transition-colors"
                    >
                        <div className="flex items-center gap-3">
                            <div className="p-3 bg-orange-100 rounded-xl">
                                <BookOpen className="w-6 h-6 text-orange-600" />
                            </div>
                            <h2 className="text-2xl font-bold text-gray-900">Paroles</h2>
                        </div>
                        {expandedSections.paroles ? (
                            <ChevronUp className="w-6 h-6 text-gray-400" />
                        ) : (
                            <ChevronDown className="w-6 h-6 text-gray-400" />
                        )}
                    </button>

                    {expandedSections.paroles && (
                        <div className="px-6 pb-6 space-y-6">
                            {stanzas.map((stanza, idx) => (
                                <React.Fragment key={idx}>
                                    <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-6 border-l-4 border-orange-500">
                                        <p className="font-bold text-red-700 mb-3 text-lg">{stanza.title}</p>
                                        <div className="space-y-1 text-gray-700 leading-relaxed">
                                            {stanza.text.map((line, lineIdx) => (
                                                <p key={lineIdx}>{line}</p>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Refrain après chaque strophe */}
                                    <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-6 border-2 border-dashed border-red-300">
                                        <div className="flex items-center gap-2 mb-3">
                                            <span className="text-xs font-bold tracking-wider text-red-600 uppercase">
                                                Refrain
                                            </span>
                                        </div>
                                        <div className="space-y-1 text-gray-700 leading-relaxed font-medium">
                                            {refrain.map((line, lineIdx) => (
                                                <p key={lineIdx}>{line}</p>
                                            ))}
                                        </div>
                                    </div>
                                </React.Fragment>
                            ))}

                            <button
                                onClick={() => window.open('https://famissio-99.webself.net/file/si1759337/download/Paroles%20-%20Pri%C3%A8re%20de%20Famissio-fi36531805.pdf', '_blank')}
                                className="w-full md:w-auto flex items-center justify-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-xl transition-all shadow-lg hover:shadow-xl"
                            >
                                <Download className="w-5 h-5" />
                                Télécharger le PDF des paroles
                            </button>
                        </div>
                    )}
                </section>

                {/* Partition Section */}
                <section className="bg-white rounded-2xl shadow-xl overflow-hidden border border-red-100">
                    <button
                        onClick={() => toggleSection('partition')}
                        className="w-full flex items-center justify-between p-6 hover:bg-red-50 transition-colors"
                    >
                        <div className="flex items-center gap-3">
                            <div className="p-3 bg-amber-100 rounded-xl">
                                <Music className="w-6 h-6 text-amber-600" />
                            </div>
                            <h2 className="text-2xl font-bold text-gray-900">Partition</h2>
                        </div>
                        {expandedSections.partition ? (
                            <ChevronUp className="w-6 h-6 text-gray-400" />
                        ) : (
                            <ChevronDown className="w-6 h-6 text-gray-400" />
                        )}
                    </button>

                    {expandedSections.partition && (
                        <div className="px-6 pb-6">
                            <div className="bg-gray-50 rounded-xl overflow-hidden border border-gray-200">
                                <iframe
                                    className="w-full h-[600px]"
                                    title="Partition – Prière de Famissio"
                                    src="https://famissio-99.webself.net/file/si1759337/Partition%20-%20Prie%CC%80re%20de%20Famissio%20-fi36531803.pdf#view=FitH&toolbar=0"
                                />
                            </div>
                            <button
                                onClick={() => window.open('https://famissio-99.webself.net/file/si1759337/download/Partition%20-%20Prie%CC%80re%20de%20Famissio%20-fi36531803.pdf', '_blank')}
                                className="mt-4 w-full md:w-auto flex items-center justify-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-xl transition-all shadow-lg hover:shadow-xl"
                            >
                                <Download className="w-5 h-5" />
                                Télécharger la partition PDF
                            </button>
                        </div>
                    )}
                </section>
            </div>


        </div>
    );
}
