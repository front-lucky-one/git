import Vue from 'vue'
import Vuex from 'vuex'
import server from '@/state/server/server.js'

Vue.use(Vuex)

const state = new Vuex.Store({
    modules:{
        server 
    }

})

export default state
