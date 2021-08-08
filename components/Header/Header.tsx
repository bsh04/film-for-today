import React, {FC} from 'react';
import styles from "./Header.module.scss"
import {Input} from "../Input/Input";
import {Search} from "../Icons/Search";
import {Brand} from "../Icons/Brand"
import {FavoriteButton} from "../FavoriteButton/FavoriteButton";
import Link from "next/link";


export const Header: FC = () => {
    return (
        <div className={styles.headerContainer}>
            <Link href="/">
                <a><Brand /></a>
            </Link>
        <div className={styles.rightBlock}>
                <Input className={styles.search} icon={<Search />} placeholder={"Введите название фильма"}/>
                <FavoriteButton favoriteFilmsCount={4} />
            </div>
        </div>
    );
};
