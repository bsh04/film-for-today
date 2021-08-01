import React, {FC, forwardRef} from 'react';
import styles from "./Input.module.scss"
import classNames from "classnames"

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    icon?: React.ReactNode
}

export const Input = forwardRef<HTMLInputElement, InputProps>((params, ref) => {
    const {icon, ...props} = params
    return (
        <div className={classNames(styles.inputContainer, {[styles.withIcon]: !!icon})}>
            {icon && (
                <button type="button" className={styles.iconWrapper}>
                    {icon}
                </button>
            )}
            <input {...props} />
        </div>
    );
})
