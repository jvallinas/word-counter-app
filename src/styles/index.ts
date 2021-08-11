import styled from "styled-components";
import {
  BACKGROUND_COLOR,
  DESKTOP_MEDIA_QUERY,
  DESKTOP_SCREEN_WIDTH,
} from "./constants";

export const AppLayout = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  width: 90vw;
  height: 100vh;
  margin: auto;
  padding: 1em;
  background-color: ${BACKGROUND_COLOR};
  align-items: flex-start;

  ${DESKTOP_MEDIA_QUERY} {
    max-width: ${DESKTOP_SCREEN_WIDTH};
  }
`;
AppLayout.displayName = "AppLayout";

export const AppTitle = styled.h1`
  font-size: 2em;
  margin: 0 auto;
`;
AppTitle.displayName = "AppTitle";

export const InputSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 12px;

  ${DESKTOP_MEDIA_QUERY} {
    flex-direction: row;
  }
`;
InputSection.displayName = "InputSection";

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 12px 0;

  ${DESKTOP_MEDIA_QUERY} {
    flex-direction: column;
  }
`;
ButtonContainer.displayName = "ButtonContainer";

export const Button = styled.button`
  cursor: pointer;
  margin: 0 12px;
  border-radius: 0.5rem;
  padding: 0.5rem;
`;
Button.displayName = "Button";
