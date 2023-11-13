import styled from "styled-components";

export const Wrapper = styled.div`
  width: clamp(87%, 1.2vw, 83%);
  position: relative;
  height: max-content;

  @media (min-width: 1440px) {
    width: clamp(65%, 1.2vw, 80%);
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 23px 19px;
  outline: 0;
  background-color: #E6EBED;
  border-radius: 15px;
  font-family: "Exo 2", sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 19px;
  text-align: left;
  border: 0;

  &:focus {
    border: 2px solid #7b61ff;
  }
`;

export const FilterSvgWrapper = styled.div`
width: max-content;
position: absolute;
right: 2%;
top: 36%;
cursor: pointer;
`