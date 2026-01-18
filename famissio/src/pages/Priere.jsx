import React, { useState, useRef } from 'react';
import { Play, Pause, Download, Music, BookOpen, ChevronDown, ChevronUp } from 'lucide-react';

export default function Priere() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
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
        }
    };

    const handleTimeUpdate = () => {
        if (audioRef.current) {
            setCurrentTime(audioRef.current.currentTime);
        }
    };

    const handleLoadedMetadata = () => {
        if (audioRef.current) {
            setDuration(audioRef.current.duration);
        }
    };

    const handleSeek = (e) => {
        const time = parseFloat(e.target.value);
        if (audioRef.current) {
            audioRef.current.currentTime = time;
            setCurrentTime(time);
        }
    };

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds.toString().padStart(2, '0')}`;
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
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <div className="relative overflow-hidden pt-12 pb-6">
                <div className="relative max-w-5xl mx-auto px-6">
                    <div className="text-center">

                        <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight text-red-700" style={{ fontFamily: "'Playfair Display', serif" }}>
                            Prière de Famissio
                        </h1>
                        <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
                            Une prière pour inspirer la mission et la foi dans nos cœurs
                        </p>
                    </div>
                </div>
            </div>

            {/* Main Content - Full Width Mobile / Boxed Desktop */}
            <div className="w-full md:max-w-5xl md:mx-auto md:px-6 py-12 md:py-12 space-y-[135px] md:space-y-24 pb-20">

                {/* Audio Section */}
                <div className="bg-white border-b md:border md:rounded-2xl md:shadow-xl md:overflow-hidden border-red-100">
                    <button
                        onClick={() => toggleSection('audio')}
                        className={`w-full flex items-center justify-between py-6 px-6 md:p-6 hover:bg-red-50 transition-colors md:rounded-t-2xl ${expandedSections.audio ? '' : 'md:rounded-b-2xl'
                            }`}
                    >
                        <div className="w-full flex items-center justify-between">
                            <div className="flex items-center gap-4 md:gap-3">
                                <div className="p-3 bg-red-100 rounded-xl">
                                    <Music className="w-6 h-6 text-red-600" />
                                </div>
                                <h2 className="text-2xl md:text-2xl font-bold text-gray-900">Écouter la prière</h2>
                            </div>
                            {expandedSections.audio ? (
                                <ChevronUp className="w-6 h-6 text-gray-400" />
                            ) : (
                                <ChevronDown className="w-6 h-6 text-gray-400" />
                            )}
                        </div>
                    </button>

                    {expandedSections.audio && (
                        <div className="bg-red-50/50 py-10 px-6 md:px-6 md:pb-6">
                            <div className="max-w-4xl mx-auto md:max-w-none">
                                <div className="bg-white rounded-xl p-6 md:p-6 shadow-sm border border-red-100 md:bg-gradient-to-br md:from-red-50 md:to-orange-50">
                                    <audio
                                        ref={audioRef}
                                        onPlay={() => setIsPlaying(true)}
                                        onPause={() => setIsPlaying(false)}
                                        onEnded={() => setIsPlaying(false)}
                                        onTimeUpdate={handleTimeUpdate}
                                        onLoadedMetadata={handleLoadedMetadata}
                                        className="hidden"
                                    >
                                        <source
                                            src="https://www.dropbox.com/scl/fi/rfe9jg3wfuz5md6an1imo/Audio-pri-re-de-famissio.mp3?rlkey=xpoq3vwmmc5mjngd1alty6hro&st=rdmaslcu&raw=1"
                                            type="audio/mpeg"
                                        />
                                    </audio>

                                    <div className="flex items-center gap-4 md:gap-6">
                                        <button
                                            onClick={togglePlay}
                                            className="flex-shrink-0 w-16 h-16 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center text-white transition-all shadow-lg hover:shadow-xl hover:scale-105"
                                        >
                                            {isPlaying ? (
                                                <Pause className="w-7 h-7" fill="currentColor" />
                                            ) : (
                                                <Play className="w-7 h-7 ml-1" fill="currentColor" />
                                            )}
                                        </button>

                                        <div className="flex-1 space-y-3 md:space-y-2">
                                            <p className="text-base md:text-sm font-semibold text-red-900">
                                                Audio - Prière de Famissio
                                            </p>

                                            <div className="flex items-center gap-4 md:gap-3">
                                                <span className="text-xs font-medium text-red-700 tabular-nums w-10">
                                                    {formatTime(currentTime)}
                                                </span>

                                                <div className="relative flex-1 h-2 group">
                                                    <input
                                                        type="range"
                                                        min={0}
                                                        max={duration || 0}
                                                        value={currentTime}
                                                        onChange={handleSeek}
                                                        className="absolute w-full h-full opacity-0 cursor-pointer z-10"
                                                    />
                                                    <div className="absolute top-0 left-0 w-full h-full bg-red-200 rounded-full overflow-hidden">
                                                        <div
                                                            className="h-full bg-red-600 rounded-full transition-all duration-100 ease-out"
                                                            style={{ width: `${(currentTime / (duration || 1)) * 100}%` }}
                                                        />
                                                    </div>
                                                    <div
                                                        className="absolute top-1/2 -mt-2 w-4 h-4 bg-white border-2 border-red-600 rounded-full shadow-md transform scale-0 group-hover:scale-100 transition-transform duration-200 pointer-events-none"
                                                        style={{ left: `calc(${((currentTime / (duration || 1)) * 100)}% - 8px)` }}
                                                    />
                                                </div>

                                                <span className="text-xs font-medium text-red-700 tabular-nums w-10 text-right">
                                                    {formatTime(duration)}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* Paroles Section */}
                <div className="bg-white border-b md:border md:rounded-2xl md:shadow-xl md:overflow-hidden border-orange-100">
                    <button
                        onClick={() => toggleSection('paroles')}
                        className={`w-full flex items-center justify-between py-6 px-6 md:p-6 hover:bg-orange-50 transition-colors md:rounded-t-2xl ${expandedSections.paroles ? '' : 'md:rounded-b-2xl'
                            }`}
                    >
                        <div className="w-full flex items-center justify-between">
                            <div className="flex items-center gap-4 md:gap-3">
                                <div className="p-3 bg-orange-100 rounded-xl">
                                    <BookOpen className="w-6 h-6 text-orange-600" />
                                </div>
                                <h2 className="text-2xl md:text-2xl font-bold text-gray-900">Paroles</h2>
                            </div>
                            {expandedSections.paroles ? (
                                <ChevronUp className="w-6 h-6 text-gray-400" />
                            ) : (
                                <ChevronDown className="w-6 h-6 text-gray-400" />
                            )}
                        </div>
                    </button>

                    {expandedSections.paroles && (
                        <div className="bg-orange-50/30 py-10 px-6 md:px-6 md:pb-6 md:space-y-6">
                            <div className="max-w-4xl mx-auto md:max-w-none space-y-8 md:space-y-6">
                                {stanzas.map((stanza, idx) => (
                                    <React.Fragment key={idx}>
                                        <div className="bg-white rounded-xl p-8 md:p-6 border-l-4 border-orange-500 shadow-sm md:bg-gradient-to-br md:from-amber-50 md:to-orange-50">
                                            <p className="font-bold text-red-700 mb-4 md:mb-3 text-xl md:text-lg">{stanza.title}</p>
                                            <div className="space-y-2 md:space-y-1 text-gray-700 leading-relaxed text-lg md:text-base">
                                                {stanza.text.map((line, lineIdx) => (
                                                    <p key={lineIdx}>{line}</p>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Refrain après chaque strophe */}
                                        <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-xl p-8 md:p-6 border border-red-200/50 md:border-red-300">
                                            <div className="flex items-center gap-2 mb-4 md:mb-3">
                                                <span className="text-sm md:text-xs font-bold tracking-widest text-red-600 uppercase">
                                                    Refrain
                                                </span>
                                            </div>
                                            <div className="space-y-2 md:space-y-1 text-gray-800 leading-relaxed font-semibold text-lg md:text-base italic">
                                                {refrain.map((line, lineIdx) => (
                                                    <p key={lineIdx}>{line}</p>
                                                ))}
                                            </div>
                                        </div>
                                    </React.Fragment>
                                ))}

                                <div className="flex justify-center pt-8 md:pt-0">
                                    <button
                                        onClick={() => window.open('https://www.dropbox.com/scl/fi/9mtui0z00cblc6zzmk1m2/Paroles-Pri-re-de-Famissio.pdf?rlkey=ux2phadjuhkglogijgbxgvm62&st=9oso3jhe&raw=1', '_blank')}
                                        className="w-full md:w-auto flex items-center justify-center gap-3 px-8 py-4 md:px-6 md:py-3 bg-red-600 hover:bg-red-700 text-white font-bold md:font-semibold rounded-full md:rounded-xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
                                    >
                                        <Download className="w-5 h-5" />
                                        Télécharger le PDF des paroles
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* Partition Section */}
                <div className="bg-white border-b md:border md:rounded-2xl md:shadow-xl md:overflow-hidden border-amber-100">
                    <button
                        onClick={() => toggleSection('partition')}
                        className={`w-full flex items-center justify-between py-6 px-6 md:p-6 hover:bg-amber-50 transition-colors md:rounded-t-2xl ${expandedSections.partition ? '' : 'md:rounded-b-2xl'
                            }`}
                    >
                        <div className="w-full flex items-center justify-between">
                            <div className="flex items-center gap-4 md:gap-3">
                                <div className="p-3 bg-amber-100 rounded-xl">
                                    <Music className="w-6 h-6 text-amber-600" />
                                </div>
                                <h2 className="text-2xl md:text-2xl font-bold text-gray-900">Partition</h2>
                            </div>
                            {expandedSections.partition ? (
                                <ChevronUp className="w-6 h-6 text-gray-400" />
                            ) : (
                                <ChevronDown className="w-6 h-6 text-gray-400" />
                            )}
                        </div>
                    </button>

                    {expandedSections.partition && (
                        <div className="bg-amber-50/30 py-10 px-6 md:px-6 md:pb-6">
                            <div className="max-w-5xl mx-auto md:max-w-none">
                                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm md:bg-gray-50">
                                    <iframe
                                        className="w-full h-[80vh] md:h-[600px]"
                                        title="Partition – Prière de Famissio"
                                        src="https://www.dropbox.com/scl/fi/c1h0blprgjxokwjxmjhqv/Partition-Pri-re-de-Famissio.pdf?rlkey=2mfpev3xx17dptwx1pn8nwl85&st=q0ntoisa&raw=1#view=FitH&toolbar=0"
                                    />
                                </div>
                                <div className="flex justify-center pt-8 md:pt-4">
                                    <button
                                        onClick={() => window.open('https://www.dropbox.com/scl/fi/c1h0blprgjxokwjxmjhqv/Partition-Pri-re-de-Famissio.pdf?rlkey=2mfpev3xx17dptwx1pn8nwl85&st=q0ntoisa&raw=1', '_blank')}
                                        className="w-full md:w-auto flex items-center justify-center gap-3 px-8 py-4 md:px-6 md:py-3 bg-red-600 hover:bg-red-700 text-white font-bold md:font-semibold rounded-full md:rounded-xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
                                    >
                                        <Download className="w-5 h-5" />
                                        Télécharger la partition PDF
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>


        </div>
    );
}
