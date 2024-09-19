
export default {
    state(){
        return{
            searchResults: []
        }
    },
    getters: {
        getCurrentUser(state){
            return state.searchResults
        }
    },
    mutations:{
      updateSearchResults(state,data) {
          state.searchResults = data
      }
    },
    actions:{
        setSearchResults({ commit }, results){
            commit('updateSearchResults', results)
        }
    }
}