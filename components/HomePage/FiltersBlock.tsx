import React, {ChangeEvent, FC, useMemo} from 'react';
import {OptionI, Select, SelectChangeEvent} from "../Select/Select";
import {FilmsTopType} from "../../static/enums";
import {homePageSlice} from "../../redux/slices/homePageSlice";
import {useAppDispatch, useAppSelector} from "../../redux";
import {useFetchFiltersAPI} from "./hooks/useFetchFiltersAPI";
import {LoadingStatus} from "../../static/api";
import {useBuildFilters} from "./hooks/useBuildFilters";
import {FilmsTopTypeView} from "../../static/consts";
import {ValueType} from "react-select";

export const FiltersBlock: FC = () => {
    useFetchFiltersAPI()
    const {categoryOptions, countiesOptions, genresOptions} = useBuildFilters()
    const dispatch = useAppDispatch()

    const handleChangeType = (e: SelectChangeEvent | null) =>{
        dispatch(homePageSlice.actions.setFilmsType(e?.value as FilmsTopType))
    }

    const handleChangeCountry = (e: SelectChangeEvent | null) =>
        e && dispatch(homePageSlice.actions.setCountry(e))

    const handleChangeGenre = (e: SelectChangeEvent | null) =>
        e && dispatch(homePageSlice.actions.setGenre(e))

    const {type: filmsType, filtersLoading, country, genre} = useAppSelector(state => state.homePage)
    console.log(countiesOptions)

    return (
        <>
            <div>
                <label htmlFor="category">Категория</label>
                <Select
                    id={"category"}
                    value={{value: filmsType, label: FilmsTopTypeView[filmsType]}}
                    options={categoryOptions}
                    onChange={handleChangeType}
                />
            </div>
            <div>
                <label htmlFor="country">Страна</label>
                <Select
                    isLoading={filtersLoading === LoadingStatus.PENDING}
                    id={"country"}
                    value={country}
                    options={countiesOptions}
                    onChange={handleChangeCountry}
                />
            </div>
            <div>
                <label htmlFor="genre">Жанры</label>
                <Select
                    isLoading={filtersLoading === LoadingStatus.PENDING}
                    id={"genre"}
                    value={genre}
                    options={genresOptions}
                    onChange={handleChangeGenre}
                />
            </div>
        </>
    );
};
