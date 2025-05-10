interface ProcessStep {
  number: number;
  title: string;
  description: string;
}

interface ProcessListProps {
  title: string;
  steps: ProcessStep[];
  className?: string;
}

const ProcessList = ({ title, steps, className = "" }: ProcessListProps) => {
  return (
    <div className={className}>
      <h3 className="text-2xl font-bold mb-6">{title}</h3>

      <ol className="space-y-8">
        {steps.map((step) => (
          <li key={step.number} className="flex gap-4">
            <div className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
              {step.number}
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-2">{step.title}</h4>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default ProcessList;
