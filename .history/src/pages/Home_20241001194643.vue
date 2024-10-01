<template>
  <div class="home">
    <h1>Home</h1>
    <router-link 
      v-for="woodtotem in woodtotems"
      :key="woodtotem.id"
      :to="woodtotem.id"
    >
    <h2>{{ woodtotem.location }}</h2>

    </router-link> 
  </div>
</template>
<script>
import sourceData from '@/data.json'


export default {
  data(){
    return {
      woodtotems: sourceData.woodtotems
    }
  }
}
</script>