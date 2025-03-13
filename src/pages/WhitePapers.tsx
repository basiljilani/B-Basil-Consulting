import { BookOpen } from "lucide-react";
import ComingSoon from "./ComingSoon";

const WhitePapers = () => {
  return (
    <ComingSoon
      title="White Papers Coming Soon"
      description="Our team of experts is developing in-depth white papers on industry trends, technological innovations, and strategic insights. Subscribe to be notified when our first publications are available."
      icon={<BookOpen className="h-10 w-10" />}
      estimatedDate="August 2025"
    />
  );
};

export default WhitePapers; 