import React, { useState } from 'react';
import { X, Play, MapPin, Calendar, ExternalLink, ChevronRight } from 'lucide-react';

const MissionsPage = () => {
  const [selectedMission, setSelectedMission] = useState(null);

  // Données consolidées depuis ton fichier HTML avec les nouvelles images Dropbox
  const missions = [
    {
      id: 't2025',
      year: '2025',
      title: "Toussaint 2025",
      subtitle: "Diocèse de Limoges (Haute-Vienne), Diocèse d'Angoulême (Charente), Diocèse de Tulle (Corrèze)",
      cities: ["Confolens", "Terres-de-Haute-Charente", "La Rochefoucauld", "Limoges", "Nantiat", "Boisseuil", "Brive-la-Gaillarde"],
      excerpt: "380 Famissionnaires se sont retrouvés pour un envoi en mission autour de Monseigneur Gosselin.",
      content: `380 Famissionnaires se sont retrouvés pour un envoi en mission autour de Monseigneur Gosselin.
      Ils se sont ensuite répartis entre 8 paroisses. Chacun des 8 groupes a vécu une mission différente, dans des territoires variés, des paroisses uniques.
      Mais partout, le Seigneur était bien présent au milieu de nous.
      Partout, il a devancé paroissiens et Famissionnaires qui allaient à la rencontre des personnes. Partout, il avait préparé les cœurs.
      Certes, certains habitants gardaient leur porte fermée mais lorsqu'ils étaient prêts à la rencontre, ils nous ont permis de vivre des cœurs à cœurs magnifiques pour aller ensemble vers Jésus.
      
      Quelques temps forts ont aussi marqué cette semaine : Jubilate Pop Louange venu (fidèlement !) dans le diocèse d'Angoulême, une procession des saints Holywin à Limoges, un pèlerinage et un spectacle sur la place publique à Brive-La-Gaillarde.
      
      Nous rendons grâce ! La mission remplit les coeurs de joie. Nous rentrons tous la tête dans le Ciel !`,
      image: "https://www.dropbox.com/scl/fi/gs1ubcrv9xjqmp313f8d7/Groupe-2025.JPG?rlkey=h27o0wozxxa9uggcpzl34493z&raw=1",
      links: [
        { label: "France Catholique", url: "https://famissio-99.webself.net/file/si1759337/WhatsApp%20Image%202025-11-02%20at%2016.34.27-fi36539960x470.jpeg" },
        { label: "Le Limousin", url: "https://famissio-99.webself.net/file/si1759337/WhatsApp%20Image%202025-11-02%20at%2016.35.17-fi36539970x586.jpeg" },
        { label: "France 3", url: "https://famissio-99.webself.net/file/si1759337/download/VID-20251030-WA0015-fi36539971.mp4" }
      ],
      videoId: null
    },
    {
      id: 't2024',
      year: '2024',
      title: "Toussaint 2024",
      subtitle: "Diocèse de Mende (Lozère), Diocèse de Rodez (Aveyron), Diocèse de Saint-Flour (Cantal), Diocèse de Séez (Orne)",
      cities: ["Massiac", "Ruynes-en-Margeride", "Saint-Chély-d’Apcher", "Marvejols", "Mende", "Millau", "Vimoutiers"],
      excerpt: "L’édition 2024 nous a emmenés dans des régions plus montagneuses, plus rurales aussi.",
      content: `L’édition 2024 nous a emmenés dans des régions plus montagneuses, plus rurales aussi.
      Les habitants avaient le cœur ouvert et accueillaient facilement les rencontres. Les fruits ont été nombreux, la joie d’annoncer le Christ immense.
      
      Les différentes paroisses nous ont réservé un fabuleux accueil, organisé des soirées festives mémorables, concocté de magnifiques temps de mission et de bénédictions de tracteurs, fermes, commerces et cimetières !
      Beaucoup de Famissionnaires découvraient ces contrées et ne sont pas prêts de les oublier !
      
      Les 340 Famissionnaires ont sillonné les rues de Mende lors de la journée interdiocésaine avec les cloches qui sonniaient à tout rompre.
      Leur joie était manifeste. La semaine nous a laissé la tête dans le Ciel après avoir rencontré nos contemporains qui avaient soif d’entendre parler du Christ !`,
      image: "https://www.dropbox.com/scl/fi/4ntkl4phubtubihjzt2bo/Groupe-2024.jpg?rlkey=an0idcz0143dtd3d0eadzl3us&raw=1",
      links: [
        { label: "Midi Libre", url: "https://www.midilibre.fr/2024/10/11/la-mission-famissio-de-la-paroisse-saint-jacques-12253698.php" },
        { label: "Diocèse de Mende", url: "https://www.diocese-mende.fr/des-familles-missionnaires-dans-nos-paroisses/" },
        { label: "Diocèse de Saint-Flour", url: "https://diocese15.fr/blog/2024/09/allons-donc-de-toutes-les-nations-faites-des-disciples-famissio-familles-en-mission/" },
        { label: "La Lozère Nouvelle", url: "https://famissio-99.webself.net/file/si1759337/download/WhatsApp%20Image%202024-10-17%20at%2020.06.47-fi36254054.jpeg" }
      ],
      videoId: "fkal1pZgV3Q"
    },
    {
      id: 't2023',
      year: '2023',
      title: "Toussaint 2023",
      subtitle: "Diocèse de Limoges (Creuse)",
      cities: ["La Souterraine", "Guéret", "Aubusson", "Bourganeuf", "Chénérailles", "Gouzon"],
      excerpt: "Pour l’édition Toussaint 2023, Monseigneur Bozo nous a gardés dans son propre diocèse !!",
      content: `Pour l’édition Toussaint 2023, Monseigneur Bozo nous a gardés dans son propre diocèse !!
      Nous avons eu la joie de goûter à l'accueil incomparable des Creusois. Des liens forts se sont établis entre les paroissiens et Famissio.
      Les 280 Famissionnaires que nous étions se sont répartis entre les 6 paroisses qui nous accueillaient.
      
      Lors de la journée diocésaine, nous avons voulu renouer avec la Comédie musicale qui mettait à l’honneur tous les grands saints du Limousin. Nombre de Famissionnaires ont pu s’investir tout au long de l’année dans ce projet ! Un grand concert de Jubilate Pop Louanges, organisé à Guéret, aura aussi été le point d’orgue de cette mission.
      
      Cette semaine a été parsemée de rencontres improbables et émouvantes. Beaucoup de cœurs se sont ouverts. Tous ceux qui expérimentaient la mission ont eu ce bonheur immense de voir le Seigneur à l’œuvre.`,
      image: "https://www.dropbox.com/scl/fi/fkhlly77zj3zse6pm7ib9/Groupe-2023.jpg?rlkey=5naurijx6hv79x988ocfefgc1&raw=1",
      links: [
        { label: "Famille chrétienne (Jan 24)", url: "https://famissio-99.webself.net/file/si1759337/download/2024%2001%20Famille%20chr%C3%A9tienne-fi36248537.pdf" },
        { label: "Famille chrétienne (Nov 23)", url: "https://famissio-99.webself.net/file/si1759337/download/2023%2011%20Famille%20chr%C3%A9tienne-fi36248538.pdf" },
        { label: "La Montagne", url: "http://www.lamontagne.fr/bonnat-23220/actualites/famissio-a-la-rencontre-du-relais-paroissial_14394969/" }
      ],
      videoId: null
    },
    {
      id: 'a2223',
      year: '2022-2023',
      title: "Année 2022-2023",
      subtitle: "Famissio 92",
      cities: ["Villeneuve-la-Garenne"],
      excerpt: "Famissio 92 a vécu une année merveilleuse avec les paroissiens de Villeneuve-La-Garenne.",
      content: `Famissio 92 a vécu une année merveilleuse avec les paroissiens très profonds, chaleureux, généreux et audacieux de Villeneuve-La-Garenne.
      Très nombreux sont ceux qui ont tenté avec confiance l’expérience de la mission. Ils nous ont édifiés.
      Leur piété et leur assurance, don de l’Esprit Saint, nous ont permis d’être témoins d’une multitude de cœurs qui s’ouvraient.
      Nous rendons gloire pour tous ces temps exceptionnels de mission, vécus tout au long de cette année !
      
      Avec leur beau pasteur, le Père Olivier Foulon, les paroissiens sont avides de poursuivre la mission et de mettre le feu à Villeneuve-La-Garenne !`,
      image: "https://www.dropbox.com/scl/fi/fkhlly77zj3zse6pm7ib9/Groupe-2023.jpg?rlkey=5naurijx6hv79x988ocfefgc1&raw=1", // Utilisation image 2023 (correspondant à la fin de l'année)
      links: [],
      videoId: "oEbx6esqKTs"
    },
    {
      id: 't2022',
      year: '2022',
      title: "Toussaint 2022",
      subtitle: "Diocèse de Digne (Alpes-de-Haute-Provence)",
      cities: ["Manosque", "Oraison", "Saint-Auban", "Barcelonnette", "Forcalquier", "Digne", "Banon"],
      excerpt: "Pour l’édition Toussaint 2022, Monseigneur Bozo nous a envoyés dans les Alpes de Hautes-Provence.",
      content: `Pour l’édition Toussaint 2022, Monseigneur Bozo nous a envoyés dans cette si belle région des Alpes de Hautes-Provence !!
      Ce fut un véritable ravissement tant l’accueil reçu nous a profondément touchés, tant les liens tissés entre Famissio et les paroissiens nous ont émus, tant les paysages nous ont émerveillés !
      Nous étions près de 260 Famissionnaires à arborer un t-shirt orange « Jésus t’aime – Creuse ta foi », répartis entre 7 paroisses du diocèse.
      
      18 séminaristes, religieuse, religieux, prêtres ou diacre de tous les diocèses nous ont accompagnés pour aider les jeunes à relire leurs temps de mission et faire croître leur foi.
      
      Une journée diocésaine nous a rassemblés sous une pluie battante vite oubliée par la joie exprimée des retrouvailles. Enfin, la journée s’est terminée en apothéose avec la remarquable Comédie musicale créée pour l’occasion par les diocésains : « Monseigneur Bienvenu de Miollis ».
      Le nom de Jésus a été annoncé… Puisse-t-il avoir touché les cœurs !`,
      image: "https://www.dropbox.com/scl/fi/535qp3971mdvhs1g6b99z/Groupe-2022.jpg?rlkey=6sdiai1vvyrhc0q7friftqog9&raw=1",
      links: [
        { label: "BFM TV", url: "https://bfmtv.com/bfm-dici/replay-emissions/le-12h30-17h/alpes-de-haute-provence-la-messe-de-la-toussaint-accompagnee-par-des-familles-de-missionnaires_VN-202211010321.html" },
        { label: "Œuvre des campagnes", url: "https://oeuvredescampagnes.fr/missions-devangelisation/famissio/" },
        { label: "Le Dauphiné", url: "https://i.imgur.com/16pFVvO.jpg" },
        { label: "RCF", url: "https://rcf.fr/culture-et-societe/et-si-on-parlait-ensemble?episode=306777" }
      ],
      videoId: "lYaeQevBzuU"
    },
    {
      id: 'a2122',
      year: '2021-2022',
      title: "Année 2021-2022",
      subtitle: "Famissio 92",
      cities: ["Gennevilliers"],
      excerpt: "La première mission Famissio 92 vient de s'achever par une journée pleine de joie.",
      content: `La première mission Famissio 92 vient de s'achever par une journée pleine de joie, d'entrain, d'audace et de rencontres.
      Les paroissiens ont découvert combien témoigner de sa foi rendait heureux et pouvait porter du fruit.
      Ils ont eu la chance, lors de la dernière journée, de voir une femme demander le baptême, une petite fille demander à rejoindre le catéchisme, un adolescent manifester son désir d'être présent dans une aumônerie.
      Ils avaient soif de Dieu, ces habitants !
      
      Le curé, le Père Jean-Baptiste, a pris les choses en main, mobilisé ses paroissiens et suscité l'enthousiasme.
      Les veillées de ces 5 journées ont été variées, recueillies et animées de façon extraordinaire. Les cœurs ont été touchés.`,
      image: "https://www.dropbox.com/scl/fi/535qp3971mdvhs1g6b99z/Groupe-2022.jpg?rlkey=6sdiai1vvyrhc0q7friftqog9&raw=1", // Fallback sur image 2022
      links: [],
      videoId: "kzDZYmrYkP4"
    },
    {
      id: 't2021',
      year: '2021',
      title: "Toussaint 2021",
      subtitle: "Diocèse de Limoges (Creuse)",
      cities: ["Gouzon", "Boussac", "Genouillac", "Bourganeuf", "Eymoutiers", "Chambon-sur-Voueize"],
      excerpt: "La mission Toussaint 2021... 180 missionnaires dans la Creuse !",
      content: `La mission Toussaint 2021... Une belle édition !
      180 missionnaires, avec l'aide de fervents prêtres, séminaristes, religieuses et religieux se sont rendus cette année dans le diocèse de Limoges, dans la Creuse, sur la paroisse de Gouzon, Boussac et Genouillac.
      D'autres mémorables visites missionnaires d'une journée ont été lancées dans les paroisses du même diocèse à Bourganeuf et Eymoutiers.
      
      Au menu pour cette édition : des temps de prière avec louanges, laudes, adoration et messe au quotidien, des missions dans la rue ou des visitations chez les habitants, un après-midi dans un EHPAD, des bénédictions dans les cimetières au moment de La Toussaint, une journée dédiée aux enfants avec la réalisation d’un spectacle.
      Les Creusois ont accueilli avec beaucoup de générosité tous les missionnaires !`,
      image: "https://www.dropbox.com/scl/fi/hcg9hnxg7rjtfj42veart/Groupe-2021.jpg?rlkey=uqz2y7jdwjcd9f0xdt1ue0jat&raw=1",
      links: [
        { label: "La Nef", url: "https://famissio-99.webself.net/file/si1759337/download/La%20Nef%20(%20page%2042)%20-%20Famissio-fi32558405.PNG" },
        { label: "RCF (audio)", url: "https://youtu.be/yQQwKf2tJ2A" }
      ],
      videoId: "n74BNF8fPcw"
    },
    {
      id: 't2020',
      year: '2020',
      title: "Toussaint 2020",
      subtitle: "Diocèse de Séez (Orne)",
      cities: ["Alençon", "Ecouché", "L'Aigle", "Le Mêle-sur-Sarthe"],
      excerpt: "4 paroisses devaient accueillir Famissio... jusqu'à l'arrivée du COVID !",
      content: `4 paroisses devaient accueillir Famissio... jusqu'à l'arrivée du COVID qui a perturbé le projet initial !
      Les paroisses du Mêle-sur-Sarthe (Père Pascal Durand) et de L'Aigle (Père Stéphane Cailliaux) ont évangélisé sans les missionnaires qui se sont alors répartis entre Alençon (Père Loïc Gicquel des Touches) et Ecouché (Père Alexis de Brébisson).
      Chacune de ces deux paroisses a accueilli quarante-cinq missionnaires pour une semaine de feu !`,
      image: "https://www.dropbox.com/scl/fi/qd8mjaxsk77koxw8lqd1z/Groupe-2020.jpg?rlkey=f3xm2i2w4o96yp04m51boiggp&raw=1",
      links: [
        { label: "Aleteia", url: "https://fr.aleteia.org/2020/11/12/dans-lorne-la-mission-se-vit-aussi-avec-un-verre-de-calva/" },
        { label: "Famille chrétienne", url: "https://drive.google.com/file/d/1tdEPm5ikAnjNR8g04BLUvvyXAafsVCxN/view" },
        { label: "Communauté de l’Emmanuel", url: "https://emmanuel.info/missionnaire-en-famille-paroisses-rurales/" }
      ],
      videoId: "ngv3kXBMu5Q"
    },
    {
      id: 't2019',
      year: '2019',
      title: "Toussaint 2019",
      subtitle: "Diocèse de Limoges (Creuse)",
      cities: ["Gouzon", "Boussac"],
      excerpt: "Une merveilleuse première mission nous a conduits dans la Creuse.",
      content: `Une merveilleuse première mission nous a conduits dans la Creuse, dans un environnement très rural qui nous a beaucoup touchés.
      Nous avons été accueillis par le Père Jean-Pierre Barrière qui nous a fait la joie de nous rejoindre l'année suivante dans l'Orne.
      Nous étions alors un groupe d'une trentaine de personnes avec 3 familles, de nombreux jeunes et 2 séminaristes de la Castille à Toulon.`,
      image: "https://www.dropbox.com/scl/fi/llacr38y9h7jlnngqzy8e/Groupe-2019.jpg?rlkey=f2akrwo3kjtc6adroe30hm7sn&raw=1",
      links: [
        { label: "Boussac", url: "https://drive.google.com/file/d/1mJEaOMouzx6OlD2ZSq4g4d6JrjO3dEmf/view" },
        { label: "Alençon", url: "https://drive.google.com/file/d/1rnzeg7o6F54K8yGfQRrl-2txe_faTfCr/view" },
        { label: "Limoges (vidéo)", url: "https://youtu.be/qnFAbNBbDOM" }
      ],
      videoId: "DdFKEYBhstk"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
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

      {/* HERO */}
      <div className="relative bg-gradient-to-br from-orange-600 via-red-600 to-orange-700 text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-yellow-400 blob opacity-20"></div>
          <div className="absolute bottom-10 right-10 w-64 h-64 bg-red-400 blob opacity-20" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-24">
          <h1 className="text-7xl sm:text-9xl font-black mb-8 leading-none text-center" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            Nos Missions
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto opacity-90 leading-relaxed">
            Retrouvez l'historique de toutes les missions Famissio, des moments de grâce et de rencontres inoubliables.
          </p>
        </div>
      </div>

      {/* GRILLE DES MISSIONS */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {missions.map((mission) => (
            <div
              key={mission.id}
              className="group cursor-pointer bg-white rounded-3xl shadow-lg hover:shadow-2xl overflow-hidden transition-all duration-500 hover:scale-[1.02]"
              onClick={() => setSelectedMission(mission)}
            >
              {/* IMAGE FULL COVER */}
              <div className="relative h-80 overflow-hidden">
                <img
                  src={mission.image}
                  alt={mission.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-orange-600 font-bold shadow-md">
                  {mission.year}
                </div>
                {mission.videoId && (
                  <div className="absolute bottom-4 right-4 w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center text-white shadow-lg group-hover:bg-orange-500 transition-colors">
                    <Play className="w-5 h-5 fill-current" />
                  </div>
                )}
              </div>

              <div className="p-8">
                <h3 className="text-3xl font-black mb-2 text-gray-900" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  {mission.title}
                </h3>

                <div className="text-orange-600 font-bold text-sm mb-4 uppercase tracking-wider flex items-start gap-2">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>{mission.subtitle}</span>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {mission.cities.map((city, idx) => (
                    <span key={idx} className="bg-gray-100 text-gray-600 px-3 py-1 rounded-lg text-xs font-semibold">
                      {city}
                    </span>
                  ))}
                </div>

                <p className="text-gray-600 line-clamp-3 mb-6">
                  {mission.excerpt}
                </p>

                <div className="flex items-center text-orange-600 font-bold group-hover:translate-x-2 transition-transform">
                  Découvrir la mission <ChevronRight className="w-5 h-5 ml-1" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* MODAL */}
      {selectedMission && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 md:p-6 overflow-y-auto">
          <button
            onClick={() => setSelectedMission(null)}
            className="fixed top-6 right-6 text-white hover:text-orange-500 transition-colors z-[60]"
          >
            <X className="w-10 h-10" />
          </button>

          <div className="relative max-w-5xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl my-8 flex flex-col">

            {/* Image d'en-tête Modale */}
            <div className="h-64 md:h-96 w-full relative">
              <img
                src={selectedMission.image}
                alt={selectedMission.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-8 md:p-12">
                <h2 className="text-4xl md:text-5xl font-black text-white mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  {selectedMission.title}
                </h2>
                <p className="text-white/90 text-lg font-medium flex items-center gap-2">
                  <Calendar className="w-5 h-5" /> {selectedMission.year}
                </p>
              </div>
            </div>

            <div className="p-8 md:p-12">
              <div className="flex flex-col lg:flex-row gap-12">

                {/* Contenu Principal */}
                <div className="flex-1">
                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-orange-600" />
                      {selectedMission.subtitle}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedMission.cities.map((city, idx) => (
                        <span key={idx} className="bg-orange-50 text-orange-700 px-3 py-1 rounded-lg text-sm font-semibold border border-orange-100">
                          {city}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="prose prose-lg text-gray-700 whitespace-pre-line leading-relaxed mb-8">
                    {selectedMission.content}
                  </div>

                  {/* Section Liens Presse */}
                  {selectedMission.links && selectedMission.links.length > 0 && (
                    <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                      <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                        <ExternalLink className="w-5 h-5 text-orange-600" />
                        On parle de nous
                      </h4>
                      <div className="flex flex-wrap gap-4">
                        {selectedMission.links.map((link, idx) => (
                          <a
                            key={idx}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-orange-600 hover:text-orange-700 hover:underline font-medium text-sm flex items-center gap-1 bg-white px-4 py-2 rounded-lg shadow-sm border border-gray-200 transition-all hover:shadow-md"
                          >
                            {link.label} <ExternalLink className="w-3 h-3" />
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Sidebar Vidéo */}
                {selectedMission.videoId && (
                  <div className="w-full lg:w-1/3 space-y-6">
                    <div className="bg-black rounded-2xl overflow-hidden shadow-lg aspect-video sticky top-8">
                      <iframe
                        src={`https://www.youtube.com/embed/${selectedMission.videoId}`}
                        title="Vidéo de mission"
                        className="w-full h-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                    <p className="text-sm text-gray-500 text-center italic">
                      Retour en images sur cette mission
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MissionsPage;
