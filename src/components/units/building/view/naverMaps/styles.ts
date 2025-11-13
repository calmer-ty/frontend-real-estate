import styled from "@emotion/styled";
import { mediaQueries } from "@/src/commons/styles";
import { css } from "@emotion/react";

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 3;
  ${mediaQueries.extraLargeDesktop(css`
    flex: 2;
  `)}

  #map {
    width: 100%;
    height: 100%;
  }
  .topContainer {
    display: flex;
    justify-content: space-between;
    gap: 0.5rem;
    width: 100%;
    padding: 0.5rem 1rem;
    border-bottom: 0.125rem solid #bcbcbc;

    .menu {
      display: flex;
      gap: 1rem;
    }
  }
  .loadingSpinner {
    position: absolute;
    top: 0;
  }
`;
