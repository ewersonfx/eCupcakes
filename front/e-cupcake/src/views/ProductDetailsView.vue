<script setup>
    import { onMounted } from "vue";
    import { useRoute } from 'vue-router'
    import { useProductStore } from '@/stores/products.js'

    const route = useRoute();

    onMounted(()=>{
        alert(route.params.id);
    });

</script>


<template>
    <h4>okview</h4>
</template>