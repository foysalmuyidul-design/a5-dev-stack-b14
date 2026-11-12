import type { IselectedStackCard, Istack } from "../../types";

const SelectedStackCard = ({
  selectedStack,
  selectedStackState,
  setSelectedStackState,
}: IselectedStackCard) => {
  const handleRemoveSelected = (selectedStackArg: Istack) => {
    const newSelectedStack = selectedStackState.filter(
      (sStack) => sStack.id !== selectedStackArg.id,
    );
    setSelectedStackState(newSelectedStack);
  };
  return (
    <div className="flex items-center justify-between w-full p-2  border border-gray-200 rounded-xl mb-2">
      {/* Left: Icon, Name, and Category */}
      <div className="flex w-[80%]  items-center gap-2">
        <img
          src={selectedStack.icon}
          alt={selectedStack.name}
          className="w-9 h-9 object-contain shrink-0"
        />
        <div className="flex flex-col">
          <h3 className="text-base font-bold text-slate-900 leading-tight">
            {selectedStack.name}
          </h3>
          <span className="text-xs font-medium text-gray-400 mt-0.5">
            {selectedStack.category}
          </span>
        </div>
      </div>

      {/* Right: Close / Remove Button */}
      <button
        type="button"
        aria-label={`Remove ${selectedStack.name}`}
        className="w-[20%] p-1.5 text-gray-400 hover:text-gray-600 transition-colors cursor-pointer flex justify-end"
      >
        <svg
          className="w-5 h-5"
          onClick={() => handleRemoveSelected(selectedStack)}
          fill="none"
          stroke="currentColor"
          strokeWidth={1.75}
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  );
};

export default SelectedStackCard;
