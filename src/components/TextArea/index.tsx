import React from "react";
import { StyledTextArea } from "./styles";

const PLACEHOLDER_TEXT = "Enter some text here";

interface Props {
  currentInput: string;
  onChangeHandler: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  cols?: number;
  rows?: number;
  placeholder?: string;
}

export const TextArea: React.FC<Props> = ({
  currentInput,
  onChangeHandler,
  cols,
  rows,
  placeholder = PLACEHOLDER_TEXT,
}) => {
  return (
    <>
      <StyledTextArea
        value={currentInput}
        onChange={onChangeHandler}
        placeholder={placeholder}
        cols={cols}
        rows={rows}
      ></StyledTextArea>
    </>
  );
};

export default TextArea;
