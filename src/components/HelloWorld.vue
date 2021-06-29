<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <h3>Installed CLI Plugins</h3>
    <ul @scroll="scrollT" ref="scr">
      <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, temporibus quasi vero voluptas qui, labore deleniti facilis saepe ipsum magnam nulla dicta sequi. Sint quos iste veritatis pariatur facere velit.1</li>
      <li>Lorem ipsum do lor sit amet consectetur adipisicing elit. Itaque, temporibus quasi vero voluptas qui, labore deleniti facilis saepe ipsum magnam nulla dicta sequi. Sint quos iste veritatis pariatur facere velit.1</li>
      <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, temporibus quasi vero voluptas qui, labore deleniti facilis saepe ipsum magnam nulla dicta sequi. Sint quos iste veritatis pariatur facere velit.1</li>
      <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, temporibus quasi vero voluptas qui, labore deleniti facilis saepe ipsum magnam nulla dicta sequi. Sint quos iste veritatis pariatur facere velit.1</li>
      <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, temporibus quasi vero voluptas qui, labore deleniti facilis saepe ipsum magnam nulla dicta sequi. Sint quos iste veritatis pariatur facere velit.1</li>
      <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, temporibus quasi vero voluptas qui, labore deleniti facilis saepe ipsum magnam nulla dicta sequi. Sint quos iste veritatis pariatur facere velit.1</li>
      <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, temporibus quasi vero voluptas qui, labore deleniti facilis saepe ipsum magnam nulla dicta sequi. Sint quos iste veritatis pariatur facere velit.1</li>
      <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, temporibus quasi vero voluptas qui, labore deleniti facilis saepe ipsum magnam nulla dicta sequi. Sint quos iste veritatis pariatur facere velit.1</li>
      <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, temporibus quasi vero voluptas qui, labore deleniti facilis saepe ipsum magnam nulla dicta sequi. Sint quos iste veritatis pariatur facere velit.1</li>
    </ul>
    {{boolean}}
    <input type="text" class="input" @input="msg=$event.target.value"  :value='msg'/>
    {{getOneProduct(2).name}}
    
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
   
  },
  data(){
    return {
       boolean:false
    }
  },
  methods:{
   addC(e){
    this.msg =  e.target.value
   },
   scrollT(){
     const scroll = this.$refs.scr
     if(scroll.scrollTop + scroll.clientHeight < scroll.scrollHeight) {
       this.boolean = false
       return
       
     }
     this.boolean = true
   }
  },
  computed:{
    ...mapGetters(['getOneProduct'])
  },
  mounted(){
    console.log(this.getOneProduct)
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
  height: 200px;
  overflow-y:scroll;
  margin: 0 auto;
  max-width: 400px;
}

li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
