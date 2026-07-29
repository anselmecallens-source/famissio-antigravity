import React, { useState } from 'react';
import { X, ChevronRight, ChevronDown, BookOpen, MessageCircle, Flame, Maximize2, Send, Bird } from 'lucide-react';
import { Link } from 'react-router-dom';

const FormationsPage = () => {
    const [activeFormationId, setActiveFormationId] = useState(null);
    const [fullscreenPdf, setFullscreenPdf] = useState(null);
    const [expandedFaqs, setExpandedFaqs] = useState({});
    const [faqPages, setFaqPages] = useState({});

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
                {
                    id: 1,
                    title: "Dieu existe-t-il ?",
                    intro: "Arguments rationnels et philosophiques pour soutenir l'existence de Dieu",
                    pdf: "https://www.dropbox.com/scl/fi/gxeuxskdawmc8h1sa1lgx/10-Quels-sont-les-preuves-de-l-existence-de-Dieu.pdf?rlkey=wsr4rl5gyy98gw0w9fg7lt8n2&st=ugcak1yi&raw=1",
                    faqs: [
                        { q: "La science peut-elle attester l'existence de Dieu ?", a: "Non, il s'agit d'une approche philosophique et non d'une expérience de laboratoire. C'est une certitude de l'esprit basée sur l'observation logique du monde." },
                        { q: "Pourquoi tout le monde n'est-il pas convaincu ?", a: "Le péché peut brouiller la vue et empêcher de voir nettement les signes divins. Ces preuves donnent une certitude mais ne forcent pas l'adhésion de tous." },
                        { q: "En quoi la nature est-elle un indice ?", a: "L'ordre et la beauté de l'univers indiquent une intelligence sans limite derrière le mystère des choses. La vie est un miracle si rare qu'il semble avoir été voulu." },
                        { q: "L'univers a-t-il forcément un auteur ?", a: "Oui, car l'univers est limité, ce qui montre qu'il est un effet et non sa propre cause. Il faut donc un être nécessaire et sans début appelé Dieu." },
                        { q: "Pourquoi désirons-nous l'éternité ?", a: "Ce désir d'infini est ancré dans le cœur humain car nous sommes faits par et pour Dieu. Comme la soif indique l'existence de l'eau, ce besoin révèle une réalité divine." },
                        { q: "Quel est l'aspect de Dieu ?", a: "Dieu n'a pas de corps, c'est un esprit pur doué de volonté et de raison. Il est la vie même, au-delà de toute forme matérielle." },
                        { q: "L'idée de Dieu suffit-elle comme preuve ?", a: "Si on pense à l'être le plus accompli, il doit exister dans la réalité pour être vraiment parfait. Une existence seulement imaginaire serait une limite pour lui." },
                        { q: "Est-il loin ou proche de nous ?", a: "Il est à la fois au-delà de tout et infiniment proche par sa grâce. Il est présent partout tout en restant un mystère." },
                        { q: "C'est quoi la Trinité ?", a: "C'est un seul Dieu en trois personnes : le Père, le Fils et le Saint-Esprit. Ils sont distincts mais agissent ensemble dans un même dessein de vie." },
                        { q: "Pourquoi Dieu laisse-t-il faire le mal ?", a: "C'est un mystère qui nous échappe, comme le lien entre sa connaissance et notre liberté. On sait seulement qu'il reste plein d'amour malgré nos souffrances." }
                    ]
                },
                {
                    id: 2,
                    title: "La Trinité",
                    intro: "Un Dieu unique en trois personnes : Père, Fils et Saint-Esprit",
                    pdf: "https://www.dropbox.com/scl/fi/hi7cwj9h93xrlk6fdyt3h/12-Comment-expliquer-simplement-la-Trinit.pdf?rlkey=uwm8idppua8ydsncrofy30j6n&st=fj6v0waf&raw=1",
                    faqs: [
                        { q: "Comment un seul Dieu peut-il être trois personnes à la fois ?", a: "Dieu est unique par sa nature divine mais existe en trois personnes distinctes : le Père, le Fils et le Saint-Esprit. Tous les trois possèdent entièrement la même et unique nature divine." },
                        { q: "Quelle est la différence entre la \"nature\" et la \"personne\" ?", a: "La nature indique ce que l'on est, comme le fait d'être humain, tandis que la personne indique qui l'on est spécifiquement. En Dieu, il n'y a qu'une seule nature partagée par trois personnes." },
                        { q: "Est-ce que le Père, le Fils et l'Esprit sont trois Dieux différents ?", a: "Non, il n'y a pas trois individus séparés mais trois personnes qui forment ensemble l'unique être divin. Elles sont distinctes par leurs relations mais inséparables dans leur être." },
                        { q: "Comment expliquer simplement le lien qui les unit ?", a: "Le Père est le principe qui engendre le Fils comme son image parfaite. De leur amour mutuel procède le Saint-Esprit, qui est l'amour vivant unissant le Père et le Fils." },
                        { q: "Existe-t-il une image concrète pour mieux comprendre ?", a: "On peut comparer la Trinité à notre esprit : l'intelligence produit une idée de nous-mêmes, et la volonté nous pousse à aimer ce que nous connaissons. C'est une collaboration similaire qui anime la vie de Dieu." },
                        { q: "Pourquoi ne pas dire que que Dieu change simplement de rôle ou de \"masque\" ?", a: "Parce que les personnes sont vraiment distinctes : c'est le Fils qui s'est fait homme et a souffert, pas le Père. Chaque personne a une relation réelle et propre avec les deux autres." },
                        { q: "Est-ce que Jésus est moins puissant que son Père ?", a: "Non, Jésus a affirmé être \"un\" avec le Père, ce qui signifie qu'il est pleinement Dieu avec la même puissance. Il n'est pas un être inférieur, mais l'égal du Père en toutes choses." },
                        { q: "La Trinité a-t-elle eu un commencement dans le temps ?", a: "Non, la naissance du Fils et la venue de l'Esprit sont éternelles et n'ont pas de début chronologique. Dieu a toujours été cette communion vivante, immuable et dynamique." },
                        { q: "Comment a-t-on découvert que Dieu était ainsi ?", a: "C'est Jésus qui a révélé ce mystère en parlant de sa relation unique avec le Père et en envoyant l'Esprit Saint. Cette vérité dépasse notre intelligence et nous est donnée par la Révélation." },
                        { q: "Quel est l'intérêt pour nous de savoir que Dieu est Trinité ?", a: "Cela nous montre que Dieu est une famille d'amour et que nous sommes invités à partager sa vie intime. Le but de notre existence est d'être rassemblés dans cette unité divine comme ses propres enfants." }
                    ]
                },
                {
                    id: 3,
                    title: "Dieu fait Homme",
                    intro: "Pourquoi Dieu a choisi de partager notre condition humaine",
                    pdf: "https://www.dropbox.com/scl/fi/cxxsrs6unfscii0hxv3ug/11-Pourquoi-Dieu-s-est-fait-homme.pdf?rlkey=citj0u78m84pqe82ioymn5gtt&st=up04c10b&raw=1",
                    faqs: [
                        { q: "Pourquoi Dieu a-t-il choisi de devenir un homme ?", a: "Dieu s'est fait homme pour nous sauver et nous réconcilier avec lui. Sans l'incarnation du Fils de Dieu, l'humanité n'aurait pas pu être sauvée." },
                        { q: "Qu’est-ce que cela veut dire que l'homme peut \"devenir Dieu\" ?", a: "Cela signifie que nous sommes appelés à participer à la nature divine en devenant enfants de Dieu. En entrant en communion avec le Christ, l'homme reçoit la filiation divine." },
                        { q: "Pourquoi un simple humain ne pouvait-il pas nous sauver ?", a: "Aucun homme n'était capable de prendre sur lui tous les péchés du monde pour s'offrir en sacrifice. Seul Dieu fait homme pouvait accomplir ce salut pour nous les hommes." },
                        { q: "Comment Jésus nous montre-t-il l’amour de Dieu ?", a: "Comme personne ne peut voir Dieu, son incarnation nous a permis de voir son amour de manière concrète. Il a montré qu'il était capable de se donner totalement, jusqu'à mourir sur la Croix pour nous." },
                        { q: "Jésus est-il plutôt Dieu ou plutôt homme ?", a: "Il est les deux à la fois : vrai Dieu et vrai homme. Il possède deux natures qui ne sont pas mélangées en lui." },
                        { q: "À quoi nous sert l'exemple de vie de Jésus ?", a: "Jésus est venu pour être notre modèle de sainteté au quotidien. Il révèle par ses actes ce qu'est la véritable sainteté." },
                        { q: "C'est quoi exactement le \"salut\" dont on parle ?", a: "C'est le fait d'être guéri, libéré de nos servitudes et délivré d'un grave danger. On est sauvé quand on retrouve la santé spirituelle et que l'on est réconcilié avec Dieu." },
                        { q: "Qui est le \"Verbe\" mentionné dans les textes ?", a: "Le Verbe est le Fils de Dieu qui s'est incarné pour notre salut. Il a assumé notre nature humaine pour nous faire participer à sa divinité." },
                        { q: "Pourquoi dit-on que Dieu s'est \"dépouillé\" ?", a: "Dieu nous a envoyé son Fils en acceptant qu'il quitte sa gloire pour se faire humblement homme. Il a pris notre condition humaine pour nous relever et nous secourir." },
                        { q: "Quel est le but final de la venue de Jésus sur Terre ?", a: "Son but est de faire de nous des \"dieux\" en nous rendant participants de sa propre vie divine. Il s'est fait homme pour que nous devenions vraiment enfants de Dieu." }
                    ]
                },
                {
                    id: 4,
                    title: "Véracité des Évangiles",
                    intro: "Prouver la fiabilité des textes sacrés",
                    pdf: "https://www.dropbox.com/scl/fi/1t3it5m8blri0m9qlyrc0/14-Comment-prouver-la-v-racit-des-vangiles.pdf?rlkey=lcnmsqxjx7okgk1v1pqjv2r0z&st=xpxqusbv&raw=1",
                    faqs: [
                        { q: "La Bible raconte-t-elle la vérité ou sont-ce juste des histoires ?", a: "La Bible dit la vérité, mais cette vérité s'exprime de différentes manières selon qu'il s'agisse d'un poème, d'une lettre ou d'un récit historique. L'essentiel du message porte sur la volonté de Dieu et sa relation d'amour avec les êtres humains." },
                        { q: "Pourquoi y a-t-il des contradictions sur les détails, comme pour le passage de la Mer Rouge ?", a: "Les auteurs bibliques ne cherchaient pas à faire un compte-rendu scientifique, mais à transmettre la certitude que Dieu a sauvé son peuple. Les divergences de descriptions servent à mettre en avant le sens spirituel de l'événement plutôt que sa précision technique." },
                        { q: "Peut-on considérer l'Ancien Testament comme \"vrai\" malgré ses légendes ?", a: "Oui, il est vrai car il construit une espérance et conduit progressivement l'humanité vers Jésus. Ses poèmes, ses rites et même ses maladresses font partie d'un cheminement vers la révélation ultime de Dieu." },
                        { q: "Pourquoi les récits du tombeau vide de Jésus ne sont-ils pas identiques ?", a: "Ces incohérences sur le nombre de témoins ou l'identité de celui qui parle ne sont pas des erreurs de rédaction. Elles nous invitent à dépasser les mots pour saisir la vérité centrale et invisible : Jésus est réellement ressuscité." },
                        { q: "La vérité change-t-elle selon le style du livre que l'on lit ?", a: "Le fond de la vérité reste le même, mais la forme s'adapte au genre littéraire. Un psaume joue sur les images et le rythme, tandis qu'un récit met en scène des personnages pour éclairer le mystère du salut." },
                        { q: "Pourquoi avoir gardé quatre évangiles s'ils divergent parfois ?", a: "Un seul texte ne pourrait pas rendre compte de toute la richesse de Jésus, qui est à la fois le Messie d'Israël et le sauveur de tous les hommes. La variété des témoignages permet d'approcher la vérité de sa personne sous plusieurs angles." },
                        { q: "Est-ce que la vérité de la Bible est quelque chose de figé ?", a: "La vérité biblique n'est pas un simple acquis ou une liste de faits, c'est un mouvement qui rend libre celui qui la reçoit. Les paroles sacrées ne sont pas faites pour rester emprisonnées sur du papier, mais pour mettre le lecteur en mouvement." },
                        { q: "Quel est le rôle du Nouveau Testament par rapport à cette vérité ?", a: "Composé en moins d'un siècle, il multiplie les récits et les discours pour témoigner sans cesse de Jésus de Nazareth. Il utilise une grande diversité littéraire, du récit des Actes des Apôtres jusqu'au final de l'Apocalypse." },
                        { q: "Comment savoir quel sens donner aux passages difficiles ou scandaleux ?", a: "Les passages qui peuvent ennuyer ou scandaliser font partie de la vérité d'un peuple qui cherche Dieu avec ses propres limites. Il faut les lire comme une étape qui prépare la venue du Christ." },
                        { q: "Qu'est-ce que la Bible cherche finalement à nous prouver ?", a: "Elle cherche à nous faire participer à une conviction de foi : Dieu intervient dans l'histoire pour sauver l'humanité. Elle révèle le mystère d'une relation d'amour qui change nos repères et notre vision du monde." }
                    ]
                },
                {
                    id: 5,
                    title: "La Miséricorde",
                    intro: "Témoigner d'un amour qui pardonne",
                    pdf: "https://www.dropbox.com/scl/fi/6x4oz51p2ar3a4gggz4s5/9-Comment-t-moigner-de-la-mis-ricorde-de-Dieu.pdf?rlkey=3eek1gb3warec8tl69o40cvdy&st=e9o3lu4u&raw=1",
                    faqs: [
                        { q: "C’est quoi exactement la miséricorde de Dieu ?", a: "C'est l'immensité d'un amour qui ne condamne personne mais se penche sur la douleur des autres pour la guérir. Jésus a expliqué qu'il est \"tout Amour et Miséricorde\" et qu'il souhaite offrir un temps de grâce à l'humanité." },
                        { q: "Qui est Sainte Faustine et quel est son rôle ?", a: "C’est une religieuse polonaise du XXe siècle à qui Jésus a confié la mission de transmettre le message de la Miséricorde Divine au monde entier. Ses échanges avec le Christ sont consignés dans son ouvrage intitulé le \"Petit Journal\"." },
                        { q: "Dieu veut-il nous punir pour nos fautes ?", a: "Non, le Seigneur a affirmé qu'il ne veut pas punir l'humanité souffrante, mais qu'il désire la guérir en la serrant sur son cœur. Il propose un \"jour de Miséricorde\" pour inviter chacun à la confiance avant le jour de la justice." },
                        { q: "Peut-on s'approcher de Dieu même si on a fait des choses graves ?", a: "Le Christ insiste pour qu'aucune âme n'ait peur de s'approcher de lui, même si ses péchés sont \"comme l'écarlate\". Celui qui fait confiance à sa miséricorde est considéré comme le plus heureux car Dieu prend lui-même soin de lui." },
                        { q: "Comment puis-je témoigner de cette miséricorde concrètement ?", a: "Jésus a donné trois moyens précis : l'action, la parole et la prière. Il demande de témoigner de cette bonté envers son prochain toujours et partout, sans chercher d'excuses pour se dérober." },
                        { q: "Quel est le lien entre aimer Dieu et aimer les autres ?", a: "L'amour du prochain est l'un des signes les plus sûrs de notre amour pour Dieu et un moyen de faire grandir cet amour en nous. La miséricorde envers les autres est vue par le Christ comme une preuve irréfutable de notre attachement à lui." },
                        { q: "La foi seule suffit-elle pour plaire à Dieu ?", a: "Selon le message transmis à Sainte Faustine, même la foi la plus solide n'est rien sans les actes de miséricorde. C'est par nos actions concrètes que nous glorifions et honorons vraiment la miséricorde divine." },
                        { q: "Quelles sont les pratiques recommandées pour honorer la Miséricorde ?", a: "Le Christ a demandé de vénérer son image (le tableau de Jésus Miséricordieux), de célébrer le dimanche de la Miséricorde et de réciter un chapelet spécifique. Il invite aussi à faire une neuvaine commençant le Vendredi Saint." },
                        { q: "Pourquoi l'heure de 15h00 est-elle importante ?", a: "C'est l'Heure de la Miséricorde, un moment pour honorer la Passion du Christ et son Cœur transpercé par la lance. C'est un temps privilégié pour puiser des grâces et méditer sur le sacrifice de Jésus." },
                        { q: "Pourquoi dit-on que ce message apporte la paix ?", a: "Jésus a déclaré que l'humanité ne trouvera pas la paix tant qu'elle ne se tournera pas avec une confiance totale vers sa miséricorde. Ce message invite chacun à une rencontre personnelle avec le Seigneur pour se laisser consoler et pardonner." }
                    ]
                },
                {
                    id: 6,
                    title: "La Vie Éternelle",
                    intro: "Notre destinée ultime",
                    pdf: "https://www.dropbox.com/scl/fi/388cdic3scxdjwfon62wu/1-Comment-annoncer-la-vie-ternelle.pdf?rlkey=7rplgl8i76h13bwt8u5qz3vgx&st=pw9xzni7&raw=1",
                    faqs: [
                        { q: "La mort, c'est quoi finalement ?", a: "La mort est la séparation de l'âme et du corps, marquant le terme de notre vie sur terre. Pour les chrétiens, c'est avant tout un \"retour à la maison du Père\" pour vivre avec Dieu pour toujours." },
                        { q: "On fait quoi exactement au Ciel ?", a: "Le Ciel consiste à partager la vie intime de Dieu dans une circulation d'amour infinie entre le Père, le Fils et le Saint-Esprit. C'est voir Dieu face à face et retrouver la joie d'être avec nos proches défunts." },
                        { q: "Dieu peut-il vraiment nous envoyer en Enfer ?", a: "L'Enfer n'est pas une punition imposée, mais un état \"d'auto-exclusion\" où l'homme choisit librement de rejeter Dieu. C'est le mystère de notre liberté qui nous permet de dire non à l'amour divin pour toujours." },
                        { q: "Pourquoi passer par le Purgatoire si on est déjà sauvé ?", a: "C'est un état de miséricorde, une sorte d'\"infirmerie\" où l'on est lavé des dernières traces de péché. Cette purification est nécessaire pour pouvoir supporter et jouir pleinement de la présence de Dieu." },
                        { q: "Comment se passe le jugement juste après la mort ?", a: "Il s'agit d'une rencontre décisive avec le Christ où toute fausseté s'évanouit devant son regard. Ce regard nous transforme et nous libère pour nous permettre de devenir enfin totalement nous-mêmes." },
                        { q: "Est-ce qu'on souffre au Purgatoire ?", a: "C'est une \"heureuse souffrance\" car l'âme jubile d'être certaine de son salut. La douleur vient du regret de ses fautes et du retard de la vision de Dieu que l'on brûle de rejoindre." },
                        { q: "Nos prières sont-elles vraiment utiles pour les morts ?", a: "Oui, car les âmes en purification ne peuvent plus rien pour elles-mêmes et ont besoin de notre aide. Dieu nous donne la responsabilité de les accompagner par la prière dans leur passage vers la vie éternelle." },
                        { q: "Est-ce que le monde va disparaître à la fin des temps ?", a: "Non, l'univers lui-même sera renouvelé et le Royaume de Dieu arrivera à sa plénitude. Les êtres terrestres et célestes seront alors définitivement réunis sous l'autorité du Christ." },
                        { q: "Même un grand pécheur peut-il espérer le paradis ?", a: "Dieu veut que tous les hommes soient sauvés et sa miséricorde est plus grande que toutes nos fautes. L'Église confie même ceux qui ont trahi, comme Judas, à la bonté infinie de Dieu." },
                        { q: "Comment s'entraîner dès maintenant à la vie éternelle ?", a: "La meilleure préparation est d'apprendre à aimer profondément Dieu, les autres et soi-même ici-bas. On peut aussi demander l'intercession de la Vierge Marie ou de saint Joseph pour nous aider à bien vivre ce passage." }
                    ]
                }
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
                {
                    id: 7,
                    title: "Répondre à l'Indifférent",
                    intro: "Celui qui n'a pas besoin de Dieu",
                    pdf: "https://www.dropbox.com/scl/fi/sistxpoev7z65xt2racgt/5-Que-r-pondre-l-indiff-rent-qui-n-a-pas-besoin-de-Dieu.pdf?rlkey=bdjc0yvfqtlkm2axxe2q74s6e&st=vlrb3spf&raw=1",
                    faqs: [
                        { q: "Pourquoi s'intéresser à la religion si on est déjà heureux ?", a: "La foi comble une soif de bonheur que les objets ou les activités du monde ne peuvent jamais satisfaire totalement. Elle ancre votre joie dans une relation d'amour avec Dieu qui est impossible à détruire, même par la mort." },
                        { q: "Qu'est-ce que ça m'apporte concrètement d'être chrétien ?", a: "Cela donne des réponses claires sur votre origine et ce qui se passe après votre dernier souffle. Vous n'êtes plus le simple résultat d'un hasard mais quelqu'un qui a une mission précise sur cette terre." },
                        { q: "Comment la foi peut-elle m'aider à choisir mon avenir ?", a: "Savoir quel est le but de votre existence permet de mieux décider quoi étudier ou où travailler. Cela vous aide à faire les meilleurs choix pour les grandes orientations de votre vie." },
                        { q: "Pourquoi Dieu laisse-t-il le mal arriver ?", a: "Il ne permettrait jamais que le mal arrive s'il n'avait pas prévu une manière d'en tirer un plus grand bien. Avec lui, la souffrance n'est jamais sans espoir car il marche et souffre avec nous dans chaque difficulté." },
                        { q: "Je me sens seul même entouré. Dieu peut-il changer cela ?", a: "Celui qui croit n'est jamais seul car il développe une relation d'amour personnelle avec Dieu. Même si vos proches vous trahissent ou partent, Dieu reste toujours présent, fidèle et compatissant." },
                        { q: "Est-il vraiment possible de pardonner à quelqu'un qui m'a fait beaucoup de mal ?", a: "Le pardon est une force surhumaine et divine que la foi permet justement d'obtenir. Pardonner vous rend libre et vous empêche de rester prisonnier du passé ou de la colère." },
                        { q: "Je n'arrive pas à me pardonner mes propres erreurs. Que faire ?", a: "La foi donne la certitude que Dieu ne se lasse jamais de vous pardonner vos fautes. S'il vous pardonne, cela vous aide à briser la prison de la culpabilité pour enfin vous pardonner vous-même." },
                        { q: "Pourquoi les gens malveillants réussissent-ils mieux que les bons ?", a: "Bien que l'injustice soit réelle, la foi assure qu'un jugement final réparera chaque acte malveillant. À la fin, le bien l'emportera et chacun recevra ce qu'il mérite vraiment." },
                        { q: "La mort est-elle vraiment la fin de tout ?", a: "Après la mort, ce n'est pas le néant mais une participation au bonheur infini de Dieu qui vous est proposée. C'est une rencontre avec un Dieu qui vous aime, transformant la vie en un pèlerinage plein d'espérance." },
                        { q: "À quoi sert l'Esprit Saint dans ma vie de tous les jours ?", a: "L'Esprit Saint vous permet d'aimer les autres d'une manière surnaturelle et vous rend vraiment libre. Il vous aide aussi à vous rappeler les paroles de Dieu et vous conduit vers une vie sainte." }
                    ]
                },
                {
                    id: 8,
                    title: "Celui qui souffre",
                    intro: "Accompagner la douleur",
                    pdf: "https://www.dropbox.com/scl/fi/4jg617ap9ean6nbrcejrk/4-Que-r-pondre-celui-qui-souffre.pdf?rlkey=2zipvtosv7btbl5iwk4ts2cv7&st=wlg2c5cd&raw=1",
                    faqs: [
                        { q: "Pourquoi Dieu laisse-t-il souffrir s'il nous aime ?", a: "Dieu n'est pas venu supprimer la souffrance ou l'expliquer par de grands discours, mais il est venu la remplir de sa propre présence. Il reste à nos côtés dans l'épreuve sans jamais s'imposer." },
                        { q: "Quels sont les bons mots à dire à quelqu'un qui a mal ?", a: "Les mots ne peuvent souvent pas exprimer l'indicible, l'essentiel est donc d'établir une relation sincère pour rapprocher les cœurs. On ne peut pas effacer la peine, mais on peut choisir de marcher humblement avec la personne." },
                        { q: "Est-ce que je dois comparer son histoire à la mienne pour l'aider ?", a: "Non, il ne faut surtout pas se comparer à celui qui souffre car sa douleur est strictement personnelle. Il vaut mieux se faire proche de la personne dans sa singularité plutôt que de ramener son épreuve à la vôtre." },
                        { q: "J'ai peur d'être maladroit, vaut-il mieux laisser la personne seule ?", a: "Il est important de lutter contre l'isolement, même si la souffrance reste un vécu intime. L'important est d'accueillir la douleur de l'autre sans chercher à la faire disparaître à tout prix." },
                        { q: "Que faire si la personne refuse de parler ou s'enferme ?", a: "Il faut accepter que l'autre se referme car il n'a parfois plus la force de porter quoi que ce soit d'autre que sa propre peine. Votre présence patiente et respectueuse à ses côtés suffit souvent." },
                        { q: "Est-ce que je dois essayer de ressentir exactement sa douleur ?", a: "L'objectif est d'accueillir la souffrance de l'autre plutôt que de chercher à la ressentir soi-même. Vous ne pouvez pas porter sa peine à sa place, mais vous pouvez être celui qui ne le laisse pas seul." },
                        { q: "À quoi sert la foi si elle n'enlève pas la maladie ou le deuil ?", a: "La foi ne fait pas disparaître la souffrance, mais sie agit comme un rempart qui empêche de sombrer dans le désespoir. Elle permet de sentir que Jésus est présent et marche avec nous dans la difficulté." },
                        { q: "Comment réagir face à quelqu'un qui se met à pleurer ?", a: "Il faut répondre à l'appel des larmes en allant vers celui qui pleure, tout simplement pour lui demander si ça va. Ce geste simple et direct montre que vous n'avez pas peur de sa peine." },
                        { q: "Est-ce que cette douleur va durer toujours avec la même intensité ?", a: "Il faut se concentrer sur l'instant présent en gardant en tête que la souffrance d'aujourd'hui ne sera pas forcément celle du futur. La forme de la peine évolue avec le temps." },
                        { q: "Un geste physique est-il une bonne idée ?", a: "Oui, car par le toucher, celui qui souffre se sent vivant et relié au monde. C'est un moyen concret de rapprocher les cœurs quand les paroles semblent insuffisantes." }
                    ]
                },
                {
                    id: 9,
                    title: "Dialogue avec les Musulmans",
                    intro: "Témoigner avec respect",
                    pdf: "https://www.dropbox.com/scl/fi/0mxwoqkxlfc6ml1d196uw/13-Que-r-pondre-un-musulman.pdf?rlkey=016t41w0vbcgrqnsx7hmsbsci&st=a3av3qfe&raw=1",
                    faqs: [
                        { q: "Quelle doit être mon intention principale avant d'entamer la discussion ?", a: "L'annonce ne doit pas être une \"croisade\" ou un débat d'idées pour prouver que l'autre a tort, mais un acte de charité pour partager un trésor par amour. Le but est d'aider l'autre à poser un acte libre avec douceur, car c'est Dieu seul qui convertit les cœurs." },
                        { q: "Est-il utile de parler des \"trois religions du Livre\" ?", a: "Il est conseillé d'éviter cette expression car les chrétiens sont avant tout la religion du Christ. De même, interroger l'autre sur ses pratiques comme le Ramadan ou le nombre de prières quotidiennes mène rarement à un échange profond sur la foi." },
                        { q: "Comment réagir si le ton monte ou si la discussion devient tendue ?", a: "Il ne faut pas avoir peur de la tension car c'est souvent le signe d'un intérêt réel pour le sujet. Si cela devient trop vif, il suffit de détendre l'atmosphère en rappelant que l'on peut être différents tout en s'aimant." },
                        { q: "Quelle est la meilleure approche face à quelqu'un de très convaincu ?", a: "Au lieu d'annoncer directement, il est préférable d'inverser les rôles en posant des questions précises qui suscitent la curiosité ou le doute sur ses propres certitudes. On peut par exemple demander pourquoi un Dieu tout-puissant aurait besoin d'être adoré par des créatures fragiles." },
                        { q: "Pourquoi est-il important de souligner que Dieu nous a créés par amour ?", a: "C'est une révélation spécifique au christianisme car, dans l'islam, Dieu crée souvent pour être adoré. Expliquer que Dieu nous a créés gratuitement par pur amour ouvre une perspective que le musulman n'a pas forcément dans sa religion." },
                        { q: "Comment présenter le but de la vie chrétienne par rapport au paradis ?", a: "Alors que l'islam voit souvent la terre comme un test pour \"mériter\" le paradis, le chrétien croit que le bonheur est possible dès maintenant. Jésus s'est fait homme pour que nous goûtions à sa paix et à sa joie aujourd'hui même." },
                        { q: "Quelle est la différence fondamentale dans la manière de prier ?", a: "La prière chrétienne ne naît pas de la peur d'un juge, mais de la certitude d'être aimé par un Père. Le chrétien vient remettre ses faiblesses à Dieu pour être guéri et rempli de son amour, ce qui est l'opposé d'une prière de simple soumission." },
                        { q: "Comment parler de Jésus sans créer de blocage immédiat ?", a: "Il est parfois plus efficace de dire qu'il est Dieu plutôt que \"Fils de Dieu\" et de rappeler qu'il est celui qui revient à la fin des temps. On peut aussi attendre que l'autre pose des questions sur la foi chrétienne après avoir souligné certaines limites ou incohérences de sa propre croyance." },
                        { q: "Comment expliquer la Trinité sans utiliser de termes trop compliqués ?", a: "On peut expliquer que si Dieu est Amour, il ne peut pas être solitaire, car l'amour est par définition un don de soi. Il faut donc au moins deux personnes pour qu'il y ait un don, comme celui du Père vers le Fils à travers l'Esprit Saint." },
                        { q: "Quels mots vaut-il mieux éviter au début de l'échange ?", a: "Il est préférable d'éviter les concepts trop théoriques comme \"sacrement\", \"rédemption\" ou \"Trinité\" qui n'ont pas la même définition dans l'islam. Il vaut mieux chercher à définir les termes simples comme l'amour, qui est pour nous un don de soi gratuit et total." }
                    ]
                },
                {
                    id: 10,
                    title: "L'Église : Sainte mais pécheresse",
                    intro: "Sainte mais imparfaite",
                    pdf: "https://www.dropbox.com/scl/fi/8fystg103uj375yen44pz/6-Que-r-pondre-celui-qui-rejette-l-Eglise-sainte-mais-imparfaite.pdf?rlkey=wh1jsmwcvpiqqixo14l2pmpng&st=hhavtdpa&raw=1",
                    faqs: [
                        { q: "Comment l'Église peut-elle se dire \"sainte\" avec tous les scandales qu'on connaît ?", a: "Sa sainteté ne vient pas de la perfection des hommes qui la composent, mais de son union avec le Christ qui est son époux. Quand les chrétiens chantent qu'elle est sainte, ils proclament en réalité la fidélité de Dieu malgré leurs propres fautes." },
                        { q: "Est-ce vrai que même le Pape peut finir au Purgatoire ?", a: "Absolument, car l'Église reconnaît que tous ses membres sont des pécheurs ayant besoin de purification. C'est d'ailleurs pour cela qu'on célèbre des messes pour le repos de l'âme d'un pape dès son décès, même s'il est mort en \"odeur de sainteté\"." },
                        { q: "Peut-on aimer Dieu tout en détestant l'institution de l'Église ?", a: "Saint Cyprien de Carthage affirmait que personne ne peut avoir Dieu pour Père s'il n'a pas l'Église pour mère. Elle est le Corps du Seigneur animé par l'Esprit pour nous transmettre la vie divine à travers les sacrements." },
                        { q: "L'Évangile a-t-il vraiment le pouvoir de changer un profil \"irrécupérable\" ?", a: "De nombreuses personnes ont vécu un basculement radical de vie après avoir été bouleversées par une parole de l'Évangile ou par l'Eucharistie. Saint Paul explique que ce processus permet de se débarrasser du \"vieil homme\" pour devenir une créature nouvelle." },
                        { q: "Pourquoi les catholiques demandent-ils pardon au début de chaque messe ?", a: "C'est une confession publique : ils admettent être de pauvres pécheurs qui ont besoin d'être renouvelés par l'Esprit du Seigneur. Personne ne prétend être arrivé au sommet de la perfection en entrant dans une église." },
                        { q: "Les saints sont-ils des personnes nées parfaites ?", a: "Pas du tout, ce sont des hommes et des femmes qui ont simplement profité pleinement des sacrements pour devenir des reflets du Christ. Leurs parcours, comme celui de Jeanne d'Arc ou de Thérèse d'Avila, servent de déclencheurs pour la conversion des autres." },
                        { q: "Quel est l'intérêt de suivre des rituels et des sacrements ?", a: "Ce sont les outils concrets par lesquels l'Esprit Saint sanctifie les membres de l'Église. Sans ces moyens, il est beaucoup plus difficile de s'acheminer vers la vraie connaissance de Dieu et de soi-même." },
                        { q: "Est-ce que l'Église nous demande d'être des super-héros de la morale ?", a: "Le Christ appelle chacun à être parfait comme le Père céleste est parfait, mais c'est un cheminement, pas une condition d'entrée. L'Église propose des modèles à imiter pour nous encourager dans cette progression quotidienne." },
                        { q: "Pourquoi la Vierge Marie a-t-elle un statut à part ?", a: "Elle est considérée comme la \"toute-Sainte\", celle qui était déjà sur terre totalement débarrassée de toute trace de péché. Elle représente ce que tous les membres de l'Église sont appelés à devenir un jour dans le Royaume des cieux." },
                        { q: "Quelle est la promesse finale pour celui qui reste dans cette Église imparfaite ?", a: "L'audace de la foi est de croire que nous rejoindrons un jour une assemblée où toute trace de mal sera effacée. L'Église terrestre nous prépare à cette entrée définitive dans la gloire de Dieu." }
                    ]
                },
                {
                    id: 11,
                    title: "Je prie seul, sans l'Église",
                    intro: "L'importance de la communauté",
                    pdf: "https://www.dropbox.com/scl/fi/pzi69x7u3k3r5j7wsegsz/7-Que-r-pondre-celui-qui-prie-seul-et-n-a-pas-besoin-de-l-Eglise.pdf?rlkey=nqhn10gy5axzszuwbffqstlcn&st=9tii22v4&raw=1",
                    faqs: [
                        { q: "Pourquoi s'encombrer d'une institution si je prie déjà très bien tout seul dans mon salon ?", a: "La prière personnelle est essentielle, mais l'Église offre des outils uniques comme les sept sacrements qui permettent une union intime avec Dieu et une purification que la solitude ne procure pas. Elle est aussi là pour nous soutenir et nous relever quand notre foi personnelle commence à chanceler." },
                        { q: "Le mot \"Église\" sonne un peu vieux jeu, qu'est-ce que ça veut dire au juste ?", a: "À l'origine, le terme grec Ecclésia signifie « appelé hors » : c'est l'invitation à quitter l'isolement du monde pour suivre le Christ ensemble. C'est avant tout une communauté de personnes liées par la foi, l'espérance et l'amour, et non un simple bâtiment." },
                        { q: "Est-ce qu'on peut vraiment trouver l'Esprit de Dieu en dehors des églises ?", a: "Saint Irénée explique que là où se trouve l'Église, là se trouve aussi l'Esprit de Dieu, car l'Esprit est la vérité qui anime cette communauté. En dehors de ce corps, on risque de perdre le lien avec la \"Tête\" qui est le Christ, sans qui rien n'est possible." },
                        { q: "À quoi sert le Pape si on est tous censés être égaux ?", a: "Le Pape est le serviteur de l'unité ; son rôle principal est de transmettre de manière vivante l'unique foi commune pour éviter qu'elle ne s'éparpille. Il garantit que l'Église reste \"une\" malgré la diversité des cultures et des nations." },
                        { q: "Pourquoi l'Église se dit-elle \"sainte\" alors qu'elle est remplie de gens imparfaits ?", a: "Elle est sainte non pas parce que ses membres sont parfaits, mais parce que son chef, Jésus, est saint. Elle est comme une \"infirmerie\" où les pécheurs trouvent les moyens de se sanctifier et de devenir des hommes nouveaux." },
                        { q: "Est-ce que l'Église catholique est un club fermé ou est-ce pour tout le monde ?", a: "Le mot \"catholique\" signifie précisément \"universel\". Elle rassemble des membres de toutes les nations, langues et cultures, prouvant que le message du Christ n'a pas de frontières." },
                        { q: "Si je n'ai jamais entendu parler de l'Église, suis-je exclu du projet de Dieu ?", a: "Pas du tout, car le \"corps mystique\" de l'Église inclut aussi ceux qui recherchent Dieu en vérité et suivent leur conscience sans le connaître encore. Dieu les soutient par sa grâce pour qu'ils puissent, eux aussi, entrer en communion avec lui." },
                        { q: "En quoi l'Église est-elle utile à la société d'aujourd'hui, concrètement ?", a: "Elle agit pour la paix et la justice, lutte contre la solitude et défend la dignité des plus fragiles. Elle crée du lien social en offrant l'hospitalité aux étrangers et en favorisant l'éducation et le soin des autres." },
                        { q: "Pourquoi dit-on que l'Église est un \"corps\" ?", a: "C'est une image pour montrer que nous sommes tous dépendants les uns des autres : chaque membre a une tâche différente mais collabore avec la \"Tête\", le Christ. Sans les autres membres, on est comme un sarment coupé de la vigne qui finit par s'assécher." },
                        { q: "Pourquoi Dieu passe-t-il par une organisation humaine plutôt que de nous parler directement ?", a: "Dieu veut que l'homme participe librement à son œuvre de salut en coopérant avec les autres. L'Église nous donne des frères et sœurs dans le Christ, car c'est à l'amour que nous avons les uns pour les autres que l'on reconnaît ses disciples." }
                    ]
                },
                {
                    id: 12,
                    title: "Divorcés - Remariés",
                    intro: "Accueillir avec vérité",
                    pdf: "https://www.dropbox.com/scl/fi/8i83msy562og2s81gv252/8-Que-dire-des-personnes-s-par-es-remari-es.pdf?rlkey=yxgt51ofz5tiqnsafadgv6dzp&st=3amln5uf&raw=1",
                    faqs: [
                        { q: "Est-ce que je suis viré de l’Église si je divorce ?", a: "Non, les personnes divorcées ne sont pas excommuniées et restent des membres à part entière du corps du Christ par la force de leur baptême. Elles ont toujours une place active dans la communauté, par exemple pour le catéchisme, les lectures ou l'évangélisation." },
                        { q: "Pourquoi l’Église fait-elle tout un plat pour m’empêcher de communier ?", a: "L’Eucharistie est le signe de la fidélité absolue de Dieu, et le mariage en est l'image terrestre indissoluble. Donner la communion automatiquement donnerait l'idée fausse que l'engagement ne dure qu’autant que les sentiments." },
                        { q: "Dieu m'a-t-il abandonné parce que mon couple a explosé ?", a: "Au contraire, le Seigneur souffre de cette blessure avec vous car il reste personnellement engagé dans ce sacrement, dont le nom est Fidèle. Votre souffrance fait même de vous des membres particulièrement aimés, les « petits » de Dieu." },
                        { q: "Est-ce que mes enfants sont considérés comme une erreur aux yeux de Dieu ?", a: "Absolument pas, il est essentiel de dire aux enfants qu'ils sont toujours le fruit d'un amour. Ils restent, comme leurs parents, des fils et filles bien-aimés du Père." },
                        { q: "Puis-je quand même aller voir un prêtre pour me confesser ?", a: "Vous y êtes même vivement encouragés, même si le prêtre ne pourra pas toujours vous donner l’absolution sacramentelle. Ce dialogue reste un moment de grâce pour porter vos fardeaux et être accompagné dans votre discernement." },
                        { q: "Y a-t-il un espoir de retrouver les sacrements un jour après un remariage civil ?", a: "Oui, un accompagnement personnalisé peut parfois déboucher, après discernement, sur l'accès aux sacrements pour des couples stables. On peut aussi faire examiner l'invalidité du premier mariage, une démarche facilitée ces dernières années." },
                        { q: "Comment faire pour ne pas se sentir exclu pendant la communion ?", a: "Vous pouvez vous avancer vers le prêtre les mains croisées sur la poitrine pour recevoir une bénédiction chaque dimanche. Votre désir de Dieu peut vous unir à lui plus profondément que certains fidèles qui communient par simple habitude." },
                        { q: "Dois-je rester seul toute ma vie pour être un « bon » chrétien ?", a: "Rester fidèle malgré la séparation est un chemin de vérité et de joie, mais l'Église accueille tout le monde avec délicatesse. Même si vous prenez un autre chemin, vous demeurez un membre de l'Église à part entière." },
                        { q: "Le mariage à l'église, c'est juste un contrat qu'on peut casser ?", a: "Non, c'est une alliance où Dieu s'engage avec les époux ; on n'est plus deux mais trois. C'est cette dimension sacrée qui permet à certains couples de tenir dans la tourmente." },
                        { q: "À quoi ça sert de venir à la messe si je ne peux pas manger l'hostie ?", a: "Vous participez au banquet de l'Eucharistie par la Parole de Dieu, qui est une nourriture réelle pour l'âme. Le salut dépend de votre appartenance au Christ et non du nombre de fois où vous avez communié." }
                    ]
                },
                {
                    id: 13,
                    title: "Sciences Occultes",
                    intro: "Les dangers cachés",
                    pdf: "https://www.dropbox.com/scl/fi/z85vwsygdfqtt6o3cpnxs/17-Quel-sont-les-dangers-des-sciences-occultes.pdf?rlkey=mi9ukcn3wbuj7bcmly1eiy8yl&st=75xbo8pi&raw=1",
                    faqs: [
                        { q: "Horoscope, voyance, soins énergétiques... est-ce vraiment si grave d'essayer ?", a: "Ces pratiques ne sont pas neutres et créent souvent une dépendance ou des angoisses au lieu du bonheur promis. On ne se livre pas impunément à des forces occultes ; il y a toujours un prix à payer car ces pratiques ouvrent la porte à un monde obscur au lieu de s'en remettre à la confiance en Dieu." },
                        { q: "Si Dieu nous aime, pourquoi nous laisse-t-il galérer autant avec la souffrance ?", a: "Dieu n'est pas venu supprimer la douleur ou l'expliquer, mais il est venu la remplir de sa présence pour que personne ne la porte seul. La foi n'efface pas la peine, mais elle agit comme un rempart qui empêche de sombrer dans le désespoir total." },
                        { q: "Les Évangiles sont-ils des témoignages fiables ou de simples \"fake news\" historiques ?", a: "Les divergences de détails entre les récits ne sont pas des erreurs, mais des invitations à saisir la vérité centrale qui échappe aux mots : le salut de l'humanité. La Bible est vraie car elle construit une espérance et nous conduit vers le Christ, pas parce qu'elle est un rapport scientifique froid." },
                        { q: "Le monde est-il un pur hasard ou a-t-il vraiment été \"pensé\" par une intelligence ?", a: "La beauté improbable de la vie et les lois de l'univers laissent deviner un dessein intelligent derrière le mystère des choses. Puisque tout effet a une cause, l'univers complexe et limité exige l'existence d'un être nécessaire que nous appelons Dieu." },
                        { q: "Le Purgatoire, c’est une punition de plus ou une vraie chance de s’en sortir ?", a: "Ce n'est pas une prison mais \"l'infirmerie du Bon Dieu\" où l'on est purifié par l'amour pour pouvoir enfin supporter la lumière divine. C'est une souffrance heureuse car l'âme a la certitude absolue d'être sauvée et de rejoindre enfin la joie du Ciel." },
                        { q: "Pourquoi rejoindre une Église remplie de pécheurs et de gens imparfaits ?", a: "L'Église n'est pas sainte par la perfection de ses membres, mais parce que son chef, Jésus, est saint. C'est une communauté de gens qui reconnaissent leurs faiblesses et acceptent d'être soignés et sanctifiés par les sacrements." },
                        { q: "Est-ce qu'on peut être vraiment heureux sans jamais avoir besoin de Dieu ?", a: "On peut se satisfaire des plaisirs du monde, mais seul Dieu peut combler notre soif d'infini car notre cœur est fait par lui et pour lui. La foi nous sauve de l'absurde en donnant un sens clair à notre présence sur terre et en nous sortant de la solitude profonde." },
                        { q: "Est-ce qu'au fond, les chrétiens et les musulmans croient exactement à la même chose ?", a: "Bien qu'il y ait des points communs, la révélation chrétienne est unique : Dieu est un Père qui nous a créés gratuitement par pur amour. Pour nous, le paradis n'est pas un test à réussir par nos mérites, mais un bonheur déjà commencé aujourd'hui grâce à Jésus." },
                        { q: "Comment 3 personnes peuvent-elles faire 1 seul Dieu ? C'est quoi ce délire de la Trinité ?", a: "Dieu n'est pas une équation mathématique mais une communion vivante d'amour entre le Père, le Fils et l'Esprit. S'il est Amour, il ne peut pas être solitaire : il est par nature un don de soi permanent et éternel." },
                        { q: "Si mon mariage échoue, est-ce que je suis définitivement banni de l’Église ?", a: "Personne n'est excommunié à cause d'un divorce ; vous restez un membre à part entière de la communauté chrétienne par votre baptême. Même dans la blessure de la séparation, Dieu reste fidèle à son engagement et continue de vous accompagner avec une tendresse particulière." }
                    ]
                }
            ]
        },
        {
            id: 'spirituel',
            icon: Flame,
            title: 'Vivre sa foi',
            count: 5,
            color: '#1a1a1a',
            gradient: 'from-gray-900 to-gray-700',
            image: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=600',
            formations: [
                {
                    id: 14,
                    title: "Annoncer avec la Parole",
                    intro: "Utiliser la Parole de Dieu",
                    pdf: "https://www.dropbox.com/scl/fi/edywe39fgmjlky8wx2i4j/Mission-avec-la-parole-de-Dieu.pdf?rlkey=o3ucv7ystsgbtdlbdzo3erc09&st=ztcgw8vp&raw=1",
                    faqs: [
                        { q: "Dieu existe-t-il vraiment ou est-ce une invention pour se rassurer ?", a: "L'existence de Dieu est une certitude philosophique : tout ce qui existe a une cause, et cette \"cause première\" incausée est Dieu. De plus, la complexité et la beauté de l'univers laissent voir avec l'intelligence les traces d'un dessein intelligent derrière le mystère des choses." },
                        { q: "Si Dieu est tout-puissant, pourquoi laisse-t-il le mal et la souffrance gagner ?", a: "Dieu n'est pas venu supprimer la souffrance ou l'expliquer, mais il est venu la remplir de sa présence pour que personne ne la porte seul. Il respecte notre liberté et sait tirer un plus grand bien du mal, même si cette logique dépasse totalement notre intelligence actuelle." },
                        { q: "Un seul Dieu en trois personnes : est-ce un bug mathématique ?", a: "C'est le mystère de la Trinité : Dieu est unique par sa nature divine, mais existe en trois personnes distinctes par leurs relations d'amour. Le Père engendre le Fils, et de leur amour mutuel procède l'Esprit Saint, formant une communion vivante et éternelle." },
                        { q: "Horoscopes et voyance : est-ce vraiment dangereux ou juste un jeu ?", a: "Ces pratiques sont graves car elles créent une dépendance et ouvrent la porte à des forces obscures au lieu de s'en remettre avec confiance à la Providence. Le Christ nous libère de ces oppressions pour nous offrir le seul vrai bonheur dans la lumière." },
                        { q: "Pourquoi rejoindre une Église pleine de pécheurs et de scandales ?", a: "L'Église est sainte par son union au Christ, son époux, et non par la perfection des hommes qui la composent. C'est une \"infirmerie\" où des pécheurs acceptent d'être soignés et transformés par les sacrements pour devenir des hommes nouveaux." },
                        { q: "Chrétiens et musulmans : prions-nous exactement le même Dieu ?", a: "Bien qu'nous cherchions le même Dieu, notre vision diffère : pour les chrétiens, Dieu est un Père qui nous a créés gratuitement par pur amour. Notre prière n'est pas une soumission par peur d'un juge, mais une relation personnelle avec un Dieu qui nous aime infiniment." },
                        { q: "Divorcé et remarié : suis-je définitivement banni de la communauté ?", a: "Pas du tout, vous restez membre à part entière de l'Église par votre baptême et votre place y est précieuse. Si l'accès à la communion est restreint pour des raisons théologiques, la miséricorde de Dieu est plus grande que tout et il reste intimement proche de vous." },
                        { q: "Le Purgatoire : est-ce une salle d'attente ou une torture ?", a: "C'est un état de miséricorde, une purification nécessaire pour pouvoir jouir pleinement de la vision de Dieu. C'est une \"heureuse souffrance\" car l'âme a la certitude absolue de son salut et brûle de rejoindre l'amour divin." },
                        { q: "Comment savoir si c’est Dieu qui me parle ou mon imagination ?", a: "Dieu nous guide par la Bible, des certitudes intérieures dans le silence, ou à travers les événements de la vie, même les plus difficiles. Il utilise aussi les autres et la création comme des signes discrets de sa présence et de notre mission personnelle." },
                        { q: "Les Évangiles : témoignages historiques ou légendes retouchées ?", a: "Ce ne sont pas des rapports scientifiques froids, mais des récits destinés à transmettre une conviction de foi profonde. Leurs variations ne sont pas des erreurs, mais une richesse pour rendre compte de la vérité de Jésus sous tous ses angles." }
                    ]
                },
                {
                    id: 15,
                    title: "Couple et Mission",
                    intro: "Le mariage comme socle",
                    pdf: "https://www.dropbox.com/scl/fi/62nd3rwd4vvksi2jmafpz/16-Quels-fruits-pour-la-mission-en-couple.pdf?rlkey=u8kcwjnsm6p0vx0vaw7xxh2c9&st=icad0a71&raw=1",
                    faqs: [
                        { q: "Pourquoi mon couple est-il si important pour l'avenir de l'Église ?", a: "L'avenir de l'évangélisation dépend en grande partie de la \"famille domestique\". Le couple est placé au cœur de l'enjeu missionnaire car il est la cellule de base d'où découle toute la mission de la famille." },
                        { q: "Peut-on être missionnaire si notre couple n'est pas parfait ?", a: "Il ne faut pas témoigner de sa propre perfection, mais de la façon dont Dieu vient visiter et restaurer nos faiblesses. Ce sont précisément nos crises et nos manques qui nous permettent de faire l'expérience du salut et de devenir des témoins crédibles." },
                        { q: "Qu'est-ce que le sacrement change concrètement pour notre engagement ?", a: "Le mariage n'est pas qu'un contrat, il confère une grâce spéciale pour une mission particulière au service de l'Église. Par ce sacrement, le couple devient un acteur missionnaire à part entière, capable de rendre visible l'amour invisible de Dieu." },
                        { q: "Comment concilier vie quotidienne épuisante et mission ?", a: "Maintenir vif le lien avec Dieu par la prière en famille est essentiel pour traverser les litiges ou les problèmes financiers. L'unité du couple doit rester une priorité absolue qui se construit dans le temps de qualité passé ensemble." },
                        { q: "Quel rapport existe-t-il entre notre sexualité et Dieu ?", a: "L'union des corps, des cœurs et des esprits est le reflet de la Sainte Trinité. Le couple est une icône vivante de l'amour de Dieu, et cette communion charnelle participe pleinement à sa dimension de sacrement." },
                        { q: "Pourquoi l'unité dans notre couple est-elle parfois un tel combat ?", a: "Le diviseur se déchaîne contre l'unité conjugale car elle est le signe de la présence de Dieu sur terre. Nous portons la marque du péché originel, ce qui rend l'unité impossible par nos seules forces humaines sans l'aide de la grâce." },
                        { q: "Comment témoigner auprès de familles qui ne croient pas ?", a: "Le couple missionnaire est invité à être un signe lumineux par son simple exemple de vie et de charité. Les époux sont souvent les mieux placés pour annoncer Jésus aux autres familles en partageant simplement ce qu'ils vivent au quotidien." },
                        { q: "Est-ce qu'il faut absolument prier ensemble pour réussir ?", a: "Mettre Dieu à la première place garantit que tout le reste trouve sa juste mesure dans la vie du foyer. La prière commune est l'un des piliers qui permet d'honorer l'alliance et de faire grandir la communion intime du couple." },
                        { q: "Doit-on choisir entre s'occuper de son couple ou faire de la mission ?", a: "Il n'y a pas d'opposition car toute mission découle de la communion vécue au sein du couple. C'est en prenant soin de leur propre unité que les époux découvrent et approfondissent leur mission particulière." },
                        { q: "Comment le pardon peut-il aider les autres à croire ?", a: "Le couple témoigne par son humilité et sa capacité à demander ou accueillir le pardon en vérité. En montrant qu'un amour blessé peut être sauvé par la miséricorde, les époux annoncent concrètement le cœur du message chrétien." }
                    ]
                },
                {
                    id: 16,
                    title: "La Gratitude",
                    intro: "Transformer son regard",
                    pdf: "https://www.dropbox.com/scl/fi/sgdnsvxzaulfz6ocgqwfe/15-Comment-vivre-de-la-gratitude.pdf?rlkey=o77tachq7mo02jpwvkcpi5naw&st=lrxustq8&raw=1",
                    faqs: [
                        { q: "Quel est le véritable secret d'une vie réussie ?", a: "La gratitude est le secret de l'existence car remercier pour tout permet de pénétrer le mystère profond de la vie. Celui qui apprend cette attitude comprend enfin ce que signifie réellement vivre." },
                        { q: "Est-ce que dire merci peut vraiment améliorer ma santé ?", a: "La science montre que la gratitude améliore la qualité du sommeil et protège le cœur comme le système sanguin face au diabète. Cette habitude permettrait même de gagner environ sept années de vie en plus." },
                        { q: "Comment la gratitude agit-elle sur notre moral ?", a: "Cette force intérieure apporte la joie et limite la tristesse ou le stress tout en fortifiant la volonté personnelle. Elle réduit aussi les besoins de compensation comme la nourriture excessive ou les achats compulsifs." },
                        { q: "C’est quoi cette fameuse « cascade du don » ?", a: "Avoir conscience de recevoir un bienfait donne naturellement envie de se donner davantage aux autres. Celui qui reçoit à son tour ce don sera touché et voudra redonner, créant un mouvement qui facilite toute la vie sociale." },
                        { q: "Comment définir la gratitude en trois étapes simples ?", a: "C'est d'abord reconnaître par l'intelligence un don inattendu, puis ressentir une émotion sincère avec le cœur. La dernière étape est l'acte de la volonté qui consiste à remercier la personne ou le Seigneur." },
                        { q: "Peut-on transformer la reconnaissance en une vertu durable ?", a: "Pour qu'elle devienne une vertu, il faut répéter des petits exercices intentionnels afin qu'ils s'inscrivent dans nos habitudes. Cette répétition permet une transformation qui nous aide à rester reconnaissants même durant les épreuves." },
                        { q: "Comment rester positif quand les ennuis s'accumulent ?", a: "Il faut changer son vocabulaire face aux contrariétés en remplaçant les plaintes par l'expression « c'est intéressant ». Voir l'utilité d'une difficulté permet de prendre du recul et de grandir au lieu de simplement subir." },
                        { q: "Doit-on tout attendre de Dieu ou tout faire par soi-même ?", a: "Le secret est de trouver l'équilibre en agissant comme si tout dépendait de nous tout en sachant que tout dépend de Dieu. La gratitude naît de cette coopération entre nos efforts et la grâce divine." },
                        { q: "Quel exercice pratique peut-on tester dès ce soir ?", a: "Notez dans un carnet les trois meilleurs moments de votre journée juste avant de vous endormir. Ce partage peut aussi se faire en famille pour que chacun apprenne à voir le beau dans son quotidien." },
                        { q: "Quel est le lien entre la gratitude et la foi chrétienne ?", a: "Rendre grâce attire la grâce et donne tout son sens à l'Eucharistie qui est une action de grâce. En vivant ainsi, on évite de s'enfermer dans un volontarisme orgueilleux pour s'ouvrir à l'amour du Seigneur." }
                    ]
                },
                {
                    id: 17,
                    title: "Le Pardon",
                    intro: "Un chemin de libération",
                    pdf: "https://www.dropbox.com/scl/fi/gjeam66o0nt3pzytja4gq/3-Pourquoi-et-comment-pardonner.pdf?rlkey=d934fv994tgi73e9chaaumhaf&st=w1n95j9v&raw=1",
                    faqs: [
                        { q: "Que dire à quelqu'un qui affirme que la foi ne l'intéresse pas ?", a: "Il est bon de se rappeler que Dieu se tient à la porte et frappe, attendant simplement qu'on lui ouvre pour entrer et partager un repas. Il se laisse souvent trouver par ceux qui ne le cherchaient pas, car il nous a aimés le premier." },
                        { q: "Quel message apporter à une personne qui souffre et a besoin de consolation ?", a: "Le Seigneur est proche du cœur brisé et promet de procurer le repos à ceux qui ploient sous le poids du fardeau. Sa puissance donne toute sa mesure dans la faiblesse, et il promet d'essuyer toute larme en supprimant la douleur." },
                        { q: "Comment soutenir un couple qui traverse une crise profonde ?", a: "Le texte suggère qu'une corde à trois brins, incluant la présence de Dieu, n'est pas facile à rompre face à l'adversité. Le Seigneur reste un appui immédiat pour les esprits abattus par les difficultés conjugales." },
                        { q: "Quelle espérance donner à celui qui souffre de ne pas trouver l'âme sœur ?", a: "La Bible enseigne qu'il existe un moment pour tout et un temps pour chaque chose sous le ciel. Dieu n'oublie jamais ses enfants car il les porte gravés sur la paume de ses mains, même quand ils se sentent délaissés." },
                        { q: "Que répondre à une personne qui vit douloureusement l'impossibilité d'avoir un enfant ?", a: "Il est essentiel de témoigner que rien n'est impossible à Dieu, quelle que soit la situation. Il est celui qui recueille chaque larme dans ses outres et qui reste attentif aux pas vagabonds de ceux qui sont dans la peine." },
                        { q: "Comment aider quelqu'un qui n'arrive absolument pas à pardonner ?", a: "L'invitation est de pardonner réciproquement, comme le Christ nous a pardonné, en se revêtant de l'amour qui est le lien de la perfection. Il faut s'efforcer d'éliminer l'amertume et la colère pour vivre en paix avec tous autant que possible." },
                        { q: "Quels mots partager face à une personne tentée par le suicide ?", a: "Dieu affirme qu'il connaît les pensées qu'il forme pour nous, des pensées de paix et non de malheur, afin de nous offrir un avenir et une espérance. On peut crier vers lui depuis les profondeurs de sa détresse, car il sauve l'esprit abattu." },
                        { q: "Que conseiller à des parents totalement dépassés par l'éducation de leurs enfants ?", a: "Le Seigneur manifeste une tendresse paternelle envers ceux qui le craignent et conseille d'éduquer les jeunes selon leur développement. En lui faisant confiance et en lui confiant son chemin, sa grâce suffit à compenser nos manques." },
                        { q: "Comment interpeller une personne dont le travail a pris toute la place ?", a: "Il est utile de se demander quel avantage un homme a de gagner le monde entier s'il finit par y perdre sa propre vie. Les Écritures rappellent que chaque chose doit avoir sa juste place et son temps dédié sous le ciel." },
                        { q: "Que faire si le \"famissionnaire\" commence à se décourager face au rejet ?", a: "Il faut se souvenir que celui qui nous écoute écoute Dieu, et que celui qui nous rejette rejette en réalité celui qui nous a envoyés. La mission demande simplement de rendre raison de son espérance avec douceur et respect, sans craindre les manques de foi." }
                    ]
                },
                {
                    id: 18,
                    title: "Comment Dieu nous guide",
                    intro: "Reconnaître les signes",
                    pdf: "https://www.dropbox.com/scl/fi/024ir8x8m6cx476zkmqs4/2-Comment-Dieu-nous-guide-t-il.pdf?rlkey=wprqiszi0amwzu2wnalslrm8c&st=hirb085n&raw=1",
                    faqs: [
                        { q: "Dieu a-t-il un plan précis pour ma vie ou suis-je livré au hasard ?", a: "Chacun possède une mission personnelle que Dieu révèle discrètement par de multiples signes dans le quotidien. On n'est jamais le fruit d'un hasard indifférent, car Dieu nous guide sans cesse à travers les Écritures et les événements de notre vie." },
                        { q: "Comment savoir si c'est Dieu qui me parle ou juste ma propre imagination ?", a: "L'Esprit Saint parle au cœur par des \"motions intérieures\" qui sont perçues comme de véritables certitudes intimes. Pour faire la différence, il est essentiel d'écouter et de garder des temps de silence réguliers pendant la prière." },
                        { q: "Pourquoi Dieu utilise-t-il des \"coïncidences\" bizarres plutôt que de parler clairement ?", a: "La guidance divine est souvent très discrète et préfère passer par un livre ouvert \"fortuitement\" ou une conversation éclairante avec un proche. Ces signes respectent notre liberté tout en nous mettant sur la voie de notre véritable vocation." },
                        { q: "Une catastrophe ou une rupture peut-elle vraiment être un signe de Dieu ?", a: "Même des événements tragiques comme une maladie, un divorce ou un deuil peuvent devenir des moments où Dieu nous parle au plus profond. Ces chocs permettent parfois de nous révéler à nous-mêmes et de nous rapprocher radicalement de l'essentiel." },
                        { q: "La Bible est-elle un livre périmé ou une conversation en direct ?", a: "À travers les Saintes Écritures, Dieu ne cesse de nous parler aujourd'hui, car ignorer les Écritures revient à ignorer le Christ lui-même. Elle est le canal principal par lequel sa Parole nous parvient de manière vivante et actuelle." },
                        { q: "Ai-je vraiment besoin des autres pour entendre Dieu ou puis-je rester dans ma bulle ?", a: "Dieu nous parle à travers nos frères et la communauté chrétienne, qui sont tous des instruments de sa volonté pour nous éclairer. L'Église, par son enseignement et l'histoire des saints, nous aide à décrypter ses messages." },
                        { q: "Le silence est-il une perte de temps ou la clé pour capter Dieu ?", a: "Le silence est indispensable pour percevoir les motions de l'Esprit Saint qui s'adressent directement à notre cœur. C'est dans cet espace de retrait et d'écoute que les signes de Dieu cessent d'être de simples bruits de fond." },
                        { q: "Dieu peut-il se cacher derrière une simple rencontre inopinée ?", a: "Une rencontre surprise peut être une source d'enrichissement mutuel et un véritable signe envoyé par Dieu pour nous orienter. Il utilise la réalité concrète de nos relations sociales pour infléchir le sens de notre existence." },
                        { q: "Pourquoi Dieu parle-t-il à travers la nature et pas juste par des mots ?", a: "La création entière est un langage par lequel Dieu se manifeste, notamment à travers la beauté des paysages et des lois de l'univers. Contempler le monde est une méthode biblique pour recevoir un message sur la sagesse du Créateur." },
                        { q: "Ma vie professionnelle peut-elle être relancée par un signe \"fortuit\" de Dieu ?", a: "Un simple cours suivi sans conviction peut s'avérer être la formation exacte dont on avait besoin pour relancer une carrière ou susciter une vocation. Dieu agit dans les détails très pragmatiques de notre vie pour ouvrir de nouveaux horizons." }
                    ]
                }
            ]
        }
    ];

    // Fonction pour gérer l'ouverture type "Accordéon"
    const toggleFaq = (formationId, key) => {
        console.log('Toggling FAQ:', { formationId, key });
        setExpandedFaqs(prev => {
            // On ferme TOUT d'abord pour garantir un vrai accordéon
            const newState = {};

            // Si ce n'était pas déjà ouvert, on l'ouvre (et c'est le seul)
            if (!prev[key]) {
                newState[key] = true;
                console.log('Opening FAQ:', key);
            } else {
                console.log('Closing FAQ:', key);
            }
            return newState;
        });
    };

    return (
        <div className="min-h-screen bg-slate-50">
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
                .slide-down {
                    animation: slideDown 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                }
                @keyframes slideDown {
                    from { opacity: 0; max-height: 0; }
                    to { opacity: 1; max-height: 3000px; }
                }
                .faq-enter {
                    animation: faqEnter 0.3s cubic-bezier(0.4, 0, 0.2, 1) forwards;
                }
                @keyframes faqEnter {
                    from { opacity: 0; transform: translateY(-10px); max-height: 0; }
                    to { opacity: 1; transform: translateY(0); max-height: 500px; }
                }
                .pulse-ring {
                    animation: pulseRing 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
                }
                @keyframes pulseRing {
                    0%, 100% { transform: scale(1); opacity: 1; }
                    50% { transform: scale(1.05); opacity: 0.9; }
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
                        Formations
                    </h1>
                    <p className="text-xl text-center max-w-3xl mx-auto text-gray-700 leading-relaxed font-medium min-h-[110px] flex items-center justify-center">
                        Des outils concrets pour approfondir votre foi et mieux en témoigner.
                    </p>
                </div>
            </div>

            <div className="bg-orange-100 h-12 border-y border-orange-200"></div>

            {/* SECTION INTRODUCTIVE - POURQUOI SE FORMER */}
            <div className="relative overflow-hidden py-16 lg:py-24">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-8 leading-tight" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                                Pourquoi se former avec <span className="text-orange-600">Famissio ?</span>
                            </h2>
                            <div className="space-y-6 text-lg text-gray-700 font-medium leading-relaxed">
                                <p>
                                    Se former est une responsabilité envers ceux que nous rencontrons. C'est s'assurer que nos paroles restent fidèles au <span className="text-orange-600 font-bold">Credo de l'Église</span> et ne s'égarent pas dans des interprétations personnelles.
                                </p>
                                <p>
                                    La formation nous donne l'assurance nécessaire pour témoigner, mais elle nous apprend aussi l'art de <span className="text-gray-900 font-bold">l'écoute</span>. Avant de vouloir convaincre, il s'agit de rejoindre l'autre là où il en est, avec humilité et respect.
                                </p>
                            </div>
                        </div>
                        <div className="bg-white p-8 lg:p-12 rounded-[40px] shadow-xl border border-orange-100 relative group transition-all duration-500 hover:shadow-2xl overflow-hidden">
                            {/* Décoration subtile */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-50 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-700"></div>

                            <div className="relative space-y-6">
                                <div className="w-12 h-12 rounded-2xl bg-orange-100 flex items-center justify-center mb-6">
                                    <Bird className="w-6 h-6 text-orange-600" />
                                </div>

                                <blockquote className="text-xl lg:text-2xl font-bold text-gray-900 leading-snug italic" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                                    "Rappelez-vous qu'il n'existe pas de réponses toutes faites. L'Esprit Saint vous soufflera, le moment venu, la parole juste qui saura rejoindre la personne rencontrée."
                                </blockquote>

                                <div className="pt-4 border-t border-gray-100">
                                    <p className="text-gray-600 text-sm lg:text-base leading-relaxed">
                                        Vous êtes avant tout les <span className="font-bold">instruments du Seigneur</span> : le plus important est de rester à l'écoute de l'autre et de porter cette rencontre dans la prière.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* CONTENU - GRILLE PAR THÈME */}
            <div className="max-w-7xl mx-auto px-6 pt-24 pb-12">
                <div className="space-y-20 mb-[100px] lg:mb-[200px]">
                    {themes.map((theme) => {
                        return (
                            <div key={theme.id}>
                                {/* En-tête du thème */}
                                <div className="flex items-center gap-5 mb-8">
                                    <div
                                        className="rounded-2xl flex items-center justify-center text-white shadow-lg shrink-0"
                                        style={{ backgroundColor: theme.color, width: '3.25rem', height: '3.25rem' }}
                                    >
                                        {React.createElement(theme.icon, { className: "w-7 h-7" })}
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center gap-4 flex-wrap">
                                            <h2 className="text-3xl lg:text-4xl font-black text-gray-900" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                                                {theme.title}
                                            </h2>
                                            <span className="text-xs font-bold px-3 py-1 rounded-full text-white uppercase tracking-wider" style={{ backgroundColor: theme.color }}>
                                                {theme.count} formations
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="h-px mb-8" style={{ background: `linear-gradient(to right, ${theme.color}50, transparent)` }}></div>

                                {/* Grille des formations */}
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                                    {theme.formations.map((formation, idx) => {
                                        const isOpen = activeFormationId === formation.id;

                                        return (
                                            <div
                                                key={formation.id}
                                                className={`bg-white rounded-2xl border-2 transition-all duration-300 overflow-hidden flex flex-col ${isOpen ? 'shadow-xl' : 'border-gray-100 hover:border-gray-200 hover:shadow-md shadow-sm'}`}
                                                style={{ borderColor: isOpen ? theme.color : undefined }}
                                            >
                                                <div className="p-5 flex flex-col flex-1">
                                                    <div className="flex items-start gap-3 mb-3">
                                                        <span
                                                            className="text-3xl font-black opacity-15 shrink-0 leading-none"
                                                            style={{ fontFamily: 'Space Grotesk, sans-serif', color: theme.color }}
                                                        >
                                                            {String(idx + 1).padStart(2, '0')}
                                                        </span>
                                                        <h3 className="text-lg font-bold text-gray-900 leading-tight pt-1" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                                                            {formation.title}
                                                        </h3>
                                                    </div>
                                                    <p className="text-gray-500 text-sm leading-relaxed mb-5 flex-1">{formation.intro}</p>
                                                    <div className="flex gap-2 mt-auto">
                                                        <button
                                                            onClick={() => setActiveFormationId(prev => prev === formation.id ? null : formation.id)}
                                                            className="flex-1 px-4 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-900 rounded-xl font-semibold text-sm transition-all flex items-center justify-center gap-2 border-none outline-none ring-0 shadow-none"
                                                        >
                                                            <BookOpen className="w-4 h-4" />
                                                            {isOpen ? 'Fermer' : 'Voir'}
                                                        </button>
                                                        <button
                                                            onClick={() => setFullscreenPdf(formation)}
                                                            className="px-4 py-2.5 text-white rounded-xl font-semibold text-sm transition-all flex items-center gap-2 hover:opacity-90 border-none outline-none ring-0 shadow-none"
                                                            style={{ backgroundColor: theme.color }}
                                                        >
                                                            <Maximize2 className="w-4 h-4" />
                                                        </button>
                                                    </div>
                                                </div>

                                                {/* Contenu étendu - sous la carte, pleine largeur via col-span */}
                                                {isOpen && (
                                                    <div className="slide-down border-t-2 p-6 bg-slate-50" style={{ borderColor: theme.color }}>
                                                        {/* PDF Mini */}
                                                        <div className="mb-6 rounded-2xl overflow-hidden shadow-lg border border-gray-100">
                                                            <iframe
                                                                src={`https://docs.google.com/gview?url=${encodeURIComponent(formation.pdf)}&embedded=true`}
                                                                className="w-full h-80 border-none bg-white"
                                                                title={formation.title}
                                                            />
                                                        </div>

                                                        {/* FAQ avec pagination */}
                                                        {formation.faqs && formation.faqs.length > 0 && (
                                                            <div>
                                                                <h4 className="text-base font-bold text-gray-900 mb-3 flex items-center gap-2">
                                                                    <MessageCircle className="w-4 h-4" style={{ color: theme.color }} />
                                                                    Questions fréquentes
                                                                </h4>
                                                                {(() => {
                                                                    const currentFaqs = formation.faqs;
                                                                    const itemsPerPage = 4;
                                                                    const currentPage = faqPages[formation.id] || 0;
                                                                    const pageCount = Math.ceil(currentFaqs.length / itemsPerPage);
                                                                    const displayedFaqs = currentFaqs.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

                                                                    return (
                                                                        <>
                                                                            <div className="space-y-3 mb-6">
                                                                                {displayedFaqs.map((faq, faqIdx) => {
                                                                                    const absoluteIdx = (currentPage * itemsPerPage) + faqIdx;
                                                                                    const faqKey = `${formation.id}-${absoluteIdx}`;
                                                                                    const isFaqOpen = expandedFaqs[faqKey];

                                                                                    return (
                                                                                        <div
                                                                                            key={absoluteIdx}
                                                                                            className={`bg-white rounded-xl border transition-all duration-300 overflow-hidden ${isFaqOpen ? 'border-orange-200 shadow-md' : 'border-gray-200 hover:border-gray-300'
                                                                                                }`}
                                                                                        >
                                                                                            <button
                                                                                                onClick={() => toggleFaq(formation.id, faqKey)}
                                                                                                className="w-full p-4 text-left flex justify-between items-center hover:bg-gray-50 transition-all border-none outline-none ring-0"
                                                                                            >
                                                                                                <span className={`font-semibold text-sm pr-3 transition-colors ${isFaqOpen ? 'text-gray-900' : 'text-gray-700'
                                                                                                    }`}>
                                                                                                    {faq.q}
                                                                                                </span>
                                                                                                <div
                                                                                                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${isFaqOpen ? 'bg-orange-100 rotate-180' : 'bg-gray-50'
                                                                                                        }`}
                                                                                                >
                                                                                                    <ChevronDown className={`w-5 h-5 transition-colors ${isFaqOpen ? 'text-orange-600' : 'text-gray-400'
                                                                                                        }`} />
                                                                                                </div>
                                                                                            </button>
                                                                                            {isFaqOpen && (
                                                                                                <div className="faq-enter px-4 pb-6 pt-2 text-gray-700 text-sm border-t border-gray-100 bg-white leading-relaxed">
                                                                                                    {faq.a}
                                                                                                </div>
                                                                                            )}
                                                                                        </div>
                                                                                    );
                                                                                })}
                                                                            </div>

                                                                            {/* Pagination par points */}
                                                                            {pageCount > 1 && (
                                                                                <div className="flex justify-center gap-2 pt-2">
                                                                                    {Array.from({ length: pageCount }).map((_, idx) => (
                                                                                        <button
                                                                                            key={idx}
                                                                                            onClick={() => setFaqPages(prev => ({ ...prev, [formation.id]: idx }))}
                                                                                            className={`h-3 rounded-full transition-all duration-300 border-none outline-none ring-0 ${currentPage === idx ? 'w-10' : 'w-3 bg-gray-200 hover:bg-gray-300'
                                                                                                }`}
                                                                                            style={{ backgroundColor: currentPage === idx ? theme.color : undefined }}
                                                                                        />
                                                                                    ))}
                                                                                </div>
                                                                            )}
                                                                        </>
                                                                    );
                                                                })()}
                                                            </div>
                                                        )}
                                                    </div>
                                                )}
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* SECTION CONTACT CTA */}
                <div className="max-w-4xl mx-auto px-6 mb-32">
                    <div className="bg-gray-900 rounded-[40px] p-12 text-center relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-red-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

                        <div className="relative">
                            <h2 className="text-3xl lg:text-4xl font-black text-white mb-6" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                                Une autre formation en tête ?
                            </h2>
                            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                                S'il y a des thèmes ou des formations que vous auriez aimé trouver dans notre catalogue, n'hésitez pas à nous en faire part !
                            </p>
                            <Link
                                to="/contact"
                                className="inline-flex items-center gap-3 px-8 py-4 bg-white text-gray-900 rounded-2xl font-black transition-all hover:bg-orange-50 hover:scale-105 active:scale-95 shadow-xl"
                            >
                                <Send className="w-5 h-5 text-orange-600" />
                                Dites-le nous
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* MODAL PLEIN ÉCRAN PDF */}
            {
                fullscreenPdf && (
                    <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex flex-col">
                        <div className="flex items-center justify-between p-6 bg-gray-900">
                            <div className="flex items-center gap-4">
                                <BookOpen className="w-6 h-6 text-orange-400" />
                                <h3 className="text-white font-bold text-xl">{fullscreenPdf.title}</h3>
                            </div>
                            <button
                                onClick={() => setFullscreenPdf(null)}
                                className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all border-none outline-none ring-0"
                            >
                                <X className="w-6 h-6 text-white" />
                            </button>
                        </div>
                        <div className="flex-1 bg-gray-100 p-4">
                            <iframe
                                src={`${fullscreenPdf.pdf}#view=FitH`}
                                className="w-full h-full rounded-2xl shadow-2xl border-none bg-white"
                                title={fullscreenPdf.title}
                            />
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default FormationsPage;