
export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  author: string;
  readTime: string;
}

export const categories = [
  "All",
  "Data Infrastructure",
  "Machine Learning",
  "Security",
  "Analytics",
  "Cloud",
  "Governance"
];

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Building Scalable Data Architectures for Enterprise",
    excerpt: "Learn how to design and implement data architectures that can grow with your business needs.",
    category: "Data Infrastructure",
    date: "Mar 15, 2023",
    author: "Alex Chen",
    readTime: "8 min read"
  },
  {
    id: "2",
    title: "AI-Powered Analytics: From Raw Data to Business Insights",
    excerpt: "Discover how AI is transforming data analytics and enabling more sophisticated business insights.",
    category: "Machine Learning",
    date: "Feb 28, 2023",
    author: "Sophia Rodriguez",
    readTime: "6 min read"
  },
  {
    id: "3",
    title: "Data Security Best Practices for Financial Services",
    excerpt: "Explore essential security measures to protect sensitive financial data in today's threat landscape.",
    category: "Security",
    date: "Feb 12, 2023",
    author: "Michael Johnson",
    readTime: "10 min read"
  },
  {
    id: "4",
    title: "Implementing Real-Time Analytics Pipelines",
    excerpt: "A comprehensive guide to building real-time analytics solutions for immediate business insights.",
    category: "Analytics",
    date: "Jan 30, 2023",
    author: "Emma Davis",
    readTime: "7 min read"
  },
  {
    id: "5",
    title: "Cloud Data Warehousing: Comparing Top Solutions",
    excerpt: "An in-depth comparison of leading cloud data warehouse platforms and how to choose the right one.",
    category: "Cloud",
    date: "Jan 18, 2023",
    author: "David Kim",
    readTime: "9 min read"
  },
  {
    id: "6",
    title: "Data Governance Frameworks for Regulated Industries",
    excerpt: "How to establish robust data governance practices that ensure compliance and data quality.",
    category: "Governance",
    date: "Jan 5, 2023",
    author: "Sarah Thompson",
    readTime: "8 min read"
  },
  {
    id: "7",
    title: "Predictive Maintenance Using IoT Data Streams",
    excerpt: "Leveraging IoT data and machine learning to predict equipment failures before they happen.",
    category: "Machine Learning",
    date: "Dec 20, 2022",
    author: "Robert Chen",
    readTime: "7 min read"
  },
  {
    id: "8",
    title: "Data Mesh Architecture: A New Approach to Data Management",
    excerpt: "Exploring the data mesh paradigm and how it's changing enterprise data management strategies.",
    category: "Data Infrastructure",
    date: "Dec 8, 2022",
    author: "Jennifer Liu",
    readTime: "11 min read"
  },
  {
    id: "9",
    title: "Zero-Trust Data Security Models",
    excerpt: "Implementing zero-trust frameworks to protect sensitive data across distributed environments.",
    category: "Security",
    date: "Nov 25, 2022",
    author: "Thomas Miller",
    readTime: "9 min read"
  },
  {
    id: "10",
    title: "Natural Language Processing for Business Applications",
    excerpt: "Practical applications of NLP to extract insights from unstructured text data in business contexts.",
    category: "Machine Learning",
    date: "Nov 10, 2022",
    author: "Olivia Wilson",
    readTime: "8 min read"
  },
  {
    id: "11",
    title: "Customer 360: Building a Unified Customer View",
    excerpt: "Strategies for integrating disparate data sources to create comprehensive customer profiles.",
    category: "Analytics",
    date: "Oct 28, 2022",
    author: "Daniel Park",
    readTime: "7 min read"
  },
  {
    id: "12",
    title: "Modern Data Stack: Components and Integration",
    excerpt: "A detailed look at the components of a modern data stack and how they work together.",
    category: "Data Infrastructure",
    date: "Oct 15, 2022",
    author: "Christine Lee",
    readTime: "10 min read"
  }
];
