import { titans } from "../data/titan.data"

export const getAllTitan = () => titans

export const getTitanById = (id) => titans.find((item)=> item._id == id)

export const getTitanByName = (name) => titans.filter((item) => item.name.includes(name))