<template>
<div>
        <h1 class="film">{{test.name}}</h1>
        <h2>{{test.text}}</h2>
        {{test.id}}
</div>
</template>

<script>
import testData from '@/test/test.js'
export default {
    data(){
        return{
        test:{}
        }
    },
    created(){
        console.log(this.$route)
    this.test = testData.find((film)=>{
        return film.id == this.$route.params.id

    }) 
    }
    
}
</script>