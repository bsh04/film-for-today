import {useAppDispatch, useAppSelector} from "../../../redux";
import {useEffect} from "react";
import {fetchFilters} from "../../../redux/thunks";

export const useFetchFiltersAPI = () => {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchFilters())
    }, [dispatch])
}