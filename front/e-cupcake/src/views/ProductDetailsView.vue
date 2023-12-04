<script setup>
    import { onMounted } from "vue";
    import { useRoute } from 'vue-router'
    import { useProductStore } from '@/stores/products.js'
    import ProductItemDetails from '@/components/ProductItemDetails.vue'

    const route = useRoute();
    const productStore = useProductStore();

    onMounted(()=>{
        productStore(route.params.id);
    });

</script>


<template>
    <div class="container">
        <ProductItemDetails />
    </div>
</template>