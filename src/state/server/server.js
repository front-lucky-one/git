export default {
  state: {
    product: [
      {
        name: "cheas",
        id:1
      },
      {
        name: "colso",
        id:2
      },
      {
        name: "mutation",
        id:3
      },
    ],
  },
  actions: {},
  mutations: {},
  getters: {
      getOneProduct(state){
          return function(id){
           return state.product.find((item)=>item.id == id)
          }
      }
  },
};
