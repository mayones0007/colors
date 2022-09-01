export let sorts = [
  {
    id: 1,
    name: "Сначала дорогие",
    sortFunc: (array) => array.sort((a, b) => a.price < b.price ? 1 : -1)
  },
  {
    id: 2,
    name: "Сначала недорогие",
    sortFunc: (array) => array.sort((a, b) => a.price > b.price ? 1 : -1)
  },
  {
    id: 3,
    name: "Сначала популярные",
    sortFunc: (array) => array.sort((a, b) => a.orders < b.orders ? 1 : -1)
  },
  {
    id: 4,
    name: "Сначала новые",
    sortFunc: (array) => array.sort((a, b) => new Date(a.created).getTime() < new Date(b.created).getTime() ? 1 : -1)
  },
]