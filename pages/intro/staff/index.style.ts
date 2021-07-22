import styled from "styled-components";

// page 안 공통 wrapper
export const CommonWrapper = styled.div`
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
`;

export const Row = styled.div`
  display: flex;
  padding: 6rem 0;
  border-bottom: 1px solid #e9e9e9;

  &:first-child {
    padding: 0 0 6rem 0;
  }
  &:last-child {
    border-bottom: none;
  }
`;

export const ImageArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  img {
    width: 22rem;
    height: 21.4rem;
    border-radius: 3rem;
  }
`;

export const Name = styled.h2`
  text-align: center;
  font-size: 1.8rem;
  font-weight: 400;
  margin-top: 1.6rem;
  position: absolute;
  bottom: -3rem;
  left: 50%;
  transform: translateX(-50%);
`;

export const Text = styled.p`
  font-size: 1.6rem;
  padding-left: 4rem;
  display: flex;
  align-items: center;
`;
