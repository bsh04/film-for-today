import React, {FC} from 'react';
import {fetchService} from "../../tools/fetchService";
import {GetStaticPaths, GetStaticProps, GetStaticPropsResult} from "next";
import {DefaultNextDataI} from "../../interfaces/common/next";
import {FilmI} from "../../interfaces/entities/film";
import {MainLayout} from "../../components/MainLayout/MainLayout";
import {FilmsTopType} from "../../static/enums";
import {FetchHomeDataResponse} from "../../api/homeAPI";

interface FilmDataResponse {
    data: FilmI
    externalId: {imdbId: string}
}

const type = FilmsTopType.TOP_AWAIT_FILMS

const FilmDetails: FC<DefaultNextDataI<FilmDataResponse>> = ({nextData}) => {
    console.log(nextData)
    return (
        <MainLayout>
            INFO
        </MainLayout>
    );
}

export const getStaticProps: GetStaticProps = async (props): Promise<GetStaticPropsResult<DefaultNextDataI<FilmDataResponse>>> => {
    const filmData: FilmDataResponse = await fetchService({url: `films/${props.params?.filmId}`})
    return {
        props: {
            nextData: filmData
        },
    };
}

export const getStaticPaths: GetStaticPaths = async () => {
    const data: FetchHomeDataResponse = await fetchService({url: "films/top", params: `type=${type}`, version: 2})

    const paths = data.films.map((film) => ({
        params: { filmId: film.filmId.toString() },
    }))
    return { paths, fallback: false }
}

export default FilmDetails
