import styled from "styled-components";
import BookmarkSvg from "src/client/components/images/FavouriteIcon";
import ShareSvg from "src/client/components/images/ForwardIcon";

export const MainBox = styled.div`
  display: grid;
  max-width: 266px;
  grid-template-columns: 1fr 1fr;
  gap: 1px;
`;

export const Pin = styled.button`
  max-width: 132.5px;
  background-color: ${(props) => props.theme.palette.primary.grey};
  display: flex;
  justify-content: center;
  border: 0;
  cursor: pointer;
  padding: 16px 0;
  &:first-child {
    border-radius: 10px 0 0 10px;
  }

  &:last-child {
    border-radius: 0 10px 10px 0;
  }
`;
