<script setup>
    import { onMounted, ref } from "vue";
    import { useRoute } from 'vue-router'
    import { useProductStore } from '@/stores/products.js'
    import ProductItemDetails from '@/components/ProductItemDetails.vue'    
    
    const router = useRoute();    
    
    let product = ref(null);

    const productStore = useProductStore();            

    onMounted(async ()=>{    
        console.log('loaded');
        product.value = await productStore.getById(router.params.id);                    
    });

</script>

<template>
    <div class="container">
        <ProductItemDetails :="product" />
    </div>
</template>