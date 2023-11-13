import React, { useState } from "react";
import UserMenuContent from "src/client/components/UserMenuContent/UserMenuContent";
import User from "src/client/components/User/User";
import { useSelector } from "react-redux";
import { projectSelectors } from "src/store/selectors/selctors";

const HeaderMenu = () => {
  const { username } = useSelector(projectSelectors.getUserInfo);
  const [menuIsOpened, setMenuIsOpened] = useState(false);

  const handleOpenMenu = () => {
    setMenuIsOpened(!menuIsOpened);
  };

  return (
    <div onClick={handleOpenMenu}>
      <User />
      {menuIsOpened && (
        <UserMenuContent $isAuthorized={!!username}></UserMenuContent>
      )}
    </div>
  );
};

export default HeaderMenu;
