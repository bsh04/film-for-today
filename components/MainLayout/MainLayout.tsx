import {FC} from 'react';
import styles from "./MainLayout.module.scss"
import Head from "next/head";
import {Header} from "../Header/Header";

export const DEFAULT_PAGE_TITLE = "Фильм На Сегодня"

interface MainLayoutProps {
    title?: string
}

export const MainLayout: FC<MainLayoutProps> = ({title, children}) => {
    return (
        <>
            <Head>
                <title>{title || DEFAULT_PAGE_TITLE}</title>
            </Head>
            <header className={styles.headerContainer}>
                <div className={styles.contentWrapper}>
                    <Header />
                </div>
            </header>
            <main className={styles.mainContainer}>
                <div className={styles.contentWrapper}>
                    {children}
                </div>
            </main>
        </>
    );
};
