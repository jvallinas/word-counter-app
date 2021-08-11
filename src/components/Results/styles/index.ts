import styled from "styled-components";
import {
  ROW_COLOR_1,
  TEXT_COLOR,
  ROW_COLOR_2,
} from "../../../styles/constants";

export const Table = styled.div`
  margin: 0 auto;
  max-height: 50vh;
  width: 95%;
  overflow: auto;
`;
Table.displayName = "Table";

export const Row = styled.div`
  display: flex;
  color: ${TEXT_COLOR};
  padding: 0.5em;

  background-color: ${ROW_COLOR_1};
  &:nth-child(2n) {
    background-color: ${ROW_COLOR_2};
  }
`;
Row.displayName = "Row";

export const HeaderRow = styled(Row)`
  font-weight: bold;
  font-size: 1.2em;
`;
HeaderRow.displayName = "HeaderRow";

export const NoResultsRow = styled(Row)`
  font-size: 0.8em;
  justify-content: center;
`;
NoResultsRow.displayName = "NoResultsRow";

export const CellWordKey = styled.div`
  flex-grow: 1;
`;
CellWordKey.displayName = "CellWordKey";

export const CellWordCount = styled.div``;
CellWordKey.displayName = "CellWordCount";
