import React, {FC} from 'react';
import styles from "./HomePage.module.scss"
import {FilmI} from "../../interfaces/entities/film";
import {FilmPreview} from "../FilmPreview/FilmPreview";
import {FilmsTopType} from "../../static/api";
import {useAppDispatch, useAppSelector} from "../../redux";
import {homePageSlice} from "../../redux/slices/homePageSlice";

interface HomePageProps {
    films?: Array<FilmI>
}

export const HomePage: FC<HomePageProps> = ({films}) => {
    const dispatch = useAppDispatch()
    const handleChangeType = (type: FilmsTopType) => dispatch(homePageSlice.actions.setFilmsType(type))
    const filmsType = useAppSelector(state => state.homePage.type)
    return (
        <div className={styles.homePageContainer}>
            <h3>Самые ожидаемые фильмы</h3>
            {/*<select value={filmsType} onChange={(e) => handleChangeType(e.target.value as FilmsTopType)}>*/}
            {/*    <option value={FilmsTopType.TOP_AWAIT_FILMS}>{FilmsTopType.TOP_AWAIT_FILMS}</option>*/}
            {/*    <option value={FilmsTopType.TOP_100_POPULAR_FILMS}>{FilmsTopType.TOP_100_POPULAR_FILMS}</option>*/}
            {/*    <option value={FilmsTopType.TOP_250_BEST_FILMS}>{FilmsTopType.TOP_250_BEST_FILMS}</option>*/}
            {/*</select>*/}
            <div className={styles.filmsContainer}>
                {films?.map(FilmPreview)}
            </div>
        </div>
    );
};
