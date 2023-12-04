<script setup>
  //import MainMenu from '../components/MainMenu.vue'
  import { onMounted } from 'vue';  
  import ProductItem from '@/components/ProductItem.vue'
  import { useProductStore } from '@/stores/products';  

  const productStore = useProductStore();

  onMounted(()=>{
      productStore.load();
  });

  function handleBuyClick(id){
      alert('Você clicou em : ' + id);
  }

</script>

<template>

  <div class="container">
    <div class="row row-cols-2 row-cols-md-2 g-1">
      <ProductItem @buy-click="handleBuyClick" v-for="(prod, index) in productStore.products" :key="index" :="prod" />
    </div>
  </div>

</template>

