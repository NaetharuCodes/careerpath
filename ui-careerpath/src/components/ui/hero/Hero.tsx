import { ReactNode } from "react";
import { Button } from "../button/Button";

interface HeroProps {
  // Text content
  title: ReactNode;
  subtitle?: string;

  // Primary button
  primaryButtonText?: string;
  primaryButtonIcon?: ReactNode;
  onPrimaryButtonClick?: () => void;

  // Secondary button
  secondaryButtonText?: string;
  secondaryButtonIcon?: ReactNode;
  onSecondaryButtonClick?: () => void;

  // Optional styling
  className?: string;
  containerClassName?: string;
  titleClassName?: string;
  subtitleClassName?: string;

  // Layout options
  centered?: boolean;
  fullWidth?: boolean;
}

const Hero = ({
  title,
  subtitle,
  primaryButtonText = "Get Started",
  primaryButtonIcon,
  onPrimaryButtonClick,
  secondaryButtonText,
  secondaryButtonIcon,
  onSecondaryButtonClick,
  className = "",
  containerClassName = "",
  titleClassName = "",
  subtitleClassName = "",
  centered = true,
  fullWidth = false,
}: HeroProps) => {
  return (
    <section className={`py-16 md:py-24 px-4 ${className}`}>
      <div
        className={`${fullWidth ? "w-full" : "container mx-auto"} ${
          centered ? "text-center" : ""
        } ${containerClassName}`}
      >
        <h1 className={`text-4xl md:text-6xl font-bold mb-6 ${titleClassName}`}>
          {title}
        </h1>

        {subtitle && (
          <p
            className={`text-xl md:text-2xl text-muted-foreground mb-8 ${
              centered ? "max-w-3xl mx-auto" : ""
            } ${subtitleClassName}`}
          >
            {subtitle}
          </p>
        )}

        <div
          className={`flex ${
            centered ? "justify-center" : ""
          } flex-col sm:flex-row gap-4`}
        >
          {primaryButtonText && (
            <Button size="lg" className="gap-2" onClick={onPrimaryButtonClick}>
              {primaryButtonText} {primaryButtonIcon}
            </Button>
          )}

          {secondaryButtonText && (
            <Button
              size="lg"
              variant="outline"
              className="gap-2"
              onClick={onSecondaryButtonClick}
            >
              {secondaryButtonText} {secondaryButtonIcon}
            </Button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
