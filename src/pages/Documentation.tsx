import { FileCode } from "lucide-react";
import ComingSoon from "./ComingSoon";

const Documentation = () => {
  return (
    <ComingSoon
      title="Documentation Coming Soon"
      description="Comprehensive documentation for our products and services is currently under development. Our goal is to provide you with clear, detailed resources to help you get the most out of our solutions."
      icon={<FileCode className="h-10 w-10" />}
      estimatedDate="August 2025"
    />
  );
};

export default Documentation; 