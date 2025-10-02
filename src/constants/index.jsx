import cover_blacktie from "../assets/projects/blacktie/Blacktie_cover.webp"
import bg_blacktie from "../assets/projects/blacktie/Blacktie_Tickets.webp"
import BlacktieCS from "../components/casestudies/BlacktieCS.jsx"

import cover_langfelder from "../assets/projects/langfelder/Langfelder_lq.webp"
import bg_langfelder from "../assets/projects/langfelder/bg-2.webp"

import cover_mangrove from "../assets/projects/mangrove/can_front.webp"
import bg_mangrove from "../assets/projects/mangrove/bg_mangrove.webp"

import cover_wondrousnature from "../assets/projects/wondrousnature/cover_wondrousnature.webp"
import bg_wondrousnature from "../assets/projects/wondrousnature/bg_wondrousnature.webp"

import cover_natureswatch from "../assets/projects/natureswatch/natureswatch_mockup_cover.webp"
import bg_natureswatch from "../assets/projects/natureswatch/natureswatch_mockup.webp"

import cover_flowerexpress from "../assets/projects/flowerexpress/poster_mockup02_cover.webp"
import bg_flowerexpress from "../assets/projects/flowerexpress/mockup.webp"


export const navLinks = [
    {
        id: '0',
        title: 'STÄRKEN',
        slug: 'skills'
    },
    {
        id: '1',
        title: 'PROJEKTE',
        slug: 'projects'
    },
    {
        id: '2',
        title: 'KONTAKT',
        slug: 'contact',
    }
]
export const skills = [
    {
        id: '0',
        number: '01',
        title: 'Grafikdesign',
        description: 'Ich erstelle vielseitige Grafiken für Poster, Eintrittskarten, Verpackungen und mehr – immer mit klarem Stil und Liebe zum Detail.'
    },
    {
        id: '1',
        number: '02',
        title: 'Web und Frontend',
        description: 'Ich entwickle individuelle Websites und Layouts, verfeinere sie mit Animationen und optimiere sie für Suchmaschinen, damit Design und Sichtbarkeit Hand in Hand gehen.'
    },
    {
        id: '2',
        number: '03',
        title: 'Fotografie',
        description: 'Ich erstelle und bearbeite Fotos, um Projekten einen persönlichen, einzigartigen Touch zu geben.'
    }
]

export const projects = [
    {
        id: '0',
        title: 'Langfelder Bio Erdäpfel',
        slug: 'langfelder-bio',

        img: cover_langfelder,
        alt: 'Langfelder Bio Erdäpfel',

        background: bg_langfelder,

        tags: 'Webentwicklung, SEO, Markenidentität',

        year: '2025',
        problem: 'Der Familienbetrieb “Langfelder Bio Erdäpfel” hatte bisher keine Website oder sonstige Online-Präsenz und war dadurch im Internet für potentielle Kunden kaum sichtbar.',
        solution: 'Es entstand ein vollständiges visuelles Erscheinungsbild mit Logo, Farb- und Schriftkonzept sowie einer Website mit gezielter Fotografie von Umgebung und Hof. So verfügt der Betrieb nun über eine moderne, einladende Online-Präsenz, die Nähe, Vertrauen und Qualität vermittelt und Kunden besser erreicht.',
        tools: [
            {category: 'Webentwicklung', tool: 'ReactJS, Vite, TailwindCSS, GSAP'},
            {category: 'Logo und Bildbearbeitung', tool: 'Adobe Photoshop und Illustrator'},
            {category: 'Webentwicklung', tool: 'HTML, CSS, JavaScript'},
            {category: 'Prototypenentwicklung', tool: 'Figma'},
        ],
        links: [
            { url: "https://langfelder-biokartoffel.at", label: "Webseite | Langfelder Bio Kartoffel"},
        ],
    },



    {
        id: '2',
        title: 'Mangrove Energy',
        slug: 'mangrove-energy',

        img: cover_mangrove,
        alt: 'Mangrove Energy Drink Dose',

        background: bg_mangrove,

        tags: 'Verpackungsdesign, Markenidentität, Wordpress',

        year: '2022',
        problem: 'Im Rahmen einer Projektarbeit sollte eine fiktive Marke entwickelt und visuell gestaltet werden. Ziel war es, eine konsistente und wiedererkennbare Brand Identity mit Logo, Farbwelt und Webauftritt zu schaffen.',
        solution: 'Es wurden Energy-Drink-Dosen gestaltet, deren zentrales Element eine eigens illustrierte Schlange ist. Ergänzt durch kräftige Gelbtöne und eine charakteristische Hintergrundtextur entstand ein markantes, wiedererkennbares Aussehen. Zudem wurde ein WordPress-Onlineshop mit WooCommerce umgesetzt.',
        tools: [
            {category: 'Webentwicklung', tool: 'WordPress mit WooCommerce'},
            {category: 'Prototypenentwicklung', tool: 'Adobe XD'},
            {category: 'Logo und Verpackungsdesign', tool: 'Adobe PhotoShop und Illustrator'},
        ],
    },

    {
        id: '1',
        title: 'Black Tie Clubbing 2024',
        slug: 'black-tie-clubbing-2024',

        img: cover_blacktie,
        alt: 'Black Tie Clubbing 2024',

        background: bg_blacktie,

        tags: 'Eventmarketing, Printdesign',

        year: '2024',
        problem: 'Das Maturaclubbing der HTL Krems Standort Zwettl, benötigte eine effektive Werbung, um möglichst viele Besucher zu erreichen und das Event im regionalen Raum sichtbar zu machen.',
        solution: 'Ein durchdachtes Werbekonzept wurde entwickelt, inklusive Plakaten, Flyern, Eintrittskarten und vier gezielten Instagram-Posts, die über das Event, die Sponsoren, den Dresscode und die Tombolapreise informierten.',
        tools: [
            {category: 'Grafikdesign', tool: 'Adobe Photoshop und InDesign'},
        ],
        links: [
            { url: "https://www.noen.at/zwettl/clubbing-maturaevent-der-htl-in-zwettl-ein-voller-erfolg-448564507", label: "NÖN Beitrag | Maturaevent der HTL in Zwettl ein voller Erfolg"},
            { url: "https://www.instagram.com/maturaclubbing.htlzwettl/", label: "Instagram | maturaclubbing.htlzwettl" },
        ],

        casestudy: BlacktieCS,
    },

    {
        id: '3',
        title: 'Wondrous Nature',
        slug: 'wondrous-nature',

        img: cover_wondrousnature,
        alt: 'Offenes Buch Wondrous Nature',

        background: bg_wondrousnature,

        tags: 'Grafikdesign, Editorial Design',

        year: '2025',
        problem: 'Wissenschaftliche Inhalte über ungewöhnliche Lebewesen werden oft trocken oder rein faktisch präsentiert. Es fehlte ein Magazinformat, das komplexes Wissen ansprechend aufbereitet, visuell fesselt und die Lesenden motiviert, sich mit den Inhalten zu beschäftigen.',
        solution: 'Wondrous Nature ist ein visuell gestaltetes Magazin, in dem jedes Kapitel ein einzelnes Tier oder eine Pflanze in den Fokus stellt. Große, eindrucksvolle Bilder werden mit klar strukturierten Textlayouts kombiniert, sodass Wissen ästhetisch und verständlich vermittelt wird.',
        tools: [
            {category: 'Gestaltung', tool: 'Adobe InDesign und Photoshop'},
        ],
    },

    {
        id: '5',
        title: 'Nature\'s Watch',
        slug: 'natures-watch',

        img: cover_natureswatch,
        alt: 'Posterdesign Veranstaltung Nature\'s Watch',

        background: bg_natureswatch,

        tags: 'Posterdesign, Overprint, Layout',

        year: '2024',

        about: 'Dieses Projekt diente dazu, Photoshop-Techniken zu üben, insbesondere den Overprint-Effekt. Dabei werden Farben oder Motive übereinandergelegt, sodass neue Farbmischungen und Transparenzen entstehen. Außerdem wurde die Layoutgestaltung trainiert, um ein ausgewogenes und ästhetisches Plakat zu erstellen. ',

        tools: [
            {category: 'Gestaltung', tool: 'Adobe Photoshop'},
        ],
    },
    {
        id: '4',
        title: 'Flower Express',
        slug: 'flower-express',

        img: cover_flowerexpress,
        alt: 'Posterdesign Onlineshop, Marketing',

        background: bg_flowerexpress,

        tags: 'Posterdesign, Layout',
        about: 'Dieses Plakat entstand im Rahmen einer freien Gestaltungsübung für den Online-Blumenlieferdienst "flowerEXPRESS". Der Fokus lag auf Ästhetik, Texturarbeit und einem auffälligen Design, nicht primär auf Funktionalität. Das Motiv im Vintage-Stil kombiniert große, klare Typografie mit einem ausdrucksstarken Blumenbild.',
        year: '2025',
        tools: [
            {category: 'Gestaltung', tool: 'Adobe Photoshop'},
        ],
    },

]