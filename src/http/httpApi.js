import { $http } from "./index";

export const http = async () => {
    const {data} = await $http.get('fruits',)
    return data;
}