import { $host } from "./index";

export const check = async () => {
    const {data} = await $host.get('fruits',)
    return data;
}