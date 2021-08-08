import React, {FC, useCallback} from 'react';
import {FilmI} from "../../interfaces/entities/film";
import styles from "./FilmPreview.module.scss"
import Image from 'next/image'
import {LinkWrapper} from "../LinkWrapper/LinkWrapper";

export const FilmPreview: FC<FilmI> = (film) => {
    return (
        <LinkWrapper href={"film/" + film.filmId.toString()}>
            <div className={styles.filmPreviewContainer} key={film.filmId}>
                <div className={styles.previewPoster}>
                    <Image src={film.posterUrl} alt={film.nameRu} layout={"fill"}/>
                </div>
                <div className={styles.filmInfo}>
                    <span>{film.nameRu}</span>
                </div>
            </div>
        </LinkWrapper>
    );
};
