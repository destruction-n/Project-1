import { Link } from "react-router-dom";
import styled from "styled-components";

interface IProps {
  $isAuthorized: boolean;
}

export const Wrapper = styled.div`
  margin-top: 24px;
  max-width: 264px;
  border-radius: 10px;
  background-color: ${(props) => props.theme.palette.primary.darkGrey};
`;

export const SectionWrapper = styled.div<IProps>`
  width: 100%;
  padding: 18px 18px;

  &:first-child {
    border-radius: 10px 10px 0 0;

    ${(props) =>
    props.$isAuthorized
      ? `border-bottom: 1px solid ${props.theme.palette.primary.grey}`
      : ""}
  }

  &:last-child {
    border-radius: 0 0 10px 10px;
  }
`;

export const SectionText = styled.p`
  font-family: "Exo 2", sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  text-align: left;
  color: white;
  cursor: pointer;

  &:hover {
    color: #7b61ff;
  }
`;

export const SectionLink = styled(Link)`
  font-family: "Exo 2", sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  text-align: left;
  color: white;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    color: #7b61ff;
  }
`;
