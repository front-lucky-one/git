import axios from 'axios'
const fetch = {
    data(){
        return {
            name:'бык'
        }
    },
    methods:{
        async paramsRouter(){
         const dd =  await axios.get('https://jsonplaceholder.typicode.com/todos/1')
         console.log(dd.data)
          return this.$route
        }
    },
}
export default fetch