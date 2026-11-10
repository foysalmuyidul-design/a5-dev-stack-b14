import type { Istack } from "../../types";

const StackCard = ({ stack }: { stack: Istack }) => {
  return (
    <div className="card bg-base-100 w-full border border-gray-100 rounded-2xl shadow-sm p-6">
      {/* Header Row: Icon, Title, and Badge */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-4">
          <div className="p-2 bg-sky-50 rounded-xl">
            <img
              src={stack.icon}
              alt={stack.name}
              className="w-10 h-10 object-contain"
            />
          </div>
          <h2 className="card-title text-xl font-bold text-gray-900">
            {stack.name}
          </h2>
        </div>
        {stack.badge && (
          <span className="badge badge-info badge-sm bg-sky-100 text-sky-700 border-none font-medium px-2.5 py-3 rounded-full">
            {stack.badge}
          </span>
        )}
      </div>

      {/* Description */}
      <p className="text-gray-600 text-sm leading-relaxed mb-6">
        {stack.description}
      </p>

      {/* Metadata Row: Category, Difficulty, and Rating */}
      <div className="flex items-center justify-between text-xs text-gray-500 font-medium pt-4 border-t border-gray-100 mb-5">
        <span className="bg-gray-100 text-gray-700 px-2.5 py-1 rounded">
          {stack.category}
        </span>
        <span>{stack.difficulty}</span>
        <span className="flex items-center gap-1 text-amber-500 font-bold">
          ★ <span className="text-gray-700">{stack.rating}</span>
        </span>
      </div>

      {/* Action Button */}
      <div className="card-actions w-full">
        <button className="btn btn-neutral w-full bg-[#0f172a] text-white hover:bg-slate-800 normal-case rounded-xl font-medium tracking-wide">
          Add to Stack
        </button>
      </div>
    </div>
  );
};

export default StackCard;
