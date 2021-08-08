import {fetchBaseQuery, BaseQueryFn} from "@reduxjs/toolkit/dist/query/react";
import {apiKey, baseAPIUrl} from "../config.json";

export const baseQueryService: (baseUrl?: string, customHeaders?: any) => BaseQueryFn = (baseUrl, customHeaders) =>
    fetchBaseQuery({
        baseUrl: baseUrl || baseAPIUrl,
        prepareHeaders: headers => {
            headers.set("X-API-KEY", apiKey)
            return headers
        }
    })
