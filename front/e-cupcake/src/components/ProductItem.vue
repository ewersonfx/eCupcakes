<script setup>
    import { defineProps } from 'vue';
    import { RouterLink } from 'vue-router'

    const emit = defineEmits(['buyClick']);

    const props = defineProps({
        id: { type: Number, required: false, default: 0 },
        productName: { type: String, required: false, default: 'Product1 ' },
        description: { type: String, required: false, default: 'The very best of all products.'},        
        price: { type: Number, required: false, default: 0 },
        priceOld: { type: Number, required: false, default: 0 }
    });    

</script>

<template>

    <div class="col">
        <RouterLink :to="'/productdetails/'+props.id" class="text-decoration-none">
            <div class="card h-100">
                <img src="../assets/noimage_product.png" class="card-img-top" alt="...">
                <div class="card-body">
                    <h6 class="card-title text-wrap text-truncate" style="height: 100px; ">{{ props.productName }}</h6>                   
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item fw-bold text-primary fs-4">R$ {{ props.price.toFixed(2).replace(',','').replace('.',',') }}</li>                
                </ul>
                <!-- <div class="d-grid mx-2 my-3">
                    <RouterLink :to="'/productdetails/'+props.id" class="btn btn-outline-primary">Comprar</RouterLink>                
                </div> -->
            </div>
        </RouterLink>
    </div>
</template>

<style scoped>
.card {
    border: none;
}

</style>