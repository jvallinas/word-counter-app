import "./App.css";
import TextArea from "./components/TextArea";
import Results from "./components/Results";
import { SortingCriteria } from "./types";
import { useState } from "react";
import useWordCount from "./hooks/useWordCount";
import {
  AppLayout,
  AppTitle,
  Button,
  ButtonContainer,
  InputSection,
} from "./styles";

const APP_TITLE = "Word Count app";

function App() {
  const [input, setInput] = useState("");

  const {
    wordEntries,
    isAscendingOrder,
    toggleAscendingOrder,
    sortingCriteria,
    toggleSortingCriteria,
  } = useWordCount(input);
  return (
    <AppLayout>
      <AppTitle>{APP_TITLE}</AppTitle>
      <InputSection>
        <ButtonContainer>
          <Button onClick={() => toggleAscendingOrder((value) => !value)}>
            Order: {isAscendingOrder ? "Ascending" : "Descending"}
          </Button>
          <Button
            onClick={() => toggleSortingCriteria((value) => Number(!value))}
          >
            Sorting criteria: {SortingCriteria[sortingCriteria]}
          </Button>
        </ButtonContainer>

        <TextArea
          rows={5}
          currentInput={input}
          onChangeHandler={(e) => setInput(e.currentTarget.value)}
        ></TextArea>
      </InputSection>
      <Results wordEntries={wordEntries} />
    </AppLayout>
  );
}

export default App;
