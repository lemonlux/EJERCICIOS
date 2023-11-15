import { marvelList } from './../data/marvel.data.js'

export const getAll = () => marvelList

console.log(getAll)

export const getById = (id) => marvelList.find(item => item.id == id)

console.log(getById)