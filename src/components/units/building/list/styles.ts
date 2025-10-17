import styled from "@emotion/styled";

export const Container = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ModalInner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  .top {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  .buttonWrap {
    display: flex;
    gap: 0.5rem;
  }
`;
