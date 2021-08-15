import {DEFAULT_PAGE_TITLE, MainLayout} from "../components/MainLayout/MainLayout";
import {FilmsTopType} from "../static/api";
import {HomePage} from "../components/HomePage/HomePage";
import {GetStaticProps, GetStaticPropsResult} from "next";
import {FilmI} from "../interfaces/entities/film";
import {DefaultNextDataI} from "../interfaces/common/next";
import {FC} from "react";
import {useAppDispatch, useAppSelector} from "../redux";
import {useFetchHomePageDataAPI} from "./hooks/useFetchHomePageDataAPI";
import {AsyncWrapper} from "../components/AsyncWrapper/AsyncWrapper";
import {homeAPI} from "../api/homeAPI";
import {fetchFilmsByType} from "../redux/thunks";
import {homePageSlice} from "../redux/slices/homePageSlice";
import {store} from "../redux/store";

const Home: FC<DefaultNextDataI<Array<FilmI>>> = ({nextData}) => {
    useFetchHomePageDataAPI()
    const {films, loading} = useAppSelector((state) => state.homePage)
    return (
        <MainLayout title={DEFAULT_PAGE_TITLE + " | Главная"}>
            <AsyncWrapper loading={loading}>
                <HomePage films={films}/>
            </AsyncWrapper>
        </MainLayout>
    )
}

export const getStaticProps: GetStaticProps = async (): Promise<GetStaticPropsResult<DefaultNextDataI<Array<FilmI>>>> => {
    const response = await homeAPI.fetchHomeData(FilmsTopType.TOP_AWAIT_FILMS)
    store.dispatch(homePageSlice.actions.nextReducer(response.films))
    return {
        props: {
            nextData: response.films || []
        },
    };
}

export default Home