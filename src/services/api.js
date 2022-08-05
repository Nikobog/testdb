import { http } from "./http";

export const getFruits = async () => {
  const { data } = await http.get('fruits')
  return data;
}

export const getFruit = async () => {
  return null
}
