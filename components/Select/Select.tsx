import React, {FC, useCallback, useState} from 'react';
import {default as ReactSelect, Props, OptionProps, OptionsType} from "react-select"
import styles from "./Select.module.scss"
import classNames from "classnames";

export interface OptionI {
    label: string
    value: string
    options?: OptionI
}

interface SelectProps extends Props {
    withEmptyOption?: boolean
    isLoading?: boolean
}

export interface SelectChangeEvent {
    value: string
    label: string
}

export const Select: FC<SelectProps> = ({items, withEmptyOption, isLoading, ...selectProps}) => {
    const [openSelect, setOpenSelect] = useState<boolean>(false)
    const handleToggleMouse = useCallback(() => setOpenSelect(!openSelect), [openSelect])

    const handleToggleKeyboard = useCallback((e: React.KeyboardEvent<HTMLSelectElement>) =>
        ["Enter", "Space"].includes(e.code) && setOpenSelect(!openSelect), [openSelect])

    return (
        <div className={classNames(styles.container, {[styles.openSelect]: openSelect})}>
            <ReactSelect
                loading={isLoading}
                onClick={handleToggleMouse}
                onKeyPress={handleToggleKeyboard}
                className={"select"}
                {...selectProps}
            />
        </div>
    );
};
