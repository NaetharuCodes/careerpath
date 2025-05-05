import { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "../button/Button";

interface FeatureBoxProps {
  icon: ReactNode;
  title: string;
  description: string;
  linkText?: string;
  linkUrl?: string;
  onLinkClick?: () => void;
  className?: string;
}

const FeatureBox = ({
  icon,
  title,
  description,
  linkText = "Learn more",
  linkUrl,
  onLinkClick,
  className = "",
}: FeatureBoxProps) => {
  return (
    <div
      className={`bg-background p-6 rounded-lg shadow-sm border flex flex-col ${className}`}
    >
      <div className="mb-4 text-primary">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-muted-foreground flex-grow">{description}</p>

      {(linkText || linkUrl || onLinkClick) && (
        <Button
          variant="ghost"
          className="mt-4 justify-start p-0 hover:bg-transparent hover:text-primary"
          onClick={onLinkClick}
          {...(linkUrl ? { as: "a", href: linkUrl } : {})}
        >
          {linkText} <ArrowRight size={16} className="ml-1" />
        </Button>
      )}
    </div>
  );
};

export default FeatureBox;
