import React, { useEffect } from 'react';
import './Missions.css';
import { initMissionsPage } from './MissionsScript';

const MissionsPage = () => {
  useEffect(() => {
    initMissionsPage();
  }, []);

  return (
    <div className="fam-wrap">
      <section id="fam-map-section" className="fam-map-section">
        <h2 style={{ fontSize: '24px', color: '#c82904', textAlign: 'center', marginBottom: '16px' }}>Carte des missions</h2>
        <div className="fam-map-container-leaflet">
          <div id="fam-leaflet-map"></div>
        </div>
      </section>

      <section className="fam-search">
        <div className="container">
          <div className="search-title">Rechercher une mission</div>
          <div className="fam-input">
            <input id="missionSearch" type="search" placeholder="Année, diocèse, département ou ville" aria-label="Rechercher" />
          </div>
          <div id="fam-filter-reset-container">
            <a id="fam-filter-reset-button" href="#" onClick={(e) => e.preventDefault()}>Voir toutes les missions</a>
          </div>
        </div>
      </section>

      <main className="container fam-timeline">

        <section id="t2025" className="fam-mission"
          data-year="2025"
          data-dioceses="limoges,angoulême,angouleme,tulle"
          data-depts="haute-vienne,haute vienne,corrèze,correze,charente"
          data-cities="confolens,terres-de-haute-charente,terres de haute charente,roumazières-loubert,la rochefoucault,limoges,nantiat,boisseuil,brive-la-gaillarde,brive la gaillarde,brive">
          <article className="fam-card">
            <h2>Toussaint 2025</h2>
            <div className="fam-sub">
              Diocèse de Limoges (Haute-Vienne), Diocèse d'Angoulême (Charente), Diocèse de Tulle (Corrèze)
            </div>
            <div className="fam-badges">
              <span className="fam-badge">Confolens</span><span className="fam-badge">Terres-de-Haute-Charente</span>
              <span className="fam-badge">La Rochefoucauld</span><span className="fam-badge">Limoges</span>
              <span className="fam-badge">Nantiat</span><span className="fam-badge">Boisseuil</span>
              <span className="fam-badge">Brive-la-Gaillarde</span>
            </div>
            <div className="fam-grid">
              <div className="fam-body">
                <div className="rm-wrap">
                  <input className="rm-check" id="rm-2025" type="checkbox" />
                  <div className="rm-content">
                    380 Famissionnaires se sont retrouvés pour un envoi en mission autour de Monseigneur Gosselin.
                    Ils se sont ensuite répartis entre 8 paroisses. Chacun des 8 groupes a vécu une mission différente, dans des territoires variés, des paroisses uniques.
                    Mais partout, le Seigneur était bien présent au milieu de nous.
                    Partout, il a devancé paroissiens et Famissionnaires qui allaient à la rencontre des personnes. Partout, il avait préparé les cœurs.
                    Certes, certains habitants gardaient leur porte fermée mais lorsqu'ils étaient prêts à la rencontre, ils nous ont permis de vivre des cœurs à cœurs magnifiques pour aller ensemble vers Jésus.
                    Vous retrouverez dans l'onglet "témoignages" le récit des plus belles rencontres !
                    <br /><br />
                    Quelques temps forts ont aussi marqué cette semaine : Jubilate Pop Louange venu (fidèlement !) dans le diocèse d'Angoulême, une procession des saints Holywin à Limoges, un pèlerinage et un spectacle sur la place publique à Brive-La-Gaillarde.
                    <br /><br />
                    Nous rendons grâce !
                    La mission remplit les coeurs de joie. Nous rentrons tous la tête dans le Ciel !
                  </div>
                  <label className="rm-toggle" htmlFor="rm-2025"></label>
                </div>
                <div className="fam-links">
                  <a className="fam-link" href="https://famissio-99.webself.net/file/si1759337/WhatsApp%20Image%202025-11-02%20at%2016.34.27-fi36539960x470.jpeg" target="_blank" rel="noopener noreferrer">France Catholique</a>
                  <a className="fam-link" href="https://famissio-99.webself.net/file/si1759337/WhatsApp%20Image%202025-11-02%20at%2016.35.17-fi36539970x586.jpeg" target="_blank" rel="noopener noreferrer">Le Limousin</a>
                  <a className="fam-link" href="https://famissio-99.webself.net/file/si1759337/download/VID-20251030-WA0015-fi36539971.mp4" target="_blank" rel="noopener noreferrer">France 3</a>
                </div>
              </div>
              <div className="fam-thumb">
                <a className="yt-box no-video static" href="#">
                  <img src="https://www.dropbox.com/scl/fi/gs1ubcrv9xjqmp313f8d7/Groupe-2025.JPG?rlkey=h27o0wozxxa9uggcpzl34493z&st=plymodzr&raw=1" alt="Toussaint 2025" loading="lazy" />
                </a>
                <div className="yt-cap no-video" style={{ display: 'block', textAlign: 'center' }}>Vidéo à venir</div>
              </div>
            </div>
          </article>
        </section>

        <section id="t2024" className="fam-mission"
          data-year="2024"
          data-dioceses="mende,rodez,saint-flour,séez,seez"
          data-depts="lozère,lozere,aveyron,cantal,orne"
          data-cities="massiac,ruynes-en-margeride,saint-chély-d’apcher,saint-chely-d'apcher,marvejols,mende,millau,vimoutiers">
          <article className="fam-card">
            <h2>Toussaint 2024</h2>
            <div className="fam-sub">
              Diocèse de Mende (Lozère), Diocèse de Rodez (Aveyron), Diocèse de Saint-Flour (Cantal), Diocèse de Séez (Orne)
            </div>
            <div className="fam-badges">
              <span className="fam-badge">Massiac</span><span className="fam-badge">Ruynes-en-Margeride</span>
              <span className="fam-badge">Saint-Chély-d’Apcher</span><span className="fam-badge">Marvejols</span>
              <span className="fam-badge">Mende</span><span className="fam-badge">Millau</span><span className="fam-badge">Vimoutiers</span>
            </div>
            <div className="fam-grid">
              <div className="fam-body">
                <div className="rm-wrap">
                  <input className="rm-check" id="rm-2024" type="checkbox" />
                  <div className="rm-content">
                    L’édition 2024 nous a emmenés dans des régions plus montagneuses, plus rurales aussi.
                    Les habitants avaient le cœur ouvert et accueillaient facilement les rencontres.
                    Les fruits ont été nombreux, la joie d’annoncer le Christ immense.
                    <br /><br />
                    Les différentes paroisses nous ont réservé un fabuleux accueil, organisé des soirées festives mémorables, concocté de magnifiques temps de mission et de bénédictions de tracteurs, fermes, commerces et cimetières !
                    <br /><br />
                    Beaucoup de Famissionnaires découvraient ces contrées et ne sont pas prêts de les oublier !
                    <br /><br />
                    Les 340 Famissionnaires ont sillonné les rues de Mende lors de la journée interdiocésaine avec les cloches qui sonniaient à tout rompre.
                    Leur joie était manifeste. La semaine nous a laissé la tête dans le Ciel après avoir rencontré nos contemporains qui avaient soif d’entendre parler du Christ !
                  </div>
                  <label className="rm-toggle" htmlFor="rm-2024"></label>
                </div>
                <div className="fam-links">
                  <a className="fam-link" href="https://www.midilibre.fr/2024/10/11/la-mission-famissio-de-la-paroisse-saint-jacques-12253698.php" target="_blank" rel="noopener noreferrer">Midi Libre</a>
                  <a className="fam-link" href="https://www.diocese-mende.fr/des-familles-missionnaires-dans-nos-paroisses/" target="_blank" rel="noopener noreferrer">Diocèse de Mende</a>
                  <a className="fam-link" href="https://diocese15.fr/blog/2024/09/allons-donc-de-toutes-les-nations-faites-des-disciples-famissio-familles-en-mission/" target="_blank" rel="noopener noreferrer">Diocèse de Saint-Flour</a>
                  <a className="fam-link" href="https://famissio-99.webself.net/file/si1759337/download/WhatsApp%20Image%202024-10-17%20at%2020.06.47-fi36254054.jpeg" target="_blank" rel="noopener noreferrer">La Lozère Nouvelle</a>
                </div>
              </div>
              <div className="fam-thumb">
                <a className="yt-box" data-ytid="fkal1pZgV3Q" href="https://youtu.be/fkal1pZgV3Q" target="_blank" rel="noopener noreferrer">
                  <img src="https://www.dropbox.com/scl/fi/4ntkl4phubtubihjzt2bo/Groupe-2024.jpg?rlkey=an0idcz0143dtd3d0eadzl3us&st=3jkf2a5r&raw=1" alt="Toussaint 2024" loading="lazy" />
                  <span className="yt-play"><i></i></span>
                </a>
                <div className="yt-cap"><a href="https://youtu.be/fkal1pZgV3Q" target="_blank" rel="noopener noreferrer">Voir la vidéo</a></div>
              </div>
            </div>
          </article>
        </section>

        <section id="t2023" className="fam-mission"
          data-year="2023"
          data-dioceses="limoges"
          data-depts="creuse"
          data-cities="la souterraine,guéret,gueret,aubusson,bourganeuf,chénérailles,chenerrailles,gouzon">
          <article className="fam-card">
            <h2>Toussaint 2023</h2>
            <div className="fam-sub">Diocèse de Limoges (Creuse)</div>
            <div className="fam-badges">
              <span className="fam-badge">La Souterraine</span><span className="fam-badge">Guéret</span>
              <span className="fam-badge">Aubusson</span><span className="fam-badge">Bourganeuf</span>
              <span className="fam-badge">Chénérailles</span><span className="fam-badge">Gouzon</span>
            </div>
            <div className="fam-grid">
              <div className="fam-body">
                <div className="rm-wrap">
                  <input className="rm-check" id="rm-2023" type="checkbox" />
                  <div className="rm-content">
                    Pour l’édition Toussaint 2023, Monseigneur Bozo nous a gardés dans son propre diocèse !!
                    Nous avons eu la joie de goûter à l'accueil incomparable des Creusois.
                    Des liens forts se sont établis entre les paroissiens et Famissio.
                    <br /><br />
                    Les 280 Famissionnaires que nous étions se sont répartis entre les 6 paroisses qui nous accueillaient.
                    <br /><br />
                    Lors de la journée diocésaine, nous avons voulu renouer avec la Comédie musicale qui mettait à l’honneur tous les grands saints du Limousin.
                    Nombre de Famissionnaires ont pu s’investir tout au long de l’année dans ce projet !
                    Un grand concert de Jubilate Pop Louanges, organisé à Guéret, aura aussi été le point d’orgue de cette mission.
                    <br /><br />
                    Cette semaine a été parsemée de rencontres improbables et émouvantes.
                    Beaucoup de cœurs se sont ouverts. Tous ceux qui expérimentaient la mission ont eu ce bonheur immense de voir le Seigneur à l’œuvre.
                    Nous rendons grâce pour tous ses bienfaits !
                  </div>
                  <label className="rm-toggle" htmlFor="rm-2023"></label>
                </div>
                <div className="fam-links">
                  <a className="fam-link" href="https://famissio-99.webself.net/file/si1759337/download/2024%2001%20Famille%20chr%C3%A9tienne-fi36248537.pdf" target="_blank" rel="noopener noreferrer">Famille chrétienne</a>
                  <a className="fam-link" href="https://famissio-99.webself.net/file/si1759337/download/2023%2011%20Famille%20chr%C3%A9tienne-fi36248538.pdf" target="_blank" rel="noopener noreferrer">Famille chrétienne</a>
                  <a className="fam-link" href="http://www.lamontagne.fr/bonnat-23220/actualites/famissio-a-la-rencontre-du-relais-paroissial_14394969/" target="_blank" rel="noopener noreferrer">La Montagne</a>
                </div>
              </div>
              <div className="fam-thumb">
                <a className="yt-box no-video static" href="#">
                  <img src="https://www.dropbox.com/scl/fi/fkhlly77zj3zse6pm7ib9/Groupe-2023.jpg?rlkey=5naurijx6hv79x988ocfefgc1&st=sywqghnw&raw=1" alt="Toussaint 2023" loading="lazy" />
                </a>
                <div className="yt-cap no-video"></div>
              </div>
            </div>
          </article>
        </section>

        <section id="a2223" className="fam-mission"
          data-year="2022-2023,2023,2022"
          data-dioceses="famissio 92"
          data-depts=""
          data-cities="villeneuve-la-garenne,villeneuve la garenne">
          <article className="fam-card">
            <h2>Année 2022-2023</h2>
            <div className="fam-sub">Famissio 92</div>
            <div className="fam-badges">
              <span className="fam-badge">Villeneuve-la-Garenne</span>
            </div>
            <div className="fam-grid">
              <div className="fam-body">
                <div className="rm-wrap">
                  <input className="rm-check" id="rm-2223" type="checkbox" />
                  <div className="rm-content">
                    Famissio 92 a vécu une année merveilleuse avec les paroissiens très profonds, chaleureux, généreux et audacieux de Villeneuve-La-Garenne.
                    Très nombreux sont ceux qui ont tenté avec confiance l’expérience de la mission.  Ils nous ont édifiés.
                    Leur piété et leur assurance, don de l’Esprit Saint, nous ont permis d’être témoins d’une multitude de cœurs qui s’ouvraient.
                    Nous rendons gloire pour tous ces temps exceptionnels de mission, vécus tout au long de cette année !
                    <br /><br />
                    Avec leur beau pasteur, le Père Olivier Foulon, les paroissiens sont avides de poursuivre la mission et de mettre le feu à Villeneuve-La-Garenne !
                  </div>
                  <label className="rm-toggle" htmlFor="rm-2223"></label>
                </div>
              </div>
              <div className="fam-thumb">
                <a className="yt-box" data-ytid="oEbx6esqKTs" href="https://youtu.be/oEbx6esqKTs" target="_blank" rel="noopener noreferrer">
                  <img src="https://famissio-99.webself.net/file/si1759337/2022%202023-fi36533472x586.png" alt="Année 2022-2023" loading="lazy" />
                  <span className="yt-play"><i></i></span>
                </a>
                <div className="yt-cap"><a href="https://youtu.be/oEbx6esqKTs" target="_blank" rel="noopener noreferrer">Voir la vidéo</a></div>
              </div>
            </div>
          </article>
        </section>

        <section id="t2022" className="fam-mission"
          data-year="2022"
          data-dioceses="digne"
          data-depts="alpes-de-haute-provence,ahp"
          data-cities="manosque,oraison,saint-auban,barcelonnette,forcalquier,digne,banon">
          <article className="fam-card">
            <h2>Toussaint 2022</h2>
            <div className="fam-sub">Diocèse de Digne (Alpes-de-Haute-Provence)</div>
            <div className="fam-badges">
              <span className="fam-badge">Manosque</span><span className="fam-badge">Oraison</span><span className="fam-badge">Saint-Auban</span>
              <span className="fam-badge">Barcelonnette</span><span className="fam-badge">Forcalquier</span><span className="fam-badge">Digne</span><span className="fam-badge">Banon</span>
            </div>
            <div className="fam-grid">
              <div className="fam-body">
                <div className="rm-wrap">
                  <input className="rm-check" id="rm-2022" type="checkbox" />
                  <div className="rm-content">
                    Pour l’édition Toussaint 2022, Monseigneur Bozo nous a envoyés dans cette si belle région des Alpes de Hautes-Provence !!
                    Ce fut un véritable ravissement tant l’accueil reçu nous a profondément touchés, tant les liens tissés entre Famissio et les paroissiens nous ont émus, tant les paysages nous ont émerveillés !
                    Nous étions près de 260 Famissionnaires à arborer un t-shirt orange « Jésus t’aime – Creuse ta foi », répartis entre 7 paroisses du diocèse.
                    <br /><br />
                    18 séminaristes, religieuse, religieux, prêtres ou diacre de tous les diocèses nous ont accompagnés pour aider les jeunes à relire leurs temps de mission et faire croître leur foi.
                    <br /><br />
                    Une journée diocésaine nous a rassemblés sous une pluie battante vite oubliée par la joie exprimée des retrouvailles, de beaux temps de prière et de messe.
                    Enfin, la journée s’est terminée en apothéose avec la remarquable Comédie musicale créée pour l’occasion par les diocésains : « Monseigneur Bienvenu de Miollis, un évêque missionnaire en Provence » dont la figure est particulièrement inspirante.
                    <br /><br />
                    Tel Msg de Miollis, nous avons sillonné la région à la rencontre de ses habitants dans la rue, sur les chemins, sur les marchés, dans les cimetières, dans les EHPAD.
                    Le nom de Jésus a été annoncé…Puisse-t-il avoir touché les cœurs !
                  </div>
                  <label className="rm-toggle" htmlFor="rm-2022"></label>
                </div>
                <div className="fam-links">
                  <a className="fam-link" href="https://bfmtv.com/bfm-dici/replay-emissions/le-12h30-17h/alpes-de-haute-provence-la-messe-de-la-toussaint-accompagnee-par-des-familles-de-missionnaires_VN-202211010321.html" target="_blank" rel="noopener noreferrer">BFM TV</a>
                  <a className="fam-link" href="https://oeuvredescampagnes.fr/missions-devangelisation/famissio/" target="_blank" rel="noopener noreferrer">Œuvre des campagnes</a>
                  <a className="fam-link" href="https://i.imgur.com/16pFVvO.jpg" target="_blank" rel="noopener noreferrer">Le Dauphiné</a>
                  <a className="fam-link" href="https://rcf.fr/culture-et-societe/et-si-on-parlait-ensemble?episode=306777" target="_blank" rel="noopener noreferrer">RCF</a>
                </div>
              </div>
              <div className="fam-thumb">
                <a className="yt-box" data-ytid="lYaeQevBzuU" href="https://youtu.be/lYaeQevBzuU" target="_blank" rel="noopener noreferrer">
                  <img src="https://www.dropbox.com/scl/fi/535qp3971mdvhs1g6b99z/Groupe-2022.jpg?rlkey=6sdiai1vvyrhc0q7friftqog9&st=6nuf09ar&raw=1" alt="Toussaint 2022" loading="lazy" />
                  <span className="yt-play"><i></i></span>
                </a>
                <div className="yt-cap"><a href="https://youtu.be/lYaeQevBzuU" target="_blank" rel="noopener noreferrer">Voir la vidéo</a></div>
              </div>
            </div>
          </article>
        </section>

        <section id="a2122" className="fam-mission"
          data-year="2021-2022,2022,2021"
          data-dioceses="famissio 92"
          data-depts=""
          data-cities="gennevilliers">
          <article className="fam-card">
            <h2>Année 2021-2022</h2>
            <div className="fam-sub">Famissio 92</div>
            <div className="fam-badges"><span className="fam-badge">Gennevilliers</span></div>
            <div className="fam-grid">
              <div className="fam-body">
                <div className="rm-wrap">
                  <input className="rm-check" id="rm-2122" type="checkbox" />
                  <div className="rm-content">
                    La première mission Famissio 92 vient de s'achever par une journée pleine de joie, d'entrain, d'audace et de rencontres.
                    Les paroissiens ont découvert combien témoigner de sa foi rendait heureux et pouvait porter du fruit.
                    Ils ont eu la chance, lors de la dernière journée, de voir une femme demander le baptême, une petite fille demander à rejoindre le catéchisme, un adolescent manifester son désir d'être présent dans une aumônerie.
                    Ils avaient soif de Dieu, ces habitants ! Ils attendaient la présence de témoins pour savoir où trouver la nourriture spirituelle dont ils avaient besoin.
                    <br /><br />
                    Le curé, le Père Jean-Baptiste, a pris les choses en main, mobilisé ses paroissiens et suscité l'enthousiasme.
                    Les veillées de ces 5 journées ont été variées, recueillies et animées de façon extraordinaire. Les cœurs ont été touchés.
                    La paroisse Saint Joseph des 4 Routes prépare d'ores et déjà des journées de missions pour l'année 2022-2023.
                    Elle a le feu !
                    <br />
                    Quant à Famissio 92, en route vers St Joseph de Villeneuve-La-Garenne !
                  </div>
                  <label className="rm-toggle" htmlFor="rm-2122"></label>
                </div>
              </div>
              <div className="fam-thumb">
                <a className="yt-box" data-ytid="kzDZYmrYkP4" href="https://youtu.be/kzDZYmrYkP4" target="_blank" rel="noopener noreferrer">
                  <img src="https://famissio-99.webself.net/file/si1759337/2021%202022-fi36533470x520.png" alt="Année 2021-2022" loading="lazy" />
                  <span className="yt-play"><i></i></span>
                </a>
                <div className="yt-cap"><a href="https://youtu.be/kzDZYmrYkP4" target="_blank" rel="noopener noreferrer">Voir la vidéo</a></div>
              </div>
            </div>
          </article>
        </section>

        <section id="t2021" className="fam-mission"
          data-year="2021"
          data-dioceses="limoges"
          data-depts="creuse"
          data-cities="gouzon,boussac,genouillac,bourganeuf,eymoutiers,chambon-sur-voueize">
          <article className="fam-card">
            <h2>Toussaint 2021</h2>
            <div className="fam-sub">Diocèse de Limoges (Creuse)</div>
            <div className="fam-badges">
              <span className="fam-badge">Gouzon</span><span className="fam-badge">Boussac</span><span class="fam-badge">Genouillac</span>
              <span className="fam-badge">Bourganeuf</span><span className="fam-badge">Eymoutiers</span>
              <span className="fam-badge">Chambon-sur-Voueize</span>
            </div>
            <div className="fam-grid">
              <div className="fam-body">
                <div className="rm-wrap">
                  <input className="rm-check" id="rm-2021full" type="checkbox" />
                  <div className="rm-content">
                    La mission Toussaint 2021... Une belle édition !
                    180 missionnaires, avec l'aide de fervents prêtres, séminaristes, religieuses et religieux se sont rendus cette année dans le diocèse de Limoges, dans la Creuse, sur la paroisse de Gouzon, Boussac et Genouillac.
                    D'autres mémorables visites missionnaires d'une journée ont été lancées dans les paroisses du même diocèse à Bourganeuf et Eymoutiers.
                    Un extraordinaire accueil nous a permis de vivre de fructueuses journées.
                    <br /><br />
                    Enfin, une journée diocésaine à Chambon-sur-Voueize sur le thème de la mission avec des jeunes collégiens et lycéens venus nous rejoindre pour évangéliser nous a tous portés.
                    Au menu pour cette édition : des temps de prière avec louanges, laudes, adoration et messe au quotidien, des missions dans la rue ou des visitations chez les habitants, un après-midi dans un EPADH, des bénédictions dans les cimetières au moment de La Toussaint, une journée dédiée aux enfants avec la réalisation d’un spectacle, des veillées merveilleuses pour les malades, sur le thème de l'au-delà…, Les Creusois ont accueilli avec beaucoup de générosité tous les missionnaires !
                    Vive la mission... Et vivement l'édition 2022 dans les Alpes-de-Haute-Provence !
                  </div>
                  <label className="rm-toggle" htmlFor="rm-2021full"></label>
                </div>
                <div className="fam-links">
                  <a className="fam-link" href="https://famissio-99.webself.net/file/si1759337/download/La%20Nef%20(%20page%2042)%20-%20Famissio-fi32558405.PNG" target="_blank" rel="noopener noreferrer">La Nef</a>
                  <a className="fam-link" href="https://youtu.be/yQQwKf2tJ2A" target="_blank" rel="noopener noreferrer">RCF (audio)</a>
                </div>
              </div>
              <div className="fam-thumb">
                <a className="yt-box" data-ytid="n74BNF8fPcw" href="https://youtu.be/n74BNF8fPcw" target="_blank" rel="noopener noreferrer">
                  <img src="https://www.dropbox.com/scl/fi/hcg9hnxg7rjtfj42veart/Groupe-2021.jpg?rlkey=uqz2y7jdwjcd9f0xdt1ue0jat&st=5cc6cj5w&raw=1" alt="Toussaint 2021" loading="lazy" />
                  <span className="yt-play"><i></i></span>
                </a>
                <div className="yt-cap"><a href="https://youtu.be/n74BNF8fPcw" target="_blank" rel="noopener noreferrer">Voir la vidéo</a></div>
              </div>
            </div>
          </article>
        </section>

        <section id="t2020" className="fam-mission"
          data-year="2020"
          data-dioceses="séez,seez"
          data-depts="orne"
          data-cities="alençon,alençon,ecouché,ecouche,ecouché,l'aigle,le mêle-sur-sarthe,mele-sur-sarthe">
          <article className="fam-card">
            <h2>Toussaint 2020</h2>
            <div className="fam-sub">Diocèse de Séez (Orne)</div>
            <div className="fam-badges">
              <span className="fam-badge">Alençon</span>
              <span className="fam-badge">Ecouché</span>
              <span className="fam-badge">L'Aigle</span>
              <span className="fam-badge">Le Mêle-sur-Sarthe</span>
            </div>
            <div className="fam-grid">
              <div className="fam-body">
                <div className="rm-wrap">
                  <input className="rm-check" id="rm-2020" type="checkbox" />
                  <div className="rm-content">
                    4 paroisses devaient accueillir Famissio... jusqu'à l'arrivée du COVID qui a perturbé le projet initial !
                    Les paroisses du Mêle-sur-Sarthe (Père Pascal Durand) et de L'Aigle (Père Stéphane Cailliaux) ont évangélisé sans les missionnaires qui se sont alors répartis entre Alençon (Père Loïc Gicquel des Touches) et Ecouché (Père Alexis de Brébisson).
                    Chacune de ces deux paroisses a accueilli quarante-cinq missionnaires pour une semaine de feu !
                  </div>
                  <label className="rm-toggle" htmlFor="rm-2020"></label>
                </div>
                <div className="fam-links">
                  <a className="fam-link" href="https://fr.aleteia.org/2020/11/12/dans-lorne-la-mission-se-vit-aussi-avec-un-verre-de-calva/" target="_blank" rel="noopener noreferrer">Aleteia</a>
                  <a className="fam-link" href="https://drive.google.com/file/d/1tdEPm5ikAnjNR8g04BLUvvyXAafsVCxN/view" target="_blank" rel="noopener noreferrer">Famille chrétienne</a>
                  <a className="fam-link" href="https://emmanuel.info/missionnaire-en-famille-paroisses-rurales/" target="_blank" rel="noopener noreferrer">Communauté de l’Emmanuel</a>
                </div>
              </div>
              <div className="fam-thumb">
                <a className="yt-box" data-ytid="ngv3kXBMu5Q" href="https://youtu.be/ngv3kXBMu5Q" target="_blank" rel="noopener noreferrer">
                  <img src="https://www.dropbox.com/scl/fi/qd8mjaxsk77koxw8lqd1z/Groupe-2020.jpg?rlkey=f3xm2i2w4o96yp04m51boiggp&st=apf1aqw7&raw=1" alt="Toussaint 2020" loading="lazy" />
                  <span className="yt-play"><i></i></span>
                </a>
                <div className="yt-cap"><a href="https://youtu.be/ngv3kXBMu5Q" target="_blank" rel="noopener noreferrer">Voir la vidéo</a></div>
              </div>
            </div>
          </article>
        </section>

        <section id="t2019" className="fam-mission"
          data-year="2019"
          data-dioceses="limoges"
          data-depts="creuse"
          data-cities="gouzon,boussac">
          <article className="fam-card">
            <h2>Toussaint 2019</h2>
            <div className="fam-sub">Diocèse de Limoges (Creuse)</div>
            <div className="fam-badges"><span className="fam-badge">Gouzon</span><span className="fam-badge">Boussac</span></div>
            <div className="fam-grid">
              <div className="fam-body">
                <div className="rm-wrap">
                  <input className="rm-check" id="rm-2019" type="checkbox" />
                  <div className="rm-content">
                    Une merveilleuse première mission nous a conduits dans la Creuse, dans un environnement très rural qui nous a beaucoup touchés.
                    Nous avons été accueillis par le Père Jean-Pierre Barrière qui nous a fait la joie de nous rejoindre l'année suivante dans l'Orne.
                    Nous étions alors un groupe d'une trentaine de personnes avec 3 familles, de nombreux jeunes et 2 séminaristes de la Castille à Toulon.
                  </div>
                  <label className="rm-toggle" htmlFor="rm-2019"></label>
                </div>
                <div className="fam-links">
                  <a className="fam-link" href="https://drive.google.com/file/d/1mJEaOMouzx6OlD2ZSq4g4d6JrjO3dEmf/view" target="_blank" rel="noopener noreferrer">Boussac</a>
                  <a className="fam-link" href="https://drive.google.com/file/d/1rnzeg7o6F54K8yGfQRrl-2txe_faTfCr/view" target="_blank" rel="noopener noreferrer">Alençon</a>
                  <a className="fam-link" href="https://youtu.be/qnFAbNBbDOM" target="_blank" rel="noopener noreferrer">Limoges (vidéo)</a>
                </div>
              </div>
              <div className="fam-thumb">
                <a className="yt-box" data-ytid="DdFKEYBhstk" href="https://youtu.be/DdFKEYBhstk" target="_blank" rel="noopener noreferrer">
                  <img src="https://www.dropbox.com/scl/fi/llacr38y9h7jlnngqzy8e/Groupe-2019.jpg?rlkey=f2akrwo3kjtc6adroe30hm7sn&st=ijdjpvp8&raw=1" alt="Toussaint 2019" loading="lazy" />
                  <span className="yt-play"><i></i></span>
                </a>
                <div className="yt-cap"><a href="https://youtu.be/DdFKEYBhstk" target="_blank" rel="noopener noreferrer">Voir la vidéo</a></div>
              </div>
            </div>
          </article>
        </section>

      </main>
    </div>
  );
};

export default MissionsPage;