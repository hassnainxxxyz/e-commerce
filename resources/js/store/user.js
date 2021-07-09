
const state = {
     user: null,
    token: null,

};

const getters = {
     getUser(state) {
         return state.user;
     },
    getToken(state) {
      return state.token;
    },

};

const mutations = {
    insertUser(state, user) {
      state.user = user;
    },
    insertToken(state, token) {
      state.token = token;
    },

    destoryToken(state) {
      state.token = null;
    },

    destoryUser(state) {
      state.user = null;
    },


};

const actions = {
         setToken(context, token) {
             context.commit('insertToken', token);
         },

         deleteTokenAndUser(context) {

            //
            // axios({
            //     method: 'post',
            //     url: APIURL+"/api/logout",
            //
            // })
            //     .then(res => {
            //         console.log(res.data);
            //     })
            //     .catch(error => {
            //         console.log(error);
            //     });



             localStorage.removeItem('token');
             context.commit('destoryToken');
             context.commit('destoryUser');

         },


    setUser(context, user) {
             context.commit('insertUser', user);
    }

};


export default {state, getters, mutations, actions};


