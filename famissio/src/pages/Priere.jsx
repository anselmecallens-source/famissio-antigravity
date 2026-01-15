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
        <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
            {/* Hero Section */}
            <div className="relative overflow-hidden pt-12 pb-6">
                <div className="relative max-w-5xl mx-auto px-6">
                    <div className="text-center">

                        <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight text-red-700">
                            Prière de Famissio
                        </h1>
                        <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
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
                        className="w-full flex items-center justify-between p-6 transition-colors"
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

                                    <div className="flex-1 space-y-2">
                                        <p className="text-sm font-semibold text-red-900">
                                            Audio - Prière de Famissio
                                        </p>

                                        <div className="flex items-center gap-3">
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
                    )}
                </section>

                {/* Paroles Section */}
                <section className="bg-white rounded-2xl shadow-xl overflow-hidden border border-red-100">
                    <button
                        onClick={() => toggleSection('paroles')}
                        className="w-full flex items-center justify-between p-6 transition-colors"
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
                                onClick={() => window.open('https://www.dropbox.com/scl/fi/9mtui0z00cblc6zzmk1m2/Paroles-Pri-re-de-Famissio.pdf?rlkey=ux2phadjuhkglogijgbxgvm62&st=9oso3jhe&raw=1', '_blank')}
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
                        className="w-full flex items-center justify-between p-6 transition-colors"
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
                                    src="https://www.dropbox.com/scl/fi/c1h0blprgjxokwjxmjhqv/Partition-Pri-re-de-Famissio.pdf?rlkey=2mfpev3xx17dptwx1pn8nwl85&st=q0ntoisa&raw=1#view=FitH&toolbar=0"
                                />
                            </div>
                            <button
                                onClick={() => window.open('https://www.dropbox.com/scl/fi/c1h0blprgjxokwjxmjhqv/Partition-Pri-re-de-Famissio.pdf?rlkey=2mfpev3xx17dptwx1pn8nwl85&st=q0ntoisa&raw=1', '_blank')}
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
