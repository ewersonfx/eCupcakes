<script setup>
  import { onMounted } from 'vue';
  import { RouterView } from 'vue-router'
  import MainMenuHeader from '@/components/MainMenuHeader.vue'
  import MainMenuSidebar from '@/components/MainMenuSidebar.vue'

  import { useProductStore } from '@/stores/products';  
  import { useCartStore } from '@/stores/cart';  

  const productStore = useProductStore();
  const cartStore = useCartStore();

  onMounted(async ()=>{
      
    await productStore.load();

    await cartStore.init();
  });

</script>

<template> 
  <MainMenuHeader/>
  <MainMenuSidebar/>

  <RouterView />  
</template>

<style scoped>

</style>
