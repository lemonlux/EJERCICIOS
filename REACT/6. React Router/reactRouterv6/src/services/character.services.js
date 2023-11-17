import { characters } from "../data/characters.data";

export const getAllChar = () => characters

export const getCharById = (id) => characters.find((item)=> item._id == id)

export const getCharByName = (name) => characters.filter((item) => item.name.includes(name))