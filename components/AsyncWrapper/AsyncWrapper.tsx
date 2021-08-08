import React, {FC} from 'react';
import {Loading} from "../Loading/Loading";

interface AsyncWrapperProps {
    isLoading: boolean
}

export const AsyncWrapper: FC<AsyncWrapperProps> = ({children, isLoading}) => (
    isLoading
        ? <Loading/>
        : <>{children}</>
)
