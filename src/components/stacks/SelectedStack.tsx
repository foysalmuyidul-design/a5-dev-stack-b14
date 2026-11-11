import type { IselectedStack } from "../../types";

const SelectedStack = ({
  selectedStackState,
  setSelectedStackState,
}: IselectedStack) => {
  return (
    <div>
      <div className="card bg-base-100 w-full border border-gray-100 rounded-3xl p-6 shadow-sm">
        <div className="card-body p-0">
          {/* Title Section */}
          <h2 className="text-xl font-bold text-[#091124] tracking-tight">
            Your Stack
          </h2>
          <p className="text-gray-400 text-sm mt-1 mb-5">
            {selectedStackState.length > 0
              ? "have data"
              : "No technologies selected yet."}
          </p>

          {/* Empty State Box */}
          <div className="w-full flex items-center justify-center border-2 border-dashed border-gray-100 rounded-2xl py-8">
            <span className="text-gray-400 text-sm font-medium">
              Your stack is empty.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectedStack;
