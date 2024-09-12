export type ThingsData = { id: number; name: string; active?: boolean };

export type ThingsHeaderProps = {
  userThings: ThingsData[];
  userThingsActive: number[];
  chooseThings: ThingsData[];
};
