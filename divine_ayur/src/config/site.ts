/**
 * Single source of truth for all clinic information.
 * Update values here — no component changes required.
 */

import heroImage from "@/assets/hero-ayurveda.jpg";
import consultationImage from "@/assets/consultation.jpg";
import panchkarmaImage from "@/assets/panchkarma.jpg";
import physiotherapyImage from "@/assets/physiotherapy.jpg";
import herbsImage from "@/assets/herbs.jpg";
import receptionImage from "@/assets/reception.jpg";
import spineImage from "@/assets/spine-care.jpg";
import patientImage from "@/assets/happy-patient.jpg";

export const images = {
  hero: heroImage,
  consultation: consultationImage,
  panchkarma: panchkarmaImage,
  physiotherapy: physiotherapyImage,
  herbs: herbsImage,
  reception: receptionImage,
  spine: spineImage,
  patient: patientImage,
};

export const clinic = {
  name: "Divine Ayurveda & Physiotherapy Clinic",
  shortName: "Divine Ayurveda",
  tagline: "Natural Healing. Modern Care. Trusted Treatment.",
  phone: "+91 98120 77194",
  phoneRaw: "+919812077194",
  whatsapp: "919812077194",
  email: "care@divineayurvedarohtak.in",
  address: {
    line1: "Sukh Pura Chowk, Near Anna Hazare Market",
    line2: "Rajendra Nagar",
    city: "Rohtak",
    state: "Haryana",
    postalCode: "124001",
    country: "IN",
  },
  hours: [
    { days: "Monday – Saturday", time: "9:00 AM – 8:00 PM" },
    { days: "Sunday", time: "By Appointment" },
  ],
  mapsEmbed:
    "https://www.google.com/maps?q=Sukh+Pura+Chowk,+Rajendra+Nagar,+Rohtak,+Haryana+124001&output=embed",
  mapsLink:
    "https://www.google.com/maps/search/?api=1&query=Sukh+Pura+Chowk,+Rajendra+Nagar,+Rohtak,+Haryana+124001",
  reviewsLink:
    "https://www.google.com/maps/search/?api=1&query=Divine+Ayurveda+Physiotherapy+Clinic+Rohtak",
  social: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    youtube: "https://youtube.com",
  },
  siteUrl: "https://divineayurvedarohtak.in",
} as const;

export const fullAddress = `${clinic.address.line1}, ${clinic.address.line2}, ${clinic.address.city}, ${clinic.address.state} – ${clinic.address.postalCode}`;

export const telHref = `tel:${clinic.phoneRaw}`;

export function whatsappHref(message: string) {
  return `https://wa.me/${clinic.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const defaultWhatsappMessage = `Hello ${clinic.name}, I would like to know more about your treatments.`;

export type Service = {
  slug: string;
  title: string;
  short: string;
  description: string;
  benefits: string[];
  faqs: { q: string; a: string }[];
  image: string;
};

export const services: Service[] = [
  {
    slug: "ayurvedic-consultation",
    title: "Ayurvedic Consultation",
    short: "Detailed Nadi Pariksha and dosha assessment with a personalised healing plan.",
    description:
      "Every treatment begins with an unhurried consultation. Our physician evaluates your pulse, prakriti and current imbalances, then designs a plan combining diet, lifestyle and classical medicines suited to your constitution.",
    benefits: [
      "Root-cause diagnosis, not symptom suppression",
      "Personalised diet and daily routine guidance",
      "Classical, quality-tested herbal formulations",
      "Follow-up reviews to track progress",
    ],
    faqs: [
      { q: "How long does a consultation take?", a: "Your first consultation usually takes 30–40 minutes so we can understand your history fully." },
      { q: "Should I bring my reports?", a: "Yes, please carry any recent investigations, prescriptions or imaging reports." },
    ],
    image: consultationImage,
  },
  {
    slug: "ayurvedic-medicines",
    title: "Ayurvedic Medicines",
    short: "Authentic classical formulations dispensed and monitored by our physician.",
    description:
      "We dispense classical Ayurvedic medicines from trusted GMP-certified manufacturers, with dosage and duration tailored to you and reviewed at every follow-up.",
    benefits: ["Quality-tested herbs", "Safe, monitored dosing", "No habit-forming ingredients", "Guidance on food combinations"],
    faqs: [
      { q: "Are Ayurvedic medicines safe long term?", a: "When prescribed and monitored by a qualified physician, yes. We review dosage at every visit." },
      { q: "Can I take them with allopathic medicines?", a: "Often yes, with correct spacing. Always share your full medicine list with us." },
    ],
    image: herbsImage,
  },
  {
    slug: "panchkarma",
    title: "Panchkarma",
    short: "Classical detoxification therapies performed in a hygienic, supervised setting.",
    description:
      "Vamana, Virechana, Basti, Nasya and Raktamokshana — carried out with proper Purvakarma preparation and post-care diet. Ideal for chronic pain, skin conditions, stress and metabolic disorders.",
    benefits: ["Deep detoxification", "Improved sleep and digestion", "Relief in chronic pain", "Supervised, hygienic therapy rooms"],
    faqs: [
      { q: "How many days does Panchkarma take?", a: "Most programmes run 7 to 21 days depending on your condition and goals." },
      { q: "Is it painful?", a: "No. Therapies are gentle and deeply relaxing, with a therapist present throughout." },
    ],
    image: panchkarmaImage,
  },
  {
    slug: "physiotherapy",
    title: "Physiotherapy",
    short: "Modern electrotherapy, manual therapy and guided exercise rehabilitation.",
    description:
      "Our physiotherapy unit combines IFT, ultrasound therapy, TENS, traction and hands-on mobilisation with a structured home exercise programme so results last.",
    benefits: ["Faster pain relief", "Restored mobility and strength", "Post-surgery rehabilitation", "Home exercise plan included"],
    faqs: [
      { q: "How many sessions will I need?", a: "Most patients notice change within 5–6 sessions; chronic cases may need longer." },
      { q: "Do you treat sports injuries?", a: "Yes, including ligament sprains, muscle tears and post-operative rehab." },
    ],
    image: physiotherapyImage,
  },
  {
    slug: "spine-care",
    title: "Spine Care",
    short: "Kati Basti, traction and posture correction for lasting spinal health.",
    description:
      "A combined Ayurveda and physiotherapy protocol for spinal problems — medicated oil retention therapies, decompression traction and core strengthening.",
    benefits: ["Relief from stiffness", "Improved posture", "Non-surgical approach", "Ergonomic guidance"],
    faqs: [
      { q: "Can spine problems be treated without surgery?", a: "Many cases respond well to conservative care. We refer surgically when genuinely required." },
    ],
    image: spineImage,
  },
  {
    slug: "knee-care",
    title: "Knee Care",
    short: "Janu Basti, strengthening and osteoarthritis management for pain-free walking.",
    description:
      "Targeted knee programmes using medicated oil therapies, quadriceps strengthening and weight guidance to reduce pain and delay joint degeneration.",
    benefits: ["Reduced swelling and pain", "Better walking distance", "Delays joint degeneration", "Drug-sparing approach"],
    faqs: [{ q: "Is Janu Basti useful in arthritis?", a: "Yes, it is one of our most effective therapies for knee osteoarthritis stiffness and pain." }],
    image: physiotherapyImage,
  },
  {
    slug: "arthritis",
    title: "Arthritis",
    short: "Amavata and osteoarthritis care through detox, diet and therapy.",
    description:
      "Arthritis care combining Ama-clearing medicines, Panchkarma, anti-inflammatory diet and gentle mobility work for both rheumatoid and degenerative arthritis.",
    benefits: ["Less morning stiffness", "Reduced flare frequency", "Improved joint mobility", "Diet correction"],
    faqs: [{ q: "Do I need to stop my current medication?", a: "Never stop on your own. We coordinate gradual tapering wherever it is safe." }],
    image: consultationImage,
  },
  {
    slug: "joint-pain",
    title: "Joint Pain",
    short: "Relief for shoulder, hip, wrist and ankle pain with combined therapy.",
    description:
      "Whether from overuse, injury or age, joint pain is treated with localised therapies, oral medicines and progressive loading exercises.",
    benefits: ["Targeted pain relief", "Restored range of motion", "Injury prevention advice"],
    faqs: [{ q: "How soon will I feel better?", a: "Acute pain often eases within a few sessions; chronic pain improves steadily over weeks." }],
    image: physiotherapyImage,
  },
  {
    slug: "back-pain",
    title: "Back Pain",
    short: "Lower back pain relief with Kati Basti, traction and core rehabilitation.",
    description:
      "From desk-job strain to disc-related pain, our protocol addresses the cause: muscle imbalance, posture and inflammation.",
    benefits: ["Fast pain relief", "Core stability training", "Workstation ergonomics", "Relapse prevention"],
    faqs: [{ q: "Is bed rest advised?", a: "Prolonged bed rest slows recovery. Guided movement is usually better." }],
    image: spineImage,
  },
  {
    slug: "neck-pain",
    title: "Neck Pain",
    short: "Cervical spondylosis and text-neck care with Greeva Basti and therapy.",
    description:
      "Neck pain, cervical spondylosis and radiating arm pain treated with medicated oil therapy, cervical traction and posture retraining.",
    benefits: ["Relief from headaches and stiffness", "Reduced tingling in arms", "Posture correction"],
    faqs: [{ q: "Which pillow should I use?", a: "A thin, firm pillow keeping the neck neutral. We advise individually at your visit." }],
    image: spineImage,
  },
  {
    slug: "slip-disc",
    title: "Slip Disc",
    short: "Non-surgical disc prolapse management with decompression and Ayurveda.",
    description:
      "Disc bulge and prolapse care using spinal decompression traction, anti-inflammatory Ayurvedic medicines and staged rehabilitation.",
    benefits: ["Reduced nerve compression pain", "Avoids unnecessary surgery in many cases", "Structured recovery plan"],
    faqs: [{ q: "Will the disc go back?", a: "Symptoms usually settle well with conservative care; MRI changes take longer than symptom relief." }],
    image: spineImage,
  },
  {
    slug: "frozen-shoulder",
    title: "Frozen Shoulder",
    short: "Restore shoulder movement with mobilisation and medicated therapy.",
    description:
      "Adhesive capsulitis treated with graded mobilisation, heat and oil therapies, and a daily stretching protocol you can continue at home.",
    benefits: ["Improved overhead reach", "Less night pain", "Faster return to daily tasks"],
    faqs: [{ q: "How long does recovery take?", a: "Typically 6–12 weeks of consistent therapy, depending on stage." }],
    image: physiotherapyImage,
  },
  {
    slug: "sciatica",
    title: "Sciatica",
    short: "Relief from radiating leg pain with Kati Basti and nerve glide therapy.",
    description:
      "Sciatic pain is managed by reducing nerve irritation with medicated therapy, traction, nerve mobilisation and strengthening.",
    benefits: ["Reduced radiating pain", "Better sitting tolerance", "Non-surgical management"],
    faqs: [{ q: "Can I walk with sciatica?", a: "Gentle walking is usually helpful. We guide safe limits case by case." }],
    image: consultationImage,
  },
  {
    slug: "skin-disorders",
    title: "Skin Disorders",
    short: "Psoriasis, eczema and acne care through blood purification and diet.",
    description:
      "Chronic skin conditions treated from within — Raktashodhak medicines, Virechana detox and a personalised diet plan alongside topical Ayurvedic preparations.",
    benefits: ["Reduced itching and flare-ups", "Steroid-sparing approach", "Long-term diet guidance"],
    faqs: [{ q: "How long before I see change?", a: "Skin responds gradually; most patients see visible improvement in 6–8 weeks." }],
    image: herbsImage,
  },
  {
    slug: "male-infertility",
    title: "Male Infertility",
    short: "Confidential Vajikarana therapy to improve sperm count and quality.",
    description:
      "A discreet, evidence-informed programme combining Shodhana, Rasayana and Vajikarana medicines with lifestyle correction to improve semen parameters.",
    benefits: ["Improved sperm count and motility", "Stress and sleep correction", "Complete confidentiality"],
    faqs: [{ q: "Is my treatment private?", a: "Absolutely. All consultations and records are strictly confidential." }],
    image: consultationImage,
  },
  {
    slug: "female-infertility",
    title: "Female Infertility",
    short: "PCOD, irregular cycles and conception support with Uttar Basti care.",
    description:
      "Care for PCOD/PCOS, irregular cycles, hormonal imbalance and unexplained infertility using Ayurvedic gynaecological therapies, diet and cycle tracking.",
    benefits: ["Regular menstrual cycles", "Hormonal balance support", "Preconception preparation"],
    faqs: [{ q: "Can Ayurveda help with PCOD?", a: "Yes — diet, medicines and lifestyle correction together give strong results in PCOD." }],
    image: consultationImage,
  },
  {
    slug: "swarna-prashan",
    title: "Swarna Prashan",
    short: "Monthly immunity and intellect booster drops for children.",
    description:
      "Swarna Prashan is a classical paediatric immunisation ritual given on Pushya Nakshatra — processed gold with herbal ghee to support immunity, digestion and cognition in children.",
    benefits: ["Stronger immunity", "Better appetite and digestion", "Supports memory and focus", "Safe from birth to 16 years"],
    faqs: [
      { q: "When is it given?", a: "On the monthly Pushya Nakshatra day. Call us to know the next date." },
      { q: "Is it safe for infants?", a: "Yes, dosage is adjusted by age and given under supervision." },
    ],
    image: herbsImage,
  },
  {
    slug: "digestive-disorders",
    title: "Digestive Disorders",
    short: "Acidity, IBS, constipation and bloating treated at the root — Agni.",
    description:
      "Digestive complaints are corrected by restoring Agni through Deepana-Pachana medicines, meal timing discipline and targeted detox where needed.",
    benefits: ["Relief from acidity and bloating", "Regular bowel habit", "Antacid-free living"],
    faqs: [{ q: "Do I need to change my diet?", a: "Yes — simple, sustainable changes form the core of digestive recovery." }],
    image: herbsImage,
  },
  {
    slug: "diabetes-management",
    title: "Diabetes Management",
    short: "Ayurvedic support for blood sugar control and complication prevention.",
    description:
      "Madhumeha care with herbal support, structured diet, exercise prescription and periodic monitoring alongside your existing treatment.",
    benefits: ["Better sugar control", "Reduced complications risk", "Energy and weight improvement"],
    faqs: [{ q: "Can I stop my diabetes tablets?", a: "Only your physician can decide that, based on repeated readings. Never stop abruptly." }],
    image: consultationImage,
  },
  {
    slug: "weight-management",
    title: "Weight Management",
    short: "Sustainable weight loss with Udvartana, diet and metabolic correction.",
    description:
      "A non-crash approach combining Udvartana herbal powder massage, metabolism-correcting medicines and a realistic Indian diet plan.",
    benefits: ["Steady, sustainable loss", "Improved metabolism", "Body toning therapies", "No starvation diets"],
    faqs: [{ q: "How much weight can I lose?", a: "A healthy 2–4 kg per month is typical and far more sustainable than rapid loss." }],
    image: panchkarmaImage,
  },
];

export const treatmentOptions = [
  "General Consultation",
  "Panchkarma",
  "Physiotherapy",
  "Spine Care",
  "Knee Care",
  "Arthritis",
  "Back Pain",
  "Joint Pain",
  "Neck Pain",
  "Slip Disc",
  "Sciatica",
  "Frozen Shoulder",
  "Male Infertility",
  "Female Infertility",
  "Skin Disorders",
  "Swarna Prashan",
  "Digestive Disorders",
  "Diabetes Care",
  "Weight Management",
  "Other",
];

export const timeSlots = [
  "9:00 AM – 11:00 AM",
  "11:00 AM – 1:00 PM",
  "1:00 PM – 3:00 PM",
  "3:00 PM – 5:00 PM",
  "5:00 PM – 8:00 PM",
];

export const whyChooseUs = [
  { title: "Experienced Doctors", text: "BAMS & MPT qualified practitioners with years of clinical experience." },
  { title: "Personalized Care", text: "Every plan is built around your body, history and lifestyle." },
  { title: "Ayurvedic Expertise", text: "Classical protocols followed exactly as the texts prescribe." },
  { title: "Modern Physiotherapy", text: "IFT, ultrasound, traction and manual therapy under one roof." },
  { title: "Affordable Treatment", text: "Transparent pricing with no unnecessary packages." },
  { title: "Safe Panchkarma", text: "Hygienic therapy rooms and trained therapists at every session." },
  { title: "Holistic Healing", text: "Diet, routine and mind-body balance, not just medicines." },
  { title: "Comfortable Clinic", text: "Calm, clean spaces designed for unhurried healing." },
];

export const testimonials = [
  { name: "Sunita Malik", area: "Rajendra Nagar, Rohtak", rating: 5, text: "My knee pain of four years reduced within three weeks of Janu Basti. Doctor sahab explains everything patiently." },
  { name: "Rakesh Dahiya", area: "Model Town, Rohtak", rating: 5, text: "I was told I needed slip disc surgery. After six weeks of traction and Kati Basti here, I am back to normal work." },
  { name: "Pooja Sharma", area: "Sector 14, Rohtak", rating: 5, text: "My PCOD cycles are finally regular. The diet plan was practical and easy to follow at home." },
  { name: "Amit Kadyan", area: "Delhi Bypass, Rohtak", rating: 5, text: "Frozen shoulder treatment was excellent. The physiotherapist was very professional and encouraging." },
  { name: "Neha Bansal", area: "Jhajjar Road, Rohtak", rating: 5, text: "We give Swarna Prashan to our son every month. His frequent colds have almost stopped." },
  { name: "Vikram Singh", area: "Sonipat Road, Rohtak", rating: 5, text: "Clean clinic, no waiting chaos, and honest advice. They never push extra packages." },
];

export const faqs = [
  { q: "Do I need an appointment?", a: "Walk-ins are welcome during clinic hours, but booking ahead means almost no waiting time." },
  { q: "Is Ayurvedic treatment slow?", a: "Acute pain often responds in days. Chronic conditions take longer because we treat the cause, not just the symptom." },
  { q: "Do you treat patients of all ages?", a: "Yes, from infants receiving Swarna Prashan to senior citizens with arthritis." },
  { q: "Can I take Ayurveda with my current medicines?", a: "In most cases yes, with proper spacing. Please bring your prescriptions to the consultation." },
  { q: "What are your fees?", a: "Consultation fees are modest and therapy costs are shared transparently before you begin." },
  { q: "Where exactly is the clinic?", a: `We are at ${fullAddress}, near Anna Hazare Market — easy to reach from anywhere in Rohtak.` },
];

export const stats = [
  { value: 12, suffix: "+", label: "Years of Practice" },
  { value: 15000, suffix: "+", label: "Patients Treated" },
  { value: 20, suffix: "+", label: "Treatments Offered" },
  { value: 98, suffix: "%", label: "Patient Satisfaction" },
];
