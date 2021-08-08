import React, {FC} from 'react';
import {TopFilmsResponse} from "../../api/getTopFilmsAPI";
import {nextFetchService} from "../../api/common/nextFetchService";
import {FilmsTopType} from "../../static/api";
import {GetStaticPropsResult} from "next";
import {DefaultNextDataI} from "../../interfaces/common/next";
import {FilmI} from "../../interfaces/entities/film";
import {MainLayout} from "../../components/MainLayout/MainLayout";

const type = FilmsTopType.TOP_AWAIT_FILMS

function FilmDetails() {
    return (
        <MainLayout>
            INFO
        </MainLayout>
    );
}

export async function getStaticProps(): Promise<GetStaticPropsResult<DefaultNextDataI<Array<FilmI>>>> {
    const data: TopFilmsResponse = await nextFetchService({url: "films/top", params: `type=${type}`})
    return {
        props: {
            nextData: data?.films || []
        },
    };
}

export async function getStaticPaths() {
    const data: TopFilmsResponse = await nextFetchService({url: "films/top", params: `type=${type}`})

    const paths = data.films?.map((film) => ({
        params: { filmId: film.filmId.toString() },
    }))
    return { paths, fallback: false }
}

export default FilmDetails
