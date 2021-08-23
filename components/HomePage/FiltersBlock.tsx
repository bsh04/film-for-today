import React, {ChangeEvent, FC, useMemo} from 'react';
import {OptionI, Select} from "../Select/Select";
import {FilmsTopType} from "../../static/enums";
import {homePageSlice} from "../../redux/slices/homePageSlice";
import {useAppDispatch, useAppSelector} from "../../redux";
import {useFetchFiltersAPI} from "./hooks/useFetchFiltersAPI";
import {LoadingStatus} from "../../static/api";
import {useBuildFilters} from "./hooks/useBuildFilters";

export const FiltersBlock: FC = () => {
    useFetchFiltersAPI()
    const {categoryOptions, countiesOptions, genresOptions} = useBuildFilters()
    const dispatch = useAppDispatch()

    const handleChangeType = (type: FilmsTopType) =>
        dispatch(homePageSlice.actions.setFilmsType(type))

    const handleChangeCountry = ({target: {value}}: ChangeEvent<HTMLSelectElement>) =>
        dispatch(homePageSlice.actions.setCountry(+value))

    const handleChangeGenre = ({target: {value}}: ChangeEvent<HTMLSelectElement>) =>
        dispatch(homePageSlice.actions.setGenre(+value))

    const {type: filmsType, filtersLoading, country, genre} = useAppSelector(state => state.homePage)

    return (
        <>
            <div>
                <label htmlFor="category">Категория</label>
                <Select
                    id={"category"}
                    value={filmsType}
                    items={categoryOptions}
                    onChange={(e: ChangeEvent<HTMLSelectElement>) => handleChangeType(e.target.value as FilmsTopType)}
                />
            </div>
            <div>
                <label htmlFor="country">Страна</label>
                <Select
                    isLoading={filtersLoading === LoadingStatus.PENDING}
                    withEmptyOption
                    id={"country"}
                    value={country}
                    items={countiesOptions}
                    onChange={handleChangeCountry}
                />
            </div>
            <div>
                <label htmlFor="genre">Жанры</label>
                <Select
                    isLoading={filtersLoading === LoadingStatus.PENDING}
                    withEmptyOption
                    id={"genre"}
                    value={genre}
                    items={genresOptions}
                    onChange={handleChangeGenre}
                />
            </div>
        </>
    );
};
