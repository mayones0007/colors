export const filters = [
  {
    id: 1,
    name: "Новинки",
    isActive: false,
    filterFunc: (array) => array.filter((item) => new Date(item.created).getTime() > (new Date().getTime() - 3000000000))
  },
  {
    id: 2,
    name: "Есть в наличии",
    isActive: false,
    filterFunc: (array) => array.filter((item) => item.availableCount > 0)
  },
  {
    id: 3,
    name: "Контрактные",
    isActive: false,
    filterFunc: (array) => array.filter((item) => item.isContract)
  },
  {
    id: 4,
    name: "Эксклюзивные",
    isActive: false,
    filterFunc: (array) => array.filter((item) => item.isExclusive)
  },
  {
    id: 5,
    name: "Распродажа",
    isActive: false,
    filterFunc: (array) => array.filter((item) => item.price < item.firstPrice)
  },
]