
import { Mail, Send, X, Copy } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";

interface EmailTemplateProps {
  formData: {
    name: string;
    email: string;
    company: string;
    subject: string;
    message: string;
  };
  onClose: () => void;
  onComposeEmail: () => void;
}

const EmailTemplate = ({ formData, onClose, onComposeEmail }: EmailTemplateProps) => {
  const handleCopyEmail = () => {
    const emailContent = `
Dear Basil Consulting Team,

Introduction:
My name is ${formData.name} and I'm reaching out regarding ${formData.subject}.

Company Details:
• Company/Organization Name: ${formData.company || "N/A"}
• Email: ${formData.email}

Project Specifics:
${formData.message}

I look forward to your response.

Best regards,
${formData.name}
    `;

    navigator.clipboard.writeText(emailContent);
    toast.success("Email content copied to clipboard!");
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
        {/* Email Template Header */}
        <div className="relative bg-gradient-to-r from-basil-500 to-basil-600 p-8 rounded-t-xl">
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 text-white hover:bg-white/20 rounded-full p-1 transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
          
          <div className="max-w-md">
            <h1 className="text-4xl font-bold text-white mb-4">Let's Create Something Amazing</h1>
            <p className="text-white/90">
              We're excited to hear about your project! Send us a well-structured email using our template, and we'll get back to you promptly with tailored solutions.
            </p>
            
            <div className="flex items-center gap-2 mt-6 text-white bg-white/10 p-3 rounded-lg">
              <Mail className="h-5 w-5 flex-shrink-0" />
              <span className="text-white font-medium">info@basilconsulting.net</span>
            </div>
          </div>
        </div>
        
        {/* Email Structure */}
        <div className="p-8 grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <h2 className="text-xl font-semibold flex items-center gap-2 text-basil-600">
              <Mail className="h-5 w-5" />
              Email Structure
            </h2>
            <p className="text-sm text-gray-500 mt-1 mb-6">
              This template helps you compose a professional email that includes all necessary information.
            </p>
            
            <Button 
              variant="outline" 
              onClick={handleCopyEmail}
              className="mb-4 w-full sm:w-auto border-basil-200 text-basil-700 hover:bg-basil-50"
            >
              <Copy className="mr-2 h-4 w-4" />
              Copy Email Content
            </Button>
            
            <Button 
              onClick={onComposeEmail}
              className="w-full sm:w-auto bg-basil-500 hover:bg-basil-600 text-white"
            >
              Compose Email
              <Send className="ml-2 h-4 w-4" />
            </Button>
          </div>
          
          <div className="lg:col-span-3 bg-gray-50 p-6 rounded-lg">
            <div className="mb-6">
              <h3 className="font-semibold text-gray-800 mb-1">Subject Line</h3>
              <p className="bg-white p-3 rounded border border-gray-200">
                Business Inquiry: {formData.subject}
              </p>
            </div>
            
            <div className="mb-6">
              <h3 className="font-semibold text-gray-800 mb-1">Introduction</h3>
              <p className="bg-white p-3 rounded border border-gray-200">
                My name is {formData.name} and I'm reaching out regarding {formData.subject}.
              </p>
            </div>
            
            <div className="mb-6">
              <h3 className="font-semibold text-gray-800 mb-1">Company Details</h3>
              <ul className="bg-white p-3 rounded border border-gray-200 space-y-1">
                <li>• Company/Organization Name: {formData.company || "N/A"}</li>
                <li>• Email: {formData.email}</li>
              </ul>
            </div>
            
            <div className="mb-6">
              <h3 className="font-semibold text-gray-800 mb-1">Project Specifics</h3>
              <p className="bg-white p-3 rounded border border-gray-200 whitespace-pre-line">
                {formData.message}
              </p>
            </div>
            
            <div>
              <p className="bg-white p-3 rounded border border-gray-200">
                I look forward to your response.<br /><br />
                Best regards,<br />
                {formData.name}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailTemplate;
