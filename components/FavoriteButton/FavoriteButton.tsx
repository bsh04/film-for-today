import React, {FC} from 'react';
import {Favorite} from "../Icons/Favorite";
import styles from "./FavoriteButton.module.scss"
import Link from "next/link";

interface FavoriteButtonProps {
    favoriteFilmsCount?: number
}

export const FavoriteButton: FC<FavoriteButtonProps> = ({favoriteFilmsCount}) => {
    return (
        <div className={styles.buttonContainer}>
            <Link href="/favorite">
                <a><Favorite/></a>
            </Link>
            <div className={styles.favoriteCount}>{favoriteFilmsCount}</div>
        </div>
    );
};
