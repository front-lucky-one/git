<template>
  <div>
    Привет мир

  </div>
</template>

<script>

import fetch from '@/mixins/fetch.js'
export default{
  name:'Home',
  mixins:[fetch],
  data(){
    return{}
  },
 
  mounted(){

  console.log(this.name)
console.log( this.paramsRouter())
  }
}
</script>

<style scoped>

</style>
