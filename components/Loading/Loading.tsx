import React, {FC} from 'react';
import styles from "./Loading.module.scss"

export const Loading: FC = () =>
    <div className={styles.container}>
        <div className={styles["lds-roller"]}>
            <div/>
            <div/>
            <div/>
            <div/>
            <div/>
            <div/>
            <div/>
            <div/>
        </div>
    </div>

export const SelectLoading: FC = () =>
    <div className={styles["lds-ellipsis"]}>
        <div/>
        <div/>
        <div/>
        <div/>
    </div>

