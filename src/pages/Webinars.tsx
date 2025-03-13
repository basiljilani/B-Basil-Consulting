import { Video } from "lucide-react";
import ComingSoon from "./ComingSoon";

const Webinars = () => {
  return (
    <ComingSoon
      title="Webinars Coming Soon"
      description="We're planning a series of informative webinars featuring industry experts and thought leaders. Join us for insights, best practices, and interactive Q&A sessions on topics that matter to your business."
      icon={<Video className="h-10 w-10" />}
      estimatedDate="August 2025"
    />
  );
};

export default Webinars; 