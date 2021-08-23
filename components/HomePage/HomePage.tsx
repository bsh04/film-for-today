import React, {ChangeEvent, FC} from 'react';
import styles from "./HomePage.module.scss"
import {FilmI} from "../../interfaces/entities/film";
import {FilmPreview} from "../FilmPreview/FilmPreview";
import {useAppSelector} from "../../redux";
import {FilmsTopTypeView} from "../../static/consts";
import {AsyncWrapper} from "../AsyncWrapper/AsyncWrapper";
import {FiltersBlock} from "./FiltersBlock";

interface HomePageProps {
    films?: Array<FilmI>
}

export const HomePage: FC<HomePageProps> = ({films}) => {

    const {type: filmsType, filmsLoading} = useAppSelector(state => state.homePage)

    return (
        <div className={styles.homePageContainer}>
            <h3>{FilmsTopTypeView[filmsType]}</h3>
            <div className={styles.filters}>
                <FiltersBlock />
            </div>
            <AsyncWrapper loading={filmsLoading}>
            <div className={styles.filmsContainer}>
                {films?.map(FilmPreview)}
            </div>
            </AsyncWrapper>
        </div>
    );
};
