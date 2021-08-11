import React, { ReactElement } from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { SortingCriteria, WordCountRegistry, WordEntry } from "../../types";
import useWordCount, { getWordCountRegistry } from "../useWordCount";

/* TEST MOCK DATA */

const MOCK_INPUT_TEXT =
  "A short sentence to mock some input to test this hook.";
const MOCK_INPUT_TEXT_ALTERNATE_ORDER =
  "A short sentence to test this hook to mock some input.";

const EXPECTED_WORD_COUNT_REGISTRY: WordCountRegistry = {
  A: 1,
  short: 1,
  sentence: 1,
  to: 2,
  mock: 1,
  some: 1,
  input: 1,
  test: 1,
  this: 1,
  hook: 1,
};

const EXPECTED_RESULT_ALPHABETICAL_ASCENDING: WordEntry[] = [
  ["A", 1],
  ["hook", 1],
  ["input", 1],
  ["mock", 1],
  ["sentence", 1],
  ["short", 1],
  ["some", 1],
  ["test", 1],
  ["this", 1],
  ["to", 2],
];

const EXPECTED_RESULT_ALPHABETICAL_DESCENDING = [
  ...EXPECTED_RESULT_ALPHABETICAL_ASCENDING,
].reverse();

const EXPECTED_RESULT_OCCURRENCES_ASCENDING: WordEntry[] = [
  ["A", 1],
  ["short", 1],
  ["sentence", 1],
  ["mock", 1],
  ["some", 1],
  ["input", 1],
  ["test", 1],
  ["this", 1],
  ["hook", 1],
  ["to", 2],
];

const EXPECTED_RESULT_OCCURRENCES_DESCENDING = [
  ["to", 2],
  ["A", 1],
  ["short", 1],
  ["sentence", 1],
  ["mock", 1],
  ["some", 1],
  ["input", 1],
  ["test", 1],
  ["this", 1],
  ["hook", 1],
];

// Setting up a DOM element as a render target
let container: Element = document.createElement("div");

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  if (container) {
    unmountComponentAtNode(container);
    container.remove();
  }
});

describe("utility functions for sorting", () => {
  it("should return same word registry consistently for same words in different order", async () => {
    expect(getWordCountRegistry(MOCK_INPUT_TEXT)).toStrictEqual(
      EXPECTED_WORD_COUNT_REGISTRY
    );
    expect(getWordCountRegistry(MOCK_INPUT_TEXT_ALTERNATE_ORDER)).toStrictEqual(
      EXPECTED_WORD_COUNT_REGISTRY
    );
  });
});

describe("useWordCount hook behavior", () => {
  let testResult: WordEntry[];

  type TestHookProps = {
    inputText: string;
    sortingCriteria?: SortingCriteria;
    isAscOrder?: boolean;
  };

  function TestHookComponent({
    inputText,
    sortingCriteria,
    isAscOrder,
  }: TestHookProps): ReactElement {
    const { wordEntries } = useWordCount(
      inputText,
      sortingCriteria,
      isAscOrder
    );
    testResult = wordEntries;
    return <></>;
  }

  it("should return word entries in alphabetical ascending order by default", async () => {
    act(() => {
      render(<TestHookComponent inputText={MOCK_INPUT_TEXT} />, container);
    });

    expect(testResult).toStrictEqual(EXPECTED_RESULT_ALPHABETICAL_ASCENDING);
  });

  it("should return word entries in alphabetical descending order", async () => {
    act(() => {
      render(
        <TestHookComponent inputText={MOCK_INPUT_TEXT} isAscOrder={false} />,
        container
      );
    });

    expect(testResult).toStrictEqual(EXPECTED_RESULT_ALPHABETICAL_DESCENDING);
  });

  it("should return word entries in descending order by occurrences", async () => {
    act(() => {
      render(
        <TestHookComponent
          inputText={MOCK_INPUT_TEXT}
          isAscOrder={false}
          sortingCriteria={SortingCriteria.Frequency}
        />,
        container
      );
    });

    expect(testResult).toStrictEqual(EXPECTED_RESULT_OCCURRENCES_DESCENDING);
  });

  it("should return word entries in ascending order by occurrences", async () => {
    act(() => {
      render(
        <TestHookComponent
          inputText={MOCK_INPUT_TEXT}
          isAscOrder={true}
          sortingCriteria={SortingCriteria.Frequency}
        />,
        container
      );
    });

    expect(testResult).toStrictEqual(EXPECTED_RESULT_OCCURRENCES_ASCENDING);
  });

  it("should return empty array when no input", async () => {
    act(() => {
      render(
        <TestHookComponent inputText={""} isAscOrder={false} />,
        container
      );
    });

    expect(testResult).toStrictEqual([]);
  });
});
