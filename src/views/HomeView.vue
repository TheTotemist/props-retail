<template>
  <div class="home">
    <h1>All Woodtotems</h1>
    <div class="woodtotems">
      <router-link 
        v-for="woodtotem in woodtotems"
        :key="woodtotem.id"
        :to="woodtotem.city"
      >
        <h2>{{ woodtotem.city }}</h2>
        
      </router-link>
    </div>
  </div>
</template>


<script lang="ts">
import sourceData from '@/data.json'

export default {
  data() {
    return {
      woodtotems: sourceData.woodtotems
    }
  }
}

</script>