import {useAppDispatch, useAppSelector} from "../../redux";
import {FilmsTopType} from "../../static/api";
import {useEffect} from "react";
import {fetchFilmsByType} from "../../redux/thunks";
import {FilmI} from "../../interfaces/entities/film";
import {homePageSlice} from "../../redux/slices/homePageSlice";

export const useFetchHomePageDataAPI: (nextData?: Array<FilmI>) => void = (nextData) => {
    const dispatch = useAppDispatch()
    const filmsType = useAppSelector(state => state.homePage.type)

    useEffect(() => {
        console.log(nextData)
        if (nextData) dispatch(homePageSlice.actions.nextReducer(nextData))
        // else dispatch(fetchFilmsByType(filmsType))
    }, [filmsType, dispatch, nextData])
}