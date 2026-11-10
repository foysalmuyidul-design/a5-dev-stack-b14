import { use } from "react";
import type { Istack, IstacksPromise } from "../../types";

const Stacks = ({ stacksPromise }: IstacksPromise) => {
  const StacksValue = use(stacksPromise);
  const commonStyle = "px-3 md:px-10";
  return (
    <div
      className={`${commonStyle} pt-10 pb-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 max-md:text-center md:text-left max-md:items-center bg-gray-50`}
    >
      {StacksValue.map((stack: Istack) => {
        return <h2>{stack.name}</h2>;
      })}
    </div>
  );
};

export default Stacks;
