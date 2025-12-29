import React from "react";
import { FeatureCard } from "./Featurecard";
import {
  TrophyIcon,
  FileTextIcon,
  TargetIcon,
  UsersIcon,
} from "./Iconcomponents";

/* ---------- FEATURE DATA (MATCHES UI IMAGE) ---------- */
const categories = [
  {
    id: "competitions",
    title: "Competition Aggregator",
    description: "Join exciting challenges and showcase your skills",
    icon: TrophyIcon,
    neonColor: "neon-blue",
    count: "2,340+",
    trending: "+12 today",
    items: [
      {
        title: "AI/ML Challenge 2024",
        subtitle: "Meta",
        value: "$10K",
      },
      {
        title: "Cyber Wars Hackathon",
        subtitle: "Google",
        value: "$5K",
      },
      {
        title: "Blockchain Case Study",
        subtitle: "Coinbase",
        value: "$15K",
      },
    ],
  },
  {
    id: "learning",
    title: "Learning Hub",
    description: "Explore online and offline courses to boost your skills",
    icon: FileTextIcon,
    neonColor: "neon-purple",
    count: "3,200+",
    trending: "+12 today",
    items: [
      {
        title: "Full-Stack Development",
        subtitle: "SkillSphere",
        value: "Online Course",
      },
      {
        title: "Creative Writing Workshop",
        subtitle: "LitWorks",
        value: "Offline Course",
      },
      {
        title: "AI & Machine Learning",
        subtitle: "TechMentor",
        value: "Online Course",
      },
    ],
  },
  {
    id: "seminars",
    title: "Seminars & Webinars",
    description: "Interactive learning sessions with industry experts",
    icon: TargetIcon,
    neonColor: "neon-green",
    count: "980+",
    trending: "+12 today",
    items: [
      {
        title: "Tech Innovations Seminar",
        subtitle: "InnoCyber",
        value: "50 left",
      },
      {
        title: "Career Growth Webinar",
        subtitle: "FutureCyber",
        value: "40 left",
      },
      {
        title: "Leadership Skills Webinar",
        subtitle: "LeadCyber",
        value: "60 left",
      },
    ],
  },
  {
    id: "community",
    title: "Community Service",
    description: "Engage in meaningful service and make a positive impact",
    icon: UsersIcon,
    neonColor: "neon-pink",
    count: "2,750+",
    trending: "+10 today",
    items: [
      {
        title: "Beach Clean-Up",
        subtitle: "",
        value: "4h/month",
      },
      {
        title: "Teaching Underprivileged Kids",
        subtitle: "",
        value: "3h/week",
      },
      {
        title: "Tree Plantation Drive",
        subtitle: "",
        value: "Flexible",
      },
    ],
  },
];

/* ---------- COMPONENT ---------- */
export function FeatureCategories() {
  return (
    <section className="py-20 bg-black relative">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <FeatureCard key={category.id} {...category} />
          ))}
        </div>
      </div>
    </section>
  );
}
