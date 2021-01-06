import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

let store = new Vuex.Store({
    state: {
        items: [],
        selections: [],
        data: [],
    },
    mutations: {
        SET_ITEMS_TO_STATE: (state, items) => {
            state.items = items;
        },
        SET_ITEMS_NEXT_PAGE: (state, items) => {
            state.items.push(...items);
        },
        SET_DATA_TO_STATE: (state, data) => {
            state.data = data;
        },
        SET_SELECTED: (state, item) => {
            state.selections.push(item);
        },

        REMOVE_FROM_SELECTED: (state, index) => {
            state.selections.splice(index, 1)
        },

        SET_SEARCH_VALUE: (state, value) => {
            state.items = value;
        }

    },
    actions: {
        GET_DATA_FROM_API({commit}) {
            return axios.get(`https://api.themoviedb.org/4/list/7071002?api_key=a750b181fad2f633623d9e375f6f9f9e`)
                .then((response) => {
                    commit("SET_DATA_TO_STATE", response.data);
                    commit("SET_ITEMS_TO_STATE", response.data.results);
                    return response.data
                })
                .catch((error) => {
                    console.log(error);
                    return error;
                });
        },
        ADD_TO_SELECTED({commit}, item) {
            commit("SET_SELECTED", item);
        },
        DELETE_FROM_SELECTED({commit}, index) {
            commit('REMOVE_FROM_SELECTED', index)
        },
        GET_NEXT_PAGE: ({commit}, pageNum) => {
            return axios.get(`https://api.themoviedb.org/4/list/7071002?page=${pageNum}&api_key=a750b181fad2f633623d9e375f6f9f9e`)
                .then(response => {
                    commit('SET_DATA_TO_STATE', response.data)
                    commit('SET_ITEMS_NEXT_PAGE', response.data.results)
                })
                .catch()
        },
        GET_SEARCH_ITEM: ({commit}, value) => {
            return axios.get(`https://api.themoviedb.org/3/search/movie?api_key=a750b181fad2f633623d9e375f6f9f9e&query=${value}&page=1`)
                .then(response => {
                    commit('SET_SEARCH_VALUE', response.data.results)
                })
                .catch()
        }
    },
    getters: {
        ITEMS(state) {
            return state.items;
        },
        DATA(state) {
          return state.data
        },
        SELECTEDS(state) {
            return state.selections;
        },
        SEARCH_VALUE(state) {
            return state.shearchValue;
        }
    }
});

export default store;

//https://api.themoviedb.org/3/list/7071002?api_key=a750b181fad2f633623d9e375f6f9f9e