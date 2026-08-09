import { BadgeDevelopment } from './BadgeDevelopment';

export function ImageCard({ image, title, description, badge = null }) {
  return (
    <div className="group relative overflow-hidden rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {badge && (
          <div className="absolute top-3 right-3">
            <BadgeDevelopment text={badge} />
          </div>
        )}
      </div>
      <div className="p-4">
        <h4 className="text-lg font-serif font-bold text-brown">{title}</h4>
        <p className="text-sm text-silver mt-1">{description}</p>
      </div>
    </div>
  );
}