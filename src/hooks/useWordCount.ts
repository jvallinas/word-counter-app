import { useCallback, useEffect, useMemo, useState } from "react";
import { WordCountRegistry, SortingCriteria, WordEntry } from "../types";

const reduceWordsByOccurrence = (
  registry: WordCountRegistry,
  word: string
): WordCountRegistry => {
  if (!registry[word]) registry[word] = 1;
  else registry[word]++;
  return registry;
};

export const getWordCountRegistry = (input?: string): WordCountRegistry => {
  if (!input) return {};
  const wordList = input.match(/[\w]*/g);

  return wordList
    ? wordList.filter((word) => !!word).reduce(reduceWordsByOccurrence, {})
    : {};
};

export default function useWordCount(
  input: string,
  sortBy: SortingCriteria = SortingCriteria.Alphabetical,
  isAscOrder: boolean = true
) {
  const wordCountRegistry = useMemo(() => getWordCountRegistry(input), [input]);
  const [wordEntries, setWordEntries] = useState<WordEntry[]>([]);

  const [sortingCriteria, toggleSortingCriteria] =
    useState<SortingCriteria>(sortBy);
  const [isAscendingOrder, toggleAscendingOrder] =
    useState<Boolean>(isAscOrder);

  const sortingFunction = useCallback(
    (firstItem: WordEntry, secondItem: WordEntry): number => {
      switch (true) {
        case firstItem[sortingCriteria] > secondItem[sortingCriteria]:
          return isAscendingOrder ? 1 : -1;
        case firstItem[sortingCriteria] < secondItem[sortingCriteria]:
          return isAscendingOrder ? -1 : 1;
        default:
          return 0;
      }
    },
    [sortingCriteria, isAscendingOrder]
  );

  useEffect(() => {
    setWordEntries(Object.entries(wordCountRegistry).sort(sortingFunction));
  }, [wordCountRegistry, sortingFunction]);

  return {
    wordEntries,

    isAscendingOrder,
    toggleAscendingOrder,

    sortingCriteria,
    toggleSortingCriteria,
  };
}
