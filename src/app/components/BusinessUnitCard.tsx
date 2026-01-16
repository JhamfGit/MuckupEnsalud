import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface BusinessUnitCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
  color: string;
  image: string;
}

export default function BusinessUnitCard({
  title,
  description,
  icon,
  link,
  color,
  image,
}: BusinessUnitCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
      <div className="aspect-[4/3] relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className={`absolute inset-0 bg-gradient-to-t from-${color}-900 via-${color}-900/50 to-transparent opacity-80`}></div>
      </div>
      <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
        <div className={`w-12 h-12 rounded-full bg-${color}-500 flex items-center justify-center mb-4`}>
          {icon}
        </div>
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-sm mb-4 opacity-90">{description}</p>
        <Link
          to={link}
          className={`inline-flex items-center gap-2 text-${color}-300 hover:text-${color}-200 transition-colors`}
        >
          Conocer más <ArrowRight size={18} />
        </Link>
      </div>
    </div>
  );
}
