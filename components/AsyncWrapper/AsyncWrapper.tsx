import React, {FC} from 'react';
import {Loading} from "../Loading/Loading";
import {LoadingStatus} from "../../static/api";

interface AsyncWrapperProps {
    loading: LoadingStatus
}

export const AsyncWrapper: FC<AsyncWrapperProps> = ({children, loading}) => (
    [LoadingStatus.IDLE, LoadingStatus.PENDING].includes(loading)
        ? <Loading/>
        : <>{children}</>
)
