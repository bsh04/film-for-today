import React, {FC} from 'react';
import Link from "next/link";
import styles from "./LinkWrapper.module.scss"
import classNames from "classnames";

interface LinkWrapperProps {
    href: string
    className?: string
}

export const LinkWrapper: FC<LinkWrapperProps> = ({href, children, className}) => (
    <Link href={href}>
        <a className={classNames(styles.linkWrapper, className)}>{children}</a>
    </Link>
)
