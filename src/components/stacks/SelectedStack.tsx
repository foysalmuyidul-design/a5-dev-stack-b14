import type { IselectedStack, Istack } from "../../types";
import SelectedStackCard from "./SelectedStackCard";

const SelectedStack = ({
  selectedStackState,
  setSelectedStackState,
}: IselectedStack) => {
  const handleRemoveAll = () => {
    const newSelectedStack: Istack[] = [];
    setSelectedStackState(newSelectedStack);
  };
  return (
    <div>
      <div className="card p-1 pl-2 pt-2 bg-base-100 w-full border border-gray-100 rounded-xl  shadow-sm">
        <div className="card-body p-0">
          {/* Title Section */}
          <h2 className="text-xl font-bold text-[#091124] tracking-tight">
            Your Stack
          </h2>
          <p className="text-gray-400 text-sm mt-1 mb-2">
            {selectedStackState.length > 0
              ? `${selectedStackState.length} ${selectedStackState.length === 1 ? "Technology Selected" : "Technologies Selected"}`
              : "No technologies selected yet."}
          </p>

          {selectedStackState.length > 0 ? (
            <div className="w-full">
              {selectedStackState.map((selectedStack) => {
                return (
                  <SelectedStackCard
                    selectedStackState={selectedStackState}
                    setSelectedStackState={setSelectedStackState}
                    selectedStack={selectedStack}
                  />
                );
              })}
              <button
                onClick={handleRemoveAll}
                className="w-full border border-[#d82c20]/50 mt-10 mb-5 rounded-xl py-1 text-lg text-[#d82c20] font-semibold"
              >
                Remove All
              </button>
            </div>
          ) : (
            // Empty State Box
            <div className="w-full flex items-center justify-center border-2 border-dashed border-gray-100 rounded-2xl py-8">
              <span className="text-gray-400 text-sm font-medium">
                Your stack is empty.
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SelectedStack;
