import { createStore } from 'vuex'
import { vuexfireMutations, firebaseAction } from 'vuexfire'
import firebase from 'firebase/app'
import 'firebase/database'

const db = firebase
  .initializeApp({ databaseURL: 'https://wichlist-e8347.firebaseio.com/' })
  .database()

export default createStore({
  state: {
    items: {},
    lists: {}
  },

  mutations: vuexfireMutations,

  actions: {
    bindListsRef: firebaseAction(context => {
      // context contains all original properties like commit, state, etc
      // and adds `bindFirebaseRef` and `unbindFirebaseRef`
      // we return the promise returned by `bindFirebaseRef` that will
      // resolve once data is ready
      return context.bindFirebaseRef('lists', db.ref('lists'))
    }),
    bindItemsRef: firebaseAction(context => {
      // context contains all original properties like commit, state, etc
      // and adds `bindFirebaseRef` and `unbindFirebaseRef`
      // we return the promise returned by `bindFirebaseRef` that will
      // resolve once data is ready
      return context.bindFirebaseRef('items', db.ref('items'))
    })
  }
})
