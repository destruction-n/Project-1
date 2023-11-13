import React, { useState, useEffect } from "react";
import {
  GetColor,
} from "src/client/components/MainMenuContent/helpers";
import {
  Wrapper,
  SectionWrapper,
  SectionTitle,
  HelpingWrapper,
} from "src/client/components/MainMenuContent/styles";
import BookmarkSvg from "src/client/components/images/FavouriteIcon";
import FireSvg from "src/client/components/images/FireSvg";
import HomeSvg from "src/client/components/images/HomeSvg";
import SettingsSvg from "src/client/components/images/SettingsSvg";
import { useAction } from "src/store/hooks/useAction";
import { useSelector } from "react-redux";
import { sectionsEnum } from "src/client/Types/Types";
import { getFilmsPerList } from "src/client/helpers";
import { projectSelectors } from "src/store/selectors/selctors";
import { themeModes } from "src/styles/theme";
import { DarkMode } from "@mui/icons-material";
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import { useNavigate } from "react-router-dom";

const MainMenuContent = () => {
  const { changeTheme } = useAction()
  const { getThemeMode } = projectSelectors
  const themeMode = useSelector(getThemeMode)
  const isDarkMode = themeMode === themeModes.DARK_MODE;

  const defaultSection = useSelector(projectSelectors.getSection);
  const userInfo = useSelector(projectSelectors.getUserInfo);

  const [selectedSection, setSelectedSection] = useState(defaultSection);

  const handleSelect = (section: sectionsEnum) => {
    setSelectedSection(section);
  };

  const { setFilmsAsync, changeSection } = useAction();

  const width = window.innerWidth;
  const filmsPerList = getFilmsPerList(width);

  useEffect(() => {
    changeSection(selectedSection);
    if (selectedSection === sectionsEnum.TRENDS) {
      setFilmsAsync(true, true, filmsPerList, 1);
    }
  }, [selectedSection]);

  const navigate = useNavigate();

  const goToAnotherSection = (section: sectionsEnum, link: string) => {
    handleSelect(section);

    if (link === "settings") {
      userInfo.username
        ? setTimeout(() => navigate(`/${link}`), 500)
        : setTimeout(() => navigate(`/sign-up`), 500);
    } else setTimeout(() => navigate(`/${link}`), 500);
  };

  return (
    <Wrapper>
      <SectionWrapper
        onClick={() => goToAnotherSection(sectionsEnum.HOME, "main")}
      >
        <HomeSvg fill={GetColor(sectionsEnum.HOME, selectedSection)} />
        <SectionTitle $selected={sectionsEnum.HOME === selectedSection}>
          Home
        </SectionTitle>
      </SectionWrapper>
      <SectionWrapper
        onClick={() => goToAnotherSection(sectionsEnum.TRENDS, "trends")}
      >
        <FireSvg fill={GetColor(sectionsEnum.TRENDS, selectedSection)} />
        <SectionTitle $selected={sectionsEnum.TRENDS === selectedSection}>
          Trends
        </SectionTitle>
      </SectionWrapper>
      <SectionWrapper
        onClick={() =>
          goToAnotherSection(sectionsEnum.FAVOURITES, "favourites")
        }
      >
        <BookmarkSvg
          fill={GetColor(sectionsEnum.FAVOURITES, selectedSection)}
        />
        <SectionTitle $selected={sectionsEnum.FAVOURITES === selectedSection}>
          Favorites
        </SectionTitle>
      </SectionWrapper>
      <HelpingWrapper />
      <div onClick={() => changeTheme(themeModes.DARK_MODE)}>
        <DarkMode color={isDarkMode ? 'secondary' : 'action'} />
      </div>
      <div onClick={() => changeTheme(themeModes.LIGHT_MODE)}>
        <WbSunnyIcon color={isDarkMode ? 'action' : 'secondary'} />
      </div>
    </Wrapper>
  );
};

export default MainMenuContent;