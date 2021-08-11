import React from "react";
import { WordEntry } from "../../types";
import {
  CellWordCount,
  CellWordKey,
  HeaderRow,
  NoResultsRow,
  Row,
  Table,
} from "./styles";

interface Props {
  wordEntries: WordEntry[];
}

const NO_ENTRIES_AVAILABLE_LABEL = "No entries available";

export const ResultsTable: React.FC<Props> = ({ wordEntries }) => {
  return (
    <Table>
      <HeaderRow>
        <CellWordKey>Word</CellWordKey>
        <CellWordCount>Occurrences</CellWordCount>
      </HeaderRow>
      {wordEntries.length ? (
        wordEntries.map(([wordKey, wordCount]) => (
          <Row key={wordKey}>
            <CellWordKey>{wordKey}</CellWordKey>
            <CellWordCount>{wordCount}</CellWordCount>
          </Row>
        ))
      ) : (
        <>
          <NoResultsRow>{NO_ENTRIES_AVAILABLE_LABEL}</NoResultsRow>
        </>
      )}
    </Table>
  );
};

export default ResultsTable;
