import {useAppSelector} from "../../../redux";
import {OptionI} from "../../Select/Select";
import {useMemo} from "react";
import {FilmsTopType} from "../../../static/enums";
import {FilmsTopTypeView} from "../../../static/consts";

export const useBuildFilters = () => {
    const {filters} = useAppSelector(state => state.homePage)

    const categoryOptions: Array<OptionI> = useMemo(() => Object.values(FilmsTopType).map((item) => ({
        value: item,
        id: item,
        label: FilmsTopTypeView[item]
    })), [])

    const countiesOptions: Array<OptionI> = useMemo(() => filters.countries.map(({country, id}) => ({
        value: id,
        id: id,
        label: country
    })), [filters.countries])

    const genresOptions: Array<OptionI> = useMemo(() => filters.genres.map(({genre, id}) => ({
        value: id,
        id: id,
        label: genre
    })), [filters.genres])
    
    return useMemo(() => ({
        categoryOptions,
        countiesOptions,
        genresOptions
    }), [categoryOptions, countiesOptions, genresOptions])
}