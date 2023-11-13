import styled from "styled-components";

interface IProps {
  $selected: boolean;
}

export const Wrapper = styled.div`
  width: clamp(123px, 1.2vw, 48%);
  height: max-content;
`;

export const SectionWrapper = styled.div`
  display: flex;
  margin-bottom: 40px;
  cursor: pointer;

  &:last-child {
    margin: 0;
  }
`;

export const SectionTitle = styled.p<IProps>`
  color: ${(props) => (props.$selected ? "#7B61FF" : "#80858b")};
  padding-left: 20px;
  font-family: "Exo 2", sans-serif;
  font-size: 18px;
  font-weight: 600;
  line-height: 24px;
  text-align: left;
`;

export const HelpingWrapper = styled.div`
  height: 50px;
`