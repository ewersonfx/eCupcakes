<script setup>
  import { RouterView } from 'vue-router'
  import MainMenuHeader from '@/components/MainMenuHeader.vue'
  import MainMenuSidebar from '@/components/MainMenuSidebar.vue'
</script>

<template> 
  <MainMenuHeader/>
  <MainMenuSidebar/>
  
  <RouterView />  
</template>

<style scoped>

</style>
