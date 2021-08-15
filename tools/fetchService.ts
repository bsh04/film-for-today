import config from "../config.json";

interface NextFetchServiceProps {
    url: string
    method?: "GET" | "POST"
    params?: string
    version?: number
}

export const fetchService: (props: NextFetchServiceProps) => any = async (props) => {
    const {method = "GET", params, url, version = 1} = props
    const response = await fetch(`${config.baseAPIUrl}v2.${version}/${url}${params ? `?${params}` : ""}`, {
        method,
        headers: {"X-API-KEY": config.apiKey}
    })
    return await response.json()
}