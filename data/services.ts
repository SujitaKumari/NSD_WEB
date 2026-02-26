import { HeartPulse, Stethoscope, Baby, Activity, Clock } from "lucide-react";
import { ASSETS } from "./assets";

export const SERVICES = [
  {
    id: "elderly-care",
    slug: "elderly-care",
    title: "Elderly Care",
    description: "Compassionate companionship and medical support for seniors living alone.",
    icon: HeartPulse,
    image: ASSETS.services.elderly,
    duration: "Daily / Monthly",
    fullDescription: "Our elderly care services are designed to provide both physical and emotional support for seniors. From assistance with daily activities to specialized medical monitoring, our certified nurses ensure your loved ones receive the highest quality care in the comfort of their own home."
  },
  {
    id: "post-operative-care",
    slug: "post-operative-care",
    title: "Post-Operative Care",
    description: "Professional wound dressing, medication management, and recovery support.",
    icon: Stethoscope,
    image: ASSETS.services.postOp,
    duration: "Hourly / Daily",
    fullDescription: "Recovering from surgery requires professional attention. We provide expert wound care, vital monitoring, and medication administration to ensure a smooth and safe recovery process, reducing the risk of complications and hospital readmissions."
  },
  {
    id: "mother-baby-care",
    slug: "mother-baby",
    title: "Mother & Baby",
    description: "Expert care for new mothers and neonates during the critical postpartum period.",
    icon: Baby,
    image: ASSETS.services.newborn,
    duration: "Monthly",
    fullDescription: "The first weeks of a baby's life are crucial. Our nurses provide specialized care for both mother and newborn, including lactation support, newborn hygiene, and physical monitoring for the mother, giving you peace of mind during this beautiful transition."
  },
  {
    id: "chronic-care",
    slug: "chronic-care",
    title: "Chronic Care",
    description: "Ongoing monitoring and management for diabetes, hypertension, and other conditions.",
    icon: Activity,
    image: ASSETS.services.chronic,
    duration: "Custom Plans",
    fullDescription: "Managing chronic conditions like diabetes or hypertension requires consistency. Our nurses help with regular monitoring, medicine administration, and lifestyle guidance, helping patients maintain a high quality of life while keeping their conditions under control."
  },
  {
    id: "short-term-support",
    slug: "short-term-support",
    title: "Short-term Support",
    description: "Injection services, catheterization, and other specific nursing procedures.",
    icon: Clock,
    image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=800&auto=format&fit=crop",
    duration: "Per Visit",
    fullDescription: "Sometimes you just need help with a specific procedure. Our nurses are available for short-term support, including administering injections, IV fluids, catheter management, and other specialized nursing procedures that don't require long-term admission."
  },
];
