export type WordCountRegistry = { [word: string]: number };

export type WordEntry = [word: string, occurrences: number];

export enum SortingCriteria {
  Alphabetical = 0,
  Frequency = 1,
}
