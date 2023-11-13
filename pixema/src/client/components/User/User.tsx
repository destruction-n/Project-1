import React, { useState } from "react";
import {
  IconWrapper,
  Wrapper,
  FlexWrapper,
  ArrowWrapper,
} from "src/client/components/User/styles";
import ShortArrowSvg from "src/client/components/images/ShortArrowSvg";
import {
  getIcon,
  getUserText,
} from "src/client/components/User/helpers";
import { useSelector } from "react-redux";
import { projectSelectors } from "src/store/selectors/selctors";


const User = () => {
  const [menuIsOpened, setMenuIsOpened] = useState(false);

  const handleOpenMenu = () => {
    setMenuIsOpened(!menuIsOpened);
  };

  const { username } = useSelector(projectSelectors.getUserInfo);

  return (
    <Wrapper onClick={handleOpenMenu}>
      <FlexWrapper>
        <IconWrapper>{getIcon(username)}</IconWrapper>
        {getUserText(username)}
      </FlexWrapper>
      <ArrowWrapper $menuIsOpened={menuIsOpened}>
        <ShortArrowSvg />
      </ArrowWrapper>
    </Wrapper>
  );
};

export default User;
