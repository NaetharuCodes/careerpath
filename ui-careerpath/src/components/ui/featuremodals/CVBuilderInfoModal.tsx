import React from "react";
import { Button } from "@/components/ui/button/Button";
import Modal from "@/components/ui/modal/Modal";
import { FileText, CheckCircle, ArrowRight } from "lucide-react";

interface CVBuilderInfoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSignup?: () => void;
}

const CVBuilderInfoModal: React.FC<CVBuilderInfoModalProps> = ({
  isOpen,
  onClose,
  onSignup,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="AI-Powered CV Builder">
      <div className="space-y-6">
        {/* Hero section */}
        <div className="flex items-center justify-center bg-muted/30 rounded-lg p-8 mb-6">
          <div className="flex flex-col items-center text-center">
            <FileText size={64} className="text-primary mb-4" />
            <h3 className="text-xl font-bold">
              Create standout resumes that get noticed
            </h3>
            <p className="text-muted-foreground mt-2">
              Our AI analyzes job descriptions to help tailor your CV for
              maximum impact
            </p>
          </div>
        </div>

        {/* Key features */}
        <div>
          <h4 className="font-semibold text-lg mb-3">Key Features</h4>
          <ul className="space-y-3">
            <li className="flex gap-3">
              <CheckCircle className="text-primary flex-shrink-0 mt-1" />
              <div>
                <p className="font-medium">Smart Content Suggestions</p>
                <p className="text-muted-foreground text-sm">
                  AI analyzes your experience and suggests powerful bullet
                  points that highlight your achievements
                </p>
              </div>
            </li>
            <li className="flex gap-3">
              <CheckCircle className="text-primary flex-shrink-0 mt-1" />
              <div>
                <p className="font-medium">Keyword Optimization</p>
                <p className="text-muted-foreground text-sm">
                  Automatically identifies and incorporates industry-specific
                  keywords to help you pass ATS systems
                </p>
              </div>
            </li>
            <li className="flex gap-3">
              <CheckCircle className="text-primary flex-shrink-0 mt-1" />
              <div>
                <p className="font-medium">Professional Templates</p>
                <p className="text-muted-foreground text-sm">
                  Choose from dozens of field-tested, recruiter-approved
                  templates for your industry
                </p>
              </div>
            </li>
          </ul>
        </div>

        {/* How it works */}
        <div>
          <h4 className="font-semibold text-lg mb-3">How It Works</h4>
          <ol className="space-y-4">
            <li className="flex gap-3">
              <div className="bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0">
                1
              </div>
              <div>
                <p className="font-medium">
                  Upload your existing CV or start fresh
                </p>
                <p className="text-muted-foreground text-sm">
                  Our system can work with your existing content or help you
                  build from scratch
                </p>
              </div>
            </li>
            <li className="flex gap-3">
              <div className="bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0">
                2
              </div>
              <div>
                <p className="font-medium">Add your job target</p>
                <p className="text-muted-foreground text-sm">
                  Paste a job description or select an industry to tailor your
                  CV
                </p>
              </div>
            </li>
            <li className="flex gap-3">
              <div className="bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0">
                3
              </div>
              <div>
                <p className="font-medium">
                  Review AI suggestions and generate your CV
                </p>
                <p className="text-muted-foreground text-sm">
                  Accept recommendations and export your polished, professional
                  CV
                </p>
              </div>
            </li>
          </ol>
        </div>

        {/* Testimonial */}
        <div className="bg-muted/20 p-4 rounded-lg border border-border">
          <p className="italic text-muted-foreground">
            "The AI suggestions helped me highlight achievements I would have
            never thought to include. I received interview requests from 3 out
            of 5 companies I applied to!"
          </p>
          <p className="text-sm font-medium mt-2">
            — Sarah J., Software Engineer
          </p>
        </div>

        {/* CTA */}
        <div className="pt-4 flex justify-center">
          <Button size="lg" className="gap-2" onClick={onSignup}>
            Create Your CV Now <ArrowRight size={16} />
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default CVBuilderInfoModal;
