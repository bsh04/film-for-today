import {fetchService} from "../tools/fetchService";
import {FilmsTopType} from "../static/api";

const fetchHomeData = (type: FilmsTopType) => fetchService({url: "films/top", params: `type=${type}`, version: 2})

export const homeAPI = {
    fetchHomeData,
}