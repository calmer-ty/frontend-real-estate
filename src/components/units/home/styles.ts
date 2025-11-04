import styled from "@emotion/styled";
import { colors, mediaQueries } from "@/src/commons/styles";

import { css } from "@emotion/react";

// 지도 선택 버튼
export const Primary = styled.article`
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: calc(100vh - 3.75rem);
  background-color: #e4f5ffff;

  .inner {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 2rem;
    margin: 0 4rem;

    .row-item {
      display: flex;
      justify-content: space-between;
      gap: 2rem;
      height: 10rem;
      a {
        width: 100%;
        height: 100%;
        padding: 1rem 3rem 1rem 1.5rem;
        border-radius: 0.75rem;
        border: 0.125rem solid ${colors.outline};
        background: white no-repeat right 20px bottom 20px/2rem;
        transition: background-color 0.3s ease-in-out;
        /* 이미지 */
        &.link-1 {
          background-image: url("/images/icon_apt.png");
        }
        &.link-2 {
          background-image: url("/images/icon_office.png");
        }
        &.link-3 {
          background-image: url("/images/icon_house.png");
        }
        &.link-4 {
          background-image: url("/images/icon_houseContract.png");
        }
        &.link-5 {
          background-image: url("/images/icon_houseSale.png");
        }
      }
      ${mediaQueries.tablet(css`
        height: initial;
        flex-direction: column;
      `)}
    }
  }
`;
