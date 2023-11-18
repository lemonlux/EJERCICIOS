import { villagers } from "../data/ac.data";

export const getAll = () => villagers

export const getById = (id) => villagers.find((item)=> item._id == id)

export const getByName = (name) => villagers.filter((item) => item.name.includes(name))