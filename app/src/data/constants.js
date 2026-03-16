// ─── Asset imports ────────────────────────────────────────────────────────────
import albumImg from "../../images/Album de collection digitale.jpg";
import quizImg from "../../images/Quiz Football.png";
import tombolaImg from "../../images/Tombola digitale.png";
import pronosticImg from "../../images/Pronostics.png";

// ─── Navigation ───────────────────────────────────────────────────────────────
export const navLinks = [
  ["Nos offres", "#pricing"],
  ["Nos jeux", "#jeux"],
  ["Album 2025", "#album"],
  ["À propos", "#apropos"],
];

// ─── Hero ─────────────────────────────────────────────────────────────────────
export const heroStats = [
  {
    value: "500K+",
    label: "Interactions/mois",
    color: "text-brand-green-dark",
  },
  { value: "50+", label: "Marques actives", color: "text-brand-red" },
  { value: "x3.5", label: "ROI moyen", color: "text-brand-green-dark" },
];

export const trustBrands = ["Maroc Telecom", "Inwi", "Orange", "Carrefour"];

// ─── About ────────────────────────────────────────────────────────────────────
export const aboutFeatures = [
  {
    title: "Activation instantanée",
    desc: "QR codes uniques générés sur chaque produit, activables dès le scan.",
  },
  {
    title: "Collection digitale",
    desc: "Cartes de joueurs, raretés et échanges entre fans.",
  },
  {
    title: "Récompenses exclusives",
    desc: "Tirages au sort, lots partenaires et expériences VIP.",
  },
  {
    title: "Analytics avancés",
    desc: "Dashboard temps réel et insights consommateurs détaillés.",
  },
];

// ─── Process ──────────────────────────────────────────────────────────────────
export const processSteps = [
  { name: "Achat produit", desc: "Le client achète votre produit en magasin." },
  { name: "Scan QR Code", desc: "Il scanne le code sur l'emballage." },
  { name: "Déblocage carte", desc: "Une carte digitale est débloquée." },
  { name: "Collection", desc: "Il complète sa collection de cartes." },
  { name: "Récompenses", desc: "Il participe aux tirages et gagne des lots." },
];

// ─── Values (green band) ──────────────────────────────────────────────────────
export const valueCards = [
  {
    title: "Engagement immédiat",
    desc: "Chaque produit devient une opportunité de jeu.",
  },
  {
    title: "Fidélisation naturelle",
    desc: "Les clients reviennent pour compléter leur collection.",
  },
  {
    title: "Viralité organique",
    desc: "Les fans partagent et échangent entre eux.",
  },
];

// ─── Backoffice section ───────────────────────────────────────────────────────
export const backofficeCards = [
  {
    title: "Générateur QR Codes",
    desc: "Créez et téléchargez vos QR codes uniques en masse",
  },
  {
    title: "CRM Participants",
    desc: "Collectez et gérez vos participants avec segmentation avancée",
  },
  {
    title: "Configuration jeux",
    desc: "Paramétrez entièrement vos jeux : règles, lots, durée, visuels",
  },
  {
    title: "Analytics temps réel",
    desc: "Suivez vos KPIs : scans, conversions, engagement, ROI",
  },
  {
    title: "Gestion des lots",
    desc: "Définissez vos récompenses et gérez les tirages au sort",
  },
  {
    title: "Notifications",
    desc: "Envoyez des push, emails et SMS à vos participants",
  },
  {
    title: "Export données",
    desc: "Téléchargez vos données en CSV, Excel ou via API",
  },
  {
    title: "Multi-campagnes",
    desc: "Gérez plusieurs campagnes simultanément",
  },
];

// ─── Capabilities strip ───────────────────────────────────────────────────────
export const capabilityItems = [
  { label: "Utilisateurs", sub: "De 1K à illimité" },
  { label: "QR Codes", sub: "Volume adapté" },
  { label: "Couverture", sub: "Local à mondial" },
  { label: "Albums", sub: "Standard ou custom" },
  { label: "Infrastructure", sub: "Cloud ou On-Premise" },
];

// ─── Pricing ──────────────────────────────────────────────────────────────────
export const pricingCards = [
  {
    title: "Starter",
    subtitle: "Campagne locale",
    desc: "Idéal pour tester sur un marché",
    items: [
      "Jusqu'à 1000 utilisateurs",
      "Jusqu'à 10K QR codes",
      "1 pays / région",
      "Album standard (équipe nationale)",
      "Hébergement Cloud sécurisé",
      "Backoffice simplifié",
      "Support par email",
      "1 marque",
    ],
    cta: "Demander un devis",
    featured: false,
  },
  {
    title: "Scale",
    subtitle: "Expansion nationale",
    desc: "Pour des campagnes d'envergure",
    items: [
      "Jusqu'à 50 000 utilisateurs",
      "QR codes illimités",
      "Multi-pays (jusqu'à 5)",
      "Album complet (toutes les équipes)",
      "Cloud ou On-Premise",
      "Backoffice avancé avec analytics",
      "Support prioritaire 24/7",
      "Jusqu'à 3 marques",
      "API REST disponible",
    ],
    cta: "Planifier une démo",
    featured: true,
  },
  {
    title: "Enterprise",
    subtitle: "Solution globale",
    desc: "Pour les groupes internationaux",
    items: [
      "Utilisateurs illimités",
      "QR codes illimités",
      "Déploiement mondial",
      "Albums personnalisés par région",
      "Infrastructure dédiée (On-Premise)",
      "Multi-marques illimité",
      "Développements sur-mesure",
      "Account manager dédié",
      "SLA garanti 99.9%",
      "Formation et onboarding complet",
    ],
    cta: "Contactez-nous",
    featured: false,
  },
];

// ─── Catalog ──────────────────────────────────────────────────────────────────
export const catalogCards = [
  {
    title: "Album Digital 2025",
    desc: "Collection de cartes avec échanges et défis.",
    tag: "STAR",
    image: albumImg,
    showDiscover: true,
  },
  {
    title: "Quiz Football",
    desc: "Questions sur l'actualité et l'histoire du foot.",
    tag: "BIENTÔT",
    image: quizImg,
    showDiscover: false,
  },
  {
    title: "Tombola digitale",
    desc: "Tirages au sort avec lots sponsorisés.",
    tag: null,
    image: tombolaImg,
    showDiscover: false,
  },
  {
    title: "Pronostics",
    desc: "Prédictions de matchs et classements.",
    tag: null,
    image: pronosticImg,
    showDiscover: false,
  },
];

// ─── KPI Stats ────────────────────────────────────────────────────────────────
export const kpiStats = [
  { value: "500K+", label: "Interactions mensuelles" },
  { value: "50+", label: "Marques partenaires" },
  { value: "98%", label: "Taux de satisfaction" },
  { value: "24/7", label: "Support technique" },
];
