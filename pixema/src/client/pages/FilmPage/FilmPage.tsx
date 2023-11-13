import React, { useState } from "react";
import { useSelector } from "react-redux";
import { projectSelectors } from "src/store/selectors/selctors";
import { useParams, Navigate } from "react-router-dom";
import {
  getColorOfFavSvg,
  getStringFromArr,
} from "src/client/pages/FilmPage/helpers";
import { useAction } from "src/store/hooks/useAction";
import {
  Wrapper,
  ReturnArrow,
  FilmContentWrapper,
  LeftContentWrapper,
  ImageWrapper,
  Image,
  FavButton,
  RightContentWrapper,
  GenresWrapper,
  StyledGenre,
  Title,
  NumberDataWrapper,
  NumberData,
  PlotText,
  ProductionDataWrapper,
  ProductionDataElementWrapper,
  ProductionDataType,
  ProductionData,
} from "src/client/pages/FilmPage/styles";
import ArrowSvg from "src/client/components/images/ArrowSvg";
import IMDBRatingSvg from "src/client/components/images/IMDBRatingSvg";
import { isFilmFav } from "src/client/helpers";
import FavouriteIcon from "src/client/components/images/FavouriteIcon";

const FilmPage = () => {
  const { id } = useParams();

  const fullFilmInfo = useSelector(projectSelectors.getFullFilm);

  const favFilms = useSelector(projectSelectors.getFavouriteMovies);

  const isFavDefault = isFilmFav(id!, favFilms);
  console.log(isFavDefault);


  const [isFav, setIsFav] = useState(isFavDefault);

  const { addToFavs, removeFromFavs } = useAction();

  const handlePressOnFavSvg = () => {
    isFav ? removeFromFavs(fullFilmInfo!) : addToFavs(fullFilmInfo!);
    setIsFav(!isFav)
  };

  if (fullFilmInfo.Genre) {
    const genresArr = getStringFromArr(fullFilmInfo.Genre);

    return (
      <Wrapper>
        <ReturnArrow to="/main">
          <ArrowSvg />
        </ReturnArrow>

        <FilmContentWrapper>
          <LeftContentWrapper>
            <ImageWrapper>
              <Image src={fullFilmInfo.Poster} />
            </ImageWrapper>

            <FavButton onClick={handlePressOnFavSvg}>
              <FavouriteIcon fill={getColorOfFavSvg(isFav)} />
            </FavButton>
          </LeftContentWrapper>
          <RightContentWrapper>
            <GenresWrapper>
              {genresArr.map((genre, idx) => (
                <StyledGenre key={idx}>{genre}</StyledGenre>
              ))}
            </GenresWrapper>

            <Title>{fullFilmInfo!.Title}</Title>

            <NumberDataWrapper>
              <NumberData>
                <IMDBRatingSvg /> {fullFilmInfo.imdbRating}
              </NumberData>
              <NumberData>{fullFilmInfo.Runtime}</NumberData>
            </NumberDataWrapper>

            <PlotText>{fullFilmInfo.Plot}</PlotText>

            <ProductionDataWrapper>
              <ProductionDataElementWrapper>
                <ProductionDataType>Year</ProductionDataType>
                <ProductionData>{fullFilmInfo.Year}</ProductionData>
              </ProductionDataElementWrapper>

              <ProductionDataElementWrapper>
                <ProductionDataType>Released</ProductionDataType>
                <ProductionData>{fullFilmInfo.Released}</ProductionData>
              </ProductionDataElementWrapper>

              <ProductionDataElementWrapper>
                <ProductionDataType>BoxOffice</ProductionDataType>
                <ProductionData>{fullFilmInfo.BoxOffice}</ProductionData>
              </ProductionDataElementWrapper>

              <ProductionDataElementWrapper>
                <ProductionDataType>Country</ProductionDataType>
                <ProductionData>{fullFilmInfo.Country}</ProductionData>
              </ProductionDataElementWrapper>

              <ProductionDataElementWrapper>
                <ProductionDataType>Production</ProductionDataType>
                <ProductionData>{fullFilmInfo.Production}</ProductionData>
              </ProductionDataElementWrapper>

              <ProductionDataElementWrapper>
                <ProductionDataType>Actors</ProductionDataType>
                <ProductionData>{fullFilmInfo.Actors}</ProductionData>
              </ProductionDataElementWrapper>

              <ProductionDataElementWrapper>
                <ProductionDataType>Director</ProductionDataType>
                <ProductionData>{fullFilmInfo.Director}</ProductionData>
              </ProductionDataElementWrapper>

              <ProductionDataElementWrapper>
                <ProductionDataType>Writers</ProductionDataType>
                <ProductionData>{fullFilmInfo.Writer}</ProductionData>
              </ProductionDataElementWrapper>
            </ProductionDataWrapper>
          </RightContentWrapper>
        </FilmContentWrapper>
      </Wrapper>
    );
  } else {
    return <Navigate to="/error" />;
  }
};

export default FilmPage;