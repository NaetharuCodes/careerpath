import { ReactNode } from "react";

interface TestimonialCardProps {
  quote: string;
  authorName: string;
  authorTitle: string;
  rating?: number; // Number of stars (1-5)
  avatarContent?: ReactNode | string; // Initials or custom avatar
  className?: string;
}

const TestimonialCard = ({
  quote,
  authorName,
  authorTitle,
  rating = 5,
  avatarContent,
  className = "",
}: TestimonialCardProps) => {
  return (
    <div
      className={`bg-background p-6 rounded-lg shadow-sm border ${className}`}
    >
      {rating > 0 && (
        <div className="mb-4">
          <div className="flex text-yellow-400">
            {[...Array(rating)].map((_, i) => (
              <svg
                key={i}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                  clipRule="evenodd"
                />
              </svg>
            ))}
          </div>
        </div>
      )}

      <p className="text-muted-foreground mb-4">"{quote}"</p>

      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
          {avatarContent ||
            authorName
              .split(" ")
              .map((word) => word[0])
              .join("")}
        </div>
        <div>
          <p className="font-semibold">{authorName}</p>
          <p className="text-sm text-muted-foreground">{authorTitle}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
