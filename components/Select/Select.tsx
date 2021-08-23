import React, {FC, useCallback, useEffect, useState} from 'react';
import styles from "./Select.module.scss"
import {Dropdown} from "../Icons/Dropdown"
import classNames from "classnames";
import {SelectLoading} from "../Loading/Loading";

export interface OptionI {
    label: string
    value: string | number
    id: number | string
}

interface SelectProps extends React.HTMLProps<HTMLSelectElement> {
    items: Array<OptionI>
    withEmptyOption?: boolean
    isLoading?: boolean
}

export const Select: FC<SelectProps> = ({items, withEmptyOption, isLoading, ...selectProps}) => {
    const [openSelect, setOpenSelect] = useState<boolean>(false)
    const handleToggleMouse = useCallback(() => setOpenSelect(!openSelect), [openSelect])

    const handleToggleKeyboard = useCallback((e: React.KeyboardEvent<HTMLSelectElement>) =>
        ["Enter", "Space"].includes(e.code) && setOpenSelect(!openSelect), [openSelect])

    const handleBlur = useCallback(() => setOpenSelect(false), [])

    return (
        <div className={classNames(styles.container, {[styles.openSelect]: openSelect})}>
            {isLoading && <SelectLoading />}
            <select
                onBlur={handleBlur}
                onClick={handleToggleMouse}
                onKeyPress={handleToggleKeyboard}
                {...selectProps}
                defaultValue={"value"}
            >
                {withEmptyOption && !isLoading && (
                    <option value="" className={styles.disabled}>Выберите опцию</option>
                )}
                {!isLoading &&
                    items.map((item) => (
                        <option key={item.id} value={item.value}>{item.label}</option>
                    ))
                }
            </select>
            <Dropdown/>
        </div>
    );
};
