<script>

import WidgetContainer from './components/WidgetContainer.vue'
import Home from './views/Home.vue'

export default {
  components: { 
    Home,
    WidgetContainer
  }
}

</script>

<template>
  <div class="w-full h-screen bg-zinc-900">
    <home />
    <widget-container />
  </div>
</template>

<style scoped>

</style>
