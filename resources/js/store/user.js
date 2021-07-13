
const state = {
     user: null,


};

const getters = {
     getUser(state) {
         return state.user;
     },


};

const mutations = {
    insertUser(state, user) {
      state.user = user;
    },



    destoryUser(state) {
      state.user = null;
    },


};

const actions = {


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



             context.commit('destoryUser');

         },


    setUser(context, user) {
             context.commit('insertUser', user);
    }

};


export default {state, getters, mutations, actions};


