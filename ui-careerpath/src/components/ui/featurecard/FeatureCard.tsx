import { ReactNode } from "react";
import { Button } from "../button/Button";
import { ArrowRight } from "lucide-react";

interface FeatureItem {
  icon: ReactNode;
  title: string;
  description: string;
}

interface FeatureCardProps {
  icon?: ReactNode;
  title: string;
  features: FeatureItem[];
  buttonText?: string;
  buttonIcon?: ReactNode;
  onButtonClick?: () => void;
  className?: string;
}

const FeatureCard = ({
  icon,
  title,
  features,
  buttonText,
  buttonIcon = <ArrowRight size={16} />,
  onButtonClick,
  className = "",
}: FeatureCardProps) => {
  return (
    <div
      className={`bg-background p-8 rounded-lg shadow-sm border ${className}`}
    >
      <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
        {icon && icon}
        {title}
      </h3>

      <ul className="space-y-4">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            {feature.icon}
            <div>
              <p className="font-medium">{feature.title}</p>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          </li>
        ))}
      </ul>

      {buttonText && (
        <div className="mt-8">
          <Button className="gap-2" onClick={onButtonClick}>
            {buttonText} {buttonIcon}
          </Button>
        </div>
      )}
    </div>
  );
};

export default FeatureCard;
