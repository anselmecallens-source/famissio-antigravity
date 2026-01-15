import React, { useState, useEffect, useMemo } from 'react';
import { X, Play, ChevronLeft, ChevronRight, Church, MessageCircle, User, Calendar } from 'lucide-react';

const TemoignagesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedTestimony, setSelectedTestimony] = useState(null);
  const [testimonyOfDay, setTestimonyOfDay] = useState(null);
  const [visibleCount, setVisibleCount] = useState(9);

  useEffect(() => {
    if (selectedTestimony) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedTestimony]);

  const imagePool = [
    "https://www.dropbox.com/scl/fi/8q56kfmxm4sglltm3axjn/IMGP2729.JPG?rlkey=zlfiilxjftl76qp5nemmxnw5x&st=h8asvjzz&raw=1",
    "https://www.dropbox.com/scl/fi/urgxwidi711zytkgl79r4/20221104_220907.jpg?rlkey=4g5mxnthjmfzelitvzvc4a5et&st=1m28xbgw&raw=1",
    "https://www.dropbox.com/scl/fi/4l3pfnoj0afg0ln96cnhq/3149446C-CE04-40A4-A33A-DA19E37C0EB3.jpeg?rlkey=4pw1105l0aqqmaouixq40shws&st=iy8eblpr&raw=1",
    "https://www.dropbox.com/scl/fi/xc8deosj4qra9rjl65lcu/IMG_4847.jpg?rlkey=59ny4unvj05ztxosmsetgbfwk&st=susixzx9&raw=1",
    "https://www.dropbox.com/scl/fi/z851ymdvc5q476az9db5e/Mrvj-Gpe1-a8.jpg?rlkey=zl8zcqin1qa58v16ap80r4tt1&st=bnekutdt&raw=1",
    "https://www.dropbox.com/scl/fi/ixcw3h4uhj59m0xtvxtj2/IMG_5395.JPG?rlkey=eeucr2rcdema9x1rooq8b6ujf&st=y5g6u1jk&raw=1",
    "https://www.dropbox.com/scl/fi/hc363otmf84ozwh7oo6j7/IMG_9863.jpg?rlkey=dut2cu3nrf2tv6y4id0bmih18&st=sjxizhrn&raw=1",
    "https://www.dropbox.com/scl/fi/yocsem26icr39ysf5zr32/Famissio-200.jpg?rlkey=025bb00n4c5w9zn0g2682hwr0&st=0inl8xgg&raw=1",
    "https://www.dropbox.com/scl/fi/6ggc9yacwjt5fhswmqeul/Famissio-234.jpg?rlkey=lxxdkbshjez6t5qu4juacj2m&st=jawtkled&raw=1",
    "https://www.dropbox.com/scl/fi/d0bnse1rzrl4jkxwtcm66/Famissio-244.jpg?rlkey=u2r1n4oayntsgpwp4u0yjb43w&st=bp8syrqt&raw=1",
    "https://www.dropbox.com/scl/fi/rbz472voufins5450ws7j/Famissio-248.jpg?rlkey=y8dqnskasufwrrbrq54encsrc&st=yczgn063&raw=1",
    "https://www.dropbox.com/scl/fi/osl7opps7ooqgntv8hv5g/Famissio-262.jpg?rlkey=g0q63s8ylo1zla1xl6wl8lqcr&st=3giyy775&raw=1",
    "https://www.dropbox.com/scl/fi/171tst1fymncan4xiqeks/Famissio-264.jpg?rlkey=k5jeolrqpu2nqccvwk9exbuj8&st=e7gzvo8m&raw=1",
    "https://www.dropbox.com/scl/fi/q8bjmcqalbky9385056no/Famissio-274.jpg?rlkey=0f2rkfftvgfvv1bdmwzua3f46&st=npjtw24t&raw=1"
  ];

  const categories = [
    {
      id: 'fruits-paroisse',
      label: 'Fruits pour la paroisse',
      icon: Church,
      color: '#b91c1c',
      gradient: 'from-red-700 to-red-800',
      bgSelect: 'bg-red-700'
    },
    {
      id: 'rencontres',
      label: 'Fioretti & Rencontres',
      icon: MessageCircle,
      color: '#f97316',
      gradient: 'from-orange-500 to-orange-600',
      bgSelect: 'bg-orange-500'
    },
    {
      id: 'fruit-soi',
      label: 'Fruits pour soi',
      icon: User,
      color: '#fbbf24',
      gradient: 'from-amber-400 to-amber-500',
      bgSelect: 'bg-amber-400'
    }
  ];

  const testimonies = [
    // 2025 - Fruits pour la paroisse
    {
      id: 1,
      title: "Un nouveau souffle pour le catéchisme",
      category: 'fruits-paroisse',
      tags: ['Paroissiens'],
      type: "text",
      content: "Une dame de la paroisse m’a remerciée au moment du départ car elle a vécu un véritable déclic durant cette semaine missionnaire. Elle a confié qu’elle allait désormais totalement revoir sa façon de faire le catéchisme car elle se sentait « reboostée » par l'audace et la joie des familles. Elle a réalisé qu’on ne doit pas être tiède dans la transmission de la foi, et cette prise de conscience lui ouvre un champ de possibles magnifique pour son engagement futur auprès des enfants de la communauté.",
      year: "2025"
    },
    {
      id: 2,
      title: "Le retour à la messe après trois ans d'absence",
      category: 'fruits-paroisse',
      tags: ['Paroissiens'],
      type: "text",
      content: "Un monsieur de la paroisse qui s'était éloigné de l'église depuis longtemps a été touché par la présence des missionnaires. Bien qu'il n'ait pas mis les pieds à la messe depuis trois ans, il est revenu d'abord pour les vêpres, puis a participé au ciné-débat et a finalement assisté à la messe de la Toussaint. Son retour témoigne de la ferveur qui a régné durant cette semaine et qui a su toucher même ceux qui se croyaient loin de la pratique religieuse.",
      year: "2025"
    },
    {
      id: 3,
      title: "L'élan missionnaire d'une religieuse locale",
      category: 'fruits-paroisse',
      tags: ['Paroissiens', 'Religieuse'],
      type: "text",
      content: "Une religieuse de la région a partagé qu'elle souhaitait organiser des visitations depuis un certain temps mais qu'elle ne savait pas comment s'y prendre concrètement. Après avoir vu les familles à l'œuvre, elle a affirmé avec enthousiasme qu'elle allait désormais en organiser elle-même avec les enfants du catéchisme. Cette mission a permis de lever des blocages et de donner l'impulsion nécessaire à l'équipe paroissiale pour aller vers les personnes isolées.",
      year: "2025"
    },
    // 2025 - Fioretti et rencontres
    {
      id: 4,
      title: "Dialogue de vérité sur le parvis",
      category: 'rencontres',
      tags: ['Famissionnaires', 'Enfants'],
      type: "text",
      content: "Lors d'une veillée, un enfant famissionnaire de 13 ans est sorti parler sur le parvis avec un jeune de 25 ans qui traversait une vie très compliquée, marquée par la drogue. J'ai été saisi par leur conversation car ils parlaient ensemble de prière, de miséricorde et de vie éternelle comme deux vieux copains, dans une confiance et une simplicité réciproques. C’était une véritable leçon d'évangile de voir que si un adulte avait dit la même chose, il se serait probablement fait rejeter, alors que là, l'écoute était totale.",
      year: "2025"
    },
    {
      id: 5,
      title: "Le pardon pour un ancien soldat",
      category: 'rencontres',
      tags: ['Famissionnaires', 'Adultes'],
      type: "text",
      content: "Nous avons rencontré un vieil homme qui portait de lourdes souffrances liées à son passé, notamment des abus subis par un prêtre et ses propres actes durant la guerre d’Algérie. Bien qu’il ne fréquentait plus les églises, il gardait un fond de croyance. Nous avons prié avec lui, ce qui l’a beaucoup ému, mais c'est surtout quand nous lui avons répété que Dieu l’aimait personnellement qu'il a semblé être touché en profondeur. Ce rappel de l'amour inconditionnel de Dieu était le baume dont son âme blessée avait besoin.",
      year: "2025"
    },
    {
      id: 6,
      title: "La générosité totale des Albanais",
      category: 'rencontres',
      tags: ['Famissionnaires', 'Jeunes'],
      type: "text",
      content: "Pendant le porte-à-porte, un couple albanais nous a accueillis dans leur tout petit appartement et nous a fait asseoir pour discuter de Jésus. Après avoir prié ensemble, le monsieur a insisté avec force pour nous donner un énorme paquet de gâteaux malgré nos refus. Nous avons réalisé avec émotion qu'ils n'avaient presque rien dans leurs placards et qu'ils nous avaient pourtant tout donné par hospitalité. Ils sont ensuite venus dîner au presbytère, profondément touchés par cette fraternité.",
      year: "2025"
    },
    {
      id: 7,
      title: "Michel et l'apaisement d'un cœur",
      category: 'rencontres',
      tags: ['Famissionnaires', 'Adultes'],
      type: "text",
      content: "Michel, un homme de 75 ans rencontré dans un parc, était surpris que notre famille s'arrête pour lui parler. Il nous a confié se sentir délaissé comme un « clodo » malgré une vie de travail acharné. Après quarante-cinq minutes de dialogue, il a avoué qu'il pensait mettre fin à ses jours à cause de ses trop nombreuses souffrances, mais que notre rencontre l'avait apaisé. Ce temps d'écoute a été pour lui un véritable souffle d'espérance au milieu de son désespoir.",
      year: "2025"
    },
    // 2025 - Fruit pour soi-même
    {
      id: 8,
      title: "La certitude que Dieu existe",
      category: 'fruit-soi',
      tags: ['Famissionnaires', 'Enfants'],
      type: "text",
      content: "Un jeune garçon a partagé un moment très fort vécu durant la mission. Il a raconté qu'au cours d'une adoration, après avoir beaucoup pleuré, il a soudainement ressenti une certitude intérieure profonde : il s'est rendu compte que Dieu existe réellement. Ce fruit personnel a totalement transformé sa vision de la prière et lui a donné une motivation nouvelle pour vivre sa foi au quotidien.",
      year: "2025"
    },
    {
      id: 9,
      title: "Une révolution dans la vie de famille",
      category: 'fruit-soi',
      tags: ['Famissionnaires', 'Adultes'],
      type: "text",
      content: "Un père de famille a témoigné que la mission avait radicalement changé son regard sur ses propres enfants. En réalisant l'importance de s'adapter aux personnes rencontrées lors de l'évangélisation, il a compris que cette approche était aussi nécessaire avec ses enfants pour entrer dans leur univers propre. Cette prise de conscience a provoqué une véritable révolution dans sa manière de vivre ses relations familiales chaque jour.",
      year: "2025"
    },
    {
      id: 10,
      title: "Un amour conjugal et familial renouvelé",
      category: 'fruit-soi',
      tags: ['Famissionnaires', 'Adultes'],
      type: "text",
      content: "Une maman a confié être revenue de mission avec le cœur plein de joie et un regard purifié sur sa famille. Alors qu'ils étaient partis fatigués, cette semaine passée si proche du Seigneur à travers les louanges et le service les a ressourcés en profondeur. Elle a même souligné que cette expérience commune avait renouvelé leur amour conjugal, prouvant que le don de soi en mission porte des fruits inattendus au sein même du couple.",
      year: "2025"
    },
    // 2024 - Fruits pour la paroisse
    {
      id: 11,
      title: "Le retour d'un ancien serviteur",
      category: 'fruits-paroisse',
      tags: ['Famissionnaires', 'Enfants'],
      type: "text",
      content: "Nous avons rencontré une personne qui s'était coupée de l'Église depuis trois ans après avoir pourtant beaucoup servi pour les offices. Au début, il n'a pas voulu échanger avec nous sur la foi, mais nous lui avons tout de même proposé une parole de la Bible et de venir aux vêpres. À notre grande surprise, il est venu avec un grand sourire ! Nous lui avons alors téléphoné le soir même pour l'inviter à la soirée conviviale du lendemain. Il est venu, a retrouvé tous les paroissiens, nous a remerciés de l'avoir bousculé et a accepté une médaille miraculeuse. C’était une joie immense de voir ce lien avec la communauté se recréer si simplement.",
      year: "2024"
    },
    {
      id: 12,
      title: "La ferveur d'une messe d'enterrement",
      category: 'fruits-paroisse',
      tags: ['Paroissiens'],
      type: "text",
      content: "Votre ferveur, votre empathie et la générosité dans vos paroles lors de la messe d'enterrement de notre père ont été extrêmement réconfortantes. La présence improbable et inespérée de vos jeunes a rendu ce moment apaisant et émouvant. Le départ de notre père restera gravé dans nos mémoires comme une véritable communion des cœurs entre les vivants et les âmes des disparus. Vous avez su faire passer un courant d'amour qui manque tellement à notre monde actuel et nous vous en sommes profondément reconnaissants.",
      year: "2024"
    },
    {
      id: 13,
      title: "Un souffle nouveau pour la communauté",
      category: 'fruits-paroisse',
      tags: ['Paroissiens'],
      type: "text",
      content: "Accueillir la mission a permis de relancer une dynamique missionnaire au sein même de la paroisse et de redonner courage aux petites équipes locales. Cela a permis aux paroissiens de se rendre compte qu'ils ne sont pas seuls et que d'autres habitants ont besoin de l'Église. Ce souffle nouveau a bousculé les habitudes et a fait se lever de nouvelles personnes pour différents services paroissiaux. C’est une joie de voir que la paroisse peut opérer une véritable conversion pastorale et devenir un signe plus visible de l'amour de Dieu dans nos campagnes.",
      year: "2024"
    },
    // 2024 - Fioretti et rencontres
    {
      id: 14,
      title: "Romu et le rap de la colère",
      category: 'rencontres',
      tags: ['Famissionnaires', 'Enfants'],
      type: "text",
      content: "Nous avons rencontré Romu, un ancien SDF persuadé que l’Église n’est qu’hypocrisie. Il nous a fait écouter un morceau de rap qui disait des choses terribles sur Dieu et sur l'Église, en nous regardant droit dans les yeux. C'était un moment très dur et intense, mais notre jeunesse a fini par le mettre en confiance. Cette épreuve m’a permis d’expérimenter la prière au cœur même de la mission et de reprendre confiance face aux critiques sévères. Nous sommes repartis heureux de cet échange de vérité, en priant pour que le Seigneur continue son œuvre dans son cœur.",
      year: "2024"
    },
    {
      id: 15,
      title: "Michel et le goût de vivre retrouvé",
      category: 'rencontres',
      tags: ['Famissionnaires', 'Adultes'],
      type: "text",
      content: "Michel, un homme de 75 ans rencontré dans un parc, était très étonné que nous nous arrêtions avec nos quatre enfants pour lui parler. Il nous a confié avoir l'impression d'être un laissé-pour-compte malgré une vie de travail. Nous sommes restés quarante-cinq minutes à dialoguer avec lui et, à la fin, il nous a avoué être profondément apaisé. Il nous a alors partagé qu'il pensait sérieusement à mettre fin à ses jours tant ses souffrances étaient lourdes, mais que notre rencontre lui avait redonné un souffle d'espérance inattendu.",
      year: "2024"
    },
    {
      id: 16,
      title: "Le secret de la médaille de la belle-mère",
      category: 'rencontres',
      tags: ['Famissionnaires', 'Adultes'],
      type: "text",
      content: "Nous avons fait une belle rencontre avec une dame athée à qui nous avons offert une médaille miraculeuse. Cela lui a rappelé sa belle-mère qui, bien que se disant athée dans une famille anticléricale, lui avait confié un jour garder toujours une médaille dans sa poche. Lors du décès de cette dernière, la dame est allée récupérer la médaille dans la robe de chambre pour la placer dans le cercueil. Ce témoignage de fidélité cachée nous a beaucoup touchés et montre que les objets de dévotion restent parfois le dernier lien invisible avec le Ciel.",
      year: "2024"
    },
    {
      id: 17,
      title: "La fille bien-aimée derrière la porte",
      category: 'rencontres',
      tags: ['Famissionnaires', 'Adultes'],
      type: "text",
      content: "Une petite dame très craintive ne nous a pas ouvert sa porte en entier, restant protégée derrière sa barre de sécurité, mais elle a tout de même accepté que nous priions avec elle. Lorsque, pendant la prière, nous lui avons dit qu’elle était la fille bien-aimée du Bon Dieu, elle a fondu en larmes. Les enfants qui m’accompagnaient ont été marqués par cet instant et m'ont dit en repartant qu'ils avaient vraiment senti la présence de Dieu dans ce moment de vulnérabilité et de consolation partagée.",
      year: "2024"
    },
    // 2024 - Fruit pour soi-même
    {
      id: 18,
      title: "Un souffle nouveau pour ma foi",
      category: 'fruit-soi',
      tags: ['Famissionnaires', 'Jeunes'],
      type: "text",
      content: "Pour maintenir le feu de ma foi, j'avais besoin d'un coup de souffle de l'Esprit Saint et cette mission me l'a apporté. J'avais besoin de réconfort et de revoir toutes ces belles personnes engagées, ce qui ne me laisse pas insensible. La joie de parler du Bon Dieu aux autres, de témoigner et de donner de son temps se grave profondément dans mon âme. Je repars avec une vie de prière renouvelée et la certitude que la foi donne une espérance qui manque cruellement à tant de gens blessés que nous avons croisés.",
      year: "2024"
    },
    {
      id: 19,
      title: "La joie d'évangéliser en famille",
      category: 'fruit-soi',
      tags: ['Famissionnaires', 'Adultes'],
      type: "text",
      content: "Ma plus grande joie a été de servir en famille et de voir mes enfants investis et enthousiastes malgré la fatigue. Ils sont revenus renforcés et ranimés dans leur foi par leurs rencontres. C’est une magnifique école de vie pour eux, et ils nous ont même fait promettre de recommencer l'aventure. Voir ses enfants être capables de témoigner de leur foi devant des inconnus et de prier avec assurance est une grâce immense qui purifie notre regard de parents et crée une unité spirituelle très forte.",
      year: "2024"
    },
    {
      id: 20,
      title: "La grâce du lâcher-prise",
      category: 'fruit-soi',
      tags: ['Famissionnaires', 'Adultes'],
      type: "text",
      content: "Cette semaine m'a apporté une véritable grâce de lâcher-prise et un renouvellement de l'espérance. J'ai réalisé qu'il ne suffisait pas de compter sur mes propres forces ou mes talents pour annoncer l'Évangile, mais qu'il fallait laisser la première place au Seigneur. Je me sens désormais plus à l'aise pour proposer la prière spontanée et annoncer l'essentiel sans angoisse, sachant que je ne suis qu'un humble instrument et que c'est Dieu qui s'occupe de faire grandir la graine semée.",
      year: "2024"
    },
    // 2023 - Fruits pour la paroisse
    {
      id: 21,
      title: "La paix retrouvée de C.",
      category: 'fruits-paroisse',
      tags: ['Famissionnaires', 'Adultes'],
      type: "text",
      content: "C. était un homme en colère contre Dieu depuis le décès de son épouse et affirmait qu'il ne rentrerait plus jamais dans une église. Il a pourtant accepté de prier au cimetière avec nous et a reçu une médaille miraculeuse. Peu après, il a rencontré Monseigneur Bozo qui l'a béni avec beaucoup de douceur. Ce moment a été un basculement : il est entré librement dans l'église pour prier devant l'autel du Sacré-Cœur et a confié que son regard sur sa vie avait totalement changé. Il a vécu cela comme un miracle d'amour et de consolation, ramenant un fils de la paroisse vers la paix.",
      year: "2023"
    },
    {
      id: 22,
      title: "L'espérance donnée lors d'un enterrement",
      category: 'fruits-paroisse',
      tags: ['Paroissiens'],
      type: "text",
      content: "Une famille de la paroisse a tenu à exprimer sa vive reconnaissance pour la présence inespérée des jeunes missionnaires lors de la messe d'obsèques de leur père. La ferveur, l'empathie et la profondeur de l'engagement de ces jeunes ont apporté un réconfort immense et émouvant aux proches endeuillés. Ce moment a été vécu bien au-delà d'une simple cérémonie, devenant une véritable communion qui a montré aux paroissiens que l'Église est bien vivante et porteuse d'un avenir lumineux.",
      year: "2023"
    },
    {
      id: 23,
      title: "Les reliques de Carlo Acutis au foyer",
      category: 'fruits-paroisse',
      tags: ['Paroissiens'],
      type: "text",
      content: "Une paroissienne qui ne se sentait pas attirée par le culte des reliques a accepté d'héberger celles de Carlo Acutis dans son salon. Elle a fini par passer de longs moments à lui parler par la prière et y a trouvé un réconfort inattendu. Lors d'une veillée, elle a même pu écrire à son père décédé depuis vingt ans ce qu'elle n'avait jamais exprimé, le sentant enfin vivant et en paix dans son cœur. Cette expérience a transformé son lien avec la communauté et sa propre vie spirituelle.",
      year: "2023"
    },
    {
      id: 24,
      title: "De la paroisse à la mission",
      category: 'fruits-paroisse',
      tags: ['Paroissiens'],
      type: "video",
      videoId: "UWsUCF_HG6w",
      content: "Témoignage vidéo d'un paroissien qui a accueilli Famissio.",
      year: "2023"
    },
    // 2023 - Fioretti et rencontres
    {
      id: 25,
      title: "La demande de baptême de S.",
      category: 'rencontres',
      tags: ['Famissionnaires', 'Jeunes'],
      type: "text",
      content: "Le premier jour, une jeune fille a osé aborder trois hommes dans la rue. L'un d'eux, S., était resté enfermé dans son véhicule au début. Après une discussion et une invitation à une soirée ciné-débat, il a fini par nous rejoindre. À la suite de cette rencontre et d'une veillée de miséricorde, cet homme a été si touché qu'il a demandé le baptême dès le lendemain. C'est un signe magnifique de la manière dont une simple invitation peut transformer une existence.",
      year: "2023"
    },
    {
      id: 26,
      title: "Un échange sur la Shoah",
      category: 'rencontres',
      tags: ['Famissionnaires', 'Jeunes'],
      type: "text",
      content: "Nous avons rencontré une femme âgée d'origine juive mais athée, qui nous a confié l'histoire douloureuse de sa famille marquée par la Shoah. Nous avons échangé avec elle pendant quarante-cinq minutes sur la présence de Dieu au cœur des épreuves, en apportant nos modestes témoignages. En partant, elle a pris la main de l'un des jeunes pour le remercier, affirmant avoir été profondément touchée par ses paroles. Cette rencontre a prouvé que le témoignage des jeunes possède une force unique pour toucher les cœurs les plus blessés.",
      year: "2023"
    },
    {
      id: 27,
      title: "Le câlin de consolation sur le parvis",
      category: 'rencontres',
      tags: ['Famissionnaires', 'Adultes'],
      type: "text",
      content: "Après une journée difficile marquée par des refus, une missionnaire a croisé une mère et ses deux filles déguisées pour Halloween. Alors que la discussion portait sur les saints, l'une des petites filles s'est soudainement jetée sur elle pour lui faire un long câlin, le visage tourné vers le ciel. La missionnaire a eu la certitude immédiate que le Seigneur passait par cet enfant pour venir la consoler de sa rude journée. Elle en a retiré une joie profonde et une immense gratitude envers Dieu.",
      year: "2023"
    },
    {
      id: 28,
      title: "La leçon d'humilité de C.",
      category: 'rencontres',
      tags: ['Famissionnaires', 'Adultes'],
      type: "text",
      content: "Un groupe a été bouleversé par la rencontre avec C., un homme vivant dans un dénuement total mais qui ne se plaignait jamais. Lorsqu'on lui a proposé de prier pour lui, il a refusé par humilité, demandant plutôt que la prière soit faite pour toutes les personnes qui souffrent dans le monde. Son visage rayonnant de sourire malgré sa grande pauvreté a laissé une trace indélébile dans la mémoire des missionnaires présents, nous rappelant l'essentiel de l'Évangile.",
      year: "2023"
    },
    // 2023 - Fruit pour soi-même
    {
      id: 29,
      title: "L'unité retrouvée en famille",
      category: 'fruit-soi',
      tags: ['Famissionnaires', 'Adultes'],
      type: "text",
      content: "Cette semaine de mission a agi comme un véritable ciment pour notre vie de famille. Le fait de prier, de chanter des louanges et de partir ensemble à la rencontre des autres nous a permis de nous retrouver sur un plan spirituel profond. Voir nos enfants s'épanouir dans le témoignage et la prière a purifié notre regard de parents et nous a redonné une énergie nouvelle pour notre quotidien. Nous repartons avec une paix intérieure et une unité que nous n'avions pas imaginées.",
      year: "2023"
    },
    {
      id: 30,
      title: "Apprendre le signe de croix",
      category: 'fruit-soi',
      tags: ['Famissionnaires', 'Jeunes'],
      type: "text",
      content: "Une jeune fille a eu la joie d'enseigner les bases de la foi à un garçon de son âge rencontré lors d'une visite. Elle a pris le temps de lui parler de Jésus et de lui apprendre à faire son signe de croix. Elle lui a également offert une médaille miraculeuse, et l'enfant a manifesté son désir de rejoindre l'Église par le baptême. Pour la jeune missionnaire, se rendre compte qu'elle pouvait transmettre ce trésor a été un fruit immense qui a affermi sa propre confiance en Dieu.",
      year: "2023"
    },
    {
      id: 31,
      title: "La confiance dans l'action de Dieu",
      category: 'fruit-soi',
      tags: ['Famissionnaires', 'Adultes'],
      type: "text",
      content: "Le plus grand fruit pour moi a été de réaliser que je ne suis qu'un humble instrument. J'ai appris à lâcher prise sur mes propres capacités pour laisser l'Esprit Saint agir à travers moi. Cette prise de conscience m'a libéré d'un poids et m'a permis de vivre les rencontres avec une simplicité et une joie nouvelles. Je repars avec la certitude que c'est Dieu qui fait le plus gros du travail dans le cœur des gens, et cette confiance change totalement ma manière de prier.",
      year: "2023"
    },
    // 2022 - Fruits pour la paroisse
    {
      id: 32,
      title: "La paroisse vécue comme une visitation",
      category: 'fruits-paroisse',
      tags: ['Paroissiens'],
      type: "text",
      content: "Un paroissien a confié avoir vécu cette mission comme une véritable visitation, semblable à celle de Marie à sa cousine Élisabeth. La présence joyeuse et simple des familles missionnaires a permis de consolider la fraternité au sein de la communauté locale. Ce moment d'une grande intensité humaine et spirituelle a laissé une trace profonde dans les mémoires des fidèles.",
      year: "2022"
    },
    {
      id: 33,
      title: "La cuirasse d'une hôte qui se brise",
      category: 'fruits-paroisse',
      tags: ['Famissionnaires', 'Adultes'],
      type: "text",
      content: "Une femme de 75 ans a accueilli des missionnaires pour deux nuits avec une générosité marquée par une certaine dureté intérieure due aux épreuves de sa vie. Au fil des veillées, sa cuirasse s'est brisée et elle a été vue repartant en larmes, visiblement touchée et raffermie dans son espérance. Elle a pu déposer au pied de la croix des fardeaux qu'elle portait depuis très longtemps. ",
      year: "2022"
    },
    {
      id: 34,
      title: "Le réveil du zèle missionnaire local",
      category: 'fruits-paroisse',
      tags: ['Paroissiens'],
      type: "text",
      content: "Le passage de Famissio a agi comme un stimulant pour les paroissiens, leur faisant prendre conscience qu'ils ne sont pas seuls dans leur foi. Cette dynamique a bousculé les habitudes et encouragé certains fidèles à oser eux-mêmes devenir missionnaires dans leur entourage. La joie des jeunes a redonné courage à une communauté qui se sentait parfois isolée ou endormie.",
      year: "2022"
    },
    // 2022 - Fioretti et rencontres
    {
      id: 35,
      title: "Abdel et le témoignage des enfants",
      category: 'rencontres',
      tags: ['Famissionnaires', 'Jeunes'],
      type: "text",
      content: "Chez un coiffeur, un enfant de 5 ans a présenté son ami Jésus avec une spontanéité désarmante. Le coiffeur, Abdel, et un client nommé Salim ont été médusés par l'authenticité et l'amour qui se dégageaient de ce discours d'enfant. La rencontre s'est terminée par une bénédiction et le don d'une image de la Vierge, laissant les deux hommes profondément émus.",
      year: "2022"
    },
    {
      id: 36,
      title: "Pierre-François et la Bonne Nouvelle",
      category: 'rencontres',
      tags: ['Famissionnaires', 'Adultes'],
      type: "text",
      content: "Pierre-François a envoyé un message de gratitude expliquant que la venue des missionnaires avait effacé le souvenir douloureux d'un prêtre autrefois malveillant. Il a reçu leur visite comme une véritable annonce de la Bonne Nouvelle et a exprimé son besoin de soutien dans ses épreuves actuelles. Il a manifesté son désir de rester lié à cette famille d'Église pour ne plus se sentir seul dans sa foi.",
      year: "2022"
    },
    {
      id: 37,
      title: "Augusta et la prière pour son fils",
      category: 'rencontres',
      tags: ['Famissionnaires', 'Adultes'],
      type: "text",
      content: "Lors d'une rencontre de rue, Augusta pleurait car l'hôpital lui interdisait de visiter son fils malade en raison de restrictions sanitaires. Les missionnaires ont prié avec elle sur-le-champ pour confier son fils au Seigneur et briser sa solitude. Le lendemain, elle a rejoint le groupe à la messe avec une joie immense, se sentant portée par cette fraternité nouvelle.",
      year: "2022"
    },
    {
      id: 38,
      title: "Joseph et la cohérence de vie sous la pluie",
      category: 'rencontres',
      tags: ['Famissionnaires', 'Adultes'],
      type: "text",
      content: "Sous la pluie de Manosque, un échange profond s'est noué avec Joseph, un musulman se présentant initialement comme athée. La discussion a porté sur la nécessité d'une vie cohérente avec ses valeurs pour ne pas offrir un contre-témoignage aux autres. Malgré des convictions différentes, cette quête commune de vérité a créé un lien sincère et passionné entre Joseph et les missionnaires.",
      year: "2022"
    },
    // 2022 - Fruit pour soi-même
    {
      id: 39,
      title: "La découverte de la solitude des autres",
      category: 'fruit-soi',
      tags: ['Famissionnaires', 'Adultes'],
      type: "text",
      content: "Un missionnaire a été frappé par la soif de relation et la solitude profonde des personnes rencontrées, même chez certains chrétiens. Cette expérience a changé sa perception des choses, lui faisant réaliser l'importance de ne pas garder sa foi pour soi. Il repart avec la conviction que chaque rencontre est une occasion de découvrir le Christ à travers l'autre.",
      year: "2022"
    },
    {
      id: 40,
      title: "L'unité spirituelle en famille",
      category: 'fruit-soi',
      tags: ['Famissionnaires', 'Adultes'],
      type: "text",
      content: "Toute une famille a témoigné de la joie d'avoir osé affirmer sa foi et fait du porte-à-porte ensemble. Les enfants ont montré une capacité étonnante à témoigner de leurs rencontres devant les autres, renforçant l'unité spirituelle du foyer. Cette expérience a servi de tremplin pour édifier durablement la foi de chaque membre de la famille.",
      year: "2022"
    },
    {
      id: 41,
      title: "Le regard d'un enfant de huit ans",
      category: 'fruit-soi',
      tags: ['Famissionnaires', 'Jeunes'],
      type: "text",
      content: "Un garçon de huit ans a été très marqué par la découverte que certaines personnes vivent sans espérance et ne croient en rien. Cette prise de conscience l'a poussé à aller librement vers l'inconnu pour distribuer des sourires et des petits cadeaux. Il a trouvé sa place dans la mission en apportant sa joie simple aux portes des maisons.",
      year: "2022"
    },
    // 2021 - Fruits pour la paroisse
    {
      id: 42,
      title: "Le retour de Guy aux sacrements",
      category: 'fruits-paroisse',
      tags: ['Famissionnaires', 'Adultes'],
      type: "text",
      content: "Guy nous a accueillis chez lui avec une grande bonté. Au fil des veillées, il a cheminé sur la question du pardon. Bien qu'il n'ait pas pratiqué depuis longtemps, il a pris la décision courageuse de se préparer à la confession. Il m'a envoyé un message rempli de joie pour m'annoncer qu'il avait franchi le pas après cinquante ans d'attente. Son retour sincère vers les sacrements est un cadeau magnifique pour la vie spirituelle de la communauté locale.",
      year: "2021"
    },
    {
      id: 43,
      title: "D'Jo retrouve sa place à l'église",
      category: 'fruits-paroisse',
      tags: ['Famissionnaires', 'Adultes'],
      type: "text",
      content: "Ancien enfant de chœur, D'Jo a été attiré par l'animation des familles devant l'église. Il a rapidement demandé à porter le t-shirt de la mission et s'est investi chaque jour pour aider bénévolement. Le moment le plus fort a été sa démarche de réconciliation lors d'une veillée, une première pour lui depuis quarante-sept ans. Il témoigne aujourd'hui de son immense bonheur de se sentir à nouveau aimé par Dieu et pleinement intégré à sa paroisse.",
      year: "2021"
    },
    {
      id: 44,
      title: "Une lumière déposée à la mairie",
      category: 'fruits-paroisse',
      tags: ['Famissionnaires', 'Adultes'],
      type: "text",
      content: "Dans un petit village, nous avons été reçus par Catherine à la mairie. Elle nous a partagé sa solitude et son éloignement de la foi. En lui présentant le nouveau curé et en lui offrant une médaille, nous avons vu son visage s'éclairer. Elle a conclu notre visite en affirmant que notre passage avait transformé sa journée qui avait pourtant mal commencé. Ce lien créé entre la mission et les institutions locales montre que l'Église peut apporter de la paix partout.",
      year: "2021"
    },
    // 2021 - Fioretti et rencontres
    {
      id: 45,
      title: "Monique et l'étreinte sous la pluie",
      category: 'rencontres',
      tags: ['Famissionnaires', 'Adultes'],
      type: "text",
      content: "Un jour de pluie, nous avons chanté devant la porte de Monique. En entendant les voix des jeunes entonner un cantique à Marie, elle a été submergée par l'émotion. Les larmes ont commencé à couler sur son visage. Devant tant de sincérité, je lui ai proposé un câlin et nous sommes restées un long moment dans les bras l'une de l'autre. Cette rencontre fortuite est devenue un instant de pure consolation fraternelle.",
      year: "2021"
    },
    {
      id: 46,
      title: "Yolande et la prière pour ses yeux",
      category: 'rencontres',
      tags: ['Famissionnaires', 'Adultes'],
      type: "text",
      content: "Nous avons croisé Yolande, une femme souffrant d'un grave handicap visuel. Le dialogue s'est noué autour de sa dévotion à l'eau de Lourdes qu'elle applique sur ses yeux. Nous avons prié avec elle en pleine rue, demandant au Seigneur de lui accorder la grâce de la guérison si telle était sa volonté. Ce moment de foi partagée, simple et direct, nous a rappelé la puissance de la prière d'intercession dans le quotidien des gens.",
      year: "2021"
    },
    {
      id: 47,
      title: "Sara et l'unité des chrétiens",
      category: 'rencontres',
      tags: ['Famissionnaires', 'Jeunes'],
      type: "text",
      content: "Sara nous a abordés spontanément en voyant nos t-shirts. Elle nous a raconté sa conversion grâce à un pasteur et l'importance pour elle de suivre le Christ par un choix personnel. Nous avons vécu un moment d'unité très fort en priant ensemble, catholiques et protestants. Cette rencontre a montré que l'amour de Jésus dépasse les frontières confessionnelles et nous unit dans une même mission de témoignage.",
      year: "2021"
    },
    {
      id: 48,
      title: "Béatrice guidée vers l'église",
      category: 'rencontres',
      tags: ['Famissionnaires', 'Jeunes'],
      type: "text",
      content: "Béatrice était une dame très isolée qui ne savait même pas où se trouvait l'église de son propre village. Après une longue discussion, nous l'avons invitée à une veillée et nous sommes allés la chercher en voiture. Elle a été ravie de la soirée et a pu échanger longuement avec le prêtre. Voir cette femme sortir de sa solitude pour rejoindre la communauté a été l'un des plus beaux signes de la semaine.",
      year: "2021"
    },
    // 2021 - Fruit pour soi-même
    {
      id: 49,
      title: "Réaliser la chance d'avoir la foi",
      category: 'fruit-soi',
      tags: ['Famissionnaires', 'Jeunes'],
      type: "text",
      content: "En discutant avec des personnes qui n'ont jamais entendu parler de l'amour de Dieu, j'ai pris conscience de la valeur du trésor que j'ai reçu. Ma rencontre avec une jeune femme en recherche m'a fait réaliser que la foi n'est pas une simple habitude, mais un cadeau précieux. Je repars avec une gratitude immense pour l'éducation chrétienne que j'ai reçue et une envie renouvelée de partager cette espérance.",
      year: "2021"
    },
    {
      id: 50,
      title: "L'apprentissage de la compassion avec Patrice",
      category: 'fruit-soi',
      tags: ['Famissionnaires', 'Jeunes'],
      type: "text",
      content: "En faisant du porte-à-porte, j'ai rencontré Patrice, un homme malade et seul. Il nous a ouvert son cœur et nous a raconté ses peines avec beaucoup de confiance. J'ai compris ce jour-là que la mission consiste avant tout à écouter avec amour. En le voyant serrer sa médaille contre lui malgré ses douleurs, j'ai appris ce que signifiait réellement la compassion. Cette rencontre a durablement transformé ma manière de regarder les autres.",
      year: "2021"
    },
    {
      id: 51,
      title: "La joie de transmettre l'essentiel",
      category: 'fruit-soi',
      tags: ['Famissionnaires', 'Jeunes'],
      type: "text",
      content: "J'ai eu l'occasion d'apprendre à un garçon de mon âge comment faire le signe de croix. C'était un geste simple, mais voir son sérieux et son désir d'apprendre m'a profondément touché. Cela m'a donné confiance en ma capacité à transmettre ma foi, même avec des mots modestes. Je me suis rendu compte que le Seigneur utilise ma jeunesse pour toucher des cœurs, ce qui a beaucoup affermi ma propre confiance en Lui.",
      year: "2021"
    }
  ];

  const testimoniesWithImages = useMemo(() => {
    const shuffledTestimonies = [...testimonies].sort(() => Math.random() - 0.5);
    const shuffledPool = [...imagePool].sort(() => Math.random() - 0.5);

    const withImages = shuffledTestimonies.map((testimony, index) => {
      let displayImage;
      if (testimony.type === 'video') {
        displayImage = `https://img.youtube.com/vi/${testimony.videoId}/maxresdefault.jpg`;
      } else {
        displayImage = shuffledPool[index % shuffledPool.length];
      }
      return { ...testimony, displayImage };
    });
    return withImages;
  }, []);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * testimoniesWithImages.length);
    setTestimonyOfDay(testimoniesWithImages[randomIndex]);
  }, [testimoniesWithImages]);

  // Hide navbar when modal is open
  useEffect(() => {
    if (selectedTestimony) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
    return () => {
      document.body.classList.remove('modal-open');
    };
  }, [selectedTestimony]);

  const filteredTestimonies = selectedCategory === 'all'
    ? testimoniesWithImages
    : testimoniesWithImages.filter(t => t.category === selectedCategory);

  const displayedTestimonies = filteredTestimonies.filter(t => t.id !== testimonyOfDay?.id).slice(0, visibleCount);

  const truncateContent = (text, maxLength = 130) => {
    if (text.length <= maxLength) return text;
    return text.substr(0, maxLength) + '...';
  };

  const loadMore = () => {
    setVisibleCount(prev => prev + 9);
  };

  const navigateTestimony = (direction) => {
    if (!selectedTestimony) return;
    const availableTestimonies = filteredTestimonies.filter(t => t.id !== testimonyOfDay?.id);
    const currentIndex = availableTestimonies.findIndex(t => t.id === selectedTestimony.id);
    let newIndex;
    if (direction === 'prev') {
      newIndex = currentIndex > 0 ? currentIndex - 1 : availableTestimonies.length - 1;
    } else {
      newIndex = currentIndex < availableTestimonies.length - 1 ? currentIndex + 1 : 0;
    }
    setSelectedTestimony(availableTestimonies[newIndex]);
  };

  const getTagsDisplay = (tags) => {
    const rolesTags = tags.filter(tag => ['Famissionnaires', 'Paroissiens', 'Curé'].includes(tag));
    const otherTags = tags.filter(tag => !['Famissionnaires', 'Paroissiens', 'Curé'].includes(tag));

    return (
      <div className="flex items-center gap-2 text-sm font-medium">
        {rolesTags.map((tag, index) => (
          <React.Fragment key={tag}>
            {index > 0 && <span className="text-gray-400">•</span>}
            <span className="text-orange-600">{tag}</span>
          </React.Fragment>
        ))}
        {otherTags.map(tag => (
          <React.Fragment key={tag}>
            <span className="text-gray-400">•</span>
            <span className="text-gray-700">{tag}</span>
          </React.Fragment>
        ))}
      </div>
    );
  };

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

        @keyframes iconRotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .icon-animate {
          animation: iconRotate 0.6s ease-out;
        }

        body.modal-open .hero-navbar,
        body.modal-open .nav-circle,
        body.modal-open .testimony-filters,
        body.modal-open .site-footer {
          display: none !important;
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
            Témoignages
          </h1>

          <p className="text-xl text-center max-w-3xl mx-auto text-gray-700 leading-relaxed font-medium">
            Découvrez les histoires qui ont transformé des vies, des rencontres qui ont touché les cœurs, et des moments de grâce partagés à travers nos missions.
          </p>
        </div>
      </div>

      {/* TÉMOIGNAGE DU JOUR - SE CACHE QUAND MODAL OUVERTE */}
      {testimonyOfDay && !selectedTestimony && (
        <>
          <div className="bg-orange-100 h-12 border-y border-orange-200"></div>

          <div className="max-w-7xl mx-auto px-6 -mt-12 mb-16 relative">
            <div
              className="bg-white rounded-3xl shadow-2xl overflow-hidden cursor-pointer hover:scale-[1.01] transition-all duration-500"
              onClick={() => setSelectedTestimony(testimonyOfDay)}
            >
              <div className="p-12">
                <div className="flex flex-col md:flex-row gap-12 items-stretch">
                  {/* HAUTEUR FIXE 400px */}
                  <div className="w-full md:w-1/2 relative h-[400px] rounded-2xl overflow-hidden shadow-lg group flex-shrink-0">
                    <img
                      src={testimonyOfDay.displayImage}
                      alt={testimonyOfDay.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                    {testimonyOfDay.type === 'video' && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors">
                        <div className="w-20 h-20 bg-orange-600 rounded-full flex items-center justify-center shadow-xl transform group-hover:scale-110 transition-transform">
                          <Play className="w-10 h-10 text-white ml-1" fill="white" />
                        </div>
                      </div>
                    )}
                  </div>

                  {/* CONTENU - HAUTEUR FIXE */}
                  <div className="w-full md:w-1/2 flex flex-col justify-between h-[400px]">
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        {categories.find(c => c.id === testimonyOfDay.category) && (
                          <div className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold bg-gray-100 text-gray-800 border border-gray-200`}>
                            {React.createElement(categories.find(c => c.id === testimonyOfDay.category).icon, { className: "w-4 h-4" })}
                            {categories.find(c => c.id === testimonyOfDay.category).label}
                          </div>
                        )}
                      </div>
                      <h2 className="text-3xl md:text-4xl font-black mb-4 text-gray-900 leading-tight" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                        {testimonyOfDay.title}
                      </h2>
                      <p className="text-base md:text-lg text-gray-600 leading-relaxed line-clamp-6 mb-4">
                        {testimonyOfDay.content}
                      </p>
                    </div>
                    <div className="flex items-center gap-3 text-sm font-semibold">
                      {getTagsDisplay(testimonyOfDay.tags)}
                      <span className="text-gray-400">•</span>
                      <div className="flex items-center gap-2 text-gray-700">
                        <Calendar className="w-4 h-4" />
                        {testimonyOfDay.year}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {/* FILTRES */}
      <div className="bg-white border-y-2 border-gray-200 py-8 sticky top-0 z-50 testimony-filters">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-6 py-3 rounded-full font-bold transition-all ${selectedCategory === 'all' ? 'bg-black text-white scale-110' : 'bg-gray-100 hover:bg-gray-200'
                }`}
            >
              Tous
            </button>

            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-6 py-3 rounded-full font-bold transition-all flex items-center gap-2 ${selectedCategory === cat.id
                  ? `${cat.bgSelect} text-white scale-105 border-transparent`
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                  }`}
                style={selectedCategory === cat.id ? { backgroundColor: cat.color } : {}}
              >
                {React.createElement(cat.icon, { className: "w-4 h-4" })}
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* GRILLE DE TÉMOIGNAGES */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedTestimonies.map((testimony, index) => {
            const rotation = (index % 3 === 0 ? 1.5 : index % 3 === 1 ? -1.5 : 0);
            const categoryData = categories.find(c => c.id === testimony.category);

            return (
              <div
                key={testimony.id}
                className="group cursor-pointer relative hover:z-10 transition-all duration-300"
                onClick={() => setSelectedTestimony(testimony)}
                style={{
                  transform: `rotate(${rotation}deg)`,
                }}
              >
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden transition-all duration-500 group-hover:scale-[1.02] group-hover:rotate-0 h-full flex flex-col">
                  <div className="relative h-64 overflow-hidden flex-shrink-0">
                    <img
                      src={testimony.displayImage}
                      alt={testimony.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      loading="lazy"
                    />

                    {categoryData && (
                      <div
                        className="absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center shadow-lg text-white"
                        style={{ backgroundColor: categoryData.color }}
                      >
                        {React.createElement(categoryData.icon, { className: "w-5 h-5" })}
                      </div>
                    )}

                    {testimony.type === 'video' && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity z-10">
                        <div className="w-14 h-14 bg-orange-600 rounded-full flex items-center justify-center shadow-lg">
                          <Play className="w-7 h-7 text-white ml-1" fill="white" />
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center gap-2 mb-4">
                      {getTagsDisplay(testimony.tags)}
                      <span className="text-gray-400">•</span>
                      <span className="text-gray-700 text-sm">{testimony.year}</span>
                    </div>

                    <h3 className="text-2xl font-black mb-3 leading-tight text-gray-900" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                      {testimony.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed line-clamp-4 mb-4 flex-1">
                      {truncateContent(testimony.content, 130)}
                    </p>

                    {testimony.type === 'video' && (
                      <div className="mt-auto inline-flex items-center gap-2 px-4 py-2 bg-orange-50 text-orange-600 rounded-full text-xs font-bold self-start group-hover:bg-orange-600 group-hover:text-white transition-colors">
                        <Play className="w-3 h-3" fill="currentColor" />
                        Voir la vidéo
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {displayedTestimonies.length < filteredTestimonies.filter(t => t.id !== testimonyOfDay?.id).length && (
          <div className="text-center mt-16">
            <button
              onClick={loadMore}
              className="px-10 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 text-lg"
            >
              Charger plus de témoignages
            </button>
          </div>
        )}
      </div>

      {/* MODAL */}
      {selectedTestimony && (
        <div className="fixed inset-0 bg-black z-[99999] flex items-center justify-center p-4 md:p-6 overflow-y-auto">
          <button
            onClick={() => setSelectedTestimony(null)}
            className="fixed top-6 right-6 w-14 h-14 bg-white hover:bg-orange-50 rounded-full flex items-center justify-center text-orange-600 hover:text-orange-700 transition-all z-[100001] shadow-2xl border-2 border-orange-200"
          >
            <X className="w-7 h-7" strokeWidth={2.5} />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); navigateTestimony('prev'); }}
            className="fixed left-4 md:left-8 top-1/2 -translate-y-1/2 w-14 h-14 bg-white hover:bg-gray-100 rounded-full flex items-center justify-center text-gray-900 transition-all z-[100001] shadow-xl"
          >
            <ChevronLeft className="w-8 h-8" strokeWidth={2} />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); navigateTestimony('next'); }}
            className="fixed right-4 md:right-8 top-1/2 -translate-y-1/2 w-14 h-14 bg-white hover:bg-gray-100 rounded-full flex items-center justify-center text-gray-900 transition-all z-[100001] shadow-xl"
          >
            <ChevronRight className="w-8 h-8" strokeWidth={2} />
          </button>

          <div className="relative max-w-5xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl my-8 z-[100000]">
            <div className="p-8 md:p-12">
              {selectedTestimony.type === 'video' ? (
                <div>
                  <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
                    {categories.find(c => c.id === selectedTestimony.category) && (
                      <div className={`w-14 h-14 flex-shrink-0 bg-gradient-to-br ${categories.find(c => c.id === selectedTestimony.category).gradient} rounded-2xl flex items-center justify-center shadow-lg icon-animate`}>
                        {React.createElement(categories.find(c => c.id === selectedTestimony.category).icon, {
                          className: "w-7 h-7 text-white",
                          strokeWidth: 2.5
                        })}
                      </div>
                    )}
                    <div>
                      <h2 className="text-3xl md:text-4xl font-black text-gray-900" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                        {selectedTestimony.title}
                      </h2>
                      <div className="flex items-center gap-2 mt-2">
                        {getTagsDisplay(selectedTestimony.tags)}
                        <span className="text-gray-400">•</span>
                        <span className="text-gray-700 text-sm">{selectedTestimony.year}</span>
                      </div>
                    </div>
                  </div>
                  <div className="aspect-video rounded-2xl overflow-hidden shadow-xl bg-black">
                    <iframe
                      src={`https://www.youtube.com/embed/${selectedTestimony.videoId}`}
                      className="w-full h-full"
                      allowFullScreen
                      title={selectedTestimony.title}
                    ></iframe>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="w-full md:w-2/5 rounded-2xl overflow-hidden shadow-xl flex-shrink-0">
                    <img
                      src={selectedTestimony.displayImage}
                      alt={selectedTestimony.title}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-6">
                      {categories.find(c => c.id === selectedTestimony.category) && (
                        <div className={`w-16 h-16 bg-gradient-to-br ${categories.find(c => c.id === selectedTestimony.category).gradient} rounded-2xl flex items-center justify-center shadow-lg icon-animate`}>
                          {React.createElement(categories.find(c => c.id === selectedTestimony.category).icon, {
                            className: "w-8 h-8 text-white",
                            strokeWidth: 2.5
                          })}
                        </div>
                      )}
                    </div>
                    <h2 className="text-4xl font-black text-gray-900 mb-3" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                      {selectedTestimony.title}
                    </h2>
                    <div className="flex items-center gap-2 mb-6">
                      {getTagsDisplay(selectedTestimony.tags)}
                      <span className="text-gray-400">•</span>
                      <div className="flex items-center gap-2 text-gray-700 text-sm">
                        <Calendar className="w-4 h-4" />
                        {selectedTestimony.year}
                      </div>
                    </div>
                    <p className="text-lg leading-relaxed text-gray-700 whitespace-pre-line">
                      {selectedTestimony.content}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TemoignagesPage;
