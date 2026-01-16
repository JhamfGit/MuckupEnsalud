interface Stat {
  value: string;
  label: string;
  icon?: React.ReactNode;
}

interface StatsSectionProps {
  stats: Stat[];
  bgColor?: string;
}

export default function StatsSection({ stats, bgColor = 'bg-purple-700' }: StatsSectionProps) {
  return (
    <div className={`${bgColor} text-white py-16`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              {stat.icon && <div className="flex justify-center mb-2">{stat.icon}</div>}
              <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
              <div className="text-sm md:text-base opacity-90">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
