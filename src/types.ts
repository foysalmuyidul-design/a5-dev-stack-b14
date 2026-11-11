import type { Dispatch, SetStateAction } from "react";

export interface Istack {
  id: string;
  name: string;
  category: string;
  description: string;
  icon: string;
  rating: number;
  difficulty: string;
  badge: string;
}

export interface IstackCard {
  stack: Istack;
  selectedStackState: Istack[];
  setSelectedStackState: Dispatch<SetStateAction<Istack[]>>;
}

export interface IselectedStack {
  selectedStackState: Istack[];
  setSelectedStackState: Dispatch<SetStateAction<Istack[]>>;
}

export interface IstacksPromise {
  stacksPromise: Promise<Istack[]>;
}
