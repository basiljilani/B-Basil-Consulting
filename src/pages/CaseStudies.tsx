import { FileText } from "lucide-react";
import ComingSoon from "./ComingSoon";

const CaseStudies = () => {
  return (
    <ComingSoon
      title="Case Studies Coming Soon"
      description="We're currently preparing detailed case studies showcasing how our solutions have helped businesses achieve measurable results. Check back soon to explore real-world examples of our work."
      icon={<FileText className="h-10 w-10" />}
      estimatedDate="August 2025"
    />
  );
};

export default CaseStudies; 