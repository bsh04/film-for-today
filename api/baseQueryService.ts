import {fetchBaseQuery, BaseQueryFn} from "@reduxjs/toolkit/dist/query/react";
import config from "../config.json";

export const baseQueryService: (baseUrl?: string, customHeaders?: any) => BaseQueryFn = (baseUrl, customHeaders) =>
    fetchBaseQuery({
        baseUrl: baseUrl || config.baseAPIUrl,
        prepareHeaders: headers => {
            headers.set("X-API-KEY", config.apiKey)
            return headers
        }
    })
