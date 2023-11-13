import React, { useState, useEffect, useMemo } from "react";
import { useAction } from "src/store/hooks/useAction";
import { useSelector } from "react-redux";

import {
    Wrapper,
    CardsContentWrapper,
    CardsWrapper,
    ShowMoreButton,
    EmptyStateText,
} from "src/client/pages/MainPage/styles";
import Card from "src/client/components/Post/Post";
import MainMenuContent from "src/client/components/MainMenuContent/MainMenuContent";
import { getPage } from "src/client/pages/MainPage/helpers";
import { sectionsEnum } from "src/client/Types/Types";
import { getFilmsPerList } from "src/client/helpers";
import { projectSelectors } from "src/store/selectors/selctors";
import { api } from "src/client/api/api";

interface ITrendInterface {
    rating: number,
    id: number
}

const MainPage = () => {
    const [page, setPage] = useState(1);

    const getRatings = async () => {
        const res = await api.getRatings();
        return res?.data;
    };

    const getRatingAsync = async () => {
        return await getRatings();
    }
    console.log(getRatings());

    const trendRating = () => {
        return async () => {
            const trendRate: ITrendInterface[] = []
            const ratingsResponse = await getRatings();
            console.log(ratingsResponse);

            ratingsResponse.forEach((element: { rating: number, id: number }) => {
                console.log(1);

                if (element.rating > 8) {
                    trendRate.push(element)
                }
            });
            console.log(trendRate);
            return trendRate
        }
    }
    trendRating()

    const { setFilmsAsync, setFilteredFilmsAsync, setSearchedFilmsAsync } =
        useAction();

    const width = useMemo(() => window.innerWidth, []);

    const filmsPerList = useMemo(() => getFilmsPerList(width), []);

    useEffect(() => {
        setFilmsAsync(false, false, filmsPerList, page);

    }, [page]);

    const filmsResponse = useSelector(projectSelectors.getFilms);
    const filmsArr = useMemo(
        () => filmsResponse.filmsObject.arrayOfFilmsList,
        [filmsResponse]
    );

    const filmsInTrend = filmsArr.map((filmsList, idx) => {
        filmsList.filter((film) => film.imdbRating > 8)
    })

    return (
        <Wrapper>
            {width >= 1440 && <MainMenuContent />}

            <CardsContentWrapper>
                {filmsArr &&
                    filmsArr.map((filmsList, idx) => {
                        return (
                            <CardsWrapper key={idx}>
                                {filmsList.map((film, idx) => {
                                    return (
                                        <Card
                                            imdbID={film.imdbID}
                                            key={idx}
                                            Poster={film.Poster}
                                            Title={film.Title}
                                            imdbRating={film.imdbRating}
                                        />
                                    );
                                })}
                            </CardsWrapper>
                        );
                    })}
            </CardsContentWrapper>
            {!filmsResponse.totalResults && (
                <EmptyStateText>Oops, nothing had been found</EmptyStateText>
            )}
        </Wrapper>
    );
};

export default MainPage;
