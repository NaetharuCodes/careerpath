interface StatItem {
  value: string;
  label: string;
}

interface StatisticsSectionProps {
  items: StatItem[];
  className?: string;
  backgroundClass?: string;
  textClass?: string;
  columns?: 2 | 3 | 4 | 5; // Number of columns in desktop view
}

const StatisticsSection = ({
  items,
  className = "",
  backgroundClass = "bg-primary",
  textClass = "text-primary-foreground",
  columns = 4,
}: StatisticsSectionProps) => {
  return (
    <section className={`py-16 ${backgroundClass} ${textClass} ${className}`}>
      <div className="container mx-auto px-4">
        <div
          className={`grid grid-cols-2 md:grid-cols-${columns} gap-8 text-center`}
        >
          {items.map((item, index) => (
            <div key={index}>
              <p className="text-4xl font-bold mb-2">{item.value}</p>
              <p>{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
