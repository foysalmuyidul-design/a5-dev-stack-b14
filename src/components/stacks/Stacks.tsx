import { use, useState } from "react";
import type { Istack, IstacksPromise } from "../../types";
import StackCard from "./StackCard";
import SelectedStack from "./SelectedStack";

const Stacks = ({ stacksPromise }: IstacksPromise) => {
  const StacksValue = use(stacksPromise);
  const commonStyle = "px-3 md:px-10";

  const [selectedStackState, setSelectedStackState] = useState<Istack[]>([]);
  return (
    <div
      className={`${commonStyle} pt-10 pb-10 grid grid-cols-1 lg:grid-cols-5  gap-3  bg-gray-50 border-b border-gray-200`}
    >
      <div
        className={`col-span-5 lg:col-span-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3  bg-gray-50`}
      >
        {StacksValue.map((stack: Istack) => {
          return (
            <StackCard
              key={stack.id}
              stack={stack}
              selectedStackState={selectedStackState}
              setSelectedStackState={setSelectedStackState}
            />
          );
        })}
      </div>
      <div className="col-span-5 lg:col-span-1">
        <SelectedStack
          selectedStackState={selectedStackState}
          setSelectedStackState={setSelectedStackState}
        />
      </div>
    </div>
  );
};

export default Stacks;
