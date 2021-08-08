import {DEFAULT_PAGE_TITLE, MainLayout} from "../components/MainLayout/MainLayout";
import {useGetFilmsQuery} from "../api/getTopFilmsAPI"
import {FilmsTopType} from "../static/api";
import {HomePage} from "../components/HomePage/HomePage";
import {GetStaticProps, GetStaticPropsContext, GetStaticPropsResult} from "next";
import {FilmI} from "../interfaces/entities/film";
import {nextFetchService} from "../api/common/nextFetchService";
import {DefaultNextDataI} from "../interfaces/common/next";

const type = FilmsTopType.TOP_AWAIT_FILMS

export default function Home({nextData}: DefaultNextDataI<Array<FilmI>>) {
    const {data} = useGetFilmsQuery(type)
    return (
        <MainLayout title={DEFAULT_PAGE_TITLE + " | Главная"}>
            <HomePage />
        </MainLayout>
    )
}

export async function getStaticProps(): Promise<GetStaticPropsResult<DefaultNextDataI<Array<FilmI>>>> {
    const data = await nextFetchService({url: "films/top", params: `type=${type}`})
    return {
        props: {
           nextData: data?.films || []
        },
    };
}