<template>
  <section class="woodtotem">
    
    <h1>WoodtotemID: {{ $route.params.id }}</h1>
    
    <pre>{{ $route.params.nfcUrl }}</pre>
    <h2>{{ $route.params.retailer }}</h2>
    <h3>{{ $route.params.city }}</h3>
  </section>

</template>

<script>

import sourceData from '@/data.json';

export default {
  computed: {
    woodtotemId() {
      return parseInt(this.$route.params.id)
    },
    woodtotem() {
      return sourceData.woodtotems.find(woodtotem => woodtotem.id === this.woodtotemId)
    }
  }
}

</script>

