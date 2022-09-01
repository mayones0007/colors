import { createStore } from 'vuex'
import { products } from './data/products'
import { filterService } from './services/filter.service';

export const store = createStore({
  state() {
    return {
      products,
      filteredProducts: products,
      cartItems: [],
      appliedFilters: [],
      appliedSort: {},
      showCart: false,
      showLinks: false,
      showFilters: false,
      showSorts: false,
      isDesktop: true,
    }
  },
  actions: {
    filterProducts({state, commit}, filter) {
      commit('setFilters', filter);
      const filteredProducts = filterService(state.products, state.appliedFilters)
      commit('setFilteredProducts', state.appliedSort.sortFunc(filteredProducts))
    },
  },
  mutations: {
    addInCart(state, payload) {
      const existingItem = state.cartItems.find(elem => elem.id === payload.id);
      if (existingItem) {
        state.cartItems = [...state.cartItems.map(item => {
          if (item.id === payload.id && item.count < item.availableCount) {
            return { ...item, count: item.count + 1  }
          }
          return { ...item }
        })]
      } else {
        state.cartItems = [...state.cartItems, { ...payload, count: 1 }]
      }
    },
    deleteInCart(state, payload) {
        state.cartItems = [...state.cartItems.map(item => {
          if (item.id === payload.id) {
            return { ...item, count: item.count - 1 }
          }
          return { ...item }
        })]
    },
    deleteItemInCart(state, payload) {
      const index = state.cartItems.findIndex(n => n.id === payload.id)
      if (index !== -1) {
        state.cartItems = [...state.cartItems.filter((_item, i) => i !== index)]
      }
    },
    emptyCart(state) {
        state.cartItems = []
    },
    setShowCart(state) {
      state.showCart = !state.showCart
    },
    setShowLinks(state) {
      state.showLinks = !state.showLinks
    },
    setShowfilters(state) {
      state.showFilters = !state.showFilters
    },
    setShowSorts(state) {
      state.showSorts = !state.showSorts
    },
    hideBackground(state) {
      state.showFilters = false
      state.showSorts = false
      state.showCart = false
      state.showLinks = false
    },
    setIsDesktop(state, payload) {
      state.isDesktop = payload;
    },
    sortProducts(state, sort) {
      state.appliedSort = sort
      state.products = sort.sortFunc(state.filteredProducts)
    },
    setFilters(state, filter) {
      const index = state.appliedFilters.indexOf(filter)
      if (index > -1) {
        state.appliedFilters = [...state.appliedFilters.filter((_item, i) => i !== index)]
      } else {
        state.appliedFilters = [...state.appliedFilters, filter]
      }
    },
    setFilteredProducts(state, products) {
      state.filteredProducts = products;
    }
  }
})

