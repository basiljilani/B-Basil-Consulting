import { BookMarked } from "lucide-react";
import ComingSoon from "./ComingSoon";

const Blog = () => {
  return (
    <ComingSoon
      title="Blog Coming Soon"
      description="Our blog will feature the latest industry news, thought leadership articles, and practical insights from our team of experts. Stay tuned for content that will help you navigate the evolving landscape of technology and business."
      icon={<BookMarked className="h-10 w-10" />}
      estimatedDate="July 2024"
    />
  );
};

export default Blog; 