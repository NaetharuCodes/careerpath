import { ReactNode } from "react";
import { Button } from "../button/Button";

interface CTAButtonProps {
  text: string;
  variant?: "default" | "outline" | "secondary";
  icon?: ReactNode;
  onClick?: () => void;
  href?: string;
}

interface CTASectionProps {
  title: string;
  description?: string;
  primaryButton: CTAButtonProps;
  secondaryButton?: CTAButtonProps;
  className?: string;
  centered?: boolean;
}

const CTASection = ({
  title,
  description,
  primaryButton,
  secondaryButton,
  className = "",
  centered = true,
}: CTASectionProps) => {
  return (
    <section className={`py-16 ${className}`}>
      <div
        className={`container mx-auto px-4 ${centered ? "text-center" : ""}`}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>

        {description && (
          <p
            className={`text-lg text-muted-foreground ${
              centered ? "max-w-2xl mx-auto" : ""
            } mb-8`}
          >
            {description}
          </p>
        )}

        <div
          className={`flex flex-col sm:flex-row gap-4 ${
            centered ? "justify-center" : ""
          }`}
        >
          <Button
            size="lg"
            variant={primaryButton.variant || "default"}
            className={primaryButton.icon ? "gap-2" : ""}
            onClick={primaryButton.onClick}
            {...(primaryButton.href
              ? { as: "a", href: primaryButton.href }
              : {})}
          >
            {primaryButton.text} {primaryButton.icon}
          </Button>

          {secondaryButton && (
            <Button
              size="lg"
              variant={secondaryButton.variant || "outline"}
              className={secondaryButton.icon ? "gap-2" : ""}
              onClick={secondaryButton.onClick}
              {...(secondaryButton.href
                ? { as: "a", href: secondaryButton.href }
                : {})}
            >
              {secondaryButton.text} {secondaryButton.icon}
            </Button>
          )}
        </div>
      </div>
    </section>
  );
};

export default CTASection;
