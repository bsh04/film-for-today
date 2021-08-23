import React, {FC} from 'react';
import {FilmI} from "../../interfaces/entities/film";
import styles from "./FilmPreview.module.scss"
import Image from 'next/image'
import {LinkWrapper} from "../LinkWrapper/LinkWrapper";

export const FilmPreview: FC<FilmI> = ({filmId, nameRu, posterUrl}) => {
    return (
        <LinkWrapper className={styles.filmPreviewContainer} href={"film/" + filmId.toString()} key={filmId}>
            <div className={styles.previewPoster}>
                <Image src={posterUrl} alt={nameRu} layout={"fill"}/>
            </div>
            <div className={styles.filmInfo}>
                <span>{nameRu}</span>
            </div>
        </LinkWrapper>
    );
};
