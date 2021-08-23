import {DEFAULT_PAGE_TITLE, MainLayout} from "../components/MainLayout/MainLayout";
import {HomePage} from "../components/HomePage/HomePage";
import {GetStaticProps, GetStaticPropsResult} from "next";
import {FilmI} from "../interfaces/entities/film";
import {DefaultNextDataI} from "../interfaces/common/next";
import {FC} from "react";
import {useAppSelector} from "../redux";
import {useFetchHomePageDataAPI} from "../components/HomePage/hooks/useFetchHomePageDataAPI";
import {homeAPI} from "../api/homeAPI";
import {homePageSlice} from "../redux/slices/homePageSlice";
import {store} from "../redux/store";
import {FilmsTopType} from "../static/enums";

const Home: FC<DefaultNextDataI<Array<FilmI>>> = ({nextData}) => {
    useFetchHomePageDataAPI(nextData)
    const {films} = useAppSelector((state) => state.homePage)
    return (
        <MainLayout title={DEFAULT_PAGE_TITLE + " | Главная"}>
            <HomePage films={films}/>
        </MainLayout>
    )
}

export const getStaticProps: GetStaticProps = async (props): Promise<GetStaticPropsResult<DefaultNextDataI<Array<FilmI>>>> => {
    const response = await homeAPI.fetchHomeData(FilmsTopType.TOP_AWAIT_FILMS)
    store.dispatch(homePageSlice.actions.nextReducer(response.films))
    return {
        props: {
            nextData: response.films || []
        },
    };
}

export default Home