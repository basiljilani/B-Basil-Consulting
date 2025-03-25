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
  {
    id: 5,
    content: "The data pipeline Basil designed for us has streamlined our analytics workflow, reducing processing time by over 60%. Their team's technical expertise is truly impressive.",
    author: "Jennifer Patel",
    role: "Head of Data Science",
    company: "E-commerce Solutions",
  },
  {
    id: 6,
    content: "Basil Consulting helped us implement a robust data governance framework that has significantly improved our data quality and compliance posture.",
    author: "Robert Thompson",
    role: "Chief Data Officer",
    company: "Financial Services Group",
  },
  {
    id: 7,
    content: "The predictive analytics model developed by Basil has transformed our inventory management, reducing stockouts by 42% and improving customer satisfaction scores.",
    author: "Lisa Wong",
    role: "Supply Chain Director",
    company: "Global Manufacturing Inc.",
  },
  {
    id: 8,
    content: "Basil's team quickly identified optimization opportunities in our data architecture that our internal team had missed for years. The ROI on their consulting services was immediate.",
    author: "James Martinez",
    role: "IT Director",
    company: "Healthcare Solutions",
  },
  {
    id: 9,
    content: "Working with Basil Consulting gave us the confidence to make data-driven decisions. Their expertise in both technical implementation and strategic guidance was invaluable.",
    author: "Sophia Lee",
    role: "CEO",
    company: "Tech Startup Innovations",
  },
];
