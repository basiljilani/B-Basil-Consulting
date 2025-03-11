
export interface Testimonial {
  id: number;
  content: string;
  author: string;
  role: string;
  company: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    content: "Basil Consulting transformed our approach to data. Their expertise in building scalable data infrastructure has been instrumental in our digital transformation journey.",
    author: "Sarah Johnson",
    role: "CTO",
    company: "TechAdvance Inc.",
  },
  {
    id: 2,
    content: "The BI dashboard Basil created for us provides clear insights that drive our strategic decisions. They understood our business needs perfectly.",
    author: "Michael Chen",
    role: "VP of Analytics",
    company: "Global Retail Solutions",
  },
  {
    id: 3,
    content: "Implementing Basil's ML solution increased our prediction accuracy by 37%, significantly reducing operational costs and improving customer satisfaction.",
    author: "Emma Rodriguez",
    role: "Director of Innovation",
    company: "FinTech Innovations",
  },
  {
    id: 4,
    content: "Working with Basil Consulting was a game-changer for our data security posture. Their compliance expertise helped us navigate complex regulatory requirements with confidence.",
    author: "David Kim",
    role: "CISO",
    company: "HealthTech Systems",
  },
];
