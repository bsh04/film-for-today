import config from "../../config.json";

interface NextFetchServiceProps {
    url: string
    method?: "GET" | "POST"
    params: string
}

export const nextFetchService: (props: NextFetchServiceProps) => any = async (props) => {
    const {method = "GET", params, url} = props
    const response = await fetch(`${config.baseAPIUrl}${url}${params ? `?${params}` : ""}`, {method, headers: {"X-API-KEY": config.apiKey}})
    return await response.json()
}