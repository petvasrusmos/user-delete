import { createStore } from 'vuex'

export default createStore({
  state: {
    users: [
      {
        name: 'Jhon',
        id: '001'
      },
      {
        name: 'Alex',
        id: '002'
      },
      {
        name: 'Kevin',
        id: '003'
      },
      {
        name: 'James',
        id: '007'
      }
    ],
    newProduit: ''
  },
  getters: {
    allUsers (state) {
      console.log(state, 'state')
      return state.users
    }
  },
  mutations: {
    deleteUser: function (state, id) {
      state.users.forEach((element, index) => {
        if (element.id === id) {
          console.log(index, 'asda')
          state.users.splice(index, 1)
        }
      })
    }
  }
})
