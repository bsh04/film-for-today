import {apiKey, baseAPIUrl} from "../../config.json";

interface NextFetchServiceProps {
    url: string
    method?: "GET" | "POST"
    params: string
}

export const nextFetchService: (props: NextFetchServiceProps) => any = async (props) => {
    const {method = "GET", params, url} = props
    const response = await fetch(`${baseAPIUrl}${url}${params ? `?${params}` : ""}`, {method, headers: {"X-API-KEY": apiKey}})
    return await response.json()
}