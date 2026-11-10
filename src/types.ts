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

export interface IstacksPromise {
  stacksPromise: Promise<Istack[]>;
}
