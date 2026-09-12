import type { Technology } from "../types/technology";

interface TechnologyCardProps {
    technology: Technology;
    onAddToStack: (technology: Technology) => void;
    isSelected: boolean;
}

const TechnologyCard = ({ technology, onAddToStack, isSelected, }: TechnologyCardProps) => {
    return (
        <article className="flex min-h-71.25 flex-col rounded-xl border border-slate-100 bg-white p-5 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
            <div className="flex items-start justify-between">
                <img
                    src={technology.icon}
                    alt={`${technology.name} logo`}
                    className="h-8 w-8 object-contain"
                />

                <span className="rounded-full bg-pink-50 px-3 py-1 text-xs font-medium text-pink-600">
                    {technology.badge}
                </span>
            </div>

            <h3 className="mt-5 text-lg font-bold text-slate-900">
                {technology.name}
            </h3>

            <p className="mt-2 line-clamp-3 text-sm leading-5 text-slate-400">
                {technology.description}
            </p>

            <div className="mt-auto pt-5">

                <div className="mb-4 flex items-center justify-between text-xs">
                    <span className="rounded bg-slate-50 px-2 py-1 text-slate-500">
                        {technology.category}
                    </span>

                    <span className="text-slate-400">
                        {technology.difficulty}
                    </span>

                    <span className="flex items-center gap-1 text-slate-500">
                        <span className="text-yellow-400">★</span>
                        {technology.rating}
                    </span>
                </div>

                <button
                    type="button"
                    onClick={() => onAddToStack(technology)}
                    disabled={isSelected}
                    className={`btn w-full text-xs font-medium ${isSelected
                            ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                            : "btn-neutral"
                        }`}
                >
                    {isSelected ? "✓ Added to Stack" : "Add to Stack"}
                </button>

            </div>
        </article>
    );
};

export default TechnologyCard;