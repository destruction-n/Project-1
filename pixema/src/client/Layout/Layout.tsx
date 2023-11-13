import React, { useEffect } from "react";
import Footer from "src/client/Layout/Footer/Footer";
import Header from "src/client/Layout/Header/Header";
import { useSelector } from "react-redux";
import FilterMenu from "../components/SortingPanel/SortingPanel";
import { PopupIsOpenedBG } from "src/client/Layout/styles";
import { Outlet } from "react-router-dom";
import { projectSelectors } from "src/store/selectors/selctors";
import { useAction } from "src/store/hooks/useAction";

const Layout = () => {
  const filterMenuIsOpened = useSelector(projectSelectors.getFilterMenuIsOpened);
  const { autoAuthAsync } = useAction();

  useEffect(() => {
    autoAuthAsync();
  }, []);

  return (
    <div>
      <Header></Header>
      <Outlet />
      <Footer></Footer>
      {filterMenuIsOpened && <PopupIsOpenedBG />}
      {filterMenuIsOpened && <FilterMenu />}
    </div>
  );
};

export default Layout;
