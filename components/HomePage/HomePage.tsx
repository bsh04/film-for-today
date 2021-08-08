import React, {FC} from 'react';
import styles from "./HomePage.module.scss"
import {FilmI} from "../../interfaces/entities/film";
import {FilmPreview} from "../FilmPreview/FilmPreview";

interface HomePageProps {
    films?: Array<FilmI>
}

export const HomePage: FC<HomePageProps> = ({films}) => {
    return (
        <div className={styles.homePageContainer}>
            <h3>Самые ожидаемые фильмы</h3>
            <div className={styles.filmsContainer}>
                {films?.map(FilmPreview)}
            </div>
        </div>
    );
};
